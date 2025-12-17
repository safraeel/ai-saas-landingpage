/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['system-ui', 'system-ui', 'sans-serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8eeff',
          200: '#b6ddff',
          300: '#84c4ff',
          400: '#4ca2ff',
          500: '#1f82ff',
          600: '#0460e5',
          700: '#0249b3',
          800: '#023a8c',
          900: '#062f6e',
        },
      },
      backgroundImage: {
        'app-gradient':
          'radial-gradient(circle at top left, rgba(56,189,248,0.22), transparent 55%), radial-gradient(circle at bottom right, rgba(129,140,248,0.30), transparent 55%), radial-gradient(circle at top right, rgba(236,72,153,0.14), transparent 55%)',
      },
      boxShadow: {
        soft: '0 22px 55px rgba(15,23,42,0.70)',
        glow: '0 0 60px rgba(59,130,246,0.75)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
