"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/terminal-window";
import { CodeLine } from "@/components/code-line";
import { HeroScan } from "@/components/hero-scan";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const INSTALL = {
  unix: "curl -fsSL https://raw.githubusercontent.com/Panda-0x01/neoNet/main/install.sh | bash",
  windows: "irm https://raw.githubusercontent.com/Panda-0x01/neoNet/main/install.ps1 | iex",
  pip: "pip install git+https://github.com/Panda-0x01/neoNet.git",
};

const USAGE = [
  "neonet --dns example.com",
  "neonet --whois example.com",
  "neonet --http https://example.com",
  "neonet --ssl example.com",
  "neonet --sweep 192.168.1.0/24",
  "neonet --subs example.com",
  "neonet --nmap scanme.nmap.org",
  "neonet --trace 8.8.8.8",
  "neonet --ssl example.com --output /tmp/ssl_report.txt",
];

export function CliShowcase() {
  return (
    <section id="cli" className="relative border-t border-line py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">CLI</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Install in one line, no clone, no pip required
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">
            Just Python 3.9+ on the machine. The installer drops a single
            file in <code className="rounded bg-panel px-1.5 py-0.5 text-accent-blue">~/.neonet/</code> and
            wires up a <code className="rounded bg-panel px-1.5 py-0.5 text-accent-blue">neonet</code> command
            on your PATH.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-5"
        >
          <div className="space-y-6 lg:col-span-3">
            <TerminalWindow title="install.sh">
              <Tabs defaultValue="unix">
                <TabsList>
                  <TabsTrigger value="unix">Linux / macOS</TabsTrigger>
                  <TabsTrigger value="windows">Windows</TabsTrigger>
                  <TabsTrigger value="pip">pip</TabsTrigger>
                </TabsList>
                <TabsContent value="unix">
                  <CodeLine command={INSTALL.unix} />
                </TabsContent>
                <TabsContent value="windows">
                  <CodeLine command={INSTALL.windows} />
                </TabsContent>
                <TabsContent value="pip">
                  <CodeLine command={INSTALL.pip} />
                </TabsContent>
              </Tabs>
            </TerminalWindow>

            <TerminalWindow title="usage examples">
              <div className="space-y-2.5">
                {USAGE.map((cmd) => (
                  <CodeLine key={cmd} command={cmd} />
                ))}
              </div>
            </TerminalWindow>
          </div>

          <div className="lg:col-span-2">
            <HeroScan />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
