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
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "momena",
    title: "Momena",
    role: "Founder, Designer & Engineer",
    company: "Independent",
    year: "2021 — Present",
    summary:
      "A privacy-first personal application ecosystem I design, build, and ship entirely by myself — from product design and SwiftUI development to StoreKit 2, encryption, marketing, and App Store operations.",
    tags: ["SwiftUI", "SwiftData", "Kotlin Multiplatform", "StoreKit 2", "AES-256", "LLM"],
    problem:
      "Most personal data tools ask users to trust a company they'll never meet with their most private information, in exchange for features that could just as easily run on-device. I wanted to prove that a small, independent team — one person — could build something people trust with sensitive personal data, without the surveillance-driven business model that usually funds this category.",
    solution:
      "Momena is a privacy-first application ecosystem built around a simple rule: data stays on the user's device unless encryption makes leaving it safe. Core functionality runs entirely offline using SwiftData for local persistence, with AES-256 encryption protecting anything that syncs across a user's own devices. Recent LLM-powered features run through the same privacy lens — carefully scoped prompts, no retained conversation history server-side, and clear, honest copy about what leaves the device and why.",
    architecture:
      "The app is built in SwiftUI on top of a SwiftData persistence layer, with a Kotlin Multiplatform module sharing core business logic where a second platform target made sense. StoreKit 2 handles subscriptions end-to-end, including entitlement checks that fail toward giving users access rather than locking them out during a network hiccup. Encryption is implemented with CryptoKit, keyed per-device and never transmitted in a form the backend could use.",
    decisions: [
      {
        title: "SwiftData over a custom Core Data stack",
        body: "SwiftData's schema migrations and Swift-native model definitions let me move faster as a solo developer, at the cost of working around a few early rough edges — a trade I'd make again for a project this size.",
      },
      {
        title: "Kotlin Multiplatform for shared logic, not shared UI",
        body: "I kept UI fully native on each platform and used KMP only for business logic that had no business being duplicated — validation rules, encryption helpers, and sync conflict resolution.",
      },
      {
        title: "LLM features scoped narrowly, by default",
        body: "Rather than bolting on a general-purpose assistant, I designed each AI-powered feature around a specific, well-understood task, which made it possible to reason about — and to explain to users — exactly what data a prompt actually contains.",
      },
    ],
    challenges: [
      "Owning the entire product surface — design, engineering, App Store operations, support, and marketing — without a team to distribute the load across.",
      "Designing encryption and sync that a non-technical user never has to think about, but that holds up under real scrutiny.",
      "Writing StoreKit 2 entitlement logic that never punishes a paying user for being offline at the wrong moment.",
    ],
    lessons: [
      "Constraints are a feature: building alone forced ruthless prioritization that the product is better for.",
      "Privacy-first isn't a marketing line if it changes real architecture decisions — it has to show up in how data is modeled, not just in a policy page.",
      "Shipping the marketing site, documentation, and support flow is as much part of 'the product' as the Swift code.",
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
    tags: ["CoreML", "OpenCV", "mTLS", "Medical Imaging", "Swift"],
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
    ],
    challenges: [
      "Translating PyTorch model logic into efficient, numerically consistent Swift/CoreML implementations.",
      "Handling device pairing and reconnection gracefully on a Wi-Fi network with no internet path.",
      "Meeting the accuracy and consistency bar required for a clinical support tool, not just a demo.",
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
    lessons: [
      "Scale exposes architectural debt faster than almost anything else — the codebase that worked at one order of magnitude of users often doesn't at the next.",
      "Sequencing a migration around team velocity, not just technical risk, made the project sustainable across a full year of incremental work.",
    ],
  },
];
