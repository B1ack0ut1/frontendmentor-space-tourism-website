/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // "padding-inline": "2em",
      // "max-width": "80rem",
      // "margin-inline": "auto",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: "var(--ff-serif)",
        "sans-cond": "var(--ff-sans-cond)",
        "sans-normal": "var(--ff-sans-normal)",
      },
    },
  },
  plugins: [],
};
