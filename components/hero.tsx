"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
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
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-radial-fade"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-panel px-4 py-1.5 shadow-neu-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-green" />
            <span className="font-mono text-xs text-fg-muted">
              v2.0.0 — zero external dependencies
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl md:text-6xl"
          >
            Ten recon modules.
            <br />
            <span className="text-accent-green">One command,</span>{" "}
            <span className="text-accent-blue">zero</span>{" "}
            <span className="text-accent-violet">dependencies.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-fg-muted sm:text-lg"
          >
            neoNet is a cross-platform CLI toolkit for network reconnaissance
            and security analysis — nmap scanning, DNS, WHOIS, subdomain
            enumeration, SSL inspection, and more, in one pure-stdlib Python
            file built for pentesters and network admins.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#cli">
                Get started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://github.com/Panda-0x01/neoNet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                View documentation
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
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          <div
            className="pointer-events-none absolute -inset-6 -z-10 animate-float rounded-[2rem] bg-accent-green/10 blur-3xl"
            aria-hidden="true"
          />
          <HeroScan />
        </motion.div>
      </div>
    </section>
  );
}
