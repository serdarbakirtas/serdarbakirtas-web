import type { Metadata } from "next";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { linkDomain } from "@/lib/telemetry";
import { ScreenView } from "@/components/telemetry/screen-view";
import {
  TrackedAnchor,
  TrackedLink,
} from "@/components/telemetry/tracked-link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — email, LinkedIn, GitHub, or download my resume directly.",
};

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.social.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "/in/serdarbakirtas",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "/serdarbakirtas",
    href: siteConfig.social.github,
    icon: GithubIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <ScreenView screen="contact" metrics={{ channel_count: channels.length }} />

      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="The fastest way to reach me is email. I read everything myself — no forms, no filters."
      />

      <Section className="pt-0">
        <Container className="max-w-2xl">
          <Reveal className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="size-4" />
            <span>{siteConfig.location}</span>
          </Reveal>

          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {channels.map((channel) => (
              <TrackedAnchor
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                event="outbound_click"
                params={{
                  link_url: channel.href,
                  link_domain: channel.href.startsWith("mailto:")
                    ? "email"
                    : linkDomain(channel.href),
                  link_label: channel.label,
                }}
                className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-10 items-center justify-center rounded-full border border-border text-foreground">
                    <channel.icon className="size-4" />
                  </span>
                  <div>
                    <p className="font-medium">{channel.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {channel.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </TrackedAnchor>
            ))}
          </div>

          <Reveal delay={0.05} className="mt-10 flex items-center gap-4">
            <TrackedLink
              href="/resume"
              event="cta_click"
              params={{
                cta_id: "contact_resume",
                cta_label: "Download resume",
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              <Download className="size-4" />
              Download resume
            </TrackedLink>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
