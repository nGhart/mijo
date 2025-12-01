/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: { 200: "#ffffff", 500: "#1D4ED8" }, // replace with your custom color
        secondary: "#F43F5E", // replace with your custom color
      },
    },
  },
  plugins: [],
};
