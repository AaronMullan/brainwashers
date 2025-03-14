/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tr808: {
          red: '#FF0000', // Record button red
          orange: '#FFA500', // Play button orange
          yellow: '#FFD700', // Tempo control yellow
          green: '#00FF00', // Start/Stop button green
          blue: '#0000FF', // Pattern select blue
          black: '#000000', // Main body black
          white: '#FFFFFF', // Text and accents
          gray: '#808080', // Secondary text and controls
          'light-gray': '#D3D3D3', // Background and inactive elements
        },
      },
    },
  },
  plugins: [],
};
