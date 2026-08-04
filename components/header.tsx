"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[100rem] items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="shrink-0 font-mono text-sm font-medium tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          {siteConfig.initials}
          <span className="text-muted-foreground">/serdar</span>
        </Link>

        <nav className="hidden items-center xl:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button asChild size="sm" className="hidden xl:inline-flex">
            <Link href="/contact">Get in touch</Link>
          </Button>

          <div className="xl:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <nav className="mt-8 flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                        (pathname === item.href ||
                          pathname.startsWith(`${item.href}/`)) &&
                          "bg-secondary text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex items-center justify-between border-t border-border pt-5">
                  <ThemeToggle />
                  <Button asChild size="sm" onClick={() => setOpen(false)}>
                    <Link href="/contact">Get in touch</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
