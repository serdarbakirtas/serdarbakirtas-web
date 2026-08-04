import { cn } from "@/lib/utils";

/**
 * Placeholder portrait treatment until a real photo is available.
 * Swap the <Monogram /> usage for a real <Image> once /public/images/portrait.jpg exists.
 */
export function Monogram({
  className,
  initials = "SB",
}: {
  className?: string;
  initials?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-secondary",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 120% at 15% 10%, color-mix(in oklab, var(--color-accent) 35%, transparent) 0%, transparent 55%), radial-gradient(120% 120% at 90% 90%, color-mix(in oklab, var(--color-accent) 25%, transparent) 0%, transparent 60%)",
        }}
      />
      <span className="relative font-mono text-6xl font-medium tracking-tight text-foreground/80 md:text-7xl">
        {initials}
      </span>
    </div>
  );
}
