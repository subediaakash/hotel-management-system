import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ['"Oswald"', ...defaultTheme.fontFamily.sans],
        Playwrite: ["Playwrite CU", ...defaultTheme.fontFamily.sans],
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        Inconsolta: ["Inconsolata", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
