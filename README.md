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
