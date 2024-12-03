import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'light-tan': '#faf5e4',
      'orange': '#f8b400',
      'dark-green': '#004445',
      'light-green': '#2c786c',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'white': '#f8f8f8',
    },
    fontFamily: {
      sans: ['var(--noto-font)'],
      serif: ['var(--fira-font)'],
      display: ['var(--display-font)'],
      cute: ['var(--cute-font)'],
      xl: ['var(--large-font)'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
