/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        dark: "#0f172a",
        card: "#1e293b",
        "card-hover": "#334155",
        theme: {
          bg: "var(--bg-main)",
          section: "var(--bg-section)",
          text: "var(--text-primary)",
          muted: "var(--text-secondary)",
          border: "var(--border-color)",
          badge: "var(--badge-bg)",
          "badge-txt": "var(--badge-text)",
        }
      }
    },
  },
  plugins: [],
}
