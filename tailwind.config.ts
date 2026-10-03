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
        // Exact TransHub CSS variables
        primary: {
          DEFAULT: "#fd5523",
          hover: "#eb3802",
        },
        dark: "#020e28",
        shade: "#f5f7fa",
        mute: "#788094",
        "brand-yellow": "#F8C62E",
        "logo-blue": "#175A9D",
      },
      fontFamily: {
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        heading: ['"Rethink Sans"', '"DM Sans"', "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      boxShadow: {
        card: "0 14px 40px -10px rgba(2, 14, 40, 0.12)",
        glow: "0 0 25px rgba(253, 85, 35, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
