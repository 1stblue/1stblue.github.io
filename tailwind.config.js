const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="light"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './docs/**/*.{md,mdx,tsx}'],
  jit: true,
  theme: {
    extend: {
      zIndex: {
        modal: 100
      },
      colors: {
        discord: '#5865F2',
        twitter: '#00AAEC',
        bluepipe: {
          red: '#FF4C4D',
          orange: '#FF9933',
          yellow: '#FFBF00',
          green: '#1FAD66',
          'green-alt': '#26D97F',
          cyan: '#0FBDBD',
          'cyan-alt': '#47EBEB',
          blue: '#0080FF',
          'blue-alt': '#6EB3F7',
          indigo: '#3333FF',
          'indigo-alt': '#8080FF',
          purple: '#8000FF',
          'purple-alt': '#B366FF',
          pink: '#ED5EC9',
          bg: '#0A0A29',
          kdb: '#DBDBF0',
          'bg-alt': '#262640',
          'link-dark': '#6EB3F7',
          'link-light': '#0080FF',
          'landing-tile-icon-border': '#4D4DB2',
          'landing-playground-border': '#4D4DB2',
          'landing-tile-image-border': '#272762',
          'landing-footer-bg': '#0F0F3D',
          'landing-footer-border': '#2E2E78',
          'walkthrough-button-bg': '#4D4DB2',
          'walkthrough-button-alt-bg': '#474E6B',
          'pricing-table-alt-dark': '#181927',
          'pricing-table-alt': '#F4F8FB'
        },
        gray: {
          0: '#FFFFFF',
          50: '#F4F8FB',
          100: '#EDF2F7',
          200: '#DEE5ED',
          300: '#CFD7E2',
          400: '#A3ADC2',
          450: '#808080',
          500: '#6C7793',
          600: '#474E6B',
          700: '#303450',
          800: '#1D1E30',
          900: '#14141F',
          1000: '#000000'
        }
      },
      fontFamily: {
        sans: ['var(--primary-font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.serif],
        disket: ['Disket Mono', ...defaultTheme.fontFamily.mono],
        inter: ['Inter', ...defaultTheme.fontFamily.serif],
        'jetBrains-mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      }
    },
    screens: {
      ...defaultTheme.screens,
      'content-sm': '480px',
      'content-md': '656px',
      'content-2xl': '864px',
      'content-4xl': '1536px',
      'header-sm': '640px',
      'header-md': '1200px',
      'landing-content': '944px',
      'landing-xs': '360px',
      'landing-sm': '720px',
      'landing-md': '960px',
      'landing-lg': '1296px',
      'landing-xl': '1440px',
      'landing-footer': '1264px',
      'pricing-content-sm': '640px',
      'pricing-content': '960px',
      'blog-sm': '688px',
      'blog-md': '1000px',
      'blog-lg': '1280px',
      'blog-max': '1408px',
      'blog-xl': '1440px',
      'blog-2xl': '1584px',
      walkthrough: '976px'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('daisyui'),
    plugin(({ addVariant }) => {
      addVariant('light', `[data-theme="light"] &`);
    })
  ],
  corePlugins: {
    // preflight: false,
  }
};

