import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "lg-1": "1295px",
        "lg-2": "1655px",
        "lg-3": "1410px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brown-1": "#67594D",
        "brown-2": "#6A5D4E",
        "brown-3": "#7E654A",
        "brown-4": "#624E39",
        "brown-5": "#594D3F",
        "brown-6": "#564B40",
        "brown-7": "#787067",
        "brown-8": "#675D53",
        "brown-9": "#6A6A6A",
        "brown-10": "#ada49a",
        "brown-11": "#B19D89",
        "white-1": "#FFFCFA",
        caramel: "#FFFAF5",
        "caramel-2": "#FFF8F0",
        "caramel-3": "#FCF9F7",
        "caramel-4": "#FEF9F4",
        "caramel-5": "#F8EBDE",
        "caramel-6": "#F8F0E7",
        "caramel-7": "#f7f4f0",
        "caramel-8": "#FFF7EE",
        "caramel-9": "#FBF7F3",
        "caramel-10": "#F8F0E8",
        "caramel-11": "#faf4ed",
        "gray-1": "#888585",
      },
      height: {
        "800": "800px",
        "600": "600px",
        "500": "500px",
      },
      minHeight: {
        "500": "500px",
        "100": "100px",
        "200": "200px",
        "300": "300px",
        "400": "400px",
        "600": "600px",
        "700": "700px",
      },
      maxWidth: {
        "40": "40px",
      },
      minWidth: {
        "32": "32px",
      },
      fontSize: {
        "2xs": "8px",
        "lg-1": ".90rem",
        "lg-2": ".80rem",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [],
};
export default config;
