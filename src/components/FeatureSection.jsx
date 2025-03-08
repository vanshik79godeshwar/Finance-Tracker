import React from "react";
import { motion } from "framer-motion";
import { features } from "../constants";

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
    >
      <motion.div 
        whileHover={{ y: -8 }}
        transition={{ duration: 0.2 }}
        className="p-6 rounded-xl bg-gradient-to-b from-neutral-900/50 to-transparent border border-neutral-800 hover:border-D transition-all duration-300"
      >
        <div className="flex">
          <div className="flex h-12 w-12 p-3 bg-gradient-to-br from-D/20 to-A/20 text-blue-500 justify-center items-center rounded-xl border border-D/30 shadow-md shadow-D/10">
            {feature.icon}
          </div>
          <div className="ml-4">
            <h5 className="mt-1 mb-4 text-xl font-medium text-white">{feature.text}</h5>
            <p className="text-md mb-4 text-neutral-400 font-light">
              {feature.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeatureSection = () => {
  return (
    <div className="relative mt-20 pt-16 pb-16 border-b border-neutral-800 min-h-[800px]">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.span 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-D/20 to-A/20 text-white rounded-full text-sm font-medium px-4 py-2 uppercase border border-D/30"
        >
          Features
        </motion.span>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide font-bold"
        >
          Easily plan{" "}
          <span className="bg-gradient-to-r from-F to-A text-transparent bg-clip-text">
            your Investment
          </span>
        </motion.h2>
      </motion.div>
      
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;