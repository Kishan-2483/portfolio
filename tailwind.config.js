/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        dark: "#0f172a",
        card: "#1e293b",
        "card-hover": "#334155",
      }
    },
  },
  plugins: [],
}
