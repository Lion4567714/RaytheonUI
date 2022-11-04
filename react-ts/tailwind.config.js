/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,tsx}",
    "./src/resources/*.{js,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff'
      }
    },
  },
  plugins: [],
}
