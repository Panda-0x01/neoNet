"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PRICING_PLANS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-line py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Simple plans for solo work and full teams
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">
            The core toolkit is MIT-licensed and free to self-host. These
            plans add managed support, shared team storage, and priority
            response.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
        >
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={item}
              className={cn(
                "relative flex flex-col rounded-2xl border p-7",
                plan.highlighted
                  ? "border-accent-green/20 bg-panel shadow-neu-lg md:-translate-y-3"
                  : "border-white/70 bg-panel shadow-neu"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent-green px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-white">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Recommended
                </span>
              )}

              <h3 className="font-sans text-lg font-semibold text-fg">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-fg-muted">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-mono text-4xl font-semibold text-fg">
                  {plan.price}
                </span>
                <span className="font-mono text-xs text-fg-dim">{plan.cadence}</span>
              </div>

              <Button
                className="mt-6 w-full"
                variant={plan.highlighted ? "primary" : "secondary"}
                asChild
              >
                <a href="#faq">{plan.cta}</a>
              </Button>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-fg-muted">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-green"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
