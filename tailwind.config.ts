import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F9F8F6",
        "bg-subtle": "#F3F2F0",
        ink: "#1A1A1A",
        "ink-muted": "#6B6767",
        "ink-faint": "#A8A5A2",
        accent: "#5271ff",
        border: "#E4E2DF",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
