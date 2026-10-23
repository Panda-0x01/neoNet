"use client";

import { motion } from "framer-motion";
import {
  Radar,
  Globe,
  FileSearch,
  ShieldAlert,
  ListTree,
  Waves,
  Route,
  Radio,
  LockKeyhole,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { MODULES } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  nmap: Radar,
  dns: Globe,
  whois: FileSearch,
  http: ShieldAlert,
  subs: ListTree,
  sweep: Waves,
  trace: Route,
  banners: Radio,
  ssl: LockKeyhole,
  sysinfo: Cpu,
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-cyan-300">Modules</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Built for every phase of recon
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ten focused modules, one consistent CLI. Chain them together or run
            them individually for maximum flexibility.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod) => {
            const Icon = ICONS[mod.id] ?? Radar;
            return (
              <div
                key={mod.id}
                className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_40px_80px_-60px_rgba(34,211,238,0.9)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/40">
                  <Icon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-medium">
                  {mod.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>
                <div className="mt-4 overflow-x-auto rounded-lg border border-border/70 bg-background/60 px-3 py-2">
                  <code className="font-mono text-xs text-cyan-200/80">
                    {mod.command}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
