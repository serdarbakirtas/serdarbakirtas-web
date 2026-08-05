import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScreenshotPlaceholder } from "@/components/screenshot-placeholder";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data/projects";
import { getProjectCoverImage } from "@/lib/project-image";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const coverImage = getProjectCoverImage(project.slug);

  return (
    <>
      <Container className="pb-10 pt-32 md:pt-40">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All projects
          </Link>

          <p className="mt-8 font-mono text-xs uppercase tracking-wider text-accent">
            {project.company} · {project.year}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-muted-foreground">{project.role}</p>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="accent">
                {tag}
              </Badge>
            ))}
          </div>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Visit {project.liveUrl.replace(/^https?:\/\//, "")}
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </Reveal>
      </Container>

      <Container>
        <Reveal>
          {coverImage ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src={coverImage}
                alt={`${project.title} — screenshot`}
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <ScreenshotPlaceholder
              label={`${project.title} — screenshot preview`}
            />
          )}
        </Reveal>
      </Container>

      <Container className="max-w-3xl">
        <div className="space-y-14 py-16 md:py-20">
          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-wider text-accent">
              Problem
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              {project.problem}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-wider text-accent">
              Approach
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              {project.solution}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-wider text-accent">
              Architecture
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              {project.architecture}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-wider text-accent">
              Technical Decisions
            </h2>
            <div className="mt-6 space-y-6">
              {project.decisions.map((decision) => (
                <div
                  key={decision.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-medium tracking-tight">
                    {decision.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {decision.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-wider text-accent">
              Challenges
            </h2>
            <ul className="mt-4 space-y-3">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                  <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                  {challenge}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-wider text-accent">
              Results
            </h2>
            <ul className="mt-4 space-y-3">
              {project.results.map((result) => (
                <li key={result} className="flex gap-3 text-[15px] leading-relaxed text-foreground/90">
                  <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                  {result}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-wider text-accent">
              Lessons learned
            </h2>
            <ul className="mt-4 space-y-3">
              {project.lessons.map((lesson) => (
                <li key={lesson} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                  <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                  {lesson}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>

      <Container>
        <Separator />
      </Container>

      <Section>
        <Container>
          <Reveal className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              More projects
            </h2>
            <Link
              href="/projects"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              All projects
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {otherProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
