"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { ExperienceEntry } from "@/lib/data/experience";
import { track } from "@/lib/telemetry";

export function ExperienceTimeline({
  entries,
}: {
  entries: ExperienceEntry[];
}) {
  const [expanded, setExpanded] = React.useState<string[]>(() =>
    entries[0] ? [entries[0].slug] : []
  );

  const handleValueChange = (value: string[]) => {
    const opened = value.find((slug) => !expanded.includes(slug));
    const entry = entries.find((item) => item.slug === opened);

    if (entry) {
      track("experience_expand", {
        company: entry.company,
        role: entry.role,
        expanded_count: value.length,
      });
    }

    setExpanded(value);
  };

  return (
    <Accordion
      type="multiple"
      value={expanded}
      onValueChange={handleValueChange}
      className="border-t border-border"
    >
      {entries.map((entry) => (
        <AccordionItem key={entry.slug} value={entry.slug}>
          <AccordionTrigger className="group">
            <div className="grid w-full gap-1 pr-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4">
              <div>
                <span className="text-lg font-semibold tracking-tight sm:text-xl">
                  {entry.company}
                </span>
                <span className="block text-sm text-muted-foreground sm:inline sm:ml-2.5">
                  {entry.role}
                </span>
              </div>
              <div className="font-mono text-xs text-muted-foreground sm:text-right">
                {entry.start} — {entry.end}
                <span className="block sm:mt-0.5">{entry.location}</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-8 pl-0 md:grid-cols-[1.4fr_1fr] md:gap-10">
              <div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {entry.overview}
                </p>

                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-foreground">
                  Challenges
                </p>
                <ul className="mt-3 space-y-2">
                  {entry.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-foreground">
                  Technologies
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-foreground">
                  Impact
                </p>
                <ul className="mt-3 space-y-2">
                  {entry.impact.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
