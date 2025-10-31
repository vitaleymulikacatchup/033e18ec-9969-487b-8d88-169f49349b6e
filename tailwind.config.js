/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'rae-orange': '#d2541d',
        'rae-orange-light': '#e86a3a',
        'rae-orange-dark': '#b8441a',
        'rae-red': '#c53030',
        'rae-gray': '#f7fafc',
        'rae-text': '#2d3748',
        'rae-text-light': '#718096'
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}