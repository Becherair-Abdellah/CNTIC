/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "#E9E9E9",
        PostsBg: "#e1e1e1",
        blue: "#3067B1",
        white: "#ffffff",
        primaryColor: "#025EBF",
        secondaryColor: "#D1D1D1",
        titleColor: "rgb(30 103 189)",
      },
      screens:{
        'lo':'330px',
        },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        Playpen: ["Playpen Sans", "cursive"],
      },
      
      gridTemplateColumns: {
        custom: "35% auto",
        customMd: "25% auto",
        customXl: "40% auto",
        manyCustom : "20% 20% 20% 15% 20% 5%"
      },
      width:{
        cuWidth : 'calc(100% - 70px)',
      }
    },
  },
  plugins: [],
};
