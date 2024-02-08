/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily:{
        NotoSansJP: "'NotoS-ans-JP', sans-serif",
        Raleway: "'Raleway', sans-serif"
      }
    },
  },
  plugins: [],
}

