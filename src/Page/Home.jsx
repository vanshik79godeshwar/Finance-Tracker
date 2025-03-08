import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import LoadingAnimation from "../components/LoadingAnimation";
import VideoIntro from "../components/VideoIntro";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [showVideo, setShowVideo] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        setShowVideo(true);
    };

    const handleVideoComplete = () => {
        setShowVideo(false);
        setShowContent(true);
    };

    return (
        <>
            {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
            {showVideo && <VideoIntro onComplete={handleVideoComplete} />}
            
            <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <Navbar />
                <div className="max-w-7xl mx-auto pt-20 px-6">
                    <div className="hero-section">
                        <HeroSection />
                    </div>
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
        </>
    );
}