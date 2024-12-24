import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        fredoka: ['Fredoka One', 'sans-serif']
      },
      colors: {
        red: {
          default: '#CC453C'
        },
        blue: {
          default: '#4085C6'
        }
      },
      boxShadow: {
        custom: '0px 6px 12px 0px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
} satisfies Config;
