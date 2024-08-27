/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to scan all component files for Tailwind classes
    "./components/**/*.{jsx,js,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
