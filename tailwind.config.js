module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f7f8fa",
          100: "#f5f5f5",
          300: "#dadddd",
          400: "#b7b0b0",
          500: "#b2abab",
          600: "#787486",
          700: "#606060",
          900: "#0d062d",
          "50_01": "#fafafa",
          "500_01": "#a3a3a3",
          "900_02": "#22242c",
          "600_01": "#737373",
          "900_01": "#26282c",
          "300_03": "#e6e6e6",
          "300_02": "#e1dfdf",
          "300_01": "#d9dcdc",
        },
        blue_gray: {
          50: "#ebecf2",
          300: "#9ca4ab",
          400: "#898989",
          700: "#525252",
          800: "#3a3f51",
          900: "#292d32",
          "50_01": "#edf2f7",
          "50_02": "#edf2f5",
        },
        light_blue: { 300: "#54c5eb" },
        red: { 400: "#ed544e", A200: "#ff4a55", "400_1e": "#ed544e1e" },
        green: { 400: "#66c87b" },
        teal: { 300: "#34caa5", "300_1e": "#34caa51e" },
        black: { 900: "#000000", "900_19": "#00000019" },
        indigo: { 50: "#e5eaef", 400: "#6160dc" },
        orange: { 300: "#ffb64a" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { plusjakartasans: "Plus Jakarta Sans", inter: "Inter" },
      boxShadow: { bs: "2px 4px  8px 0px #00000019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
