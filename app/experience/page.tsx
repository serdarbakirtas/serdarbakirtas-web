import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { experience } from "@/lib/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Sixteen years across Magnosco, Nord Security, Diconium, Oculavis, VNGRS, and the creative agencies where it all started.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Experience"
        description="Expand any role for the overview, the specific challenges it involved, and the impact it had."
      />

      <Section className="pt-0">
        <Container>
          <ExperienceTimeline entries={experience} />
        </Container>
      </Section>
    </>
  );
}
