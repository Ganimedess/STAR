/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amarillo: '#E9C46B',
        purpura: '#787cef',
        rojo: '#E66F51',
        azul: '#2A9D8E',
        verde: '#79DDB3',
      }
    },
  },
  plugins: [],
}

