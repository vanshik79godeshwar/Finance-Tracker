import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brandLogo from "../assets/Brand_LOGO.png"; // Import the logo

const quotes = [
  "Charting Your Path to Prosperity",
  "Making Smart Money Moves",
  "Financial Freedom Starts Here",
  "Your Wealth, Your Way",
  "Navigate Your Financial Future"
];

const LoadingAnimation = ({ onComplete }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [rotation, setRotation] = useState(0); // State for logo rotation

  // Rotate the logo every 0.4 seconds
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + 25) % 360); // Rotate by 25% every 0.4 seconds
    }, 400);

    return () => clearInterval(rotateInterval);
  }, []);

  // Handle quote transitions and loading completion
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentQuoteIndex < quotes.length - 1) {
        setCurrentQuoteIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            onComplete();
          }, 500);
        }, 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [currentQuoteIndex, onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo and Company Name in the same line */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-12" // Flex container for logo and text
          >
            {/* Logo with rotation animation */}
            <motion.div
              style={{ rotate: rotation }} // Apply rotation
              className="mr-4" // Add margin to separate logo and text
            >
              <img
                src={brandLogo}
                alt="Brand Logo"
                className="w-16 h-16" // Adjust size as needed
              />
            </motion.div>

            {/* Company Name */}
            <h1 className="text-5xl font-bold text-center">
              <span className="text-white">Capital</span>
              <span className="bg-gradient-to-r from-D to-A text-transparent bg-clip-text">Compass</span>
            </h1>
          </motion.div>

          {/* Quotes */}
          <div className="h-20 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentQuoteIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl text-center text-neutral-300 font-light"
              >
                {quotes[currentQuoteIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ duration: quotes.length * 0.8, ease: "linear" }}
            className="h-0.5 bg-gradient-to-r from-D to-A mt-8 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;