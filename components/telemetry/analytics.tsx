"use client";

import * as React from "react";
import Script from "next/script";

import {
  GA_MEASUREMENT_ID,
  hasOptedOutOfTracking,
  isTelemetryConfigured,
} from "@/lib/telemetry";

/**
 * Loads gtag.js when telemetry is configured and the visitor hasn't opted out.
 *
 * The `js` and `config` commands are queued on `dataLayer` by the telemetry
 * layer itself, so this only has to bring in the script — and mounting it
 * after hydration keeps the opt-out check from causing a markup mismatch.
 */
/** Never changes for the lifetime of the page. */
const subscribe = () => () => {};

export function Analytics() {
  const enabled = React.useSyncExternalStore(
    subscribe,
    () => isTelemetryConfigured && !hasOptedOutOfTracking(),
    () => false
  );

  if (!enabled) return null;

  return (
    <Script
      id="ga-script"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    />
  );
}
