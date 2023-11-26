/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    screens: {
      // === Punya Nizar
      'sm': '500px',
      // => @media (min-width: 500px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    colors: {

      // === Punya Nizar
      background1 :'#F1F8FF',
      white: '#FFFFFF',
      button: '#1D764A',
      button2: '#DBEEFE',
      font1: '#FFF',
      danger: "#ff0000"
    },

    fontFamily: {
      // === Punya Nizar
      'Lora': ['Lora'],
      'Poppins': ['Poppins'],

     
    },

    
  },
  plugins: [],
}

