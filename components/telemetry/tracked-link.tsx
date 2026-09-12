"use client";

import * as React from "react";
import Link from "next/link";

import { track, type TelemetryEventName, type TelemetryEvents } from "@/lib/telemetry";

type TrackedEvent<E extends TelemetryEventName> = {
  event: E;
  params: TelemetryEvents[E];
};

/**
 * A `next/link` that reports an event on click, so screens can stay server
 * components while still instrumenting their links.
 */
export function TrackedLink<E extends TelemetryEventName>({
  event,
  params,
  onClick,
  ...props
}: React.ComponentProps<typeof Link> & TrackedEvent<E>) {
  return (
    <Link
      {...props}
      onClick={(nativeEvent) => {
        track(event, params);
        onClick?.(nativeEvent);
      }}
    />
  );
}

/** The same, for plain anchors — outbound links, mailto, and downloads. */
export function TrackedAnchor<E extends TelemetryEventName>({
  event,
  params,
  onClick,
  ...props
}: React.ComponentProps<"a"> & TrackedEvent<E>) {
  return (
    <a
      {...props}
      onClick={(nativeEvent) => {
        track(event, params);
        onClick?.(nativeEvent);
      }}
    />
  );
}
