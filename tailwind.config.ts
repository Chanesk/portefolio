import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColors',
      'main':'#171719',
      'secondary':'F8F560',
      'green':'#00FFA7',
      'grey':'#777777',
      'text':'#D1D1D1'
    },
    extend: {
      padding:{
        '5vw':'5vw',
      }
    },
  },
  plugins: [],
};
export default config;
