import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18211F",
        petroleum: "#285C5A",
        deep: "#143C3A",
        sage: "#82958C",
        porcelain: "#F7F5F0",
        bone: "#EEEAE1",
        champagne: "#B89B5E",
        mist: "#E7E4DD",
        whatsapp: "#25D366",
        instagram: "#C13584"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 70px rgba(24, 33, 31, 0.12)",
        cta: "0 18px 45px rgba(20, 60, 58, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
