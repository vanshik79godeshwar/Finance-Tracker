// src/intro.js
import 'intro.js/introjs.css';
import introJs from 'intro.js';

const startTour = () => {
  const intro = introJs();
  
  intro.setOptions({
    steps: [
      {
        element: '#step1',
        intro: 'This is the first step.'
      },
      {
        element: '#step2',
        intro: 'This is the second step.'
      }
    ]
  });

  intro.start();
};

export default startTour;
