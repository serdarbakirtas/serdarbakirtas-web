export type Principle = {
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    title: "Simple over clever.",
    description:
      "The best solution is usually the one a teammate can understand six months from now without a walkthrough. I optimize for clarity first and reach for abstraction only when the codebase has earned it — not before.",
  },
  {
    title: "Privacy by default.",
    description:
      "Data you never collect can never leak. I design systems that keep sensitive information on-device wherever possible, encrypt what has to leave it, and treat every permission prompt as a promise to the person granting it.",
  },
  {
    title: "Performance matters.",
    description:
      "Speed is a feature, not an afterthought. Jank, cold-start delay, and dropped frames erode trust faster than a missing button — so I profile early, budget for the worst device in the fleet, and treat regressions as bugs.",
  },
  {
    title: "Accessibility is essential.",
    description:
      "A product that only works for some of its users isn't finished. VoiceOver, Dynamic Type, and reduced motion aren't edge cases to me — they're part of the same craft as the pixel-perfect layout.",
  },
  {
    title: "Maintainability wins.",
    description:
      "Software is read far more often than it's written. I favor modular architecture, honest naming, and tests that document intent, because the team maintaining this code in three years deserves the same care as the user opening the app today.",
  },
  {
    title: "Products over technologies.",
    description:
      "Swift, CoreML, and SwiftData are tools in service of an outcome — not the outcome itself. I choose technology based on what a product and its users actually need, and I'm equally comfortable saying no to something fashionable.",
  },
  {
    title: "User trust is earned.",
    description:
      "Every crash, dark pattern, and broken promise spends down trust that took months to build. I treat reliability, honesty in UI copy, and respect for a user's time and data as non-negotiable, not nice-to-haves.",
  },
  {
    title: "Technology should disappear behind great experiences.",
    description:
      "The best compliment a product can get is that it just works. My job as an engineer is to make the machine learning model, the encryption layer, and the sync engine invisible — so what's left is an experience that feels obvious in hindsight.",
  },
];
