/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "570px",

      md: "770px",

      lg: "990px",
      xl: "1110px",
      
      xxl: "1300px",
    },
    extend: {},
  },
  plugins: [],
};

// const defaultTheme = require('tailwindcss/defaultTheme');

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         noto: ['"Noto Sans"', ...defaultTheme.fontFamily.sans]
//       }
//     }
//   },
// }
