module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: {
          50: "#fcf8f3",
          thin: '#fcf4e9',
          light: '#f4a63b',
          dark: '#ee7b3d',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
