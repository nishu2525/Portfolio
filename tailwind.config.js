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
      colors:{
        "primary":"#0A192F",
        "secondary":"#F97316",
        "tertiary":"#54D6BB",
        "teal":"#008080"
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

