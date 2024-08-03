import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './typewriter.css'; // Ensure you have this CSS file for additional styling

const TypewriterEffect = () => {
  const message = " Welcome to Your Monthly Budget Planner! Managing your finances effectively is key to achieving your financial goals. Our monthly budget planner helps you gain control over your income and expenses, allowing you to make informed financial decisions. Input your income, and if applicable, your EMI and rent amounts. Based on your inputs, we'll calculate how much you should allocate towards savings, groceries, utilities, and personal expenses.";

  return (
    <div className="typewriter-container">
      <Typewriter
        words={[message]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={50}  
        deleteSpeed={30}
        delaySpeed={1500}

      />
    </div>
  );
};

export default TypewriterEffect;
