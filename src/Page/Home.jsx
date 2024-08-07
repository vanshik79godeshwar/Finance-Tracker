import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6 ">
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
        </>
    )
}
