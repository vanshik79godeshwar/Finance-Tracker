
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
      fontFamily: {
        Lobster: ['Lobster', 'cursive'],
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
        I: '#353935', // Olive
        // new colors
        Black: '#1e1e1e',
        DarkGray: '#2a2a2a',
        Blue: '#007acc',
        LightBlue: '#00aaff',
        White: '#ffffff',
        LightGray: '#cccccc',
        Green: '#4caf50',
        Red: '#f44336',
      },
      boxShadow: {
        'floating': '0 4px 8px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 165, 0, 0.5)',
      },
      animation: {
        'border-animate': 'border-animate 3s infinite',
      },
      keyframes: {
        'border-animate': {
          '0%': {
            borderColor: 'transparent',
            transform: 'translate(0, 0)',
          },
          '25%': {
            borderColor: '#FFA500',
            transform: 'translate(10px, -10px)',
          },
          '50%': {
            borderColor: '#FFA500',
            transform: 'translate(-10px, 10px)',
          },
          '75%': {
            borderColor: '#FFA500',
            transform: 'translate(10px, 10px)',
          },
          '100%': {
            borderColor: '#FFA500',
            transform: 'translate(0, 0)',
          },
        },
      },
      
    },
  },
  plugins: [],
}
