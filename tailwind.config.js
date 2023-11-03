/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bodyBg: "#E9E9E9",
                PostsBg: "#e1e1e1",
                primaryColor: "#025EBF",
                secondaryColor: "#D1D1D1",
            },
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
                Playpen: ["Playpen Sans", "cursive"],
            },
            gridTemplateColumns: {
                custom: "35% auto",
                customMd: "25% auto",
                customXl: "40% auto",
            },
        },
    },
    plugins: [],
  }