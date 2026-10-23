import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f1026",
        card: "#ffffff",
        "card-foreground": "#0f1026",
        popover: "#ffffff",
        "popover-foreground": "#0f1026",
        primary: {
          DEFAULT: "#22c55e",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f8fafc",
          foreground: "#0f1026",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#475569",
        },
        accent: {
          DEFAULT: "#f1f5f9",
          foreground: "#0f1026",
          green: "#22c55e",
          "green-600": "#16a34a",
          "green-dim": "#15803d",
          blue: "#2563eb",
          violet: "#7c3aed",
          amber: "#f59e0b",
          red: "#ef4444",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#22c55e",
        // Keep legacy tokens for compatibility during transition
        void: "#f8fafc",
        panel: "#ffffff",
        panel2: "#f8fafc",
        line: "#e5e7eb",
        "line-bright": "#cbd5e1",
        fg: {
          DEFAULT: "#0f1026",
          muted: "#475569",
          dim: "#64748b",
        },
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.02)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        lg: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
        xl: "0 25px 50px -12px rgb(0 0 0 / 0.08)",
        "glow-green": "0 0 0 1px rgb(34 197 94 / 0.1), 0 10px 40px -10px rgb(34 197 94 / 0.4)",
        // Legacy neumorphic shadows (deprecated but kept for safety)
        neu: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        "neu-sm": "0 1px 2px 0 rgb(0 0 0 / 0.02)",
        "neu-lg": "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
        "neu-inset": "inset 0 2px 4px 0 rgb(0 0 0 / 0.02)",
        "neu-inset-sm": "inset 0 1px 2px 0 rgb(0 0 0 / 0.02)",
        "neu-green": "0 0 0 1px rgb(34 197 94 / 0.1), 0 10px 40px -10px rgb(34 197 94 / 0.4)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(226 232 240 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.6) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(34,197,94,0.08), transparent 60%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        scanline: "scanline 3s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
