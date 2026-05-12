/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          fatec: '#C0392B',
          dark: '#96281B',
          light: '#E74C3C',
        },
        teal: {
          bot: '#1D9E75',
        },
        slate: {
          user: '#2C3E50',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce3: {
          '0%, 60%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.2s ease',
        bounce3: 'bounce3 1.2s infinite',
      },
    },
  },
  plugins: [],
}


