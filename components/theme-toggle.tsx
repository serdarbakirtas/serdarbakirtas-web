"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { track } from "@/lib/telemetry";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => {
        const next = resolvedTheme === "dark" ? "light" : "dark";
        track("theme_change", { theme: next });
        setTheme(next);
      }}
      className="relative text-muted-foreground hover:text-foreground"
    >
      <Sun className="size-[18px] scale-100 dark:scale-0" />
      <Moon className="absolute size-[18px] scale-0 dark:scale-100" />
    </Button>
  );
}
