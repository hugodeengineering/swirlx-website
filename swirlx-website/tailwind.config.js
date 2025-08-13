module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "swirlx-primary": "#1e40af",
        "swirlx-secondary": "#64748b",
        "swirlx-accent": "#f59e0b",
        "swirlx-dark": "#0f172a",
        "swirlx-light": "#f8fafc"
      },
      fontFamily: {
        "industrial": ["Inter", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
}
