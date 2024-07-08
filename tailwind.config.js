/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'circular-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#457814', // Example custom green color
        secondary: '#D8345F', // Example custom red color
        accent: '#1FB6FF', // Example custom blue color
        // apne theme colors
        A: '#133D5A', // Indigo dye
        B: '#09111C', // Rich black
        C: '#788E8A', // Battleship gray
        D: '#266076', // Payne's gray
        E: '#A0DEE3', // Non Photo blue
        F: '#0F2C47', // Prussian blue
        G: '#ADD8E6', // Light blue
        H: '#30346D', // Space cadet
        I : '#353935' // Olive
      },
    },
  },
  plugins: [],
}