import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import titleVideo from "../assets/title.mp4";

const HeroSection = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      setVideoEnded(true);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      // Delay the video start by 5 seconds
      const delay = 5000; // 5 seconds
      const timeoutId = setTimeout(() => {
        videoElement.play();
        setVideoStarted(true);
      }, delay);

      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        clearTimeout(timeoutId);
        if (videoElement) {
          videoElement.removeEventListener("ended", handleVideoEnd);
        }
      };
    }
  }, []);

  return (
    <div className="relative w-full h-screen mb-16">
      {/* Full screen video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay={false} // Disable autoPlay to control it manually
          playsInline
          muted
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
          }}
        >
          <source src={titleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay gradient to make text more visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>

      {/* Main content overlay, visible after video ends */}
      <AnimatePresence>
        {videoEnded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold"
            >
              <span>CapitalCompass</span>
              <span className="block sm:inline bg-gradient-to-r from-D to-A text-transparent bg-clip-text"> Charting Your Path to Prosperity</span>
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
            
            {/* Scroll down indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-10 left-0 right-0 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="flex flex-col items-center cursor-pointer"
              >
                <span className="text-neutral-400 mb-2">Scroll down</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;