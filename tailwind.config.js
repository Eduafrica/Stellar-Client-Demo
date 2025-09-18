/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00BF63',
        'primary-600': '#008F4A',
        'black-200': '#EAECF0',
        'black-700': '#344054',
        'text-primary': '#384250',
        'text-secondary': '#4B5565',
        'gray-300': '#D0D5DD',
        'gray-700': '#344054',
        cream: '#f5f5f5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'small-phone': '480px',
        phone: '640px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
      },
    },
  },
  plugins: [],
};
