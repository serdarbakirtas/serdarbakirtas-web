import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { RevealGroup } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data/projects";
import { ScreenView } from "@/components/telemetry/screen-view";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Momena, Magnosco, Volkswagen, NordLocker, and PuhuTV — problem, solution, architecture, and what I'd do differently.",
};

export default function ProjectsPage() {
  return (
    <>
      <ScreenView
        screen="projects"
        metrics={{
          project_count: projects.length,
          project_tag_count: new Set(projects.flatMap((project) => project.tags))
            .size,
        }}
      />

      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        description="Five products spanning founder work, medical imaging, connected cars, encrypted storage, and streaming at scale."
      />

      <Section className="pt-0">
        <Container>
          <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
