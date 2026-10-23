"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#features", label: "Modules" },
  { href: "#cli", label: "CLI" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container flex h-14 items-center justify-between"
      >
        <a href="#top" className="flex items-center gap-2 text-sm font-medium">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card overflow-hidden">
            <Image src="/neonet.png" alt="neoNet logo" width={24} height={24} className="object-contain" />
          </span>
          <span className="text-foreground">neo</span>
          <span className="text-accent-green">Net</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button size="sm" variant="ghost" asChild>
            <a href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#cli">Get Started</a>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2">
              <Button size="sm" variant="outline" asChild>
                <a href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                  GitHub
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#cli" onClick={() => setOpen(false)}>
                  Get Started
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
