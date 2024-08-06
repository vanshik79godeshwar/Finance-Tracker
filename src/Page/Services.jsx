import React, { useState } from 'react'; 
import ServicesBox from '../components/User/ServicesBox.jsx';
import AppointmentForm from '../components/User/AppointmentForm.jsx';
import '../components/User/AF.css'
import Navbar from  '../components/Navbar';
 
 
function ServicesPage() {
    return (
        <>
<div className="app">
       
       <Navbar />
     </div>
      <div className="services-page">
        <div className="services-box">
          <ServicesBox />
        </div>
        <div className="appointment-form">
          <AppointmentForm />
        </div>
      </div>
      </>
    );
  }
  
  export default ServicesPage;

 