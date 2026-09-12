/**
 * Public telemetry API.
 *
 * `trackScreenView` reports a screen and its metrics; `track` reports an
 * interaction and automatically labels it with the screen it happened on.
 * Both are safe to call anywhere — they no-op on the server, when no
 * measurement ID is configured, and when the visitor has opted out.
 */

import { sendEvent, setDefaultParams, type GtagParams } from "./gtag";
import type { TelemetryEventName, TelemetryEvents } from "./events";
import {
  screenIdFromPath,
  screens,
  type ScreenId,
  type ScreenMetrics,
} from "./screens";

export { screens, screenIdFromPath } from "./screens";
export type { ScreenId, ScreenMetrics } from "./screens";
export type { TelemetryEvents, TelemetryEventName } from "./events";
export { linkDomain } from "./events";
export {
  GA_MEASUREMENT_ID,
  isTelemetryConfigured,
  hasOptedOutOfTracking,
} from "./config";

function screenParams(screenId: ScreenId | undefined): GtagParams {
  if (!screenId) return {};

  const screen = screens[screenId];
  return {
    screen_id: screenId,
    screen_name: screen.name,
    content_group: screen.group,
  };
}

/** The screen the visitor is on right now, derived from the URL. */
function currentScreenId(): ScreenId | undefined {
  if (typeof window === "undefined") return undefined;
  return screenIdFromPath(window.location.pathname);
}

/**
 * Reports a screen view as a GA4 `page_view` enriched with that screen's
 * metrics — the standard reports keep working, and the metrics show up as
 * custom dimensions on top of them.
 */
export function trackScreenView<S extends ScreenId>(
  screenId: S,
  metrics: ScreenMetrics[S],
  pathname: string
): void {
  const params = screenParams(screenId);

  // Keep screen context on every later event from this page, including the
  // ones GA4 collects by itself (scrolls, outbound clicks, engagement).
  setDefaultParams(params);

  sendEvent("page_view", {
    ...params,
    page_path: pathname,
    page_location:
      typeof window === "undefined" ? undefined : window.location.href,
    page_title: typeof document === "undefined" ? undefined : document.title,
    ...(metrics as GtagParams),
  });
}

/** Reports an interaction, labelled with the screen it happened on. */
export function track<E extends TelemetryEventName>(
  event: E,
  params: TelemetryEvents[E]
): void {
  sendEvent(event, {
    ...screenParams(currentScreenId()),
    ...(params as GtagParams),
  });
}
