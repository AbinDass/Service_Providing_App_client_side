/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        "800":"800px"
      },
      height:{
        "800":"800px"
      }
    },
  },
  plugins: [],
}
