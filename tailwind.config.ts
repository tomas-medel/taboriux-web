import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        taboriux: {
          bright: "#54C5FF",
          deep: "#071436",
          violet: "#1B1141",
          ink: "#030812"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(84, 197, 255, 0.35)",
        soft: "0 18px 45px rgba(7, 20, 54, 0.45)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" }
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(84, 197, 255, 0.0)" },
          "50%": { boxShadow: "0 0 45px rgba(84, 197, 255, 0.4)" }
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.75s ease-out forwards",
        shimmer: "shimmer 4s ease-in-out infinite",
        "float-y": "floatY 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4.2s ease-in-out infinite",
        "spin-slow": "spinSlow 22s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
