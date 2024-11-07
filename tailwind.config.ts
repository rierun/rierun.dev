import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "m-plus": "var(--font-m-plus-2)",
        "noto-sans": "var(--font-noto-sans-jp)"
      },
      colors: {
        "primary": "var(--color-primary)",
      }
    },
  },
  plugins: [],
};

export default config;
