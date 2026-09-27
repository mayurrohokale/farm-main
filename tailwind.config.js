/** @type {import('tailwindcss').Config} */
// Rohokale Farm brand tokens — see docs/DESIGN_LANGUAGE.md
const leaf = {
  50: '#F1F7EC',
  100: '#DDEDD2',
  200: '#BCDBA7',
  300: '#9CCB5B',
  400: '#6FAE4A',
  500: '#4A9540',
  600: '#2F7D3A',
  700: '#24652F',
  800: '#1C4F27',
  900: '#14301F',
  950: '#0C1F14',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        leaf,
        // Legacy pages (privacy / terms) use `green-*`; alias it to the brand scale.
        green: leaf,
        forest: '#14301F',
        keshar: { 50: '#FDF5E7', 100: '#FAE6C2', 300: '#F2C06A', 400: '#EDAF4F', 500: '#E9A23B', 600: '#C9832A', 700: '#9E6420' },
        onion: { 100: '#F6DDE6', 300: '#D9819F', 500: '#A83A5E', 600: '#8C2D4D', 700: '#6E223C' },
        soil: { 300: '#A98468', 500: '#6B4A36', 700: '#4A3226' },
        cream: { 50: '#FCFAF5', 100: '#F7F2E8', 200: '#EFE6D4', 300: '#E3D6BD' },
        ink: '#1B1A17',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'ui-serif', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: { site: '82rem' },
      borderRadius: { '4xl': '2rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(20,48,31,.04), 0 8px 24px -8px rgba(20,48,31,.12)',
        lift: '0 2px 4px rgba(20,48,31,.06), 0 24px 48px -16px rgba(20,48,31,.28)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        kenburns: { '0%': { transform: 'scale(1.02) translate(0,0)' }, '100%': { transform: 'scale(1.14) translate(-1.5%,-1%)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        sway: { '0%,100%': { transform: 'rotate(-4deg)' }, '50%': { transform: 'rotate(4deg)' } },
        progress: { from: { transform: 'scaleX(0)' }, to: { transform: 'scaleX(1)' } },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        scrollcue: { '0%': { transform: 'translateY(0)', opacity: 0 }, '30%': { opacity: 1 }, '100%': { transform: 'translateY(14px)', opacity: 0 } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        kenburns: 'kenburns 9s ease-out forwards',
        floaty: 'floaty 6s ease-in-out infinite',
        sway: 'sway 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 28s linear infinite',
        scrollcue: 'scrollcue 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
