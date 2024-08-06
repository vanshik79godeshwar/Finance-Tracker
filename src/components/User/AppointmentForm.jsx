import React from 'react';
import './AF.css'; // Ensure you have the CSS imported

function AppointmentForm() {
  return (
    <div className="serv-form-container">
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
        <div className="radio-input">
  <div className="glass">
    <div className="glass-inner"></div>
  </div>
  <div className="selectorrrrr">
    <div className="choice">
      <div>
        <input
          className="choice-circle"
          checked="true"
          value="one"
          name="number-selector"
          id="one"
          type="radio"
        />
        <div className="ball"></div>
      </div>
      <label   className="choice-name"> I am open to changes in date and time</label>
    </div>
    <div className="choice">
      <div>
        <input
          className="choice-circle"
          value="two"
          name="number-selector"
          id="two"
          type="radio"
        />
        <div className="ball"></div>
      </div>
      <label  className="choice-name">I may be able to adjust the date/time</label>
    </div>
    <div className="choice">
      <div>
        <input
          className="choice-circle"
          value="three"
          name="number-selector"
          id="three"
          type="radio"
        />
        <div className="ball"></div>
      </div>
      <label className="choice-name">No other date or time will be possible for me.</label>
    </div>
  </div>
</div>
<br>
</br>
<br>
            </br>

        <button type="submit" className="serv-submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
