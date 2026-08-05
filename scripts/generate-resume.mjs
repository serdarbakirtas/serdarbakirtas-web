// Generates public/resume.pdf — a single-column, plain-text, ATS-friendly resume.
// No tables, columns, images, or embedded icons; base-14 Helvetica only.
// Run with: node scripts/generate-resume.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "resume.pdf");

const contact = {
  name: "Serdar Bakirtas",
  title: "Senior Apple Platform Engineer",
  location: "Berlin, Germany",
  email: "serdarbakirtas@pm.me",
  linkedin: "linkedin.com/in/serdarbakirtas",
  github: "github.com/serdarbakirtas",
  site: "serdarbakirtas.com",
};

const summary =
  "Senior Apple Platform Engineer with 16+ years of experience building iOS, iPadOS, and macOS applications. Specializes in bringing computer vision and AI research into production-quality Apple products, with a strong focus on privacy-first architecture and on-device processing. Founded and independently shipped Momena, a complete privacy-first consumer application.";

const skills = [
  ["Languages & UI", "Swift, SwiftUI, UIKit, Objective-C, SwiftData, Combine, Swift Concurrency"],
  ["AI & Computer Vision", "CoreML, OpenCV, On-device Inference, PyTorch Collaboration, LLM Integration"],
  ["Architecture", "Modular Swift Packages, Clean Architecture, MVVM, Dependency Injection"],
  ["Security & Privacy", "mTLS, CryptoKit, AES-256 Encryption, Privacy-first Design"],
  ["Platforms & Tools", "iOS, iPadOS, macOS, Xcode, Instruments, Git, Fastlane, GitHub Actions"],
];

const experience = [
  {
    company: "Magnosco",
    role: "Senior Apple Platform Engineer",
    location: "Berlin, Germany",
    dates: "2023 – Present",
    bullets: [
      "Own the iOS application connecting a dermatological imaging device to an on-device CoreML diagnostic pipeline, translating PyTorch research models into production Swift/CoreML implementations.",
      "Redesigned a memory-heavy computer vision workflow on iPad using actor-based concurrency, intelligent caching, and conditional model execution, cutting peak memory from ~4GB to 1.2GB and eliminating crashes.",
      "Implemented mutual TLS (mTLS) networking with full on-device certificate lifecycle management for secure medical device communication.",
      "Built OpenCV-based image preprocessing pipelines and integrated multiple versioned CoreML models under strict latency and thermal budgets.",
    ],
  },
  {
    company: "Nord Security",
    role: "Senior iOS Engineer",
    location: "Berlin, Germany",
    dates: "2021 – 2023",
    bullets: [
      "Built the iOS encryption layer for NordLocker, implementing client-side AES-256 encryption (CryptoKit) so files were encrypted before ever leaving the device.",
      "Designed a StoreKit 2 subscription system (trials, entitlements, family sharing) with fail-safe receipt validation under poor connectivity.",
      "Built sync and conflict-resolution logic operating on encrypted data without server-side plaintext access.",
    ],
  },
  {
    company: "Diconium (for Volkswagen Group)",
    role: "iOS Engineer -> Senior iOS Engineer",
    location: "Berlin, Germany",
    dates: "2018 – 2021",
    bullets: [
      "Led the incremental migration of Volkswagen Group's connected owner app from Objective-C to Swift and from UIKit to SwiftUI without pausing feature delivery.",
      "Restructured a monolithic app target into modular Swift packages by feature domain, significantly cutting incremental build times.",
      "Delivered a migration plan later adopted as the template for sibling brand apps.",
    ],
  },
  {
    company: "Oculavis",
    role: "iOS Engineer",
    location: "Aachen, Germany",
    dates: "2016 – 2018",
    bullets: [
      "Built the iOS/iPad client for an industrial remote-assistance product, including real-time camera-based annotation for equipment on factory floors.",
      "Scaled the codebase into modular Swift packages as the product expanded across customer verticals.",
      "Reduced average issue-resolution time for field technicians through faster, more reliable remote sessions.",
    ],
  },
  {
    company: "VNGRS",
    role: "iOS Engineer",
    location: "Istanbul, Turkey",
    dates: "2012 – 2016",
    bullets: [
      "Migrated PuhuTV's iOS client, one of Turkey's largest streaming platforms, from Objective-C to Swift and led a UIKit-to-SwiftUI migration for a product used by millions.",
      "Restructured the app into modular Swift packages as the engineering team scaled.",
      "Improved crash-free session rate during a period of rapid user growth.",
    ],
  },
  {
    company: "Creative Agencies",
    role: "Interaction Designer",
    location: "Istanbul, Turkey",
    dates: "2009 – 2012",
    bullets: [
      "Designed award-recognized interactive digital campaigns for international brands, focusing on motion, feedback, and interaction detail.",
      "Prototyped and specified interaction behavior precisely enough for developers to implement faithfully.",
    ],
  },
];

const projects = [
  {
    name: "Momena",
    role: "Founder, Designer & Engineer",
    dates: "2021 – Present",
    bullets: [
      "Designed, built, and shipped a privacy-first consumer app entirely solo: SwiftUI, SwiftData, CloudKit sync, StoreKit 2, AES-256/CryptoKit encryption, WidgetKit, ActivityKit, and weekly AI-powered insights.",
      "Operated without a traditional backend by building entirely on Apple's ecosystem (CloudKit), removing server infrastructure and its associated privacy and operational risk.",
      "Owns the complete product lifecycle: UX design (Figma), engineering, App Store operations, and user support.",
    ],
  },
];

const PAGE_MARGIN = 54;
const doc = new PDFDocument({
  size: "A4",
  margins: {
    top: PAGE_MARGIN,
    bottom: PAGE_MARGIN,
    left: PAGE_MARGIN,
    right: PAGE_MARGIN,
  },
  info: {
    Title: `${contact.name} — Resume`,
    Author: contact.name,
    Subject: contact.title,
  },
});

fs.mkdirSync(path.dirname(outPath), { recursive: true });
doc.pipe(fs.createWriteStream(outPath));

const RULE_COLOR = "#cccccc";
const MUTED = "#444444";
const TEXT = "#111111";

function sectionHeading(text) {
  doc.moveDown(0.9);
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(TEXT)
    .text(text.toUpperCase(), { characterSpacing: 0.6 });
  const y = doc.y + 2;
  doc
    .moveTo(doc.page.margins.left, y)
    .lineTo(doc.page.width - doc.page.margins.right, y)
    .lineWidth(0.75)
    .strokeColor(RULE_COLOR)
    .stroke();
  doc.moveDown(0.6);
}

function bulletList(items) {
  items.forEach((item) => {
    doc
      .font("Helvetica")
      .fontSize(9.5)
      .fillColor(TEXT)
      .text(`-  ${item}`, {
        indent: 0,
        lineGap: 1.5,
      });
  });
}

// Header
doc.font("Helvetica-Bold").fontSize(20).fillColor(TEXT).text(contact.name);
doc.font("Helvetica").fontSize(12).fillColor(MUTED).text(contact.title);
doc.moveDown(0.3);
doc
  .font("Helvetica")
  .fontSize(9.5)
  .fillColor(MUTED)
  .text(
    `${contact.location}  |  ${contact.email}  |  ${contact.linkedin}  |  ${contact.github}  |  ${contact.site}`
  );

// Summary
sectionHeading("Summary");
doc.font("Helvetica").fontSize(9.5).fillColor(TEXT).text(summary, { lineGap: 1.5 });

// Skills
sectionHeading("Skills");
skills.forEach(([label, value]) => {
  doc
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .fillColor(TEXT)
    .text(`${label}: `, { continued: true })
    .font("Helvetica")
    .fillColor(TEXT)
    .text(value, { lineGap: 1.5 });
});

// Experience
sectionHeading("Experience");
experience.forEach((job, index) => {
  if (index > 0) doc.moveDown(0.5);
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(TEXT)
    .text(`${job.role} — ${job.company}`, { continued: true })
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor(MUTED)
    .text(`   ${job.dates}`, { align: "left" });
  doc.font("Helvetica-Oblique").fontSize(9.5).fillColor(MUTED).text(job.location);
  doc.moveDown(0.25);
  bulletList(job.bullets);
});

// Selected Projects
sectionHeading("Selected Projects");
projects.forEach((project) => {
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(TEXT)
    .text(`${project.name} — ${project.role}`, { continued: true })
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor(MUTED)
    .text(`   ${project.dates}`);
  doc.moveDown(0.25);
  bulletList(project.bullets);
});

doc.end();

console.log(`Resume written to ${outPath}`);
