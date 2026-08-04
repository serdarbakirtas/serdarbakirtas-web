import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["webp", "jpg", "jpeg", "png"];

/**
 * Looks for public/images/projects/{slug}/cover.{webp|jpg|jpeg|png} at build time.
 * Returns the public URL if found, otherwise null (case study falls back to the placeholder).
 */
export function getProjectCoverImage(slug: string): string | null {
  for (const ext of EXTENSIONS) {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "projects",
      slug,
      `cover.${ext}`
    );
    if (fs.existsSync(filePath)) {
      return `/images/projects/${slug}/cover.${ext}`;
    }
  }
  return null;
}
