"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { ArticleCard } from "@/components/article-card";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/lib/mdx";
import { track } from "@/lib/telemetry";

export function WritingIndex({
  posts,
  tags,
}: {
  posts: PostMeta[];
  tags: string[];
}) {
  const [query, setQuery] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string | null>(null);

  const matching = (tag: string | null, search: string) =>
    posts.filter((post) => {
      const matchesTag = tag ? post.tags.includes(tag) : true;
      const q = search.trim().toLowerCase();
      const matchesQuery = q
        ? post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.tags.some((postTag) => postTag.toLowerCase().includes(q))
        : true;
      return matchesTag && matchesQuery;
    });

  const filtered = matching(activeTag, query);

  // Report the search once the typing settles, so a single query doesn't turn
  // into one event per keystroke.
  const resultCount = filtered.length;
  React.useEffect(() => {
    const term = query.trim();
    if (!term) return;

    const timeout = window.setTimeout(() => {
      track("writing_search", {
        search_term: term.toLowerCase(),
        result_count: resultCount,
      });
    }, 800);

    return () => window.clearTimeout(timeout);
  }, [query, resultCount]);

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles…"
            className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveTag(null);
              track("writing_filter", {
                filter_tag: "all",
                result_count: matching(null, query).length,
              });
            }}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
              activeTag === null
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                const nextTag = tag === activeTag ? null : tag;
                setActiveTag(nextTag);
                track("writing_filter", {
                  filter_tag: nextTag ?? "all",
                  result_count: matching(nextTag, query).length,
                });
              }}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                activeTag === tag
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted-foreground">
          No articles match{" "}
          {query ? <span>&quot;{query}&quot;</span> : "that filter"}.
        </p>
      )}
    </div>
  );
}
