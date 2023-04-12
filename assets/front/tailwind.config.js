const Encore = require('@symfony/webpack-encore');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '70ch',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#1d211d',
        'dark-black': '#000000',
        gray: '#4f5154',
        'light-gray': '#E0E0E0',
        beige: '#f5dec8',
        orange: '#ec7f00',
        'dark-orange': '#B05E00',
        pink: '#b4657f',
        'dark-pink': '#682c46',
        'dark-blue': '#20656c',
        blue: '#327c80',
        'light-blue': '#AECFC7',
      },
      backgroundImage: {
        'portrait': "url('./images/portrait.png')",
      },
      backgroundSize: {
        '50': '50%',
        '30': '30%',
      },
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: Encore.isProduction(),
}
