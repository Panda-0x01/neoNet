import { ShieldAlert } from "lucide-react";

export function LegalStrip() {
  return (
    <div className="border-t border-black/[0.04] bg-panel/40">
      <div className="container flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:text-left">
        <ShieldAlert
          className="h-5 w-5 shrink-0 text-accent-amber"
          aria-hidden="true"
        />
        <p className="text-sm leading-relaxed text-fg-muted">
          <span className="font-medium text-fg">Authorized use only.</span>{" "}
          Use neoNet only on networks and systems you own or have explicit
          written permission to test. Scanning, enumeration, and banner
          grabbing without authorization may violate laws in your
          jurisdiction, and you accept full responsibility for how you use
          it.
        </p>
      </div>
    </div>
  );
}
