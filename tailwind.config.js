import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        autoScrollTop: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        autoScrollBottom: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        autoScrollTop: "autoScrollTop 30s linear infinite",
        autoScrollBottom: "autoScrollBottom 50s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse": "spin 5s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
