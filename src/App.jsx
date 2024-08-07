import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Joyride from 'react-joyride';
import Home from './Page/Home.jsx';
import News from './Page/News.jsx';
import Login from './Page/Login.jsx';
import User from './Page/User.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Test from './Page/Test.jsx';
import Career from './Page/Career.jsx';
import ContactUs from './Page/ContactUs.jsx';
import AboutUs from './Page/AboutUs.jsx';
import Services from './Page/Services.jsx';

function App() {
  const [tourSteps, setTourSteps] = useState([
    {
      target: '.hero-section',
      content: 'This is the Hero Section, where you can find the main highlights of our services.',
    },
    {
      target: '.feature-section',
      content: 'Here we showcase the key features of our product.',
    },
    {
      target: '.workflow-section',
      content: 'This section explains our workflow process.',
    },
    {
      target: '.pricing-section',
      content: 'Check out our pricing plans here.',
    },
    {
      target: '.testimonials-section',
      content: 'See what our customers have to say about us.',
    },      
  ]);

  return (
    <Router>
      <Joyride
        steps={tourSteps}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          options: {
            backgroundColor: '#212d3a81', // Background color of the tooltip
            primaryColor: '#a81212', // Color of the buttons
            textColor: '#ffffff', // Text color
            overlayColor: 'rgba(0, 0, 0, 0)', // Overlay color with transparency
            spotlightShadow: '0 0 0 4px #ffffff', // Creates a white border around the highlighted area
          },
          spotlight: {
            backgroundColor: '#b3c3d817', 
             
          },
        }}
        
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Blogs" element={<Test />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route
          path="/:username/*"
          element={<PrivateRoute element={<User />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
