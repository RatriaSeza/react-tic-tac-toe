/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        lightblue: '#ADD8E6'
      },
      boxShadow: {
        box: '4px 4px 0px 0px black',
        'box-active': '0px 0px black',
      }
    },
  },
  plugins: [],
}

