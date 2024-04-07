const { BiFontFamily } = require('react-icons/bi')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes:{
        scale:{
          "0%,100%": {transform: 'scale(0.9)'},
          "50%": {transform: 'scale(1.1)'},
        }
      },
      animation:{
        scale: 'scale 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

