/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "project.html", "Education.html", "about.html"],
  theme: {
    extend: {
      gridTemplateRows:{
        'layout' : '0.5fr 1fr 0.5fr'
      },
      colors: {
        primary: '#392061',
        phover: '#12032B',
        secondary: '#F0F2A6',
        third: '#0A0C1B',
        cream: '#AA6373',
        Text: '#F2F8E5',
        border: '#2D1E2F',
        jendela: '#1A1B25'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        sofia: ['Sofia']
        
      }
    },
  },
};

