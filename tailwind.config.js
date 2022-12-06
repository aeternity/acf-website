/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Chivo", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#272361",
          secondary: "#C41B7B",
          accent: "#FDB71A",
        },
      },
      // {
      //   dark: {
      //     ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
      //     primary: "#272361",
      //     secondary: "#D660A2",
      //     accent: "#FCBE85",
      //     neutral: "#EF224B",
      //     "base-100": "#363636",
      //     "base-200": "#393597",
      //   },
      // },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
