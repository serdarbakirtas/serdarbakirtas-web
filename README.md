# serdarbakirtas.com

Personal portfolio and writing site for Serdar Bakirtas — Senior Apple Platform Engineer. Built as a fully static site: Next.js (App Router) + TypeScript + Tailwind CSS + shadcn-style components + Framer Motion + MDX. No backend, no CMS, no database — content lives in [`lib/data`](lib/data) and [`content/writing`](content/writing).

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
pnpm build
```

This produces a fully static export in `out/` (`next.config.ts` sets `output: "export"`). Preview it locally with any static file server, e.g. `pnpm dlx serve out`.

## Content

- **Experience, projects, principles, challenges, skills, playground** — edit the typed data files in [`lib/data`](lib/data).
- **Writing** — add a new `.mdx` file to [`content/writing`](content/writing) with frontmatter:

  ```md
  ---
  title: "Post title"
  date: "2026-01-01"
  excerpt: "One or two sentences."
  tags: ["Tag One", "Tag Two"]
  ---

  Post content in MDX.
  ```

  Reading time, the writing index, RSS feed, and sitemap all pick it up automatically on the next build.

## Resume

`public/resume.pdf` is generated from [`scripts/generate-resume.mjs`](scripts/generate-resume.mjs) — a single-column, plain-text PDF (base-14 Helvetica, no tables/images/columns) built to parse cleanly in ATS systems. To update it after changing role, skills, or experience details, edit the data at the top of the script and regenerate:

```bash
pnpm resume
```

Only use standard ASCII/Latin-1 punctuation in the script's content (em dash `—`, en dash `–`, and plain hyphens are fine) — PDFKit's default fonts don't support extended Unicode like arrows (`→`) and will render them as garbled characters.

## Placeholder assets

A few assets are intentionally placeholders until real ones are available — swap them in and remove the corresponding note:

- **Project screenshots** — drop a file named `cover.webp` (or `.jpg`/`.jpeg`/`.png`) into `public/images/projects/{slug}/` (slugs: `momena`, `magnosco`, `volkswagen`, `nordlocker`, `puhutv`) and it's picked up automatically on the next build — no code changes needed. Until then, `components/screenshot-placeholder.tsx` renders instead.
  - **Size**: 2400×1350px (16:9), which covers the slot's full-width desktop rendering at retina density.
  - **Format**: WebP preferred (smaller at equal quality); JPEG is fine too. Keep each file under ~400–600KB — the static export doesn't run image optimization (`images.unoptimized: true`), so whatever you add ships as-is.
  - The image is a single wide banner (device mockup, browser screenshot, or a composed hero shot) — not a raw vertical phone screenshot, which wouldn't fit the 16:9 slot well.
- **Company marks** — rendered as typographic text rather than logo images, deliberately, to avoid using unlicensed logo assets.

## Telemetry

Analytics run on Google Analytics 4, client-side only — the site is a static export, so there is no server to measure from. The whole layer lives in [`lib/telemetry`](lib/telemetry) behind a small typed API, and stays a complete no-op (no script loaded, no `dataLayer`, no network requests) unless a measurement ID is configured.

### Setup

1. Create a GA4 property and a **Web** data stream for `serdarbakirtas.com`, then copy its measurement ID (`G-XXXXXXXXXX`).
2. Locally: `cp .env.example .env.local` and set `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
3. In CI: add `NEXT_PUBLIC_GA_MEASUREMENT_ID` as a repository **variable** under **Settings → Secrets and variables → Actions → Variables**. The deploy workflow passes it into the build. Values are inlined at build time, so changing it requires a rebuild.

Set `NEXT_PUBLIC_TELEMETRY_DEBUG=true` to log every event to the browser console instead of sending it — useful for verifying instrumentation without polluting the property.

Visitors with Do Not Track or Global Privacy Control enabled are never tracked and never load the script ([`lib/telemetry/config.ts`](lib/telemetry/config.ts)).

### Screen metrics

Every screen renders a `<ScreenView />` that sends a `page_view` carrying that screen's identity (`screen_id`, `screen_name`, `content_group`) plus metrics describing what was actually rendered:

| Screen | `screen_id` | Metrics |
| --- | --- | --- |
| `/` | `home` | `featured_project_count`, `featured_article_count`, `principle_count` |
| `/about` | `about` | `career_stage_count`, `skill_category_count`, `skill_count` |
| `/principles` | `principles` | `principle_count` |
| `/challenges` | `challenges` | `challenge_count`, `challenge_context_count` |
| `/experience` | `experience` | `role_count`, `company_count`, `technology_count`, `career_span_years` |
| `/projects` | `projects` | `project_count`, `project_tag_count` |
| `/projects/[slug]` | `project_detail` | `project_slug`, `project_company`, `project_year`, `project_tag_count`, `decision_count`, `has_live_url`, `has_cover_image` |
| `/ai` | `ai` | `topic_count`, `has_case_study_link` |
| `/writing` | `writing` | `article_count`, `tag_count` |
| `/writing/[slug]` | `article` | `article_slug`, `article_tags`, `article_tag_count`, `published_at`, `reading_minutes`, `word_count`, `related_count` |
| `/playground` | `playground` | `item_count`, `shipped_count`, `exploring_count`, `notes_count` |
| `/now` | `now` | `focus_count`, `updated_at` |
| `/uses` | `uses` | `group_count`, `tool_count` |
| `/resume` | `resume` | `role_count`, `resume_year` |
| `/contact` | `contact` | `channel_count` |
| `/impressum` | `impressum` | — |

The screen catalogue is [`lib/telemetry/screens.ts`](lib/telemetry/screens.ts); metric shapes are typed per screen, so a `<ScreenView />` with the wrong metrics for its screen fails the build.

### Interaction events

Every event is automatically labelled with the screen it happened on, so each one can be sliced per screen. Defined in [`lib/telemetry/events.ts`](lib/telemetry/events.ts):

| Event | Fired when | Parameters |
| --- | --- | --- |
| `scroll_depth` | 25/50/75/100% of a screen is reached | `percent_scrolled` |
| `nav_click` | Header, mobile menu, or footer navigation | `nav_label`, `nav_href`, `nav_surface` |
| `cta_click` | A primary call to action | `cta_id`, `cta_label` |
| `content_open` | A project or article card is opened | `content_type`, `content_id`, `content_title` |
| `outbound_click` | A link leaves the site | `link_url`, `link_domain`, `link_label` |
| `resume_download` | The resume PDF is downloaded | `file_name` |
| `writing_search` | Search on the writing index settles | `search_term`, `result_count` |
| `writing_filter` | A tag filter is applied | `filter_tag`, `result_count` |
| `experience_expand` | A role is expanded on the timeline | `company`, `role`, `expanded_count` |
| `theme_change` | The theme toggle is used | `theme` |

### Adding instrumentation

```tsx
// A new screen: add it to lib/telemetry/screens.ts, then render
<ScreenView screen="uses" metrics={{ group_count: 5, tool_count: 17 }} />

// An interaction, from a client component
track("cta_click", { cta_id: "hero_resume", cta_label: "Download Resume" });

// Or from a server component, without making it a client component
<TrackedLink href="/contact" event="cta_click" params={{ cta_id: "…", cta_label: "…" }}>
```

### Reporting

`content_group` shows up in GA4's standard reports without any setup. The per-screen metrics and event parameters are custom parameters — register the ones you want to report on under **Admin → Custom definitions** (custom dimensions for strings like `screen_id`, custom metrics for the counts). GA4 only collects them from the moment they are registered, so register them before the first deploy that matters.

> **Consent note:** GA4 sets cookies and is generally treated as consent-requiring under GDPR/TTDSG for German visitors. This site honours Do Not Track and Global Privacy Control, but that is not a substitute for a consent banner. If you want a fully compliant setup, either add a consent banner wired to GA4 Consent Mode, or switch the backend to a cookieless provider — the telemetry API is backend-agnostic, only [`lib/telemetry/gtag.ts`](lib/telemetry/gtag.ts) and [`components/telemetry/analytics.tsx`](components/telemetry/analytics.tsx) would change.

## Deployment — GitHub Pages with a custom domain

This repo is set up to deploy to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the static export and publishes it on every push to `release`.

One-time setup:

1. In the GitHub repo, go to **Settings → Pages** and set the source to **GitHub Actions**.
2. Push to `release` — the workflow builds and deploys automatically.
3. `public/CNAME` already contains `serdarbakirtas.com`, so GitHub Pages will serve the custom domain once DNS is pointed at it (see below). GitHub Pages may reset the custom domain setting if `CNAME` is missing from a deploy, so don't delete that file.

### DNS records to add in GoDaddy

Point the apex domain at GitHub Pages' IPs, and `www` at the GitHub Pages hostname:

| Type  | Name  | Value                 |
| ----- | ----- | --------------------- |
| A     | @     | 185.199.108.153       |
| A     | @     | 185.199.109.153       |
| A     | @     | 185.199.110.153       |
| A     | @     | 185.199.111.153       |
| CNAME | www   | `serdarbakirtas.github.io` |

After DNS propagates, enable **Enforce HTTPS** in the repo's **Settings → Pages** once GitHub finishes issuing the certificate for the custom domain.

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · MDX (`next-mdx-remote`) · `next-themes` · Radix primitives (hand-wired shadcn-style components in `components/ui`)
