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
        grayHover: '#7c7c7c',
        borderGray: '#e5e5e5',
        indigo: '#808080',
        textGray: '#555555',
        spanGray: '#777777',
      },
      fontSize: {
        p: '8px',
        button: '16px'
      },
    },
  },
  plugins: [],
}