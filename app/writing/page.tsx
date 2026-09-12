import type { Metadata } from "next";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { WritingIndex } from "@/components/writing-index";
import { getAllPosts, getAllTags } from "@/lib/mdx";
import { ScreenView } from "@/components/telemetry/screen-view";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on SwiftUI, Swift Concurrency, computer vision, CoreML, and building privacy-first Apple products.",
};

export default function WritingPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <ScreenView
        screen="writing"
        metrics={{ article_count: posts.length, tag_count: tags.length }}
      />

      <PageHeader
        eyebrow="Writing"
        title="Notes on building"
        description="Practical notes from sixteen years of shipping Apple products — architecture, computer vision, and the occasional retrospective."
      />

      <Section className="pt-0">
        <Container>
          <WritingIndex posts={posts} tags={tags} />
        </Container>
      </Section>
    </>
  );
}
