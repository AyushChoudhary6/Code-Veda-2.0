/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: '#0a0a1a',
        },
        divine: {
          silver: '#e0e0e0',
          gold: '#ffd700',
          purple: '#9d4edd',
        }
      },
      animation: {
        'scroll-lr': 'scrollLR 60s linear infinite',
      },
      keyframes: {
        scrollLR: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
