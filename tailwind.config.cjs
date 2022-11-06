/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      santander: '#ec0000',
      boston: '#cc0000',
      ruby: '#990000',
      sky: '#deedf2',
      mediumSky: '#cddee7',
      darkSky: '#9bc3d3',
      lighterGrey: '#f0f0f0',
      lightGrey: '#cccccc',
      mediumGrey: '#767676',
      darkGrey: '#444444',
      darkerGrey: '#222222',
    },
  },
  plugins: [],
}
