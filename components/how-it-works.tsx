"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/site-data";
import { CodeLine } from "@/components/code-line";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-line py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Workflow</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            From install to saved report, four steps
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-line sm:block"
            aria-hidden="true"
          />
          <ol className="space-y-10">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:pl-16"
              >
                <span className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-panel font-mono text-sm text-accent-green shadow-neu-sm sm:flex">
                  {step.index}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-panel font-mono text-xs text-accent-green shadow-neu-sm sm:hidden">
                  {step.index}
                </span>
                <div className="flex-1">
                  <h3 className="font-sans text-lg font-semibold text-fg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {step.description}
                  </p>
                  <div className="mt-3">
                    <CodeLine command={step.code} />
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
