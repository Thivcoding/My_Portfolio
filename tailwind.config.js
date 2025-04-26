/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
      keyframes: {
        scaleFade: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        scaleFade: 'scaleFade 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

