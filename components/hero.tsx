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
    <section id="top" className="relative overflow-hidden pb-20 pt-20 sm:pt-28 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-accent-green/5 to-transparent"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              v2.0.0 — Zero external dependencies
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Network reconnaissance,
            <br />
            <span className="bg-gradient-to-r from-accent-green to-emerald-600 bg-clip-text text-transparent">
              simplified
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            neoNet is a production-ready CLI toolkit for network reconnaissance
            and security analysis. Ten powerful modules, one command — built for
            pentesters and network admins who value speed and simplicity.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#cli">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12"
          >
            <Countdown />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div
            className="pointer-events-none absolute -inset-x-20 -top-20 -z-10 h-[400px] bg-gradient-radial from-accent-green/10 via-accent-green/5 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div className="rounded-xl border border-border bg-card shadow-xl overflow-hidden">
            <HeroScan />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
