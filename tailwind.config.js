/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1232px",
    },
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif;",
        poppins: "'Poppins', sans-serif;",
      },
    },
    container: {
      padding: {
        DEFAULT: "16px",
      },
      center: true,
    },
  },
  plugins: [],
};
