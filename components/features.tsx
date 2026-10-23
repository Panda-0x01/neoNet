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
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ten modules built to cover the full reconnaissance workflow, from
            initial scanning to detailed analysis.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod) => {
            const Icon = ICONS[mod.id] ?? Radar;
            return (
              <div
                key={mod.id}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors hover:bg-card/70"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-medium">
                  {mod.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>
                <div className="mt-4 overflow-x-auto rounded-md bg-black/40 px-2.5 py-1.5">
                  <code className="font-mono text-xs text-muted-foreground">
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
