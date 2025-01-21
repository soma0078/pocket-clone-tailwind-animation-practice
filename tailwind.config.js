import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        autoScrollInfinite: {
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        autoScrollInfinite: "autoScrollInfinite 30s linear infinite",
        autoScrollInfiniteSlow: "autoScrollInfinite 50s linear infinite",
      },
    },
  },
  plugins: [],
};
