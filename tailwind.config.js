// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['TroisMilleBlack', "Helvetica", "Arial", "sans-serif"],
        sansLight: ['TroisMilleLight', "Helvetica", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
}
