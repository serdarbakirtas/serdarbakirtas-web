import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealGroup } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { challenges } from "@/lib/data/challenges";

export const metadata: Metadata = {
  title: "Selected Challenges",
  description:
    "Real engineering problems I've solved — from integrating medical devices to migrating large Swift codebases — instead of a generic skill list.",
};

export default function ChallengesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hard problems"
        title="Selected challenges"
        description="Skill lists don't show how someone thinks. These do — a set of real, specific problems I've had to solve, and how."
      />

      <Section className="pt-0">
        <Container>
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {challenges.map((challenge) => (
              <Reveal
                key={challenge.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {challenge.context}
                </p>
                <h2 className="mt-2.5 text-lg font-semibold tracking-tight">
                  {challenge.title}
                </h2>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {challenge.description}
                </p>
                {challenge.impact ? (
                  <p className="mt-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm font-medium text-accent">
                    {challenge.impact}
                  </p>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {challenge.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
