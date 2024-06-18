/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color" : "#73200e",
        "primary-color-dark" : "#392526",
        "accent" : "#fdcd66"
        
      },
      fontFamily:{
        'primary-font' : ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
}

