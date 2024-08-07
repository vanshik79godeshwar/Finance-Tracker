import React, { useState } from 'react';
import '../components/User/AnimatedIcon.css';
import Navbar from '../components/Navbar';
import api from '../utils/api'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    comments: ''
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/contact', formData);
      setAlertMessage('Contact message submitted successfully!');
      setShowAlert(true);
    } catch (error) {
      setAlertMessage('There was an error submitting the contact message!');
      setShowAlert(true);
    }
  };

  return (
    <div className="contact-us-page">
      <Navbar />
      {showAlert && <div className="alert-box">{alertMessage}</div>}
      <div className="contact-wrapper mt-7">
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>CONTACT US</h2>
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-form-label">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email" className="contact-form-label">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="phone" className="contact-form-label">Your Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="contact-form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="subject" className="contact-form-label">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="contact-form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="comments" className="contact-form-label">Message:</label>
              <textarea
                id="comments"
                name="comments"
                className="contact-form-textarea"
                rows="4"
                value={formData.comments}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-form-submit">Submit</button>
          </form>
          <div className="contact-info flex justify-center flex-col items-center mt-4">
            <h3 className="contact-info-heading">Our Address</h3>
            <p className="contact-info-text">Capital Compass Office, DoCSE, SVNIT Surat - 395007, Gujarat</p>
            <h3 className="contact-info-heading">Email Us:</h3>
            <p className="contact-info-text">capitalcompassforyou@gmail.com</p>
            <h3 className="contact-info-heading">Call Us</h3>
            <p className="contact-info-text">+91 8511095153</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509737!2d144.95373531531268!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773de04789c1e8!2s123%20Finance%20St%2C%20Money%20City%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1609332859677!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="map-iframe"
          ></iframe>
        </div>
        <div className="social-links m-5">
          <a href="https://www.instagram.com/capitalcompass4u/" target='blank' className="social-icon instagram-icon"><i className="fab fa-instagram"></i></a>
          <a href="mailto:capitalcompassforyou@gmail.com" className="social-icon email-icon"><i className="fas fa-envelope"></i></a>
          <a href="https://www.linkedin.com/" className="social-icon linkedin-icon"><i className="fab fa-linkedin"></i></a>
          <a href="https://x.com/capitalcompass4" target='blank' className="social-icon facebook-icon"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
