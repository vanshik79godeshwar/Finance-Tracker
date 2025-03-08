import React from "react";
import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video3.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          CapitalCompass
        </motion.span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="block sm:inline bg-gradient-to-r from-D to-A text-transparent bg-clip-text"
        >
          {" "}
          Charting Your Path to Prosperity
        </motion.span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-10 text-lg text-center text-neutral-400 max-w-4xl font-light"
      >
        Unlock new financial opportunities with CapitalCompass. Our innovative solutions and expert guidance are designed to help you navigate the markets and grow your wealth. Get started today and build a brighter financial future!
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex justify-center my-10"
      >
        <a
          href="./Page/Login.jsx"
          className="bg-gradient-to-r from-D to-F py-3 px-6 mx-3 rounded-md hover:from-F hover:to-A transition-all duration-300 text-lg font-medium shadow-lg shadow-D/20 hover:shadow-F/30"
        >
          Start for free
        </a>

        <a 
          href="#" 
          className="py-3 px-6 mx-3 rounded-md border border-D hover:border-F text-lg font-medium transition-all duration-300 hover:bg-gradient-to-tl from-F/10 to-E/10"
        >
          Documentation
        </a>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex flex-col md:flex-row mt-10 justify-center w-full"
      >
        <motion.div 
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="w-full md:w-1/2 p-3"
        >
          <video
            autoPlay
            loop
            muted
            className="rounded-2xl w-full h-full object-cover border border-D shadow-lg shadow-C/30 hover:shadow-C/50 transition-all duration-300"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="w-full md:w-1/2 p-3"
        >
          <video
            autoPlay
            loop
            muted
            className="rounded-2xl w-full h-full object-cover border border-D shadow-lg shadow-C/30 hover:shadow-C/50 transition-all duration-300"
          >
            <source src={video2} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;