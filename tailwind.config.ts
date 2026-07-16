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
        // Soft, slightly cool light gray — the neumorphic base surface.
        void: "#E9EDF3",
        panel: "#EEF1F6",
        panel2: "#E4E8EF",
        line: "#E4E8EF",
        "line-bright": "#D2D9E2",
        fg: {
          DEFAULT: "#2B3444",
          muted: "#616D7E",
          dim: "#8D96A5",
        },
        accent: {
          green: "#149355",
          "green-dim": "#0E7443",
          amber: "#C8811A",
          blue: "#2F66D9",
          red: "#D6394A",
          violet: "#7C5CE0",
        },
      },
      boxShadow: {
        neu: "9px 9px 20px rgba(163,177,198,0.55), -9px -9px 20px rgba(255,255,255,0.9)",
        "neu-sm": "5px 5px 12px rgba(163,177,198,0.5), -5px -5px 12px rgba(255,255,255,0.85)",
        "neu-lg": "16px 16px 34px rgba(163,177,198,0.55), -14px -14px 30px rgba(255,255,255,0.9)",
        "neu-inset":
          "inset 4px 4px 10px rgba(163,177,198,0.55), inset -4px -4px 10px rgba(255,255,255,0.85)",
        "neu-inset-sm":
          "inset 2px 2px 6px rgba(163,177,198,0.5), inset -2px -2px 6px rgba(255,255,255,0.8)",
        "neu-green": "0 0 0 1px rgba(20,147,85,0.18), 0 14px 32px -12px rgba(20,147,85,0.4)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #D6DDE7 1px, transparent 1px), linear-gradient(to bottom, #D6DDE7 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(20,147,85,0.10), transparent 60%)",
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
