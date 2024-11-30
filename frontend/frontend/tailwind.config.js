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
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

