import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealGroup } from "@/components/reveal";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "AI & Intelligent Products",
  description:
    "How I bring computer vision and on-device AI into production Apple products — honestly scoped, not oversold.",
};

const topics = [
  {
    title: "CoreML",
    body: "Deploying, versioning, and optimizing trained models on-device — managing compute unit selection, quantization, and the lifecycle of multiple production models at once.",
  },
  {
    title: "OpenCV",
    body: "Building preprocessing and feature-extraction pipelines that turn raw camera or sensor input into consistent, model-ready data in real time.",
  },
  {
    title: "Medical Imaging",
    body: "Working directly with imaging scientists to turn validated research into a pipeline that holds up to the accuracy and consistency bar a clinical tool requires.",
  },
  {
    title: "Image Processing",
    body: "Color space normalization, orientation correction, and region-of-interest extraction — the unglamorous steps that determine whether a model's output is trustworthy.",
  },
  {
    title: "Feature Extraction",
    body: "Structuring the path from raw pixels to the specific signal a model was trained on, tested independently from the model itself.",
  },
  {
    title: "Edge AI",
    body: "Designing inference to run entirely on-device — for latency, for reliability without a network connection, and because it keeps sensitive data off a server entirely.",
  },
  {
    title: "On-device Inference",
    body: "Profiling models for real-world thermal and battery budgets, not just accuracy — the difference between a demo and a feature people use all day.",
  },
  {
    title: "PyTorch Collaboration",
    body: "Translating a research team's PyTorch model logic into efficient, numerically faithful Swift and CoreML implementations, with tooling to catch drift early.",
  },
  {
    title: "LLM Integration",
    body: "Scoping language-model features narrowly around specific tasks, favoring on-device foundation models where possible, and being explicit with users about what data a prompt contains.",
  },
  {
    title: "Prompt Architecture",
    body: "Treating prompt templates as product surface, not implementation detail — versioned, reviewed, and designed with constrained output formats and sensible fallbacks for when a model response doesn't parse.",
  },
  {
    title: "Claude API Integration",
    body: "Wiring Claude into narrowly-scoped product features via the Messages API — structured prompts, minimal payloads, and no server-side retention of conversation history by default.",
  },
  {
    title: "Privacy-first AI",
    body: "Treating every AI feature's data flow with the same scrutiny as any other privacy-sensitive code path — minimal payloads, no server-side retention by default, honest UI copy.",
  },
];

export default function AIPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI & Intelligent Products"
        title="I build AI-powered Apple products — I don't train the models."
        description="My work sits between research and production: taking a validated model or a well-scoped LLM feature and turning it into something reliable, fast, and honest about what it does with a user's data."
      />

      <Section className="pt-0">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/90">
              At Magnosco, I work alongside scientists building computer
              vision solutions for skin cancer diagnostics — integrating
              multiple CoreML models into a production iOS application,
              building the OpenCV pipelines that feed them, and translating
              PyTorch model logic into efficient Swift. I am not an AI
              researcher, and I don&apos;t train foundation models. What I
              specialize in is the harder-than-it-looks work of bringing AI
              technologies into a production-quality Apple product —
              reliably, on-device, and with privacy treated as a starting
              constraint rather than an afterthought.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Container>
        <Separator />
      </Container>

      <Section>
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Where I work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              From research prototype to production pipeline
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold tracking-tight">
                  {topic.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {topic.body}
                </p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-10 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Case study
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                See it in a real product
              </h2>
              <p className="mt-2 max-w-lg text-muted-foreground">
                The full story of Magnosco&apos;s diagnostic imaging
                pipeline — device integration, CoreML, and mTLS networking.
              </p>
            </div>
            <Link
              href="/projects/magnosco"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent"
            >
              Read the case study
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
