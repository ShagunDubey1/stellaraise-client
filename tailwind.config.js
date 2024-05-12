/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

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
            text: '#bfbfbf',
            white: '#FFFFFF',
            black: '#000000',
            sidebar: '#1E1E1F',
            background: '#232326',
            foreground: '#ECEDEE',
            primary: {
              DEFAULT: '#b4da61',
              foreground: '#000000',
            },
            focus: '#BEF264',
          },
        },
      },
    }),
  ],
}
