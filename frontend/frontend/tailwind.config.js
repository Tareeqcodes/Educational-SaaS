const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        peach: '#FFDAB9',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'], 
      },
      borderRadius: {
        'custom-bl': '10px', 
      },
      keyframes:{
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slideIn 1s ease-in-out',
      },
      
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

