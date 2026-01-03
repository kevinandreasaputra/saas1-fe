/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0f756d",
        "primary-dark": "#0a554f",
        "accent": "#F97316", // Orange from Home
        "accent-coral": "#FF6B4A", // Coral from Booking
        "accent-coral-hover": "#e55a39",
        "accent-yellow": "#F59E0B",
        "accent-green": "#10B981",
        "accent-red": "#EF4444",
        "background-light": "#F8FAFC", // Unified light bg
        "background-dark": "#112120",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E2D2D",
        "text-main": "#0f172a",
        "text-sub": "#64748b",
        "text-secondary": "#637588", // From Booking/Dashboard
        "border-color": "#dce5e4",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.75rem", /* 12px */
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "1.5rem", // Adding 2xl used in design
      },
      boxShadow: {
        "soft": "0 4px 24px -4px rgba(0, 0, 0, 0.08)",
        "hover": "0 10px 32px -4px rgba(0, 0, 0, 0.12)",
      }
    },
  },
  plugins: [],
}
