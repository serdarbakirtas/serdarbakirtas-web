"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Scroll
      </span>
      <div className="h-9 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
    </motion.div>
  );
}
