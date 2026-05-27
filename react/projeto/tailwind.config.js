/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['Georgia', 'serif'], // Criamos a classe 'font-titulo'
        corpo: ['Helvetica', 'Arial', 'sans-serif'], // Criamos a classe 'font-corpo'
      },
    },
  },
  plugins: [],
}