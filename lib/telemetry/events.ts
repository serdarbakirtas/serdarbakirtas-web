/**
 * The interaction event catalogue.
 *
 * Screen context (`screen_id`, `screen_name`, `content_group`) is attached
 * automatically by `track()`, so events only declare what is specific to them.
 */

export type TelemetryEvents = {
  /** Navigation via the header, mobile menu, or footer. */
  nav_click: {
    nav_label: string;
    nav_href: string;
    nav_surface: "header" | "mobile_menu" | "footer" | "brand";
  };
  /** A primary call to action — "Get in touch", "View projects", and friends. */
  cta_click: { cta_id: string; cta_label: string };
  /** A link leaving the site. */
  outbound_click: {
    link_url: string;
    link_domain: string;
    link_label: string;
  };
  /** The resume PDF was downloaded. */
  resume_download: { file_name: string };
  /** A card or teaser opened a piece of content. */
  content_open: {
    content_type: "article" | "project";
    content_id: string;
    content_title: string;
  };
  /** Search on the writing index, fired once the typing settles. */
  writing_search: { search_term: string; result_count: number };
  /** Tag filter on the writing index. */
  writing_filter: { filter_tag: string; result_count: number };
  /** A role was expanded on the experience timeline. */
  experience_expand: { company: string; role: string; expanded_count: number };
  /** Theme switched from the header toggle. */
  theme_change: { theme: "dark" | "light" };
  /** How far down a screen the visitor actually got. */
  scroll_depth: { percent_scrolled: 25 | 50 | 75 | 100 };
};

export type TelemetryEventName = keyof TelemetryEvents;

/** Best-effort hostname for outbound links, for grouping in reports. */
export function linkDomain(url: string): string {
  try {
    return new URL(url, "https://serdarbakirtas.com").hostname.replace(
      /^www\./,
      ""
    );
  } catch {
    return "unknown";
  }
}
