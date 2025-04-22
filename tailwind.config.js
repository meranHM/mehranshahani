/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import { fontFamily } from "tailwindcss/defaultTheme"

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", ...fontFamily.mono],
        orbit: ["var(--font-orbit)", "sans-serif"],
      },
      colors: {
        color: {
          cyberBlack: "#0A0F1D",
          neonCyan: "#0FF0FC",
          neonPurple: "#D400FF",
          neonGreen: "#00FF00",
          neonBlue: "#007BFF",
          neonRed: "#FF3131",
          neonPink: "#FF10F0",
          neonOrange: "#FF8800",
          neonYellow: "#F9FF00",
          neonTeal: "#00FFD1",
          neonMagenta: "#FF00A6",
          neonViolet: "#9400FF",
          neonWhite: "#FFFFFF",
          neonGold: "#FFD700",
          neonDeepBlue: "#003BFF",
          terminalBlack: "#080F0F",
          terminalHeader: "#101617",
          footerBlack: "#0A0F1DF2",
        },
      },
      boxShadow: {
          "tv": "inset 0 0 20px rgba(0, 255, 255, 0.3), 0 0 10px rgba(0, 255, 255, 0.4)",
      },
      textShadow: {
        warning: "0 0 10px #FF0000",
      },
      animation: {
        starEffect: "starEffect 10s infinite ease-in-out forwards",
        tvGlitch: "vhsStyle 1.5s infinite steps(5), signalLoss 10s infinite",
        fadeIn: "fadeIn 1.5s ease-in-out infinite",
        retroShake: "retroShake 0.3s infinite",
        retroFlicker: "retroFlicker 0.12s infinite",
        textFlicker: "textFlicker 3s infinite",
        pulseBorder: "pulseBorder 3s infinite",
      },
      keyframes: {
        starEffect: {
          "0%": { opacity: "0.1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "0.1" },
        },
        vhsStyle: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "25%": { transform: "translate(-1px, 1px)", opacity: "0.9" },
          "50%": { transform: "translate(1px, -1px)", opacity: "1" },
          "75%": { transform: "translate(-0.5px, 0.5px)", opacity: "0.85" },
          "100%": { transform: "translate(0, 0)", opacity: "1" },
        },
        signalLoss: {
          "0%, 95%": { opacity: "1", filter: "none" },
          "96%": { opacity: "0.3", filter: "blur(2px) contrast(1.5)", transform: "scaleY(1.1)" },
          "97%": { opacity: "0.6", filter: "blur(1px) contrast(1.2)", transform: "scaleY(0.9)" },
          "98%": { opacity: "0.2", filter: "blur(3px) contrast(1.8)", transform: "scaleX(1.1)" },
          "99%": { opacity: "0.8", filter: "blur(0.5px)" },
          "100%": { opacity: "1", filter: "none" },
        },
        fadeIn: {
          "0%, 100%" : { opacity: "0" },
          "50": { opacity: "1" },
        },
        retroShake: {
          "0%": { transform: "translate(0)" },
          "25%": { transform: "translate(-2px, 2px)" },
          "50%": { transform: "translate(2px, -2px)" },
          "75%": { transform: "translate(-2px, 2px)" },
          "100%": { transform: "translate(0)" },
        },
        retroFlicker: {
          "0%, 100%": { opacity: "0.02" },
          "50%": { opacity: "0.06" }
        },
        textFlicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
              opacity: "1"
          },
          "20%, 24%, 55%": {
            opacity: "0.4"
          },
        },
        pulseBorder: {
          "0%, 100%": { boxShadow: "0 0 12px #0ff5, inset 0 0 8px #ff2"},
          "50%": { boxShadow: "0 0 20px #0ff9, inset 0 0 12px #0ff4" },
        }
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 xl:max-w-[87.5rem]":
            {},
        },
      });
      addUtilities({
        ".text-shadow": {
          "text-shadow": "0 0 5px rgba(0, 255, 255, 0.6)",
        },
      });
    }),
  ],
}