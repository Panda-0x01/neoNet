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
    <section id="features" className="relative border-t border-line py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Modules</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Everything you&rsquo;d otherwise stitch together yourself
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">
            Ten modules covering the recon and analysis work most engagements
            start with, available from the interactive menu or as direct CLI
            flags for scripting.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MODULES.map((mod) => {
            const Icon = ICONS[mod.id] ?? Radar;
            return (
              <motion.div
                key={mod.id}
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-panel p-6 shadow-neu transition-shadow hover:shadow-neu-green"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-green/0 blur-2xl transition-colors duration-300 group-hover:bg-accent-green/10"
                  aria-hidden="true"
                />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-panel text-accent-green shadow-neu-inset-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-sans text-base font-semibold text-fg">
                  {mod.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {mod.description}
                </p>
                <code className="mt-4 block truncate rounded-lg border border-black/[0.04] bg-panel px-3 py-2 font-mono text-xs text-accent-blue shadow-neu-inset-sm">
                  {mod.command}
                </code>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
