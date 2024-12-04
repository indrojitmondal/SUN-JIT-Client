/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header_bg: '#324765',
        
     },
     backgroundImage: {
       profileBg: "url('/bg.jpg')",

     }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

