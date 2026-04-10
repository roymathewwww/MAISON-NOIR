/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        white: '#fafafa',
        gold: {
          DEFAULT: '#c9a96e',
          light: '#e8d5b0',
          dark: '#a07840',
        },
        ink: {
          900: '#0a0a0a',
          800: '#111110',
          700: '#1a1816',
          600: '#2a2926',
          500: '#444441',
          400: '#6b6860',
          300: '#b0ada6',
          200: '#e8e6e1',
          100: '#f5f4f2',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.4em',
        wider: '0.2em',
        wide: '0.1em',
      },
    },
  },
  plugins: [],
}
