"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable; fail silently.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/70 bg-panel text-fg-dim shadow-neu-sm transition-all hover:text-accent-green active:shadow-neu-inset-sm",
        className
      )}
      aria-label={copied ? "Copied to clipboard" : "Copy command to clipboard"}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-accent-green" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
    </button>
  );
}
