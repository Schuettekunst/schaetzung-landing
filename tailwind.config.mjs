/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2332',
          50: '#f3f5f8',
          100: '#e3e8ef',
          200: '#c6d0df',
          300: '#9aabc4',
          400: '#6982a5',
          500: '#4a648a',
          600: '#3a4f72',
          700: '#2f4060',
          800: '#243149',
          900: '#1a2332',
          950: '#10172a',
        },
        accent: {
          DEFAULT: '#b8935e',
          50: '#faf6ee',
          100: '#f3e9d3',
          200: '#e8d2a8',
          300: '#dab57b',
          400: '#cf9f5d',
          500: '#b8935e',
          600: '#a07744',
          700: '#825e38',
          800: '#6b4d31',
          900: '#5a402b',
        },
        cream: '#f8f5ef',
        ink: '#2a2a2a',
        muted: '#6b6b6b',
        border: '#e6dfd1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        content: '1200px',
        prose: '70ch',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
      },
      letterSpacing: {
        wider2: '0.16em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(26, 35, 50, 0.04), 0 8px 32px rgba(26, 35, 50, 0.06)',
        soft: '0 2px 12px rgba(26, 35, 50, 0.05)',
      },
      borderColor: {
        DEFAULT: '#e6dfd1',
      },
    },
  },
  plugins: [],
};
