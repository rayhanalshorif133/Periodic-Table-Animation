/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '200': '2',
      }
    },
  },
  plugins: [],
}