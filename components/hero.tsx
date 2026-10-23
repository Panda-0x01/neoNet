"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pt-48">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.18),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
            </span>
            <span>Zero dependencies • Pure Python</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Network Recon
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Built for Speed
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            One CLI to scan, enumerate, and inspect your network. From Nmap and
            DNS to SSL and subdomains — get actionable results in seconds.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col items-center gap-2 sm:flex-row"
          >
            <Button size="lg" className="rounded-full px-6 shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_0_60px_-20px_rgba(34,211,238,0.6)]" asChild>
              <a href="#cli">
                Install now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
              <a href="https://github.com/Panda-0x01/neoNet" target="_blank" rel="noopener noreferrer">
                View source
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          <div
            className="pointer-events-none absolute -inset-x-60 -top-60 -z-10 h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.16),transparent_70%)] blur-3xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-card/80 shadow-[0_80px_160px_-120px_rgba(34,211,238,0.9)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-cyan-400/20 px-4 py-2">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="text-xs text-cyan-200/70">neonet@cli</div>
              <div className="w-14" />
            </div>
            <HeroScan />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
