// src/Page/About.jsx

import React from 'react';
import Navbar from  '../components/Navbar';

const About = () => {
  return (
    <div className="app">
       
    <Navbar />
    <div>
      
      <iframe
        src="/aboutus.html"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="About Us"
      />
    </div>
    </div>
  );
};

export default About;
