import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import LoadingAnimation from "../components/LoadingAnimation";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        setShowContent(true);
    };

    // Apply and remove scrollbar hiding only on homepage
    useEffect(() => {
        // Create a style element
        const styleElement = document.createElement('style');
        styleElement.id = 'home-page-styles';
        
        styleElement.innerHTML = `
            ::-webkit-scrollbar {
                display: none;
            }
            html, body {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
            }
        `;
        
        document.head.appendChild(styleElement);
        
        // Cleanup: remove the style element when component unmounts
        return () => {
            const element = document.getElementById('home-page-styles');
            if (element) {
                element.remove();
            }
        };
    }, []);

    return (
        <>
            {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
            
            <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <Navbar />
                <div className="w-full">
                    <div className="hero-section">
                        <HeroSection />
                    </div>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="feature-section">
                            <FeatureSection />
                        </div>
                        <div className="workflow-section">
                            <Workflow />
                        </div>
                        <div className="pricing-section">
                            <Pricing />
                        </div>
                        <div className="testimonials-section">
                            <Testimonials />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}