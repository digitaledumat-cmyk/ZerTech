/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#09090b',
        cardBg: 'rgba(255, 255, 255, 0.03)',
        primary: '#2563eb', // Bleu Royal
        accent: '#f97316', // Orange léger
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
