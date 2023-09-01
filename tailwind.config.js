/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#A67b56",
        darkGreen: "#038c33",
        lightGreen: "#03a63c",
        milk: "#f2f2f2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        logoFont: ["Patrick Hand", "cursive"],
      },
      backgroundImage:{
        'deal': "url('./public/n1.JPG')",
        'hero':"url('./public/afomia_bg.jpg')",
        'afomia_message': "url('./public/afomia_message.jpg')"
      }
    },
  },
  plugins: [],
};