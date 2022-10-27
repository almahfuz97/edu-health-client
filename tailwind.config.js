/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {

    extend: {
      backgroundImage: {
        'app-bg': "url('/src/assets/bg2.jpg')",
      },
    }
  },
  plugins: [],
}
