/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#dcf9f9",
        background: "#030707",
        primary: "#2ee58d",
        secondary: "#062323",
        accent: "#07f2f2",
        footer: "#101414",
      },
    },
  },
  plugins: [],
};
