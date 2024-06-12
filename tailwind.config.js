/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#E48700',
        'accent': '#FFF4E3',
        'secondary': '#ecbc76'
      }
    },
  }, 
  plugins: [],
}

