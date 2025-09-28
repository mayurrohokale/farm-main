/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
       serif: ['Merriweather', 'Georgia', 'ui-serif', 'serif'],
       slab: ['"Roboto Slab"', 'ui-serif', 'serif'],
     },
    },
  },
  plugins: [],
};
