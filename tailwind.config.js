/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to scan all component files for Tailwind classes
    "./components/**/*.{jsx,js,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F4557",
        secondary: "#35374B",
        error: "#D21312",
      },
    },
  },
  plugins: [],
};
