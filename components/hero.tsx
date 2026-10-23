"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/countdown";
import { HeroScan } from "@/components/hero-scan";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-24 sm:pt-32 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.15),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-2.5 py-1 text-xs backdrop-blur-sm"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-accent-green/10 px-2 py-0.5 text-accent-green">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
              New
            </span>
            <span className="text-muted-foreground">v2.0.0 now available</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Network reconnaissance
            <br />
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              in one CLI
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            A production-ready, cross-platform CLI toolkit for network
            reconnaissance and security analysis. Nmap, DNS, WHOIS, subdomains,
            SSL inspection and more — zero external dependencies.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col items-center gap-2 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#cli">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#features">
                View Modules
              </a>
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10"
          >
            <Countdown />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div
            className="pointer-events-none absolute -inset-x-40 -top-40 -z-10 h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12),transparent_70%)] blur-3xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-lg border border-border bg-card/80 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="ml-4 flex-1 text-center text-xs text-muted-foreground">
                neonet — terminal
              </div>
            </div>
            <HeroScan />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
