/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBase: "#121212",
        bgCard: "#1e1e1f",
        borderDark: "#383838",
        accent: "#ffdb70",
        textGray: "#d6d6d6",
        textLight: "#fafafa",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 16px 30px hsla(0, 0%, 0%, 0.25)', 
      }
    },
  },
  plugins: [],
}