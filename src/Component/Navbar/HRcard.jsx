import React from 'react';
import './HRcard.css';

const HRcard = ({ iconSrc, title }) => {
  return (
    <div className="horizontal-card">
      <img src={iconSrc} alt="Icon" className="card-icon" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default HRcard;
