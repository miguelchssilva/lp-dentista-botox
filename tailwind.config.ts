import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E252B",
        petroleum: "#082D33",
        deep: "#06292F",
        sage: "#82958C",
        porcelain: "#F8F7F5",
        bone: "#EEE9DF",
        champagne: "#C7A77A",
        mist: "#ECE8E0",
        whatsapp: "#25D366",
        instagram: "#C13584"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 20px 70px rgba(14, 37, 43, 0.12)",
        cta: "0 18px 45px rgba(6, 41, 47, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
