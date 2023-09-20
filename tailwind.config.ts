import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        grey: "#181818",
        gray: "#242424",
        lightgray: "#989898",
        lightgrey: "#FCFCFC",
        ash: "#d8d8d8",
      },
    },
  },
  plugins: [],
};
export default config;
