"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CodeLine } from "@/components/code-line";

export function CtaBand() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-green/50 to-transparent"
        aria-hidden="true"
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-3xl flex-col items-center rounded-xl border border-border bg-card px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to start scanning?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Install neoNet, point it at infrastructure you're authorized to test,
            and get results in your terminal in seconds.
          </p>
          <div className="mt-8 w-full max-w-lg">
            <div className="overflow-hidden rounded-lg border border-border bg-muted/50">
              <CodeLine command="curl -fsSL https://raw.githubusercontent.com/Panda-0x01/neoNet/main/install.sh | bash" />
            </div>
          </div>
          <Button size="lg" className="mt-6" asChild>
            <a href="#cli">
              Get Started
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
