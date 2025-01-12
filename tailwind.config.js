/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ['Abril Fatface', 'sans-serif']
      },
      colors: {
        primary: 'var(--primary-color)', // CSS Variable for primary color
        secondary: 'var(--secondary-color)', // CSS Variable for secondary color
        accent: 'var(--accent-color)', // CSS Variable for accent color
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
};
