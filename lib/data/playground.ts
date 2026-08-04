export type PlaygroundItem = {
  title: string;
  category: string;
  description: string;
  status: "Exploring" | "Shipped" | "Notes";
};

export const playgroundItems: PlaygroundItem[] = [
  {
    title: "Fluid SwiftUI transitions",
    category: "SwiftUI Components",
    description:
      "A small library of reusable transition and matched-geometry modifiers for building Linear-style shared-element animations in SwiftUI without fighting the layout system.",
    status: "Shipped",
  },
  {
    title: "Spring-based gesture playground",
    category: "Animations",
    description:
      "Experiments with SwiftUI's spring physics to prototype the kind of tactile, interruptible gestures Apple's own apps are known for — dragging, snapping, and rubber-banding that feels right without a design spec.",
    status: "Exploring",
  },
  {
    title: "visionOS spatial UI sketches",
    category: "visionOS",
    description:
      "Early prototypes exploring how a privacy-focused, data-dense app might translate into a spatial interface — depth as hierarchy rather than decoration.",
    status: "Exploring",
  },
  {
    title: "swift-privacy-toolkit",
    category: "Reusable Libraries",
    description:
      "A small open-source Swift package wrapping common CryptoKit patterns — key derivation, file encryption helpers, and secure enclave storage — into an API I'd want as a consumer.",
    status: "Shipped",
  },
  {
    title: "on-device-coreml-bench",
    category: "Open Source",
    description:
      "A benchmarking harness for comparing CoreML model variants (quantization, compute units, batching) across real devices, born out of tuning inference for Magnosco's imaging pipeline.",
    status: "Shipped",
  },
  {
    title: "WWDC notes archive",
    category: "WWDC Notes",
    description:
      "Yearly, distilled notes on the sessions that actually changed how I build — Swift Concurrency, SwiftData, and the slow migration toward a more declarative Apple platform stack.",
    status: "Notes",
  },
  {
    title: "Foundation Models on-device experiments",
    category: "Ideas",
    description:
      "Early sketches for using Apple's on-device foundation models for narrow, privacy-preserving assistive features in Momena — summarization and light reasoning with nothing leaving the device.",
    status: "Exploring",
  },
  {
    title: "Swift Macros for boilerplate-free networking",
    category: "Experiments",
    description:
      "A set of Swift macros generating typed API clients from lightweight endpoint declarations, aimed at cutting the ceremony around URLSession without hiding what the code actually does.",
    status: "Exploring",
  },
];
