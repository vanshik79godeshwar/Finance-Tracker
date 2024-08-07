import React, { useState } from 'react';
import axios from 'axios';
import './AF.css'; // Ensure you have the CSS imported
import api from '../../utils/api'

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: '',
    flexibility: 'one' // Default value for the radio button
  });

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/appointments', formData);
      setAlert({
        show: true,
        message: 'Appointment requested!',
        type: 'success'
      });
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        message: '',
        flexibility: 'one'
      });
    } catch (error) {
      setAlert({
        show: true,
        message: 'There was an error booking the appointment!',
        type: 'error'
      });
    }
  };

  return (
    <div className="serv-form-container">
      <h1 className="serv-heading">Book an Appointment</h1>
      {alert.show && (
        <div className={`alert ${alert.type}`}>
          {alert.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="serv-form">
        <div className="serv-form-group">
          <label htmlFor="serv-name">Name:</label>
          <input
            type="text"
            id="serv-name"
            name="name"
            className="serv-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="serv-form-group">
          <label htmlFor="serv-email">Email:</label>
          <input
            type="email"
            id="serv-email"
            name="email"
            className="serv-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="serv-form-group">
          <label htmlFor="serv-date">Date:</label>
          <input
            type="date"
            id="serv-date"
            name="date"
            className="serv-input"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="serv-form-group">
          <label htmlFor="serv-time">Time:</label>
          <input
            type="time"
            id="serv-time"
            name="time"
            className="serv-input"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="serv-form-group">
          <label htmlFor="serv-message">Message:</label>
          <textarea
            id="serv-message"
            name="message"
            className="serv-textarea"
            rows="4"
            cols="50"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="radio-input">
          <div className="glass">
            <div className="glass-inner"></div>
          </div>
          <div className="selectorrrrr">
            <div className="choice">
              <div>
                <input
                  className="choice-circle"
                  value="one"
                  name="flexibility"
                  id="one"
                  type="radio"
                  checked={formData.flexibility === 'one'}
                  onChange={handleChange}
                />
                <div className="ball"></div>
              </div>
              <label className="choice-name"> I am open to changes in date and time</label>
            </div>
            <div className="choice">
              <div>
                <input
                  className="choice-circle"
                  value="two"
                  name="flexibility"
                  id="two"
                  type="radio"
                  checked={formData.flexibility === 'two'}
                  onChange={handleChange}
                />
                <div className="ball"></div>
              </div>
              <label className="choice-name">I may be able to adjust the date/time</label>
            </div>
            <div className="choice">
              <div>
                <input
                  className="choice-circle"
                  value="three"
                  name="flexibility"
                  id="three"
                  type="radio"
                  checked={formData.flexibility === 'three'}
                  onChange={handleChange}
                />
                <div className="ball"></div>
              </div>
              <label className="choice-name">No other date or time will be possible for me.</label>
            </div>
          </div>
        </div>

        <button type="submit" className="mt-5 p-4 bg-gradient-to-r from-A to-C rounded-xl m-3">Submit</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
