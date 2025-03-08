import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import {Link} from 'react-router-dom';

const PricingCard = ({ option, index, isPopular }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
    >
      <motion.div 
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
        transition={{ duration: 0.2 }}
        className={`p-8 border rounded-2xl transition-all duration-300 relative overflow-hidden
          ${isPopular 
            ? "bg-gradient-to-b from-neutral-900 to-neutral-950 border-orange-800 shadow-xl shadow-orange-900/20" 
            : "bg-gradient-to-b from-neutral-900/70 to-black/40 border-neutral-700 shadow-lg"}`}
      >
        {isPopular && (
          <div className="absolute top-0 right-0">
            <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white text-xs font-bold py-1 px-4 transform rotate-45 translate-x-2 translate-y-6 shadow-md">
              POPULAR
            </div>
          </div>
        )}
        
        <p className={`text-4xl font-bold mb-4 ${isPopular ? "text-orange-500" : "text-white"}`}>
          {option.title}
        </p>
        
        <p className="mb-8 flex items-baseline">
          <span className="text-5xl font-bold mr-2">{option.price}</span>
          <span className="text-neutral-400 tracking-tight">/Month</span>
        </p>
        
        <ul className="space-y-4 mb-8">
          {option.features.map((feature, i) => (
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (i * 0.05) + (index * 0.1) }}
              viewport={{ once: true }}
              key={i} 
              className="flex items-center"
            >
              <CheckCircle2 className={isPopular ? "text-orange-500" : "text-green-500"} size={20} />
              <span className="ml-3 text-neutral-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <Link
          to="/pricing"
          className={`inline-flex justify-center items-center text-center w-full h-12 p-5 mt-8 tracking-tight text-lg font-medium
            ${isPopular 
              ? "bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white shadow-lg shadow-orange-900/30" 
              : "hover:bg-neutral-800 border border-neutral-700 text-neutral-200"} 
            rounded-lg transition duration-300`}
        >
          Subscribe
        </Link>
      </motion.div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <div className="mt-20 pt-16 pb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center mb-16 tracking-wide font-bold"
      >
        <span className="bg-gradient-to-r from-F to-D text-transparent bg-clip-text">Pricing</span>
      </motion.h2>
      
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <PricingCard 
            key={index} 
            option={option} 
            index={index} 
            isPopular={option.title === "Pro"} 
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;