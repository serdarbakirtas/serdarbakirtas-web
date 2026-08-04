import Link from "next/link";
import { Mail } from "lucide-react";

import { Container } from "@/components/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { footerNavItems, navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-14 md:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-mono text-sm text-foreground">
              {siteConfig.initials}
            </p>
            <p className="mt-2 max-w-[22ch] text-sm text-muted-foreground">
              {siteConfig.role} · {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Explore
            </p>
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              More
            </p>
            {navItems.slice(5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            {footerNavItems
              .filter((item) => item.label === "Resume")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Connect
            </p>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
            <a
              href={siteConfig.social.email}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" /> Email
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Designed and
            built by hand.
          </p>
          <p className="font-mono">Berlin, Germany</p>
        </div>
      </Container>
    </footer>
  );
}
