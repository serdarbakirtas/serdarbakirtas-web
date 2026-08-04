import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm currently focused on, learning, and exploring.",
};

const now = [
  {
    title: "Computer vision at Magnosco",
    body: "Deep in refining the imaging pipeline's preprocessing and evaluating a new CoreML model version against the current one — accuracy, latency, and thermal impact all under review.",
  },
  {
    title: "Apple Intelligence & Foundation Models",
    body: "Exploring where Apple's on-device foundation models can replace network calls in Momena's LLM-powered features without giving up capability.",
  },
  {
    title: "Swift Macros",
    body: "Prototyping macros to cut networking boilerplate — trying to find the line between genuinely useful code generation and clever-for-its-own-sake.",
  },
  {
    title: "Accessibility audits",
    body: "Going through Momena screen by screen with VoiceOver and Dynamic Type at the largest sizes, fixing what I find before it becomes someone's support ticket.",
  },
  {
    title: "Performance",
    body: "Profiling cold-start time across Momena's feature set with Instruments, chasing milliseconds that matter more than they sound like they should.",
  },
  {
    title: "Developer experience",
    body: "Tuning the local Swift package structure across projects to keep incremental build times low as the codebases grow.",
  },
  {
    title: "Reading",
    body: "Working through research papers on efficient on-device inference, alongside the usual rotation of engineering and design books.",
  },
];

export default function NowPage() {
  return (
    <>
      <PageHeader
        eyebrow="Now"
        title="What I'm doing right now"
        description={`Last updated ${formatDate(new Date().toISOString())}. Inspired by Derek Sivers' /now page movement.`}
      />

      <Section className="pt-0">
        <Container className="max-w-2xl">
          <div className="space-y-10">
            {now.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.02}>
                <h2 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
