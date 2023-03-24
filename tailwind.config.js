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
        sans: ["Montserrat"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#AA67AB",
          secondary: "#E02ACE",
          accent: "#57C8DF",
          neutral: "#516B78",
          "base-100": "#FFFFFF",
          info: "#49BAEA",
          success: "#34AD9D",
          warning: "#FBBD23",
          error: "#F87272",
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
