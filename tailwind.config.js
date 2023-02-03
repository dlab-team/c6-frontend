module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    minHeight: {
      minH: "calc(100vh - 100px)",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
      poppins: ["Poppins", "sans-serif;"],
    },
    extend: {
      backgroundImage: {
        hero: "url('./assets/images/backgroundRegisterLogin.png')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2738f5",
          secondary: "#e2f2fe",
          accent: "#008ff7",
          darkBlue: "#140b34",
          black: "#000000",
          white: "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
