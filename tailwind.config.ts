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
        brand: {
          50: "#EEF5FF",
          100: "#D9E9FE",
          200: "#B8D6FD",
          300: "#8BBEFC",
          400: "#559EFA",
          500: "#2373F4", // Official Cloudzyne Brand Color
          600: "#1858D4",
          700: "#1344A8",
          800: "#123987",
          900: "#13316E",
          950: "#0C1E44",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8FAFC",
          muted: "#F1F5F9",
          card: "#FFFFFF",
          cardMuted: "#FAFAFA",
        },
        dark: {
          900: "#090D16",
          800: "#0F172A",
          700: "#1E293B",
          600: "#334155",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        "card-hover": "0 20px 35px -5px rgba(35, 115, 244, 0.10), 0 10px 15px -3px rgba(15, 23, 42, 0.05)",
        nav: "0 10px 30px -5px rgba(0, 0, 0, 0.06)",
        float: "0 25px 50px -12px rgba(35, 115, 244, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        pulseSubtle: "pulseSubtle 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
