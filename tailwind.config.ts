import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          brand: "#FF4D9E",
          deep: "#E91E8C",
          soft: "#FFD6EC",
          blush: "#FFF0F7",
          pale: "#FFF8FC",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #FFF8FC 0%, #FFD6EC 40%, #FF4D9E22 100%)",
        "hero-radial":
          "radial-gradient(ellipse at 70% 50%, #FF4D9E18 0%, transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
