import React, { useState } from 'react'; 
import '../components/User/Services.css'
function AppointmentForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Appointment booked for ${name} on ${date} at ${time}`);
  };

  return (
  <>
   <div className="serv-container">
      <h1 className="serv-heading">Book an Appointment</h1>
      <form action="#" method="post" className="serv-form">
        <div className="serv-form-group">
          <label htmlFor="serv-name">Name:</label>
          <input type="text" id="serv-name" name="name" className="serv-input" required />
        </div>

        <div className="serv-form-group">
          <label htmlFor="serv-email">Email:</label>
          <input type="email" id="serv-email" name="email" className="serv-input" required />
        </div>

        <div className="serv-form-group">
          <label htmlFor="serv-date">Date:</label>
          <input type="date" id="serv-date" name="date" className="serv-input" required />
        </div>

        <div className="serv-form-group">
          <label htmlFor="serv-time">Time:</label>
          <input type="time" id="serv-time" name="time" className="serv-input" required />
        </div>

        <div className="serv-form-group">
          <label htmlFor="serv-message">Message:</label>
          <textarea id="serv-message" name="message" className="serv-textarea" rows="4" cols="50"></textarea>
        </div>

        <button type="submit" className="serv-submit-btn">Submit</button>
      </form>
    </div>

    </>
  );
}

export default AppointmentForm;
