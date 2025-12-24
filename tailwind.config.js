/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8fd18f',
          400: '#5cb35c',
          500: '#3a9a3a',
          600: '#2b7b2b',
          700: '#256225',
          800: '#204f20',
          900: '#1c421c',
        }
      }
    },
  },
  plugins: [],
}