import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { PostMeta } from "@/lib/mdx";
import { formatDate } from "@/lib/format";

export function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/40"
    >
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>
      <div className="mt-1 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
