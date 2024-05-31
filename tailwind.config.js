import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            focus: "#fbae3c",
            primary: {
              100: "#defacd",
              200: "#c0f5a1",
              300: "#97eb6b",
              400: "#67db2d",
              500: "#52c41e",
              600: "#3d9c14",
              700: "#2f7714",
              800: "#2a5e16",
              900: "#265017",
              DEFAULT: "#52c41e",
            },
            secondary: {
              100: "#feeac7",
              200: "#fdd38a",
              300: "#fbae3c",
              400: "#fa9b25",
              500: "#f4770c",
              600: "#d85407",
              700: "#b3360a",
              800: "#922a0e",
              900: "#78230f",

              DEFAULT: "#fbae3c",
            },
          },
        },
        dark: {
          colors: {
            background: "#181818",
            focus: "#fbae3c",
            base: { primary: "#52c41e", secondary: "#fbae3c" },
            primary: {
              100: "#265017",
              200: "#2a5e16",
              300: "#2f7714",
              400: "#3d9c14",
              500: "#52c41e",
              600: "#67db2d",
              700: "#97eb6b",
              800: "#c0f5a1",
              900: "#defacd",
              DEFAULT: "#52c41e",
            },

            secondary: {
              100: "#78230f",
              200: "#922a0e",
              300: "#b3360a",
              400: "#d85407",
              500: "#f4770c",
              600: "#fa9b25",
              700: "#fbae3c",
              800: "#fdd38a",
              900: "#feeac7",
              DEFAULT: "#fbae3c",
            },
          },
        },
      },
    }),
  ],
};
