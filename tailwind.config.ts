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
      'secondary':'#F8F560',
      'green':'#00FFA7',
      'grey':'#777777',
      'text':'#D1D1D1',
      'white':'#ffffff'
    },
    extend: {
      padding:{
        '5vw':'5vw',
      }
    },
    fontSize:{
      sm:'0.8rem',
      base:'1rem',
      xl:'1.563rem',
      '2xl':'2.7rem',
    },
    keyframes:{
      slide:{
        '0%':{transform :'translateX(-300px)'},
        '100%': {transform: 'translateX(0)'}
      }
    }
  },
  plugins: [],
};
export default config;
