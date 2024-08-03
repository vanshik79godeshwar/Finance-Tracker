import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate
import Sidebar from '../components/User/Sidebar';
import './Help.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Help({ user }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // Updated to useNavigate

  const articles = [
    "How to track income and expenses",
    "Analyzing your financial dashboard",
    "Setting up your profile",
    "ETF section overview",
    "Using the budget EMI calculator",
    "Currency exchange features",
    "Engaging in the community section",
    "Founder: Vanshik Godeshwar's story",
    "Understanding the analysis tools",
    "Security features of Capital Compass",
    "Managing notifications and alerts",
    "Getting help and support",
    "Updating your account information",
    "Using the mobile app",
    "Integrating with other financial tools",
    "Understanding the analytics dashboard",
    "Setting financial goals"
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navigateToContactUs = () => {
    navigate('/ContactUs'); // Updated to navigate
  };

  return (
    <div className="flex h-screen">
      <div className='overflow-y-auto sidebar'>
        <Sidebar user={user} />
      </div>
      <div className="flex-1 bg-darkGray text-white overflow-y-auto content">
        <div className="help-page">
          <div className="body-content">
            <div className="intro">
              <h1>Hello, how can we help?</h1>
            </div>
            <div className="search-box">
              <p>FAQs, quick fixes, and official info on every Capital Compass feature. Just a click away.</p>
            </div>
          </div>
          <div className="featured-articles">
            <h2>Commonly asked questions</h2>
            <div className="accordion">
              {articles.map((article, index) => (
                <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                  <div className="accordion-title" onClick={() => handleToggle(index)}>
                    {article} <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} className="arrow" />
                  </div>
                  <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                    <p>This is the content for {article}. Capital Compass is your all-in-one financial tool for tracking income, managing expenses, analyzing your financial dashboard, and more.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-us-button-container">
            <button className="contact-us-button" onClick={navigateToContactUs}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
