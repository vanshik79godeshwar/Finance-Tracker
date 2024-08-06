import React, { useState, useEffect } from 'react';
import './AF.css'; // Ensure you have the CSS imported
import { useNavigate } from 'react-router-dom';

function ServicesBox() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
 
 
  const handleRedirect = () => {
    navigate('./Page/Login.jsx"'); // Redirect to the "/login" path
  };

  return (
    <div className="serv-box-container">
      <div className="flex justify-center">
        <button onClick={toggleBox} className="bg-gradient-to-r from-F to-D p-3 rounded-md serv-toggle-btn">
          {isOpen ? 'Hide Services' : 'Show Services'}
        </button>
      </div>
      <div className={`serv-box-content ${isOpen ? 'open' : 'closed'}`}>
        <p className='bigfont'>We offer a range of high-quality services to meet your needs:</p>
        <div className='servicetext'>
          - Budgeting and Expense Management<br />
          - EMI Calculator<br />
          - Real-Time Market Data<br />
          - Personal Consultancy<br />
          - Community Support<br />
          - Customizable Dashboards<br />
          - Live Market Updates<br />
          - Customizable Reports<br />
          - Expert Guidance<br />
          - Income Tracker<br />
          - Currency Converter<br />
          - Live News Updates from All Over the World<br />
          - Career Options with Us<br />
          - Expense Tracker<br />
          - Statistical Data About Your Finances<br />
          <br />
          <div className='flex flex-row justify-center'>
            <button className='bg-gradient-to-r from-F to-D p-2 rounded-md' type="button" onClick={handleRedirect}>
              Get Started!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBox;
