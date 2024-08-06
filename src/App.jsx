import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home.jsx';
import News from './Page/News.jsx';
import Login from './Page/Login.jsx';
import User from './Page/User.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Test from './Page/Test.jsx';
import Career from './Page/Career.jsx'
import ContactUs from './Page/ContactUs.jsx';
import CareerOpenings from './Page/Career.jsx';
import AboutUS from './Page/AboutUs.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Blogs" element={<Test />} />
        <Route path="/Career" element={<Career />} />
       <Route path="/ContactUs" element={<ContactUs />} />
        <Route
          path="/:username/*"
          element={<PrivateRoute element={<User />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;