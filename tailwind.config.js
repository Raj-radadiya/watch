/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        tab: {
          max: '768px'
        },
        mob: {
          max: '576px'
        },
      },
      colors: {
        black: '#000000',
        white: 'rgba(255, 255, 255, 1)',
        gray: '#f2f2f2',
      },
      fontSize: {
        p: '8px',
      }
    },
  },
  plugins: [],
}