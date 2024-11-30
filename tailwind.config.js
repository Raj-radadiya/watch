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
        blue: {
          100: "#d1eae7",
          200: "#a3d5cf",
          300: "#75bfb8",
          400: "#47aaa0",
          500: "#199588",
          600: "#14776d",
          700: "#0f5952",
          800: "#0a3c36",
          900: "#051e1b"
        },
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