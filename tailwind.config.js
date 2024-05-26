/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        
    },
  },
  plugins: [
   
    function ({ addUtilities }) {
      addUtilities(
        {
          '.bg-primary': {
            backgroundColor:'#1e3a8a',
          },
          '.bg-secondary':{
            backgroundColor:"#1d4ed8"
          }
          
        },
        ['responsive']
      )
    },


  ],
}

