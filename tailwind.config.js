import { color } from "framer-motion";

// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '20px', 
      },
      backgroundImage: {
        'main-bg': "url('./src/assets/background/bg.png')",
      },
      button: {
        fontFamily: 'font-inter',
        fontSize: 'text-custom-30',
        fontWeight: 'font-regular',
        lineHeight: 'leading-custom-36',
        textAlign: 'text-left',
        color:'#000000'
      },
    },
  },
  plugins: [],
}
