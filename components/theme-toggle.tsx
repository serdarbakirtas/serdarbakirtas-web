"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative text-muted-foreground hover:text-foreground"
    >
      <Sun className="size-[18px] scale-100 dark:scale-0" />
      <Moon className="absolute size-[18px] scale-0 dark:scale-100" />
    </Button>
  );
}
