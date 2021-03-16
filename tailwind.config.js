const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
      colors: {
        blue: colors.lightBlue,
        gray: colors.blueGray,
        green: colors.emerald,
        red: colors.rose,
        white: "#ffffff",
        black: "#06090F",
        contrast: {
          lower: "#f0f6fc",
          low: "#c9d1d9",
          medium: "#8b949e",
          high: "#161b22",
          higher: "#0D1117",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
