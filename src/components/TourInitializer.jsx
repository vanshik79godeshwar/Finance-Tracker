// src/components/TourInitializer.jsx
import React, { useEffect } from 'react';
import 'intro.js/introjs.css';
import introJs from 'intro.js';
import 'TourStyles.css';

const TourInitializer = ({ children }) => {
  useEffect(() => {
    const intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: '#step1',
          intro: 'Welcome to the Home Page!'
        },
        {
          element: '#step2',
          intro: 'Here is some more information.'
        }
      ]
    });
    intro.start();
  }, []);

  return <>{children}</>;
};

export default TourInitializer;
