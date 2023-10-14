/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-03': '#F4F3F0',
        'dark-01': '#374151'
      },
      fontFamily: {
        title: 'Rancho, cursive',
        main: 'Raleway, sans-serif'
      }
    },
  },
  plugins: [require('daisyui')],
}

