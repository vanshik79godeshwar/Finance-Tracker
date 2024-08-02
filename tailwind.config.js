
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
        Lobster: ['Lobster', 'cursive']
      },
      colors: {
        primary: '#457814',
        secondary: '#D8345F',
        accent: '#1FB6FF',
        A: '#133D5A',
        B: '#09111C',
        C: '#788E8A',
        D: '#266076',
        E: '#A0DEE3',
        F: '#0F2C47',
        G: '#ADD8E6',
        H: '#30346D',
        I : '#353935',
        Black: '#1e1e1e',
        DarkGray: '#2a2a2a',
        Blue: '#007acc',
        LightBlue: '#00aaff',
        White: '#ffffff',
        LightGray: '#cccccc',
        Green: '#4caf50',
        Red: '#f44336',
      },
    },
  },
  plugins: [],
}
