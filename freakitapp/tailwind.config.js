/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'cus': '860px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    extend: {
      colors: {
        'purpleF': '#66539D',
        'blueF': '#88BAD2',
        'blackF': '#262039',
        'lightF': '#F5F3FF',
        'redF': '#FF6969',
      },
      borderColor: {
        'purpleF': '#66539D',
        'blueF': '#88BAD2',
        'blackF': '#262039',
        'lightF': '#F5F3FF',
        'redF': '#FF6969',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#66539D",
          "secondary": "#88BAD2",
        "accent": "#1fb2a6",
          "neutral": "#262039",
          "base-100": "#F5F3FF",
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",
          "error": "#FF6969",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}