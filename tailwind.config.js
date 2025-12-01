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
          900: '#0a0a1a', // Example dark background
        },
        divine: {
          silver: '#e0e0e0', // Example text color
        }
      }
    },
  },
  plugins: [],
}
