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
          //pink
          // accent: "#F1E2E6",
          accent: "#ede1f5",
          // yellow
          // accent: "#F9DA40",
          // accent: "#F8E600",
          // blue
          // accent: "#b3e2ff",
          accent: "#d2eefd",
          // accent: "#E6F1F8",
          // grey
          // accent: "#A7C0CC",
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
