/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { .`.. }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'pm-700': '#B54204',
      'pm-600': '#D94F04',
      'pm-550': '#F25A2B',
      'pm-500': '#FF5D05', // text-pm-500
      'pm-450': '#FF6F42',
      'pm-400': '#FFF3ED',
      'pm-300': '#FFEFE6',
      'sc-800': '#6F7B0D',
      'sc-700': '#8A9910',
      'gr-800': '#3A3D40',
      'gr-700': '#505458',
      'gr-600': '#8E9398',
      'gr-500': '#B5B9BD',
      'gr-400': '#D4D8DC',
      'gr-200': '#E2E5E8',
      'gr-100': '#ECEEF0',
      'gr-50': '#F3F4F5',
      white: '#ffffff',
      black: '#000000',
      'black-100': '#252729',
      red: '#EB003B',
      'red-800': '#D50136',
      'red-100': '#FEECF0',
    },
    fontFamily: {
      pretendard: ['Pretendard', 'sans-serif'],
    },
    fontSize: {
      10: '.625rem', // text-12
      12: '0.75rem', // text-12
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
        4: '.25rem',
        6: '.375rem',
        8: '.5rem',
        10: '.625rem',
        12: '0.75rem', // p-12, m-12, w-12, h-12
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        28: '1.75rem',
        32: '2rem',
      },
      borderRadius: {
        2: '.125rem', // rounded-4
        4: '0.25rem', // rounded-4
        6: '0.375rem',
        8: '.5rem',
        12: '0.75rem',
        16: '1rem',
        20: '1.25rem',
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
