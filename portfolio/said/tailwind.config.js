/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marron: '#463C32',
        pino: '#264653',
        negro: '#09060c',
        oscuro: '#222',
        gris: '#d7dad9',
        blanco: '#fff',
        amarillo: '#E9C46B',
        morado: '#787cef',
        verde: '#2A9D8E',
        oliva: '#8eedc6',
        rojo: '#E66F51',
      }
    },
  },
  plugins: [],
}