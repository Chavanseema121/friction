/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveline: {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
        movedown: {
          '0%': {
            opacity: '1',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        endAnimation: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        moveline: 'moveline 6s linear forwards',
        movedown: 'movedown 2s linear forwards',
        endAnimation: 'endAnimation 6s forwards',
        fadeInLeft: 'fadeInLeft 1s ease forwards',
        fadeInRight: 'fadeInRight 1s ease forwards',
      },
      animationDelay: {
        '0s': '0s',
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
        '5s': '5s',
        '6s': '6s',
        '7s': '7s',
        '8s': '8s',
        '9s': '9s',
      },
    },
  },
  plugins: [],
}
