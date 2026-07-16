import { cn } from "@/lib/utils";

export function TerminalWindow({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/70 bg-panel shadow-neu-lg",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-black/[0.04] bg-panel px-4 py-3 shadow-neu-inset-sm">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="terminal-dot bg-accent-red/70" />
          <span className="terminal-dot bg-accent-amber/70" />
          <span className="terminal-dot bg-accent-green/70" />
        </div>
        <span className="ml-2 font-mono text-xs text-fg-dim">{title}</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed sm:p-6 sm:text-sm">
        {children}
      </div>
    </div>
  );
}
