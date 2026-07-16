export type Module = {
  id: string;
  title: string;
  description: string;
  command: string;
};

export const MODULES: Module[] = [
  {
    id: "nmap",
    title: "Nmap Port Scanner",
    description:
      "Quick, standard, aggressive, full, and custom scan modes. Open ports are highlighted the moment they're found.",
    command: "neonet --nmap scanme.nmap.org",
  },
  {
    id: "dns",
    title: "DNS Toolkit",
    description:
      "Forward, reverse, MX, and ANY record lookups, backed by dig and nslookup where available.",
    command: "neonet --dns example.com",
  },
  {
    id: "whois",
    title: "WHOIS Lookup",
    description:
      "Reads the system whois binary first, then falls back to a pure-Python TCP client on port 43 when it isn't installed.",
    command: "neonet --whois example.com",
  },
  {
    id: "http",
    title: "HTTP Headers Analyzer",
    description:
      "Audits responses against eight common security headers and lists anything missing.",
    command: "neonet --http https://example.com",
  },
  {
    id: "subs",
    title: "Subdomain Scanner",
    description:
      "Multi-threaded brute force with a 60+ entry built-in wordlist, or bring your own file.",
    command: "neonet --subs example.com",
  },
  {
    id: "sweep",
    title: "Ping Sweep",
    description:
      "Multi-threaded ICMP sweep across any CIDR range, results sorted by IP.",
    command: "neonet --sweep 192.168.1.0/24",
  },
  {
    id: "trace",
    title: "Traceroute",
    description:
      "Hop-by-hop path tracing, printed live as each hop responds, on every major OS.",
    command: "neonet --trace 8.8.8.8",
  },
  {
    id: "banners",
    title: "Banner Grabber",
    description:
      "Connects to common or custom ports and reads the raw service banner for quick fingerprinting.",
    command: "neonet --banners 192.168.1.1",
  },
  {
    id: "ssl",
    title: "SSL/TLS Inspector",
    description:
      "Protocol, cipher suite, certificate subject and issuer, validity window, and a full SAN list.",
    command: "neonet --ssl example.com",
  },
  {
    id: "sysinfo",
    title: "System Info",
    description:
      "Local and external IP, which optional tools are on PATH, and current privilege level, at a glance.",
    command: "neonet",
  },
];

export const SECURITY_HEADERS = [
  "Strict-Transport-Security",
  "Content-Security-Policy",
  "X-Content-Type-Options",
  "X-Frame-Options",
  "X-XSS-Protection",
  "Referrer-Policy",
  "Permissions-Policy",
  "Cross-Origin-Opener-Policy",
];

export type Step = {
  index: string;
  title: string;
  description: string;
  code: string;
};

export const HOW_IT_WORKS: Step[] = [
  {
    index: "01",
    title: "Install",
    description:
      "One line, no clone, no pip. Just Python 3.9+ on the machine.",
    code: "curl -fsSL https://raw.githubusercontent.com/Panda-0x01/neoNet/main/install.sh | bash",
  },
  {
    index: "02",
    title: "Open the menu, or skip it",
    description:
      "Run neonet for the full-color interactive menu, or go straight to a flag for scripted runs.",
    code: "neonet",
  },
  {
    index: "03",
    title: "Point it at a target",
    description:
      "Every module works the same way in CLI mode: a flag, a target, done.",
    code: "neonet --ssl example.com",
  },
  {
    index: "04",
    title: "Save and review",
    description:
      "Say yes when prompted, or pass --output, to write results to a timestamped file. Every run is logged too.",
    code: "neonet --ssl example.com --output /tmp/ssl_report.txt",
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$20",
    cadence: "/ month",
    description: "For individuals running scans on their own infrastructure.",
    features: [
      "All 10 recon modules",
      "Interactive menu + CLI flags",
      "Local session logging",
      "Community support",
      "Single seat",
    ],
    cta: "Start with Starter",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$100",
    cadence: "/ month",
    description: "For security teams running neoNet across engagements.",
    features: [
      "Everything in Starter",
      "Shared team wordlists",
      "Centralized scan history",
      "Priority email + chat support",
      "Up to 10 seats",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    id: "payg",
    name: "Pay As You Use",
    price: "Usage-based",
    cadence: "billed monthly",
    description: "No commitment. Scale scanning volume up or down freely.",
    features: [
      "Everything in Starter",
      "Billed per scan-hour",
      "No monthly minimum",
      "Cancel anytime",
      "Ideal for bursty projects",
    ],
    cta: "Talk to us",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maya Okonkwo",
    role: "Senior Penetration Tester",
    company: "Redshift Security",
    quote:
      "neoNet replaced three separate scripts on my engagement laptop. Zero dependencies means it just runs, even on a locked-down client VM.",
    initials: "MO",
  },
  {
    name: "Tomasz Wieczorek",
    role: "Network Administrator",
    company: "Fenwick Logistics",
    quote:
      "The ping sweep and traceroute modules are the first thing I reach for when a site loses connectivity. One binary, no setup, every time.",
    initials: "TW",
  },
  {
    name: "Priya Raghavan",
    role: "Security Engineer",
    company: "Loop Payments",
    quote:
      "We wired the HTTP headers analyzer into a pre-deploy check. Catching a missing CSP header before release has saved us more than once.",
    initials: "PR",
  },
  {
    name: "Daniel Cho",
    role: "Freelance Consultant",
    company: "Independent",
    quote:
      "The SSL inspector's expiry countdown alone is worth the install. I stopped finding out about expired certs from angry clients.",
    initials: "DC",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "What do I need installed to run neoNet?",
    answer:
      "Just Python 3.9 or higher. neoNet has zero external Python dependencies, it's a single pure-stdlib file. Some modules can use optional system tools like nmap, whois, dig, or traceroute if they're present, and fall back gracefully when they aren't.",
  },
  {
    question: "Does neoNet work on Windows?",
    answer:
      "Yes. There's a dedicated PowerShell one-liner installer, and the tool auto-enables ANSI colors via SetConsoleMode. Traceroute uses tracert -d on Windows and traceroute -n or tracepath on Linux/macOS.",
  },
  {
    question: "Is this legal to use against any target?",
    answer:
      "Only against networks and systems you own or have explicit written permission to test. Port scanning, subdomain enumeration, and banner grabbing without authorization may violate laws in your jurisdiction. Using neoNet means you accept full responsibility for how you use it.",
  },
  {
    question: "How is neoNet licensed?",
    answer: "MIT. The full license text ships in the repository's LICENSE file.",
  },
  {
    question: "Can I install a specific version?",
    answer:
      "Yes, with pip you can pin a tag directly, for example pip install git+https://github.com/Panda-0x01/neoNet.git@v2.0.0. The GitHub Actions workflow also publishes tagged releases to PyPI via Trusted Publishing.",
  },
  {
    question: "Where do scan results and logs go?",
    answer:
      "Saved results land in ~/.neonet/results/ as timestamped .txt files, or wherever you point --output. Every module run is logged automatically to ~/.neonet/logs/YYYY-MM-DD.log unless you pass --no-log.",
  },
  {
    question: "What does the Pro plan add over Starter?",
    answer:
      "Pro adds shared team wordlists, centralized scan history across a team, and priority support, for teams of up to 10 seats running coordinated engagements.",
  },
  {
    question: "I don't want a subscription. Is there another option?",
    answer:
      "Pay As You Use bills per scan-hour with no monthly minimum, built for teams with bursty or unpredictable scanning volume.",
  },
];
