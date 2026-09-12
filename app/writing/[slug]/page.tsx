import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArticleCard } from "@/components/article-card";
import { formatDate } from "@/lib/format";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";
import { ScreenView } from "@/components/telemetry/screen-view";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <ScreenView
        screen="article"
        metrics={{
          article_slug: post.slug,
          article_tags: post.tags.join(", "),
          article_tag_count: post.tags.length,
          published_at: post.date,
          reading_minutes: post.readingMinutes,
          word_count: post.wordCount,
          related_count: related.length,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container className="max-w-3xl pb-6 pt-32 md:pt-40">
        <Reveal>
          <Link
            href="/writing"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container className="max-w-3xl py-10">
        <Reveal>
          <article className="prose prose-neutral prose-editorial dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-semibold prose-a:no-underline prose-a:font-medium">
            <MDXRemote source={post.content} />
          </article>
        </Reveal>
      </Container>

      {related.length > 0 ? (
        <>
          <Container>
            <Separator />
          </Container>
          <Section>
            <Container>
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Related articles
                </h2>
              </Reveal>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {related.map((relatedPost) => (
                  <ArticleCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </Container>
          </Section>
        </>
      ) : null}
    </>
  );
}
