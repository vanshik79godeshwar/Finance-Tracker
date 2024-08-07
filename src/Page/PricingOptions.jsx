import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample pricing data
const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
    description: "Ideal for individuals or small teams starting out. Get the basic finance essentials to manage your projects and daily budgeting effectively without any cost."
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
    description: "Perfect for growing teams, and developing organizations who need additional storage and advanced analytics. Unlock more features for just $10 per month."
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
    description: "Designed for large organizations with extensive needs. Enjoy unlimited storage and a high-performance network for optimal productivity."
  },
];

const PricingOptions = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/login'); // Redirects to Login.jsx
  };

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-teal-200">Our Pricing Plans</h1>
        <p className="text-lg">Choose the plan that fits your needs and budget. Each plan offers unique features to help you get the most out of our service.</p>
      </header>
      <div className="flex flex-wrap justify-center gap-6">
        {pricingOptions.map((option, index) => (
          <div key={index} className="bg-slate-800 text-teal-200 p-6 rounded-lg shadow-lg w-full max-w-xs">
            <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
            <p className="text-xl font-bold mb-4">{option.price} / month</p>
            <p className="text-white text-lg mb-4">{option.description}</p>
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature, i) => (
                <li key={i} className="mb-2">{feature}</li>
              ))}
            </ul>
            <button
              onClick={handleSignUpClick}
              className="bg-cyan-800 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-sky-900"
            >
              Sign Up
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
