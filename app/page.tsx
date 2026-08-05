import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Reveal, RevealGroup } from "@/components/reveal";
import { AmbientBackground } from "@/components/ambient-background";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/project-card";
import { ArticleCard } from "@/components/article-card";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { principles } from "@/lib/data/principles";
import { projects } from "@/lib/data/projects";
import { getAllPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-16">
        <AmbientBackground />
        <Container className="grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <Reveal>
              <p className="font-mono text-sm text-accent">
                {siteConfig.role} · {siteConfig.location}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Building privacy-first Apple products powered by modern
                Swift and intelligent technologies.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
                Senior Apple Platform & Product Engineer with 16+ years of
                experience. I build privacy-first iOS and macOS
                applications, ship full-stack web products, and integrate
                AI into real user experiences — from Swift to Next.js,
                CoreML to Claude.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href="/resume">
                    <Download className="size-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Get in touch
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex items-center gap-5">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubIcon className="size-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="size-5" />
                </a>
                <a
                  href={siteConfig.social.email}
                  aria-label="Email"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="justify-self-center lg:justify-self-end">
            <div className="relative aspect-[4/5] w-64 overflow-hidden rounded-[2rem] border border-border sm:w-80">
              <Image
                src="/profile.jpeg"
                alt={siteConfig.name}
                fill
                unoptimized
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>

        <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <ScrollIndicator />
        </div>
      </section>

      {/* Intro / arc */}
      <Section className="border-t border-border py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="max-w-3xl text-balance text-xl leading-relaxed text-foreground/90 md:text-2xl">
              My path started in interaction design, crossed into iOS
              engineering, and has spent the last several years at the
              intersection of Apple platform architecture and computer
              vision — building diagnostic tools at{" "}
              <Link href="/experience" className="underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent">
                Magnosco
              </Link>{" "}
              and an entire product ecosystem, alone, at{" "}
              <Link href="/projects/momena" className="underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent">
                Momena
              </Link>
              .
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Read the full story
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>

      <Container>
        <Separator />
      </Container>

      {/* Principles teaser */}
      <Section>
        <Container>
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                How I work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Engineering principles
              </h2>
            </div>
            <Link
              href="/principles"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              All principles
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {principles.slice(0, 4).map((principle) => (
              <div key={principle.title} className="bg-card p-7">
                <h3 className="text-lg font-medium tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </RevealGroup>

          <Reveal className="mt-6 sm:hidden">
            <Link
              href="/principles"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              All principles
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Selected work teaser */}
      <Section className="border-t border-border">
        <Container>
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Products I&apos;ve built
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              All projects
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Writing teaser */}
      {latestPosts.length > 0 ? (
        <Section className="border-t border-border">
          <Container>
            <Reveal className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Writing
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Notes on building
                </h2>
              </div>
              <Link
                href="/writing"
                className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
              >
                All articles
                <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3">
              {latestPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </RevealGroup>
          </Container>
        </Section>
      ) : null}

      {/* Contact CTA */}
      <Section className="border-t border-border">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-card p-10 md:flex-row md:items-center md:p-14">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Have something worth building?
              </h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                I&apos;m always glad to talk through a hard engineering
                problem — Apple platform architecture, computer vision,
                full-stack product work, or turning a research prototype
                into something people actually use.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/contact">
                Start a conversation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
