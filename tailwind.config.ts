import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Define um novo breakpoint para telas até 350px
        ms: "350px", // Define um novo breakpoint para telas até 350px
        xl: "1440px"
      },
      maxWidth: {
        container: "1440px",
      },
      boxShadow: {
        custom: "0 3px 6px rgba(0,0,0,0.16)",
      },
      colors: {
        background: "#ffffff",
        foreground: "#001e62",
        bglight500: "#e4e5f3",
        bglight300: "#E0E1F1",
        bglight100: "#e4e5f380",
        bgbluemedium: "#485cc7",
        dark: {
          background: "#0a0a0a",
          foreground: "#ededed",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
