/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'pm-500': '#FF5D05', // text-pm-500
      'pm-700': '#B54204',
      'sc-700': '#8A9910',
      'sc-800': '#6F7B0D',
      'gr-800': '#3A3D40',
      'gr-700': '#505458',
      'gr-600': '#8E9398',
      'gr-500': '#B5B9BD',
      'gr-50': '#F3F4F5',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      pretendard: ['Pretendard', 'sans-serif'],
    },
    fontSize: {
      12: '0.75rem', // font-12
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
    },
    fontWeight: {
      regular: '400', // font-400
      semi: '600',
      bold: '800',
    },
    extend: {
      spacing: {
        13: '3.25rem', // p-13, m-13, h-13
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        'br-4': '0.25rem',
        'br-6': '0.375rem',
        'br-12': '0.75rem',
        'br-16': '1rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        // '.btn': {
        //   padding: '.5rem 1rem',
        //   borderRadius: '.25rem',
        //   fontWeight: '600',
        // },
        // '.btn-blue': {
        //   backgroundColor: '#3490dc',
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#2779bd',
        //   },
        // },
        // '.btn-red': {
        //   backgroundColor: '#e3342f',
        //   color: '#fff',
        //   '&:hover': {
        //     backgroundColor: '#cc1f1a',
        //   },
        // },
      });
    }),
  ],
  important: true,
};
