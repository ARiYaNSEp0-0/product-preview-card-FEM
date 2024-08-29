/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      screen: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "very-dark-cyan": "hsl(162, 39%, 20%)",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        serif: ['"Fraunces"', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        card: "37.5rem",
      },
      fontSize: {
        "3/5xl": "2rem",
      },
    },
  },
  plugins: [],
};
