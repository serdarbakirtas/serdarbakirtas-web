import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ScreenView } from "@/components/telemetry/screen-view";

export const metadata: Metadata = {
  title: "Uses",
  description: "The hardware, editor, and tools behind my daily workflow.",
};

const usesGroups = [
  {
    category: "Hardware",
    items: [
      { name: "MacBook Pro 16″, M-series", note: "Primary machine for Xcode builds and everything else." },
      { name: "Mac mini, M-series", note: "Always-on build machine and secondary display host." },
      { name: "iPhone & iPad, current-gen", note: "Daily-driver test devices, alongside an older-generation iPhone kept specifically for performance testing." },
      { name: "Studio Display", note: "Single large external display — I prefer one big canvas over multiple monitors." },
    ],
  },
  {
    category: "Editor & Tools",
    items: [
      { name: "Xcode", note: "For everything Apple-platform — Instruments is where most performance work actually happens." },
      { name: "Zed / VS Code", note: "For everything outside the Apple ecosystem — this site, scripts, and documentation." },
      { name: "Warp", note: "Terminal, mostly for the command palette and workflow blocks." },
      { name: "Tuist", note: "Project generation for larger, modular Swift codebases." },
    ],
  },
  {
    category: "Design & Product",
    items: [
      { name: "Figma", note: "Interface design and the occasional prototype, a habit from my design years." },
      { name: "Linear", note: "Issue tracking — for client work and for Momena." },
      { name: "Notion", note: "Notes, specs, and this site's content drafts before they become MDX." },
    ],
  },
  {
    category: "Workflow",
    items: [
      { name: "Fastlane + GitHub Actions", note: "CI/CD for TestFlight builds and App Store releases." },
      { name: "Git worktrees", note: "For working on multiple branches of a large codebase without constant stashing." },
      { name: "Obsidian", note: "A personal, local-only knowledge base — appropriately, encrypted at rest." },
    ],
  },
  {
    category: "Books & Learning",
    items: [
      { name: "Apple's WWDC session archive", note: "The highest-signal source for anything platform-related, every year." },
      { name: "Designing Data-Intensive Applications", note: "Still the book I recommend most to engineers moving into architecture." },
      { name: "Don't Make Me Think", note: "The book that shaped how I think about interaction design, long before I could code." },
    ],
  },
];

export default function UsesPage() {
  return (
    <>
      <ScreenView
        screen="uses"
        metrics={{
          group_count: usesGroups.length,
          tool_count: usesGroups.reduce(
            (total, group) => total + group.items.length,
            0
          ),
        }}
      />

      <PageHeader
        eyebrow="Setup"
        title="Uses"
        description="The hardware and tools behind the work — updated as things change."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-14 md:grid-cols-2">
            {usesGroups.map((group, index) => (
              <Reveal key={group.category} delay={index * 0.03}>
                <h2 className="text-xs font-medium uppercase tracking-wider text-accent">
                  {group.category}
                </h2>
                <ul className="mt-5 space-y-5">
                  {group.items.map((item) => (
                    <li key={item.name} className="border-b border-border pb-5 last:border-0 last:pb-0">
                      <p className="font-medium">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
