import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blackribbon": "#222222"
      },
      fontFamily: {

        rubik: ['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
