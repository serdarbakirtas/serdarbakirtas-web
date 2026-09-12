/**
 * Thin bridge over Google Analytics 4's gtag.js.
 *
 * Everything is pushed onto `dataLayer` directly rather than calling
 * `window.gtag`, so events fired before the GA script finishes loading are
 * queued instead of dropped.
 */

import { GA_MEASUREMENT_ID, TELEMETRY_DEBUG, isTelemetryActive } from "./config";

export type GtagParamValue = string | number | boolean | undefined | null;
export type GtagParams = Record<string, GtagParamValue>;

type GtagCommand =
  | ["js", Date]
  | ["config", string, GtagParams?]
  | ["event", string, GtagParams?]
  | ["set", GtagParams];

declare global {
  interface Window {
    dataLayer?: IArguments[];
  }
}

/** GA4 caps parameter values at 100 characters and drops empty ones. */
const MAX_PARAM_LENGTH = 100;

function normalizeParams(params: GtagParams): GtagParams {
  const normalized: GtagParams = {};

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") continue;
    normalized[key] =
      typeof value === "string" ? value.slice(0, MAX_PARAM_LENGTH) : value;
  }

  return normalized;
}

/** gtag.js reads the raw `arguments` object off `dataLayer`, not an array. */
function toArguments(...args: unknown[]): IArguments {
  void args;
  // eslint-disable-next-line prefer-rest-params
  return arguments;
}

function pushCommand(...args: GtagCommand): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(toArguments(...args));
}

let initialized = false;

/**
 * Queues the `js` + `config` commands exactly once, before anything else is
 * pushed. gtag.js replays `dataLayer` in order when it loads, so this keeps
 * configuration ahead of the first event even though the script tag is added
 * after hydration.
 */
function ensureInitialized(): void {
  if (initialized) return;
  initialized = true;

  pushCommand("js", new Date());
  pushCommand("config", GA_MEASUREMENT_ID, {
    // Screen views are sent explicitly by `trackScreenView`, enriched with
    // that screen's metrics.
    send_page_view: false,
  });
}

export function sendEvent(name: string, params: GtagParams = {}): void {
  const payload = normalizeParams(params);

  if (TELEMETRY_DEBUG) {
    console.debug("[telemetry]", name, payload);
  }

  if (!isTelemetryActive()) return;

  ensureInitialized();
  pushCommand("event", name, {
    send_to: GA_MEASUREMENT_ID,
    ...payload,
  });
}

/** Sets parameters that should ride along on every subsequent event. */
export function setDefaultParams(params: GtagParams): void {
  if (!isTelemetryActive()) return;

  ensureInitialized();
  pushCommand("set", normalizeParams(params));
}
