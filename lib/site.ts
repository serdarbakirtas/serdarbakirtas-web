export const siteConfig = {
  name: "Serdar Bakirtas",
  initials: "SB",
  role: "Senior Apple Platform & Product Engineer",
  tagline:
    "Building privacy-first Apple products powered by modern Swift and intelligent, on-device technologies.",
  seoTitle:
    "Serdar Bakirtas | Senior Apple Platform & Product Engineer | Swift, Next.js, AI & Privacy-first Products",
  location: "Berlin, Germany",
  email: "serdarbakirtas@pm.me",
  url: "https://serdarbakirtas.com",
  description:
    "Senior Apple Platform & Product Engineer with 16+ years of experience. Building privacy-first iOS and macOS apps with Swift, CoreML and Computer Vision — and full-stack web products with Next.js, React and TypeScript.",
  social: {
    github: "https://github.com/serdarbakirtas",
    linkedin: "https://www.linkedin.com/in/serdarbakirtas",
    email: "mailto:serdarbakirtas@pm.me",
  },
} as const;

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Principles", href: "/principles" },
  { label: "Challenges", href: "/challenges" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "AI & CV", href: "/ai" },
  { label: "Writing", href: "/writing" },
  { label: "Playground", href: "/playground" },
  { label: "Now", href: "/now" },
  { label: "Uses", href: "/uses" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavItems = [
  { label: "Resume", href: "/resume" },
  { label: "Now", href: "/now" },
  { label: "Uses", href: "/uses" },
  { label: "Contact", href: "/contact" },
] as const;
