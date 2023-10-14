/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      },
      colors: {
        'red': '#D72050',
        'dark-02': '#403F3F',
        'dark-03': '#706F6F',
        'dark-04': '#9F9F9F',
        'dark-07': '#F3F3F3',
      }
    }
  },
  plugins: [require('daisyui')],
}

