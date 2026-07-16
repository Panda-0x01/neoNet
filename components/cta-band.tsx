"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeLine } from "@/components/code-line";

export function CtaBand() {
  return (
    <section className="relative border-t border-line py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-radial-fade"
        aria-hidden="true"
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-white/70 bg-panel px-8 py-14 text-center shadow-neu-lg"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Your next scan is one line away
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-fg-muted">
            Install neoNet, point it at infrastructure you&rsquo;re authorized
            to test, and get results in your terminal in seconds.
          </p>
          <div className="mt-8 w-full max-w-md">
            <CodeLine command="curl -fsSL https://raw.githubusercontent.com/Panda-0x01/neoNet/main/install.sh | bash" />
          </div>
          <Button size="lg" className="mt-6" asChild>
            <a
              href="https://github.com/Panda-0x01/neoNet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star it on GitHub
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
