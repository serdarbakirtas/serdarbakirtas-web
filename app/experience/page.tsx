import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { experience } from "@/lib/data/experience";
import { ScreenView } from "@/components/telemetry/screen-view";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Sixteen years across Magnosco, Nord Security, Diconium, Oculavis, VNGRS, and the creative agencies where it all started.",
};

const careerSpanYears =
  new Date().getFullYear() -
  Math.min(...experience.map((entry) => Number(entry.start)));

export default function ExperiencePage() {
  return (
    <>
      <ScreenView
        screen="experience"
        metrics={{
          role_count: experience.length,
          company_count: new Set(experience.map((entry) => entry.company)).size,
          technology_count: new Set(
            experience.flatMap((entry) => entry.technologies)
          ).size,
          career_span_years: careerSpanYears,
        }}
      />

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
