import Image from "next/image";
import { Github, Twitter, MessageSquare } from "lucide-react";

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
  { label: "GitHub", href: "https://github.com/Panda-0x01/neoNet", icon: Github },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Community chat", href: "https://github.com/Panda-0x01/neoNet/discussions", icon: MessageSquare },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <a href="#top" className="flex items-center gap-2 font-mono text-[15px] font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/70 bg-panel shadow-neu-sm overflow-hidden">
                <Image src="/neonet.png" alt="neoNet logo" width={28} height={28} className="object-contain" />
              </span>
              <span className="text-fg">neo</span>
              <span className="text-accent-green">Net</span>
            </a>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-fg-muted">
              A cross-platform CLI toolkit for network recon and security
              analysis. MIT licensed.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/70 bg-panel text-fg-muted shadow-neu-sm transition-colors hover:text-accent-green"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-fg-dim">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-fg-muted transition-colors hover:text-accent-green"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="font-mono text-xs text-fg-dim">
            © {new Date().getFullYear()} neoNet. Released under the MIT
            License.
          </p>
          <p className="text-center font-mono text-xs text-fg-dim sm:text-right">
            For authorized security testing only.
          </p>
        </div>
      </div>
    </footer>
  );
}
