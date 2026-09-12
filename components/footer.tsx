import { Mail } from "lucide-react";

import { Container } from "@/components/container";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { footerNavItems, navItems, siteConfig } from "@/lib/site";
import { linkDomain } from "@/lib/telemetry";
import {
  TrackedAnchor,
  TrackedLink,
} from "@/components/telemetry/tracked-link";

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
              <TrackedLink
                key={item.href}
                href={item.href}
                event="nav_click"
                params={{
                  nav_label: item.label,
                  nav_href: item.href,
                  nav_surface: "footer",
                }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </TrackedLink>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              More
            </p>
            {navItems.slice(5).map((item) => (
              <TrackedLink
                key={item.href}
                href={item.href}
                event="nav_click"
                params={{
                  nav_label: item.label,
                  nav_href: item.href,
                  nav_surface: "footer",
                }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </TrackedLink>
            ))}
            {footerNavItems
              .filter((item) => item.label === "Resume")
              .map((item) => (
                <TrackedLink
                  key={item.href}
                  href={item.href}
                  event="nav_click"
                  params={{
                    nav_label: item.label,
                    nav_href: item.href,
                    nav_surface: "footer",
                  }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </TrackedLink>
              ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Connect
            </p>
            <TrackedAnchor
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              event="outbound_click"
              params={{
                link_url: siteConfig.social.github,
                link_domain: linkDomain(siteConfig.social.github),
                link_label: "GitHub",
              }}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" /> GitHub
            </TrackedAnchor>
            <TrackedAnchor
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              event="outbound_click"
              params={{
                link_url: siteConfig.social.linkedin,
                link_domain: linkDomain(siteConfig.social.linkedin),
                link_label: "LinkedIn",
              }}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </TrackedAnchor>
            <TrackedAnchor
              href={siteConfig.social.email}
              event="outbound_click"
              params={{
                link_url: siteConfig.social.email,
                link_domain: "email",
                link_label: "Email",
              }}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" /> Email
            </TrackedAnchor>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Designed and
            built by hand.
          </p>
          <div className="flex items-center gap-4">
            <TrackedLink
              href="/impressum"
              event="nav_click"
              params={{
                nav_label: "Impressum",
                nav_href: "/impressum",
                nav_surface: "footer",
              }}
              className="transition-colors hover:text-foreground"
            >
              Impressum
            </TrackedLink>
            <p className="font-mono">Berlin, Germany</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
