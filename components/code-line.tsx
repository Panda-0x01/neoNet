import { CopyButton } from "@/components/copy-button";

function highlight(line: string) {
  if (line.trim().startsWith("#")) {
    return <span className="text-fg-dim">{line}</span>;
  }

  const tokens = line.split(/(\s+)/);
  let commandSeen = false;

  return tokens.map((token, i) => {
    if (/^\s+$/.test(token)) return <span key={i}>{token}</span>;

    if (!commandSeen && token) {
      commandSeen = true;
      return (
        <span key={i} className="text-accent-green">
          {token}
        </span>
      );
    }
    if (token.startsWith("--") || token.startsWith("-")) {
      return (
        <span key={i} className="text-accent-blue">
          {token}
        </span>
      );
    }
    if (token === "|" || token === "&&") {
      return (
        <span key={i} className="text-accent-violet">
          {token}
        </span>
      );
    }
    return (
      <span key={i} className="text-fg">
        {token}
      </span>
    );
  });
}

export function CodeLine({
  command,
  showCopy = true,
}: {
  command: string;
  showCopy?: boolean;
}) {
  return (
    <div className="group flex items-center justify-between gap-3 rounded-xl border border-black/[0.04] bg-panel px-4 py-3 shadow-neu-inset-sm">
      <div className="flex min-w-0 items-center gap-2 overflow-x-auto font-mono text-[13px] sm:text-sm">
        <span className="shrink-0 select-none text-accent-green">$</span>
        <span className="whitespace-pre">{highlight(command)}</span>
      </div>
      {showCopy && <CopyButton text={command} />}
    </div>
  );
}
