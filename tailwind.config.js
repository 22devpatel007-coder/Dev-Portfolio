/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#0D0D0D",
        "surface-light": "#151515",
        primary: "#FFFFFF",
        secondary: "#A1A1AA",
        accent: "#8B5CF6",
        "accent-light": "#A78BFA",
        border: "#1F1F1F",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};