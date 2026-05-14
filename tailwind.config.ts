import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // bg kept as hardcoded hex so bg-bg/95 opacity modifier keeps working
        bg: "#F9F8F6",
        // These reference CSS variables — auto-switch in dark mode
        "bg-subtle": "var(--bg-secondary)",
        ink: "var(--text-primary)",
        "ink-muted": "var(--text-secondary)",
        "ink-faint": "var(--text-tertiary)",
        accent: "var(--accent)",
        border: "var(--border)",
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
