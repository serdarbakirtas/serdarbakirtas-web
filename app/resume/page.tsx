import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { experience } from "@/lib/data/experience";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download my resume as a PDF, or view a quick summary below.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Resume"
        description="A PDF version for recruiters and ATS systems, plus the quick summary below."
      />

      <Section className="pt-0">
        <Container className="max-w-2xl">
          <Reveal className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium">Serdar Bakirtas — Resume.pdf</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Updated for {new Date().getFullYear()}
              </p>
            </div>
            <div className="flex gap-2">
              <Button asChild size="sm">
                <a href="/resume.pdf" download>
                  <Download className="size-4" />
                  Download
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" />
                  View
                </a>
              </Button>
            </div>
          </Reveal>

          <div className="mt-14 space-y-8">
            {experience.map((entry) => (
              <Reveal key={entry.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 className="font-medium">
                    {entry.role} · {entry.company}
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground">
                    {entry.start} — {entry.end}
                  </p>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {entry.overview}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
