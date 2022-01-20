// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(0, 100%, 74%)",
        Green: "hsl(154, 59%, 51%)",
        Blue: "hsl(248, 32%, 49%)",
        DarkBlue: "hsl(249, 10%, 26%)",
        GrayishBlue: "hsl(246, 25%, 77%)",
      },
      backgroundImage: {
        Desktop: `url("./images/bg-intro-desktop.png")`,
        Mobile: `url("./images/bg-intro-mobile.png")`,
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
