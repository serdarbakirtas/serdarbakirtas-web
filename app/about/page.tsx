import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealGroup } from "@/components/reveal";
import { Separator } from "@/components/ui/separator";
import { skillCategories } from "@/lib/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "From interaction design to Apple platform engineering — the story behind sixteen years of building digital products.",
};

const arc = [
  {
    stage: "Interaction Designer",
    body: "I started my career designing interactive digital campaigns for international brands — the kind of work where every hover state, transition, and moment of feedback was scrutinized. That's where I learned that the feeling of quality lives in details most people never consciously notice.",
  },
  {
    stage: "iOS Engineer",
    body: "The move into engineering wasn't a rejection of design — it was a way to own the whole outcome instead of handing a spec to someone else. Objective-C was unforgiving in ways Flash never was, and I loved it immediately.",
  },
  {
    stage: "Senior Apple Platform Engineer",
    body: "Over a decade across consultancies and product companies, I kept gravitating toward the hardest architectural problems — migrating legacy codebases, breaking monoliths into modules, leading teams through UIKit-to-SwiftUI transitions on products used by millions.",
  },
  {
    stage: "Computer Vision & CoreML",
    body: "At Magnosco, engineering met science directly. Translating a research team's PyTorch models into production Swift, building the OpenCV pipelines that feed them clean data, and making sure a medical device's Wi-Fi connection never fails a clinician mid-exam — this is the most demanding, most rewarding work I've done.",
  },
  {
    stage: "Founder",
    body: "Building Momena alone — design, engineering, encryption, App Store operations, support — was the fastest way I know to find out which of your instincts actually hold up when there's no one else to defer to.",
  },
  {
    stage: "Intelligent, Privacy-First Products",
    body: "Today my work sits at the intersection of all of it: architecture discipline from a decade of Apple platform engineering, a design sensibility from where I started, and a growing focus on bringing on-device AI into products without compromising the privacy users are trusting you with.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I design, engineer, and ship — not just one of the three."
        description="Sixteen years, one throughline: making complex technology disappear behind something that feels obvious to use."
      />

      <Section className="pt-0">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-balance text-xl leading-relaxed text-foreground/90">
              I&apos;m Serdar Bakirtas, a Senior Apple Platform Engineer based
              in Berlin. My career doesn&apos;t follow the usual
              &quot;learned to code, got a job, climbed the ladder&quot; arc
              — it started in a very different discipline, and I think
              that&apos;s exactly why the products I build now feel the way
              they do.
            </p>
          </Reveal>

          <div className="mt-16 space-y-14">
            {arc.map((stage, index) => (
              <Reveal key={stage.stage} delay={index * 0.03}>
                <div className="grid gap-3 md:grid-cols-[240px_1fr] md:gap-10">
                  <p className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, "0")} — {stage.stage}
                  </p>
                  <p className="max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
                    {stage.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Container>
        <Separator />
      </Container>

      <Section>
        <Container>
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Technical expertise
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              The tools behind the work
            </h2>
            <p className="mt-4 text-muted-foreground">
              Not a progress-bar skill chart — the categories of work I
              actually spend my time on, and why each one matters to the
              products I build.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold tracking-tight">
                  {category.category}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
