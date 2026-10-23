import { ShieldAlert } from "lucide-react";

export function LegalStrip() {
  return (
    <div className="border-y border-border bg-muted/30">
      <div className="container flex flex-col items-center gap-3 py-5 text-center sm:flex-row sm:text-left">
        <ShieldAlert
          className="h-5 w-5 shrink-0 text-amber-500"
          aria-hidden="true"
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">Authorized use only.</span>{" "}
          Use neoNet only on networks and systems you own or have explicit
          written permission to test. Scanning, enumeration, and banner
          grabbing without authorization may violate laws in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
