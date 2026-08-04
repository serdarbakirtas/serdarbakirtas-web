export const siteConfig = {
  name: "Serdar Bakirtas",
  initials: "SB",
  role: "Senior Apple Platform Engineer",
  tagline:
    "Building privacy-first Apple products powered by modern Swift and intelligent, on-device technologies.",
  seoTitle:
    "Serdar Bakirtas | Senior Apple Platform Engineer | Swift, AI & Privacy-first Products",
  location: "Berlin, Germany",
  email: "serdarbakirtas@pm.me",
  url: "https://serdarbakirtas.com",
  description:
    "Senior Apple Platform Engineer building privacy-first iOS, iPadOS and macOS applications with Swift, CoreML, Computer Vision and AI-enabled experiences.",
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
