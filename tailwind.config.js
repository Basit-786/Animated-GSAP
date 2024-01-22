/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightWhite: "#F4F4F4",
        lightBlack: "#313434",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "1260px",
        // => @media (min-width: 960px) { ... }

        lg: "1500px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
