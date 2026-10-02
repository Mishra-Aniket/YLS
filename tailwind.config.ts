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
        navy: {
          dark: "#06112E",
          DEFAULT: "#07152F",
          light: "#0D2146",
          card: "#0A1B3B",
        },
        primary: {
          DEFAULT: "#F15A38",
          hover: "#e04b28",
          light: "#ff7454",
        },
        brand: {
          yellow: "#F8C62E",
          yellowHover: "#e5b420",
          blue: "#175A9D",
          blueDark: "#0F4172",
        },
        light: {
          bg: "#F5F7FA",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
        muted: {
          DEFAULT: "#6C7890",
          light: "#94A3B8",
          dark: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-rethink)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-dm)", "var(--font-rethink)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(6, 17, 46, 0.08)",
        card: "0 14px 40px -10px rgba(6, 17, 46, 0.12)",
        glow: "0 0 25px rgba(241, 90, 56, 0.35)",
        pill: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
