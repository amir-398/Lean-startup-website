import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "var(--green)",
        blue: "var(--blue)",
        orange: "var(--orange)",
        white: "var(--white)",
        white2: "var(--white-2)",
        white3: "var(--white-3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
