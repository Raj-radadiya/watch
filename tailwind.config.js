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

        yellow: {
          100: "#fff0f4",
          200: "#ffe1e8",
          300: "#ffd1dd",
          400: "#ffc2d1",
          500: "#ffb3c6",
          600: "#cc8f9e",
          700: "#996b77",
          800: "#66484f",
          900: "#332428"
        },
      }
    },
  },
  plugins: [],
}