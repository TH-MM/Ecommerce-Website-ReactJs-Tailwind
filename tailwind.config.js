/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        oxygen : ['Alegreya Sans SC' , ...defaultTheme.fontFamily.sans],
        lato : ['Lato' , ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

