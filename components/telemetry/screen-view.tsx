"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import {
  track,
  trackScreenView,
  type ScreenId,
  type ScreenMetrics,
} from "@/lib/telemetry";

const SCROLL_THRESHOLDS = [25, 50, 75, 100] as const;

/**
 * Shared across instances on purpose: the page transition can mount a screen
 * more than once for a single navigation, and a per-instance ref would let
 * each of those mounts report its own view.
 */
let lastReportedKey: string | null = null;

/** Same reasoning, for the per-screen scroll thresholds already reported. */
let scrollDepthKey: string | null = null;
let reachedDepths = new Set<number>();

/**
 * Reports how far down the screen the visitor actually scrolled, at most once
 * per threshold per screen.
 */
function useScrollDepth(key: string) {
  React.useEffect(() => {
    if (scrollDepthKey !== key) {
      scrollDepthKey = key;
      reachedDepths = new Set();
    }

    const measure = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent =
        scrollable <= 0
          ? 100
          : Math.round((window.scrollY / scrollable) * 100);

      for (const threshold of SCROLL_THRESHOLDS) {
        if (percent >= threshold && !reachedDepths.has(threshold)) {
          reachedDepths.add(threshold);
          track("scroll_depth", { percent_scrolled: threshold });
        }
      }
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [key]);
}

/**
 * Drop one of these into a screen to report its view and its metrics.
 * Renders nothing — screens stay server components.
 */
export function ScreenView<S extends ScreenId>({
  screen,
  metrics,
}: {
  screen: S;
  metrics: ScreenMetrics[S];
}) {
  const pathname = usePathname();

  React.useEffect(() => {
    const key = `${screen}:${pathname}`;
    if (lastReportedKey === key) return;
    lastReportedKey = key;

    trackScreenView(screen, metrics, pathname);
  }, [screen, pathname, metrics]);

  useScrollDepth(`${screen}:${pathname}`);

  return null;
}
