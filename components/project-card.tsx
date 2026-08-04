import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/40"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {project.company} · {project.year}
          </p>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
