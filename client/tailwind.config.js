module.exports = {
  content: ['./src/**/*.{html,js}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '425px',
      tablet: '768px',
      desktop: '1024px',
    },
    extend: {
      backgroundImage: {
        'bg-image': 'url("/src/assets/3.jpeg")',
      },
    },
  },
  plugins: [],
};
