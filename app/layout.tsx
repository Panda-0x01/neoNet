import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
});

const siteUrl = "https://neonet.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "neoNet — Network Recon & Security Toolkit",
    template: "%s · neoNet",
  },
  description:
    "A production-ready, cross-platform CLI toolkit for network reconnaissance and security analysis. Nmap scanning, DNS, WHOIS, subdomain enumeration, SSL inspection, and more. Zero dependencies, one install.",
  keywords: [
    "neoNet",
    "CLI security toolkit",
    "network reconnaissance",
    "nmap scanner",
    "subdomain enumeration",
    "SSL TLS inspector",
    "penetration testing tool",
    "port scanner CLI",
  ],
  authors: [{ name: "Panda-0x01", url: "https://github.com/Panda-0x01/neoNet" }],
  creator: "Panda-0x01",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "neoNet — Network Recon & Security Toolkit",
    description:
      "A production-ready, cross-platform CLI toolkit for network reconnaissance and security analysis.",
    siteName: "neoNet",
  },
  twitter: {
    card: "summary_large_image",
    title: "neoNet — Network Recon & Security Toolkit",
    description:
      "A production-ready, cross-platform CLI toolkit for network reconnaissance and security analysis.",
  },
  icons: {
    icon: "/neonet.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
