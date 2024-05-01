/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '14px',
              medium: '16px',
              large: '18px',
            },
            borderWidth: {
              small: '1px',
              medium: '1px',
              large: '2px',
            },
          },
          colors: {
            white: '#FFFFFF',
            black: '#000000',
            background: '#000000',
            foreground: '#ECEDEE',
            primary: {
              DEFAULT: '#BEF264',
              foreground: '#000000',
            },
            focus: '#BEF264',
          },
        },
      },
    }),
  ],
}
