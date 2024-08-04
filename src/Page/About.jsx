import React from 'react';
import './AboutUs.css'; // Make sure you create and import the CSS file
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <Navbar />
      <header className=" description aboutus-header">
        <br></br>
        <p>Finance Consultants for a Growth Mindset</p>
      </header>
      <section className="aboutus-sections">
        <div className="aboutus-section aboutus-section-personal">
          <h2>Personal Consultants</h2>
          <p>Trying out our services for the first time? No problem! Book a free consultation with us.</p>
        </div>
        <div className=" rounded-box"></div>
        <div className="aboutus-section aboutus-section-updates">
          <h2>Latest updates</h2>
          <p>Our news section is the perfect fit for your daily dose of updates.</p>
        </div>
        <div className="aboutus-section aboutus-section-team">
          <img src="https://static.wixstatic.com/media/c837a6_5e19bd47c2dc45398993d8c780db299a~mv2.jpg/v1/fill/w_257,h_191,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_5e19bd47c2dc45398993d8c780db299a~mv2.jpg" alt="Our Team" className="aboutus-image" />
          <h2>Our Team</h2>
          <p>Our team is a group of experienced professionals with deep expertise in finance, technology, and customer service. Our financial advisors guide clients through the intricacies of financial planning and investment management. Our technology experts develop secure, user-friendly platforms, while our customer service team ensures exceptional support. Together, we are committed to helping our clients achieve their financial goals and building lasting relationships.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
