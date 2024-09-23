import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bp-en': 'Inconsolata'
      },
      fontSize: {
        'bp-h1': '64px',
        'bp-h2': '48px',
        'bp-h3': '24px',
        'bp-h4': '18px',
        'bp-body1': '18px',
        'bp-body2': '16px',
        'bp-caption': '12px',
      },
      colors: {
        bp: {
          blue: {
            1: '#0165FF',
            2: '#6F99FF',
            3: '#A2D8FF',
          },
          black: '#000000',
          gray: {
            1: '#666666',
            2: '#F2F7FE',
          },
          cyan: '#B0F2FF',
          purple: '#B489E6',
          'light-color': {
            1: '#E9F6FB',
            2: '#F8F9F4',
            3: '#F0F8F9',
            4: '#E8E9FB'
          }
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
