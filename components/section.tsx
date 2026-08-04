import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-20 md:py-28", className)} {...props}>
      {children}
    </section>
  );
}
