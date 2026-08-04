export type ExperienceEntry = {
  slug: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  overview: string;
  challenges: string[];
  technologies: string[];
  impact: string[];
};

export const experience: ExperienceEntry[] = [
  {
    slug: "magnosco",
    company: "Magnosco",
    role: "Senior Apple Platform Engineer",
    location: "Berlin, Germany",
    start: "2023",
    end: "Present",
    overview:
      "Magnosco builds computer-vision-assisted diagnostic tools for skin cancer detection, working closely with dermatologists and imaging scientists. My role is bringing their AI research into a production Apple application — not training the models, but turning a research-grade imaging device into a product a clinician can trust, from the Wi-Fi connection through image preprocessing, on-device inference, and secure transmission of results.",
    challenges: [
      "Integrating a dermatological imaging device over a device-hosted Wi-Fi network with no internet path, handling reconnection and firmware drift gracefully.",
      "Deploying and version-managing multiple CoreML models on-device with strict latency and thermal budgets.",
      "Building an OpenCV-based preprocessing pipeline that turns raw sensor output into consistent, model-ready imagery.",
      "Redesigning a memory-heavy computer vision workflow on iPad with actor-based concurrency, an intelligent caching strategy, and conditional model execution — reducing peak memory from roughly 4GB to 1.2GB and eliminating the crashes that came with it.",
      "Securing every request between the app and backend with mutual TLS, including on-device certificate lifecycle management.",
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "Swift Concurrency (Actors)",
      "CoreML",
      "OpenCV",
      "mTLS",
      "Combine",
      "XCTest",
    ],
    impact: [
      "Translated PyTorch model logic into efficient, production-ready Swift implementations used in a clinical setting.",
      "Cut peak memory usage on iPad from roughly 4GB to 1.2GB and eliminated device crashes through actor-based concurrency and intelligent caching.",
      "Reduced end-to-end capture-to-result time by streamlining the imaging and preprocessing pipeline.",
      "Established the app's networking and device-pairing layer as the reliability foundation the rest of the product builds on.",
    ],
  },
  {
    slug: "nord-security",
    company: "Nord Security",
    role: "Senior iOS Engineer",
    location: "Remote (Vilnius, Lithuania)",
    start: "2021",
    end: "2023",
    overview:
      "At Nord Security I worked on the iOS client for NordLocker, an end-to-end encrypted cloud storage product. My focus was the intersection of cryptography, sync reliability, and a subscription business model — making security invisible to the person just trying to protect their files.",
    challenges: [
      "Implementing client-side AES-256 encryption so files were encrypted before they ever left the device.",
      "Designing a StoreKit 2 subscription flow — trials, entitlements, receipt validation — that failed safe under poor connectivity.",
      "Building sync and conflict-resolution logic for encrypted files across multiple devices without a plaintext-aware server.",
    ],
    technologies: [
      "Swift",
      "UIKit",
      "SwiftUI",
      "StoreKit 2",
      "AES-256",
      "CryptoKit",
    ],
    impact: [
      "Shipped the iOS encryption layer that let NordLocker guarantee zero-knowledge storage to its users.",
      "Cut subscription-related support tickets by hardening entitlement handling around edge cases in trials and family sharing.",
    ],
  },
  {
    slug: "diconium",
    company: "Diconium",
    role: "iOS Engineer → Senior iOS Engineer",
    location: "Stuttgart, Germany (Remote)",
    start: "2018",
    end: "2021",
    overview:
      "Diconium builds digital products for Volkswagen Group. I worked on the companion app connecting drivers to their vehicles — remote status, trip data, and in-car feature configuration — inside a large, long-lived codebase shared across multiple teams and brands.",
    challenges: [
      "Migrating a large, actively-shipping Objective-C codebase to Swift incrementally, without freezing feature delivery.",
      "Breaking a monolithic app target into modular Swift packages owned by independent feature teams.",
      "Leading a large-scale, screen-by-screen SwiftUI migration while keeping release timelines intact.",
    ],
    technologies: [
      "Swift",
      "Objective-C",
      "SwiftUI",
      "Swift Package Manager",
      "Combine",
      "CI/CD",
    ],
    impact: [
      "Cut incremental build times significantly by restructuring the app into local Swift packages.",
      "Delivered the Objective-C to Swift migration plan later adopted as the template for sibling brand apps.",
    ],
  },
  {
    slug: "oculavis",
    company: "Oculavis",
    role: "iOS Engineer",
    location: "Aachen, Germany",
    start: "2016",
    end: "2018",
    overview:
      "Oculavis builds remote assistance software for industrial machinery, connecting factory-floor technicians with remote experts through live video and camera-based annotation. I built the iOS and iPad client used on the shop floor, where reliability under poor connectivity mattered more than almost anything else.",
    challenges: [
      "Building real-time computer vision pipelines for camera-based annotation and issue detection on industrial equipment.",
      "Scaling a growing codebase into modular Swift packages as the product expanded across customer verticals.",
      "Designing for rugged, shared iPads used on noisy, low-connectivity factory floors.",
    ],
    technologies: ["Swift", "AVFoundation", "OpenCV", "Core Image", "WebRTC"],
    impact: [
      "Shipped the camera annotation layer that became a core differentiator of the product for industrial customers.",
      "Reduced average issue-resolution time for field technicians through faster, more reliable remote sessions.",
    ],
  },
  {
    slug: "vngrs",
    company: "VNGRS",
    role: "iOS Engineer",
    location: "Istanbul, Turkey",
    start: "2012",
    end: "2016",
    overview:
      "VNGRS is a technology consultancy behind some of Turkey's largest digital products, including the streaming platform PuhuTV. I worked on the iOS client for a fast-growing, high-traffic media app, where scale and legacy code were the defining constraints.",
    challenges: [
      "Migrating a high-traffic streaming app from Objective-C to Swift without disrupting a large existing user base.",
      "Leading an incremental UIKit-to-SwiftUI migration for a product used by millions of viewers.",
      "Scaling the codebase into modular Swift packages as the engineering team grew.",
    ],
    technologies: ["Swift", "Objective-C", "SwiftUI", "AVKit", "Core Data"],
    impact: [
      "Improved app stability and crash-free session rate during a period of rapid user growth.",
      "Established modular architecture patterns later adopted across the company's other consumer apps.",
    ],
  },
  {
    slug: "creative-agencies",
    company: "Creative Agencies",
    role: "Interaction Designer",
    location: "Istanbul, Turkey",
    start: "2009",
    end: "2012",
    overview:
      "I began my career as an interaction designer, creating award-winning digital experiences and campaign microsites for international brands. This is where I learned to obsess over the small interaction details that later shaped how I approach engineering — motion, feedback, and the feeling of quality.",
    challenges: [
      "Designing interactive digital campaigns recognized at international award shows under tight production timelines.",
      "Prototyping and specifying interaction details precisely enough for developers to implement faithfully.",
    ],
    technologies: ["Flash/ActionScript", "HTML/CSS", "Prototyping", "Motion Design"],
    impact: [
      "Delivered multiple award-recognized interactive campaigns for international brands.",
      "Built the design sensibility that still shapes every product decision I make as an engineer today.",
    ],
  },
];
