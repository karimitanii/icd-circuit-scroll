import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import SplashIntro from "@/components/SplashIntro";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import CeoSection from "@/components/CeoSection";
import BusinessPartnersSection from "@/components/BusinessPartnersSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Setup intersection observers for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Once the animation is triggered, we can unobserve the element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // After a short delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => observer.observe(el));
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [introComplete]);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-icd-dark flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-icd-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-icd-dark to-black min-h-screen text-white overflow-hidden">
      {!introComplete ? (
        <SplashIntro onComplete={handleIntroComplete} />
      ) : (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <WhoWeAreSection />
            <CeoSection />
            <ServicesSection />
            <PartnersSection />
            <CareersSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
