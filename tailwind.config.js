/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#D61C4E',
        'grey': '#8e8e8e',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
