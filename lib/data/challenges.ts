export type Challenge = {
  title: string;
  context: string;
  description: string;
  tags: string[];
};

export const challenges: Challenge[] = [
  {
    title: "Integrating medical devices over Wi-Fi",
    context: "Magnosco",
    description:
      "Connected a dermatological imaging device to iOS over a device-hosted Wi-Fi network with no internet path, handling flaky handshakes, firmware version drift, and the need for a connection that a clinician could trust during a live examination.",
    tags: ["Networking", "Medical Devices", "iOS"],
  },
  {
    title: "Deploying multiple CoreML models in production",
    context: "Magnosco",
    description:
      "Shipped and version-managed several CoreML models on-device, each with different input pipelines and performance envelopes, while keeping app size, thermal impact, and inference latency within limits acceptable for clinical use.",
    tags: ["CoreML", "On-device ML", "Performance"],
  },
  {
    title: "Migrating Objective-C to Swift",
    context: "VNGRS · Diconium",
    description:
      "Moved large, actively-shipping codebases from Objective-C to Swift incrementally, module by module, without freezing feature work or introducing regressions — using interop bridging and characterization tests as a safety net.",
    tags: ["Migration", "Swift", "Architecture"],
  },
  {
    title: "Scaling modular Swift packages",
    context: "Diconium · Oculavis",
    description:
      "Broke monolithic app targets into local Swift packages organized around features and layers, cutting incremental build times dramatically and letting teams own and test their modules independently.",
    tags: ["Swift Package Manager", "Architecture", "Build Systems"],
  },
  {
    title: "Building encrypted cloud storage",
    context: "Nord Security",
    description:
      "Implemented client-side AES-256 encryption for a cross-platform cloud storage product, ensuring files were encrypted before they ever left the device and that the platform itself never held a usable key.",
    tags: ["Encryption", "Cloud Storage", "Security"],
  },
  {
    title: "Designing privacy-first applications",
    context: "Momena · Nord Security",
    description:
      "Designed and shipped consumer products where privacy was the starting constraint, not a compliance checkbox — minimizing data collection, keeping processing on-device, and writing plain-language explanations for every permission requested.",
    tags: ["Privacy", "Product Design", "SwiftData"],
  },
  {
    title: "StoreKit 2 subscriptions",
    context: "Momena",
    description:
      "Built a subscription system on StoreKit 2 end-to-end — entitlements, trials, family sharing, and receipt validation — designed to fail safe so a network hiccup never locks a paying user out of their own data.",
    tags: ["StoreKit 2", "Monetization", "Swift"],
  },
  {
    title: "Computer vision pipelines",
    context: "Magnosco · Oculavis",
    description:
      "Built OpenCV-based image preprocessing and feature extraction pipelines that turn raw camera or device sensor output into clean, model-ready input, tuned to run in real time on-device.",
    tags: ["OpenCV", "Computer Vision", "Image Processing"],
  },
  {
    title: "Medical imaging",
    context: "Magnosco",
    description:
      "Worked alongside scientists translating dermatological imaging research into a production pipeline, balancing image fidelity, patient privacy, and the accuracy requirements of a diagnostic support tool.",
    tags: ["Medical Imaging", "CoreML", "Collaboration"],
  },
  {
    title: "mTLS networking",
    context: "Magnosco",
    description:
      "Secured device-to-server communication for a medical product using mutual TLS, managing certificate provisioning and rotation on-device so every request was authenticated in both directions.",
    tags: ["mTLS", "Security", "Networking"],
  },
  {
    title: "Large-scale SwiftUI migration",
    context: "VNGRS",
    description:
      "Led the incremental migration of a high-traffic streaming app's UI layer from UIKit to SwiftUI, screen by screen, keeping performance and App Store review timelines intact for a product used by millions.",
    tags: ["SwiftUI", "UIKit", "Migration"],
  },
];
