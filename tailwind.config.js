/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ Resume.jsx include হয়েছে
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};