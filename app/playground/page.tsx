import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealGroup } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import {
  playgroundItems,
  type PlaygroundItem,
} from "@/lib/data/playground";
import { ScreenView } from "@/components/telemetry/screen-view";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Experiments, open-source packages, visionOS sketches, and WWDC notes — the things I build when nobody's asking me to.",
};

function countByStatus(status: PlaygroundItem["status"]) {
  return playgroundItems.filter((item) => item.status === status).length;
}

const statusVariant = {
  Exploring: "accent",
  Shipped: "outline",
  Notes: "mono",
} as const;

export default function PlaygroundPage() {
  return (
    <>
      <ScreenView
        screen="playground"
        metrics={{
          item_count: playgroundItems.length,
          shipped_count: countByStatus("Shipped"),
          exploring_count: countByStatus("Exploring"),
          notes_count: countByStatus("Notes"),
        }}
      />

      <PageHeader
        eyebrow="Side projects"
        title="Playground"
        description="Not everything needs a product roadmap. This is where I try things out."
      />

      <Section className="pt-0">
        <Container>
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {playgroundItems.map((item) => (
              <Reveal
                key={item.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {item.category}
                  </p>
                  <Badge variant={statusVariant[item.status]}>
                    {item.status}
                  </Badge>
                </div>
                <h2 className="mt-3 text-lg font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
