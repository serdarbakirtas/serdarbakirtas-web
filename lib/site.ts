export const siteConfig = {
  name: "Serdar Bakirtas",
  initials: "SB",
  role: "Senior Apple Platform Engineer",
  tagline:
    "Building privacy-first Apple products powered by modern Swift and intelligent, on-device technologies.",
  location: "Berlin, Germany",
  email: "hello@serdarbakirtas.com",
  url: "https://serdarbakirtas.com",
  description:
    "Serdar Bakirtas is a Senior Apple Platform Engineer in Berlin building privacy-first iOS and macOS products — from computer vision and CoreML integration to founding and shipping Momena end-to-end.",
  social: {
    github: "https://github.com/serdarbakirtas",
    linkedin: "https://www.linkedin.com/in/serdarbakirtas",
    email: "mailto:hello@serdarbakirtas.com",
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
