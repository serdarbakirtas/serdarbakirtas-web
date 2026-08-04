import type { MetadataRoute } from "next";

import { projects } from "@/lib/data/projects";
import { getAllPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/principles",
  "/challenges",
  "/experience",
  "/projects",
  "/ai",
  "/writing",
  "/playground",
  "/now",
  "/uses",
  "/contact",
  "/resume",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...projectEntries, ...postEntries];
}
