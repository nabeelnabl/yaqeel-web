/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
      colors: {
        yaqeel: {
          brand: '#5B34EA',
          brandHover: '#4C28D9',
          violet: '#5329E0',
          mint: '#9EE0BE',
          coral: '#F79782',
        },
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wideEditorial: '0.08em',
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
};
