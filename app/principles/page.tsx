import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { principles } from "@/lib/data/principles";
import { ScreenView } from "@/components/telemetry/screen-view";

export const metadata: Metadata = {
  title: "Engineering Principles",
  description:
    "The principles that shape every engineering decision I make — simplicity, privacy, performance, and trust.",
};

export default function PrinciplesPage() {
  return (
    <>
      <ScreenView
        screen="principles"
        metrics={{ principle_count: principles.length }}
      />

      <PageHeader
        eyebrow="How I work"
        title="Engineering principles"
        description="Not a poster on a wall — the defaults I return to when a decision isn't obvious."
      />

      <Section className="pt-0">
        <Container>
          <div className="divide-y divide-border border-t border-border">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.02}>
                <div className="grid gap-3 py-10 md:grid-cols-[80px_1fr_2fr] md:gap-8 md:py-12">
                  <p className="font-mono text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-[1.75rem]">
                    {principle.title}
                  </h2>
                  <p className="max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
