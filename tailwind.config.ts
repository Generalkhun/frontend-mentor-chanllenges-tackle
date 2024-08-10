import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '375px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "recipe-page": {
          "white": {
            100: '#FFFFFF'
          },
          "stone": {
            100: "hsl(30, 54%, 90%)",
            150: "hsl(30, 18%, 87%)",
            600: "hsl(30, 10%, 34%)",
            900: "hsl(24, 5%, 18%)",
          },
          "brown": {
            800: "hsl(14, 45%, 36%)"
          },
          'rose': {
            800: "hsl(332, 51%, 32%)",
            50: "hsl(330, 100%, 98%)",
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
