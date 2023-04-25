/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-orange": "#FF5403",
        "dark-shade": "#31373d",
      },
    },
  },
  plugins: [],
};
