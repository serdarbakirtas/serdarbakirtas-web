import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Container className={cn("pb-16 pt-32 md:pb-20 md:pt-40", className)}>
      <Reveal>
        {eyebrow ? (
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-balance text-lg text-muted-foreground">
            {description}
          </p>
        ) : null}
      </Reveal>
    </Container>
  );
}
