# neoNet Landing Page

A production-ready marketing site for **neoNet**, a cross-platform CLI toolkit
for network reconnaissance and security analysis. Built with Next.js 14
(App Router), TypeScript, Tailwind CSS, shadcn/ui-style primitives, and
Framer Motion.

All product copy, commands, and feature descriptions are sourced from the
neoNet `README.md` — nothing about the tool's functionality is invented.

## Stack

- **Next.js 14** — App Router, `next/font`, metadata API, `sitemap.ts` / `robots.ts`
- **TypeScript** — strict mode
- **Tailwind CSS** — custom design tokens (`tailwind.config.ts`)
- **Framer Motion** — scroll reveals, staggered cards, hero entrance, animated countdown
- **Radix UI primitives** — Accordion, Tabs (styled to match the shadcn/ui pattern)
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/
├── layout.tsx        # Root layout, fonts, SEO metadata, dark mode
├── page.tsx           # Landing page composition
├── globals.css         # Design tokens, base styles, reduced-motion support
├── robots.ts / sitemap.ts
└── favicon.svg

components/
├── navbar.tsx
├── hero.tsx            # Headline, CTAs, countdown, hero terminal
├── hero-scan.tsx        # Animated typing + mock scan output (signature element)
├── terminal-window.tsx  # Reusable terminal chrome
├── countdown.tsx         # Animated days/hours/min/sec countdown
├── legal-strip.tsx
├── features.tsx           # Module cards generated from lib/site-data.ts
├── cli-showcase.tsx        # Install + usage terminal with tabs
├── code-line.tsx             # Syntax-tinted command line + copy button
├── copy-button.tsx
├── how-it-works.tsx
├── pricing.tsx
├── testimonials.tsx
├── faq.tsx
├── cta-band.tsx
├── footer.tsx
└── ui/                        # button, card, accordion, tabs primitives

lib/
├── site-data.ts        # Typed content extracted from the neoNet README
└── utils.ts             # cn() classname helper
```

## Design notes

- **Theme**: light neumorphism (soft UI). A single soft gray-blue surface
  color (`#E9EDF3`–`#EEF1F6`) is used throughout; depth comes entirely from
  dual box-shadows (a cool gray shadow + a white highlight), not borders or
  color blocks. Raised elements (cards, buttons, chips) use `shadow-neu` /
  `shadow-neu-sm`; recessed elements (code rows, tab bars, countdown digits)
  use `shadow-neu-inset` / `shadow-neu-inset-sm`.
- **Palette**: darker, more saturated accent colors than a typical dark-mode
  palette (`#149355` green, `#2F66D9` blue, `#7C5CE0` violet, `#D6394A` red,
  `#C8811A` amber) so text and icons stay legible against the light base.
- **Type**: JetBrains Mono for display headings, commands, and labels; Inter
  for body copy.
- **Signature element**: the hero terminal actually "runs" a
  `neonet --nmap` scan — typing the command, then revealing color-coded
  port results — instead of a generic illustration or gradient blob.
- Respects `prefers-reduced-motion`, visible focus rings, and semantic
  landmarks (`header`, `main`, `footer`, `nav`) throughout.

## Content accuracy

Feature descriptions, CLI flags, install commands, pricing structure, and
FAQ answers are derived from the source README. Testimonials and the
"next tagged release" countdown are clearly presentational/marketing
placeholders and are labeled as such in code comments.
