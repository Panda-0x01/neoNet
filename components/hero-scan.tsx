"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/terminal-window";

const COMMAND = "neonet --nmap 10.20.4.18";

type OutputLine = {
  text: string;
  tone: "muted" | "green" | "amber" | "red" | "blue";
};

const OUTPUT: OutputLine[] = [
  { text: "Starting neoNet 2.0.0 scan engine...", tone: "muted" },
  { text: "Target: 10.20.4.18   Mode: Standard (top 1000)", tone: "muted" },
  { text: "22/tcp    open   ssh", tone: "green" },
  { text: "80/tcp    open   http", tone: "green" },
  { text: "443/tcp   open   https", tone: "green" },
  { text: "3306/tcp  filtered mysql", tone: "amber" },
  { text: "8080/tcp  closed  http-proxy", tone: "red" },
  { text: "Scan complete: 3 open, 1 filtered, 996 closed", tone: "blue" },
];

const toneClass: Record<OutputLine["tone"], string> = {
  muted: "text-fg-dim",
  green: "text-accent-green",
  amber: "text-accent-amber",
  red: "text-accent-red",
  blue: "text-accent-blue",
};

export function HeroScan() {
  const [typed, setTyped] = useState("");
  const [lineCount, setLineCount] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setTyped("");
    setLineCount(0);
    let i = 0;
    const typeId = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(typeId);
        setTimeout(() => {
          let j = 0;
          const lineId = setInterval(() => {
            j += 1;
            setLineCount(j);
            if (j >= OUTPUT.length) {
              clearInterval(lineId);
              setTimeout(() => setCycle((c) => c + 1), 3200);
            }
          }, 260);
        }, 350);
      }
    }, 45);
    return () => clearInterval(typeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle]);

  return (
    <TerminalWindow title="~/engagements/acme-corp — neonet">
      <div className="flex flex-wrap items-center gap-2 text-fg-muted">
        <span className="text-accent-green">$</span>
        <span className="text-fg">{typed}</span>
        {typed.length < COMMAND.length && (
          <span className="inline-block h-4 w-2 animate-blink bg-accent-green" aria-hidden="true" />
        )}
      </div>

      <div className="mt-3 space-y-1.5">
        {OUTPUT.slice(0, lineCount).map((line, idx) => (
          <motion.div
            key={`${cycle}-${idx}`}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className={toneClass[line.tone]}
          >
            {line.tone === "green" || line.tone === "amber" || line.tone === "red" ? (
              <span className="mr-2 select-none">▸</span>
            ) : null}
            {line.text}
          </motion.div>
        ))}
      </div>
    </TerminalWindow>
  );
}
