/* eslint-disable max-len */
import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF6EC",
        ink: "#171717",
        crayon: {
          blue: "#1E5ACB",
          yellow: "#F6B733",
          green: "#3FA34D",
          red: "#E84C3D",
        },
        pencil: "#D8D1C4",
      },
      fontFamily: {
        hand: ["var(--font-patrick-hand)", "Comic Neue", "cursive"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        scribble: ["var(--font-caveat)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wobble: {
          "0%,100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-1.6deg)" },
          "50%": { transform: "rotate(1.3deg)" },
          "75%": { transform: "rotate(-0.8deg)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        wobble: "wobble 0.45s ease-in-out",
        floaty: "floaty 5s ease-in-out infinite",
        "floaty-slow": "floaty 5.5s ease-in-out infinite",
      },
      maxWidth: {
        readable: "42rem",
      },
    },
  },
  plugins: [],
});
export default config;
