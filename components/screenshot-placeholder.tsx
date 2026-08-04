import { ImageOff } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Placeholder for a real product screenshot. Swap for <Image src="/images/projects/{slug}/..." />
 * once screenshots are available.
 */
export function ScreenshotPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-secondary/50 text-muted-foreground",
        className
      )}
    >
      <ImageOff className="size-6" strokeWidth={1.5} />
      <p className="font-mono text-xs uppercase tracking-wider">{label}</p>
    </div>
  );
}
