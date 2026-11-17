import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ares: {
          deep: "#233B5B",
          architectural: "#385675",
          mist: "#E8EEF3",
          offwhite: "#F6F4EF",
          sand: "#EFECE6",
          dark: "#162539",
          slate: "#4A5A6D",
          muted: "#6D7885",
          gold: "#C2A26F",
          goldlight: "#D8BE93",
          border: "#E2DDD4",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(35, 59, 91, 0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(35, 59, 91, 0.4)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        pulseGlow: "pulseGlow 3s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
