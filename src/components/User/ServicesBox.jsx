import React, { useState, useEffect } from 'react';
import './AF.css'; // Ensure you have the CSS imported

function ServicesBox() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="serv-box-container">
      <button onClick={toggleBox} className="serv-toggle-btn">
        {isOpen ? 'Hide Services' : 'Show Services'}
      </button>
      <div className={`serv-box-content ${isOpen ? 'open' : 'closed'}`}>
        <br>
        </br> <br>
        </br>
        <p className='bigfont'>We offer a range of high-quality services to meet your needs:</p><br>
        </br>
        <div className='servicetext'>
          
            - Budgeting and Expense Management<br>
            </br>
            - EMI Calculator<br>
            </br>
            - Real-Time Market Data<br>
            </br>
            - Personal Consultancy<br>
            </br>
            - Community Support<br>
            </br>
            - Customizable Dashboards<br>
            </br>
            - Live Market Updates<br>
            </br>
            - Customizable Reports<br>
            </br>
            - Expert Guidance<br>
            </br>
            - Income tracker<br></br>
                 - Currency Converter<br>
                 </br>
                 - Live news updates from all over the world<br>
            </br>
            - Career options with us<br>
            </br>
            - Expense Tracker<br>
            </br>
            - Statistical Data about your finances<br>
            </br>

      
        
        </div>
         
      </div>
    </div>
  );
}

export default ServicesBox;
