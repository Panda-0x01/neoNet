"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Testimonials() {
  return (
    <section className="relative border-t border-line py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Field notes</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Trusted by people who scan things for a living
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={item}
              className="flex flex-col justify-between rounded-2xl border border-white/70 bg-panel p-7 shadow-neu"
            >
              <Quote
                className="h-6 w-6 text-accent-green/40"
                aria-hidden="true"
              />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-fg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-panel font-mono text-xs text-accent-green shadow-neu-inset-sm">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-medium text-fg">{t.name}</div>
                  <div className="font-mono text-xs text-fg-dim">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
