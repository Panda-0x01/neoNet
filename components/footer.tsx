import Image from "next/image";
import { Twitter, MessageSquare } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Modules", href: "#features" },
    { label: "CLI", href: "#cli" },
    { label: "Pricing", href: "#pricing" },
  ],
  Resources: [
    { label: "Documentation", href: "https://github.com/Panda-0x01/neoNet#readme" },
    { label: "GitHub", href: "https://github.com/Panda-0x01/neoNet" },
    { label: "License (MIT)", href: "https://github.com/Panda-0x01/neoNet/blob/main/LICENSE" },
  ],
  Company: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "mailto:hello@neonet.dev" },
  ],
};

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Community chat", href: "https://github.com/Panda-0x01/neoNet/discussions", icon: MessageSquare },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card shadow-sm overflow-hidden">
                <Image src="/neonet.png" alt="neoNet logo" width={28} height={28} className="object-contain" />
              </span>
              <span>neo</span>
              <span className="text-accent-green">Net</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A cross-platform CLI toolkit for network reconnaissance and
              security analysis. Built for speed, simplicity, and reliability.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:text-foreground hover:bg-muted"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} neoNet. Released under the MIT
            License.
          </p>
          <p className="text-center text-sm text-muted-foreground sm:text-right">
            For authorized security testing only.
          </p>
        </div>
      </div>
    </footer>
  );
}
