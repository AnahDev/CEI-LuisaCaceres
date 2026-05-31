import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tertiary": "#8e4d39",
        "primary-dim": "#005a78",
        "on-surface": "#303330",
        "primary-fixed": "#62ccff",
        "tertiary-dim": "#80422e",
        "surface-tint": "#006789",
        "secondary": "#3c6942",
        "on-secondary": "#e9ffe6",
        "tertiary-fixed-dim": "#e8977e",
        "background": "#faf9f6",
        "error-container": "#f56965",
        "secondary-dim": "#315c37",
        "on-primary-fixed-variant": "#004b65",
        "on-primary": "#f4faff",
        "surface-container-highest": "#e1e3df",
        "inverse-on-surface": "#9d9d9a",
        "on-secondary-fixed": "#25512d",
        "outline-variant": "#b1b2af",
        "primary-fixed-dim": "#4abff3",
        "on-error-container": "#65000b",
        "on-tertiary": "#fff7f5",
        "surface-container-high": "#e8e8e4",
        "surface-container-low": "#f4f4f0",
        "surface-container": "#eeeeea",
        "on-secondary-fixed-variant": "#426e47",
        "inverse-surface": "#0d0f0d",
        "on-surface-variant": "#5d605c",
        "primary": "#006789",
        "secondary-fixed-dim": "#bdefbe",
        "inverse-primary": "#54c7fc",
        "secondary-fixed": "#cbfecc",
        "surface-dim": "#d9dbd6",
        "on-error": "#fff7f6",
        "surface": "#faf9f6",
        "on-tertiary-container": "#5c2615",
        "error-dim": "#70030f",
        "error": "#ac3434",
        "secondary-container": "#cbfecc",
        "outline": "#797b78",
        "on-primary-fixed": "#002b3c",
        "tertiary-fixed": "#f7a48b",
        "surface-variant": "#e1e3df",
        "surface-container-lowest": "#ffffff",
        "on-secondary-container": "#38643e",
        "tertiary-container": "#f7a48b",
        "on-tertiary-fixed-variant": "#682f1c",
        "surface-bright": "#faf9f6",
        "on-background": "#303330",
        "on-tertiary-fixed": "#3f1103",
        "on-primary-container": "#004259",
        "primary-container": "#62ccff"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["var(--font-plus-jakarta)", "sans-serif"],
        "body": ["var(--font-plus-jakarta)", "sans-serif"],
        "label": ["var(--font-plus-jakarta)", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
export default config;