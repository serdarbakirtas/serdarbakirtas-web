export type SkillCategory = {
  category: string;
  description: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Apple Platforms",
    description: "Native product development across the Apple ecosystem.",
    items: ["iOS", "iPadOS", "macOS", "watchOS fundamentals", "App Store operations"],
  },
  {
    category: "Swift Ecosystem",
    description: "The language and frameworks I build with day to day.",
    items: ["Swift", "SwiftUI", "SwiftData", "Combine", "Swift Concurrency"],
  },
  {
    category: "Architecture",
    description: "Structuring codebases so they stay maintainable as they grow.",
    items: ["Modular Swift packages", "Clean Architecture", "MVVM", "Dependency injection"],
  },
  {
    category: "Computer Vision",
    description: "Turning camera and sensor input into usable, model-ready data.",
    items: ["OpenCV", "Core Image", "Image preprocessing", "Feature extraction"],
  },
  {
    category: "AI Integration",
    description: "Bringing trained models and LLMs into production Apple apps.",
    items: ["CoreML", "On-device inference", "PyTorch-to-Swift translation", "LLM-powered features"],
  },
  {
    category: "Developer Tools",
    description: "The everyday tooling behind a smooth engineering workflow.",
    items: ["Xcode", "Swift Package Manager", "Instruments", "Git"],
  },
  {
    category: "Testing",
    description: "Confidence that ships with the code, not after it.",
    items: ["XCTest", "Snapshot testing", "Characterization tests", "UI testing"],
  },
  {
    category: "CI/CD",
    description: "Automating the path from commit to App Store.",
    items: ["Fastlane", "GitHub Actions", "Xcode Cloud", "TestFlight automation"],
  },
  {
    category: "Networking",
    description: "Secure, reliable communication between device and server.",
    items: ["mTLS", "URLSession", "REST APIs", "Offline-first sync"],
  },
  {
    category: "Privacy",
    description: "Engineering practices that make privacy a default, not a setting.",
    items: ["AES-256 encryption", "CryptoKit", "On-device processing", "Data minimization"],
  },
];
