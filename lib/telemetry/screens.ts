/**
 * The screen catalogue — one entry per route that renders a `<ScreenView />`.
 *
 * `group` is sent to GA4 as the built-in `content_group` parameter, so screens
 * roll up into sections in the standard reports without any extra setup.
 */

export const screens = {
  home: { name: "Home", group: "Overview", path: "/" },
  about: { name: "About", group: "Profile", path: "/about" },
  principles: { name: "Principles", group: "Profile", path: "/principles" },
  challenges: { name: "Challenges", group: "Work", path: "/challenges" },
  experience: { name: "Experience", group: "Work", path: "/experience" },
  projects: { name: "Projects", group: "Work", path: "/projects" },
  project_detail: {
    name: "Project Detail",
    group: "Work",
    path: "/projects/[slug]",
  },
  ai: { name: "AI & Computer Vision", group: "Work", path: "/ai" },
  writing: { name: "Writing", group: "Writing", path: "/writing" },
  article: { name: "Article", group: "Writing", path: "/writing/[slug]" },
  playground: { name: "Playground", group: "Work", path: "/playground" },
  now: { name: "Now", group: "Profile", path: "/now" },
  uses: { name: "Uses", group: "Profile", path: "/uses" },
  resume: { name: "Resume", group: "Conversion", path: "/resume" },
  contact: { name: "Contact", group: "Conversion", path: "/contact" },
  impressum: { name: "Impressum", group: "Legal", path: "/impressum" },
} as const;

export type ScreenId = keyof typeof screens;

/**
 * Per-screen metrics. Each screen reports the size and shape of what it is
 * actually showing, so a page view answers "how much of this did we render"
 * and not just "someone was here".
 */
export type ScreenMetrics = {
  home: {
    featured_project_count: number;
    featured_article_count: number;
    principle_count: number;
  };
  about: {
    career_stage_count: number;
    skill_category_count: number;
    skill_count: number;
  };
  principles: { principle_count: number };
  challenges: { challenge_count: number; challenge_context_count: number };
  experience: {
    role_count: number;
    company_count: number;
    technology_count: number;
    career_span_years: number;
  };
  projects: { project_count: number; project_tag_count: number };
  project_detail: {
    project_slug: string;
    project_company: string;
    project_year: string;
    project_tag_count: number;
    decision_count: number;
    has_live_url: boolean;
    has_cover_image: boolean;
  };
  ai: { topic_count: number; has_case_study_link: boolean };
  writing: { article_count: number; tag_count: number };
  article: {
    article_slug: string;
    article_tags: string;
    article_tag_count: number;
    published_at: string;
    reading_minutes: number;
    word_count: number;
    related_count: number;
  };
  playground: {
    item_count: number;
    shipped_count: number;
    exploring_count: number;
    notes_count: number;
  };
  now: { focus_count: number; updated_at: string };
  uses: { group_count: number; tool_count: number };
  resume: { role_count: number; resume_year: number };
  contact: { channel_count: number };
  impressum: Record<string, never>;
};

/** Resolves a pathname back to a screen id, so events can self-label. */
export function screenIdFromPath(pathname: string): ScreenId | undefined {
  const path = pathname.replace(/\/+$/, "") || "/";

  const exact = (Object.keys(screens) as ScreenId[]).find(
    (id) => screens[id].path === path
  );
  if (exact) return exact;

  if (path.startsWith("/projects/")) return "project_detail";
  if (path.startsWith("/writing/")) return "article";

  return undefined;
}
