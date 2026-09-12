/**
 * Telemetry configuration.
 *
 * The site is a static export, so every value here is inlined at build time.
 * Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the environment that runs `pnpm build`
 * (locally via `.env.local`, in CI via a repository variable) — without it the
 * telemetry layer stays a no-op and no Google Analytics script is loaded.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/** Logs every event to the console instead of relying on the GA debug view. */
export const TELEMETRY_DEBUG =
  process.env.NEXT_PUBLIC_TELEMETRY_DEBUG === "true";

/** A measurement ID looks like `G-XXXXXXXXXX`. */
export const isTelemetryConfigured = /^G-[A-Z0-9]{4,}$/i.test(GA_MEASUREMENT_ID);

/**
 * Honour Do Not Track and Global Privacy Control. Neither is legally binding
 * for analytics, but shipping a privacy-first site that ignores them would be
 * inconsistent with everything else on it.
 */
export function hasOptedOutOfTracking(): boolean {
  if (typeof window === "undefined") return false;

  const nav = window.navigator as Navigator & {
    globalPrivacyControl?: boolean;
    msDoNotTrack?: string;
  };

  return (
    nav.doNotTrack === "1" ||
    nav.msDoNotTrack === "1" ||
    (window as Window & { doNotTrack?: string }).doNotTrack === "1" ||
    nav.globalPrivacyControl === true
  );
}

/** Telemetry only runs in the browser, when configured, and when not opted out. */
export function isTelemetryActive(): boolean {
  return (
    typeof window !== "undefined" &&
    isTelemetryConfigured &&
    !hasOptedOutOfTracking()
  );
}
