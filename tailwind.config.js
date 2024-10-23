/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      screens: {
        'custom925': '925px', 
        'custom764': '764px', 
        'custom640': '640px' // Combine this with the previous screens object
      },
    },
  },
  plugins: [],
}
