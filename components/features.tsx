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
    <section id="features" className="relative border-t border-border py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-green">Modules</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need for recon
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Ten modules covering the reconnaissance and analysis work most
            engagements start with, available from the interactive menu or as
            direct CLI flags for scripting.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MODULES.map((mod) => {
            const Icon = ICONS[mod.id] ?? Radar;
            return (
              <motion.div
                key={mod.id}
                variants={item}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-accent-green/30"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-green/0 blur-3xl transition-colors duration-500 group-hover:bg-accent-green/5"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted/50 text-accent-green">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {mod.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {mod.description}
                  </p>
                  <code className="mt-4 block truncate rounded-lg border border-border bg-muted/50 px-3 py-2 font-mono text-xs text-blue-600">
                    {mod.command}
                  </code>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
