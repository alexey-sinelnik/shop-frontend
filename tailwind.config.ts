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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        newsletter: "url('../assets/images/home/newsletter.png')",
        shopHero: "url('../assets/images/shop/hero/hero.png')",
        authImage: "url('../assets/images/login/auth-image.png')"
      },
      colors: {
        gray: "#F3F5F7",
        black: "#141718",
        green: "#38CB89",
        blue: "#377DFF"
      }
    }
  },
  plugins: [],
};
export default config;
