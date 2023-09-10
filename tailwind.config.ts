import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        caramel: "#FFFAF5",
      },
      height: {
        "800": "800px",
      },
      fontSize: {
        "2xs": "9px",
      },
    },
  },
  plugins: [],
};
export default config;
