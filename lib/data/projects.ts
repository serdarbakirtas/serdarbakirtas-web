export type Project = {
  slug: string;
  title: string;
  role: string;
  company: string;
  year: string;
  summary: string;
  tags: string[];
  problem: string;
  solution: string;
  architecture: string;
  decisions: { title: string; body: string }[];
  challenges: string[];
  results: string[];
  lessons: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "momena",
    title: "Momena",
    role: "Founder, Designer & Engineer",
    company: "Independent",
    year: "2021 — Present",
    summary:
      "A privacy-first consumer app I designed, built, and shipped entirely by myself — from Figma to SwiftUI, CloudKit sync, and weekly AI-powered insights — without operating a traditional backend.",
    tags: ["SwiftUI", "SwiftData", "CloudKit", "StoreKit 2", "AES-256", "LLM"],
    problem:
      "Most personal data tools ask users to trust a company they'll never meet with their most private information, in exchange for features that could just as easily run on-device — and most also mean standing up and operating a server just to sync data across a person's own devices. I wanted to prove that a small, independent team — one person — could build something people trust with sensitive personal data, without the surveillance-driven business model or backend overhead that usually comes with this category.",
    solution:
      "Momena is a privacy-first app built around a simple rule: data stays on the user's device unless encryption makes leaving it safe, and no traditional server ever needs to exist. Core functionality runs on SwiftData for local persistence, with CloudKit handling cross-device sync entirely within Apple's own infrastructure and AES-256/CryptoKit encrypting anything sensitive before it syncs. Weekly AI-powered insights — generated from a carefully scoped, on-device-first prompt — turn a user's own data into something genuinely useful, without retaining conversation history server-side.",
    architecture:
      "The app is built in SwiftUI on a SwiftData persistence layer, with CloudKit as the only sync backend — no custom server, no database to operate, no infrastructure to maintain. StoreKit 2 handles subscriptions end-to-end, with entitlement checks that fail toward giving users access rather than locking them out during a network hiccup. WidgetKit and ActivityKit power Home Screen widgets and Live Activities that stay useful without a server pushing updates, and the entire UX was designed in Figma before a line of SwiftUI was written.",
    decisions: [
      {
        title: "SwiftData over a custom Core Data stack",
        body: "SwiftData's schema migrations and Swift-native model definitions let me move faster as a solo developer, at the cost of working around a few early rough edges — a trade I'd make again for a project this size.",
      },
      {
        title: "CloudKit instead of a custom backend",
        body: "Standing up and operating a server for a one-person product is a maintenance burden and a privacy liability I didn't want. CloudKit gave me cross-device sync backed by Apple's infrastructure, with no server code of my own that could ever see a user's plaintext data.",
      },
      {
        title: "LLM features scoped narrowly, by default",
        body: "Rather than bolting on a general-purpose assistant, I designed each AI-powered feature — including the weekly insights — around a specific, well-understood task, which made it possible to reason about, and explain to users, exactly what data a prompt actually contains.",
      },
    ],
    challenges: [
      "Owning the entire product surface — product design, engineering, App Store operations, support, and marketing — without a team to distribute the load across.",
      "Designing CloudKit sync and encryption that a non-technical user never has to think about, but that holds up under real scrutiny.",
      "Building Widgets and Live Activities that stay accurate and battery-friendly with no server actively pushing state changes.",
      "Writing StoreKit 2 entitlement logic that never punishes a paying user for being offline at the wrong moment.",
    ],
    results: [
      "Shipped a complete privacy-first product — onboarding, encrypted sync, subscriptions, widgets, and Live Activities — without operating a single backend server.",
      "Launched weekly AI-generated insights as a core feature, built on the same narrowly-scoped prompt architecture used across the rest of the app.",
      "Runs the entire support, App Store, and release process as a team of one, end to end.",
    ],
    lessons: [
      "Constraints are a feature: building alone forced ruthless prioritization that the product is better for.",
      "Privacy-first isn't a marketing line if it changes real architecture decisions — it has to show up in how data is modeled, not just in a policy page.",
      "Shipping the marketing site, documentation, and support flow is as much part of 'the product' as the Swift code.",
    ],
  },
  {
    slug: "momena-website",
    title: "Momena — Marketing Website",
    role: "Founder & Web Engineer",
    company: "Independent",
    year: "2024 — Present",
    summary:
      "Designed and built the full marketing website for Momena from scratch — multilingual content (EN/TR/DE), blog infrastructure, SEO, and App Store landing page. No templates, no page builders.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "MDX", "i18n", "SEO"],
    liveUrl: "https://momena.app",
    problem:
      "Momena's iOS app needed a marketing presence that could explain a privacy-first product accurately, rank for the right search terms, and speak to users in their own language across three markets — without relying on a page builder that would compromise performance or make multilingual content unmanageable over time.",
    solution:
      "I designed and built momena.app entirely from scratch as a full-stack web product: a Next.js and TypeScript site styled with Tailwind CSS, structured content for English, Turkish, and German audiences, an MDX-based blog for product updates and privacy-focused writing, and an App Store landing page built to convert without gimmicks.",
    architecture:
      "The site is built on Next.js with TypeScript throughout, styled with Tailwind CSS, and structured around localized content trees for EN/TR/DE. Blog content is authored in MDX — the same content-as-code approach I use for my own writing — so there's no separate CMS to operate or secure. SEO — metadata, structured data, sitemaps — is treated as a first-class part of the architecture, not bolted on after launch.",
    decisions: [
      {
        title: "No templates or page builders",
        body: "Building the site by hand in Next.js meant slower initial setup than a page builder, but gave full control over performance, structure, and exactly how multilingual content and SEO metadata compose together — control I wasn't willing to trade for a faster first draft.",
      },
      {
        title: "MDX for blog content, not a separate CMS",
        body: "Keeping blog posts as MDX in the repository — the same pattern I use for my own writing — meant no CMS to operate or secure, consistent with the same 'no unnecessary backend' philosophy behind Momena the app.",
      },
      {
        title: "i18n as a structural decision, not a translation layer bolted on",
        body: "Structuring content trees per locale from the start, rather than retrofitting translation onto an English-only site, avoided the awkward compromises that usually show up in multilingual sites built as an afterthought.",
      },
    ],
    challenges: [
      "Structuring multilingual content (EN/TR/DE) so translations stay accurate and maintainable without a separate localization platform.",
      "Building an App Store landing page that converts without resorting to a bloated third-party page builder.",
      "Keeping SEO fundamentals — metadata, sitemaps, structured data — correct across three languages and a growing blog.",
    ],
    results: [
      "Shipped momena.app end to end — design, engineering, content, and SEO — as a solo build alongside the iOS app itself.",
      "Extended the same privacy-first, no-unnecessary-backend philosophy from the app to its own marketing site.",
      "Established a content and blog infrastructure that scales to new languages and articles without re-architecting.",
    ],
    lessons: [
      "Building the marketing site with the same rigor as the product it markets is worth it — visitors can tell when a landing page was an afterthought.",
      "Treating i18n as an architecture decision from day one is far cheaper than retrofitting it later.",
    ],
  },
  {
    slug: "magnosco",
    title: "Magnosco — Diagnostic Imaging Platform",
    role: "Senior Apple Platform Engineer",
    company: "Magnosco",
    year: "2023 — Present",
    summary:
      "The iOS application connecting a dermatological imaging device to an on-device CoreML diagnostic pipeline, built in close collaboration with imaging scientists.",
    tags: ["CoreML", "OpenCV", "mTLS", "Medical Imaging", "Swift Concurrency"],
    problem:
      "Magnosco's research team had validated a computer vision approach to assist dermatologists in early skin cancer detection, developed and trained in PyTorch. The gap was turning that research into a product a clinician could rely on in an exam room — a reliable device connection, consistent image capture, on-device inference within clinical time constraints, and a secure path for results.",
    solution:
      "I built the iOS layer that takes the device from research prototype to clinical tool: a resilient Wi-Fi pairing flow to the imaging hardware, an OpenCV preprocessing pipeline that normalizes captures regardless of lighting or device firmware version, and a CoreML inference pipeline running multiple models translated from the team's PyTorch implementations. Every result is transmitted over mutual TLS, with certificates provisioned and rotated on-device.",
    architecture:
      "The app is structured around a capture-to-result pipeline: a device-communication layer over the local Wi-Fi network, an image-processing module built on OpenCV and Core Image, a CoreML inference layer managing multiple versioned models, and a networking layer enforcing mTLS for every request. Each stage is isolated behind a protocol so models and preprocessing steps can evolve independently as the science improves.",
    decisions: [
      {
        title: "On-device inference over server round-trips",
        body: "Running CoreML models on-device kept results fast enough for a live exam and avoided transmitting raw diagnostic imagery unless a result required deeper review — a meaningful privacy and latency win.",
      },
      {
        title: "Isolating the preprocessing pipeline from the model layer",
        body: "Keeping OpenCV preprocessing as its own testable module meant the imaging scientists and I could iterate on capture quality independently from model updates, without either side blocking the other.",
      },
      {
        title: "mTLS instead of token-based auth alone",
        body: "For a medical product, authenticating the device itself — not just the user session — mattered enough to justify the added complexity of on-device certificate lifecycle management.",
      },
      {
        title: "Actors and conditional execution over brute-force processing",
        body: "Rather than running every model on every frame, I introduced actor-based concurrency to coordinate pipeline stages safely, an intelligent caching layer to skip recomputing unchanged steps, and conditional model execution so expensive models only ran when their output was actually needed.",
      },
    ],
    challenges: [
      "Translating PyTorch model logic into efficient, numerically consistent Swift/CoreML implementations.",
      "Handling device pairing and reconnection gracefully on a Wi-Fi network with no internet path.",
      "Meeting the accuracy and consistency bar required for a clinical support tool, not just a demo.",
      "Redesigning a memory-heavy computer vision workflow on iPad that was causing crashes under sustained use.",
    ],
    results: [
      "Cut peak memory usage on iPad from roughly 4GB to 1.2GB and eliminated the device crashes that came with it.",
      "Shipped a production pipeline translating the research team's PyTorch models into Swift/CoreML without a loss of clinical accuracy.",
      "Built the device-pairing and mTLS networking layer clinicians rely on during live examinations.",
    ],
    lessons: [
      "The hardest part of shipping AI in a real product is rarely the model — it's the pipeline of unglamorous engineering around it.",
      "Working directly with scientists sharpened how I reason about model behavior, uncertainty, and where engineering judgment should and shouldn't override research decisions.",
      "Medical-grade reliability requirements make you a better engineer everywhere else, too.",
    ],
  },
  {
    slug: "volkswagen",
    title: "Volkswagen — Connected Owner App",
    role: "iOS Engineer → Senior iOS Engineer",
    company: "Diconium (for Volkswagen Group)",
    year: "2018 — 2021",
    summary:
      "The companion iOS app connecting Volkswagen drivers to their vehicles — remote status, trip data, and configuration — rebuilt module by module inside a large, long-lived, multi-brand codebase.",
    tags: ["Swift", "Objective-C Migration", "Swift Packages", "SwiftUI"],
    problem:
      "The owner app had grown over years into a large Objective-C codebase shared, with variations, across several Volkswagen Group brands. Build times were slow, ownership boundaries were unclear, and every feature team touched the same tangled set of files — all while the app kept shipping monthly releases to a large existing user base.",
    solution:
      "I helped lead an incremental migration strategy: extracting features into local Swift packages one at a time, rewriting each in Swift as it moved, and using Objective-C/Swift interop as a bridge rather than attempting a risky rewrite. In parallel, I led a screen-by-screen migration from UIKit to SwiftUI for newer feature areas, chosen deliberately to avoid destabilizing the app's most business-critical flows first.",
    architecture:
      "The end state organized the app as a set of independently buildable Swift packages by feature domain — vehicle status, trip history, remote configuration — each with its own tests and a thin app target composing them together. Shared utilities and networking lived in foundational packages that feature packages depended on, never the reverse.",
    decisions: [
      {
        title: "Incremental migration over a rewrite",
        body: "A full rewrite would have frozen feature delivery for a product with monthly release commitments to a large user base — module-by-module migration let the team keep shipping while paying down debt.",
      },
      {
        title: "Package boundaries drawn around feature ownership",
        body: "Structuring packages to mirror team boundaries — not just technical layers — made the modularity actually stick, because each team had a package they were accountable for.",
      },
    ],
    challenges: [
      "Migrating Objective-C to Swift without introducing regressions in an actively-shipping, multi-brand codebase.",
      "Cutting incremental build times that had grown to slow the whole team down.",
      "Coordinating a SwiftUI migration across teams with different appetites for the new framework.",
    ],
    results: [
      "Cut incremental build times significantly by restructuring the app into local Swift packages.",
      "Delivered an Objective-C to Swift migration plan later adopted as the template for sibling brand apps.",
    ],
    lessons: [
      "Modularity pays for itself fastest when package boundaries match team boundaries, not just architectural layers.",
      "The safest way to migrate a large legacy codebase is the boring way: small steps, strong tests, and shipping the whole time.",
    ],
  },
  {
    slug: "nordlocker",
    title: "NordLocker — Encrypted Cloud Storage",
    role: "Senior iOS Engineer",
    company: "Nord Security",
    year: "2021 — 2023",
    summary:
      "The iOS client for an end-to-end encrypted cloud storage product, covering client-side AES-256 encryption, sync, and a StoreKit 2 subscription system.",
    tags: ["AES-256", "CryptoKit", "StoreKit 2", "Encryption", "Sync"],
    problem:
      "NordLocker's promise to users was zero-knowledge storage — the company itself should never be able to read a user's files. That promise had to hold up not just in marketing copy but in the actual client implementation, while still delivering the sync reliability and subscription experience users expect from a mainstream cloud product.",
    solution:
      "I built the iOS encryption layer using CryptoKit to encrypt files with AES-256 before they ever left the device, with keys derived and managed client-side. On top of that, I built sync and conflict-resolution logic that could operate correctly on encrypted blobs without the server ever needing plaintext, and a StoreKit 2 subscription system covering trials, entitlements, and family sharing.",
    architecture:
      "The client is layered into an encryption module (key derivation, AES-256 file encryption via CryptoKit), a sync engine that tracks file state and resolves conflicts using encrypted metadata, and a StoreKit 2 entitlement layer that gates features locally with a design biased toward availability — a lapsed receipt check fails toward access, not lockout, until it can be safely reconciled.",
    decisions: [
      {
        title: "Client-side encryption, no exceptions",
        body: "Every file is encrypted before it leaves the device, meaning the server architecture itself was never a variable in whether the zero-knowledge promise held — it simply never had access to plaintext or usable keys.",
      },
      {
        title: "Fail-safe entitlement checks",
        body: "StoreKit 2 receipt validation is designed to favor the user during ambiguous states like poor connectivity, because losing access to your own encrypted files due to a subscription check timing out is a worse failure than a brief grace period.",
      },
    ],
    challenges: [
      "Implementing correct, auditable client-side AES-256 encryption for a security-critical consumer product.",
      "Resolving sync conflicts on encrypted data without server-side visibility into file contents.",
      "Handling StoreKit 2 edge cases — trials, family sharing, refunds — without support tickets becoming the safety net.",
    ],
    results: [
      "Shipped the iOS encryption layer underpinning NordLocker's zero-knowledge storage guarantee.",
      "Reduced subscription-related support tickets by hardening entitlement handling around trials and family sharing.",
    ],
    lessons: [
      "Security-critical code deserves a different review bar — more eyes, more tests, more paranoia about edge cases than typical feature work.",
      "Trust-based products live or die on how gracefully they handle failure states, not just the happy path.",
    ],
  },
  {
    slug: "puhutv",
    title: "PuhuTV — Streaming Platform",
    role: "iOS Engineer",
    company: "VNGRS",
    year: "2012 — 2016",
    summary:
      "The iOS client for one of Turkey's largest streaming platforms, migrated from Objective-C to Swift and from UIKit to SwiftUI while serving millions of active viewers.",
    tags: ["Swift", "SwiftUI Migration", "AVKit", "Scale"],
    problem:
      "PuhuTV's iOS app had scaled from a small Objective-C codebase into a high-traffic product used by millions, and the codebase's architecture hadn't scaled with it. Crash rates crept up during growth spikes, build times slowed the team down, and the UI layer was increasingly expensive to change safely.",
    solution:
      "I worked on migrating the codebase to Swift incrementally, and later led a screen-by-screen migration from UIKit to SwiftUI, prioritized around the screens where iteration speed mattered most. In parallel, I helped restructure the app into modular Swift packages so a growing engineering team could work in parallel without stepping on each other.",
    architecture:
      "The playback and browse experiences sit on top of AVKit for media playback and a modular package structure separating catalog browsing, playback, and account management — each independently testable, with shared design-system components consumed as their own package.",
    decisions: [
      {
        title: "Migrate screens in order of change frequency, not risk",
        body: "Rather than starting the SwiftUI migration with the riskiest screens, I prioritized the screens the team touched most often — compounding velocity gains earlier in the migration.",
      },
      {
        title: "Modular packages as the team scaled",
        body: "As the engineering team grew, package boundaries gave new hires an obvious, contained area to own — reducing onboarding time and merge conflicts simultaneously.",
      },
    ],
    challenges: [
      "Maintaining stability and crash-free sessions for a high-traffic app during a period of rapid user growth.",
      "Migrating Objective-C to Swift without disrupting an existing, large user base's experience.",
      "Keeping a growing engineering team productive in a single, shared iOS codebase.",
    ],
    results: [
      "Improved crash-free session rate during a period of rapid user growth.",
      "Established modular architecture patterns later adopted across the company's other consumer apps.",
    ],
    lessons: [
      "Scale exposes architectural debt faster than almost anything else — the codebase that worked at one order of magnitude of users often doesn't at the next.",
      "Sequencing a migration around team velocity, not just technical risk, made the project sustainable across a full year of incremental work.",
    ],
  },
];
