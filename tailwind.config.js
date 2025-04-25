/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        gold: '#C6A87D',
        crimson: '#8E354A',
        white: '#FFFFFF',
        
        // Additional color ramps
        primary: {
          100: '#E6DFD1',
          200: '#D5C8AF',
          300: '#C6A87D',
          400: '#B69059',
          500: '#A67D3B',
        },
        secondary: {
          100: '#DAC4C8',
          200: '#C29EA7',
          300: '#A97985',
          400: '#8E354A',
          500: '#722936',
        },
        neutral: {
          100: '#F7F7F7',
          200: '#E5E5E5',
          300: '#CCCCCC',
          400: '#999999',
          500: '#666666',
          600: '#333333',
          700: '#1A1A1A',
          800: '#0D0D0D',
        },
        success: {
          100: '#D1E7DD',
          300: '#75C687',
          500: '#198754',
        },
        warning: {
          100: '#FFF3CD',
          300: '#FFDA6A',
          500: '#FFC107',
        },
        error: {
          100: '#F8D7DA',
          300: '#F1AEB5',
          500: '#DC3545',
        },
      },
      fontFamily: {
        display: ['Minion Pro', 'serif'],
        body: ['Neue Haas Grotesk', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      maxWidth: {
        '7xl': '1440px',
      },
      zIndex: {
        '-10': '-10',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '800': '800ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};