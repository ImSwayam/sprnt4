import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Main teals (tech-y)
        primary: "#007C86",
        "primary-dark": "#00515A",
        "primary-light": "#12A7B3",

        // Browns
        chocolate: "#5A3B27",
        "chocolate-light": "#8C5B37",

        // Sand / cream
        sand: "#F5EACB",
        "sand-dark": "#D9C8A2",

        // Pink accents
        "accent-pink": "#F6A5C0",
        "accent-pink-light": "#FADCE7",

        // Soft aqua
        aqua: "#BFE7E9",

        // Calendar specific
        "calendar-bg": "#F9E4B7", // Placeholder, as requested
        "calendar-header": "#6B7A8F",
        "calendar-card-bg": "#FFFCF5",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        card: "0 18px 45px rgba(0,0,0,0.18)",
        "calendar-card": "0 25px 50px -12px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
      },
    },
  },
  plugins: [],
} satisfies Config
