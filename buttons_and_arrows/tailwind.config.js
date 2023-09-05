/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        purple900: '#0B0911',
        purple800: '#130F1E',
        purple600: '#1C162C',
        purple500: '#8257E5',
        purple200: '#3C3748',
        purple100: '#6A617F',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [],
};
