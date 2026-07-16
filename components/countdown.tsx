"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COUNTDOWN_DAYS = 365;

function getTargetDate() {
  // Stable per-session target: "now + 365 days", computed once on mount.
  const target = new Date();
  target.setDate(target.getDate() + COUNTDOWN_DAYS);
  return target;
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function diffToTimeLeft(ms: number): TimeLeft {
  const clamped = Math.max(ms, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Unit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/70 bg-panel shadow-neu-inset-sm sm:h-16 sm:w-16">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="font-mono text-xl font-semibold text-accent-green sm:text-2xl"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-fg-dim">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [target] = useState(getTargetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(diffToTimeLeft(target.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim">
        Next tagged release ships in
      </span>
      <div className="flex items-center gap-2 sm:gap-3">
        <Unit value={timeLeft?.days ?? 0} label="Days" />
        <span className="pb-4 font-mono text-lg text-line-bright">:</span>
        <Unit value={timeLeft?.hours ?? 0} label="Hrs" />
        <span className="pb-4 font-mono text-lg text-line-bright">:</span>
        <Unit value={timeLeft?.minutes ?? 0} label="Min" />
        <span className="pb-4 font-mono text-lg text-line-bright">:</span>
        <Unit value={timeLeft?.seconds ?? 0} label="Sec" />
      </div>
    </div>
  );
}
