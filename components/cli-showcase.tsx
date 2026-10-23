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
    <section id="cli" className="relative border-t border-border py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent-green">Get Started</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Install in seconds
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Just Python 3.9+ on your machine. The installer drops a single file
            in <code className="rounded-md bg-muted px-1.5 py-0.5 text-sm">~/.neonet/</code>{" "}
            and wires up the <code className="rounded-md bg-muted px-1.5 py-0.5 text-sm">neonet</code>{" "}
            command to your PATH.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="border-b border-border px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-muted-foreground">terminal</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <Tabs defaultValue="unix">
                  <TabsList className="mb-4">
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
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="border-b border-border px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-muted-foreground">usage</span>
                </div>
              </div>
              <div className="space-y-2 p-4 sm:p-6">
                {USAGE.map((cmd) => (
                  <CodeLine key={cmd} command={cmd} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
