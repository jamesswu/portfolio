/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#DCEEFB",
          200: "#B6E0FE",
          300: "#84C5F4",
          400: "#62B0E8",
          500: "#4098D7",
          600: "#2680C2",
          700: "#186FAF",
          800: "#0F609B",
          900: "#0A558C",
          950: "#003E6B",
        },
        grey: {
          100: "#F0F4F8",
          200: "#D9E2EC",
          300: "#BCCCDC",
          400: "#9FB3C8",
          500: "#829AB1",
          600: "#627D98",
          700: "#486581",
          800: "#334E68",
          900: "#243B53",
          950: "#102A43",
        },
        cyan: {
          100: "#E0FCFF",
          200: "#BEF8FD",
          300: "#87EAF2",
          400: "#54D1DB",
          500: "#38BEC9",
          600: "#2CB1BC",
          700: "#14919B",
          800: "#0E7C86",
          900: "#0A6C74",
          950: "#044E54",
        },
      },
    },
  },
  plugins: [],
};
