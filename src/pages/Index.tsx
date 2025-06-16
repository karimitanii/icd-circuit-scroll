import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import CeoSection from "@/components/CeoSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const Index = () => {
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
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // After a short delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => observer.observe(el));
      setLoading(false);

      // Check for stored scroll target first
      const storedScrollTarget = sessionStorage.getItem('scrollTarget');
      if (storedScrollTarget) {
        // Add a small delay to ensure the DOM is ready
        setTimeout(() => {
          const targetElement = document.getElementById(storedScrollTarget);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
          sessionStorage.removeItem('scrollTarget');
        }, 100);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-icd-dark flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-icd-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-icd-dark to-black min-h-screen text-white overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <CeoSection />
        <PartnersSection />
        <ServicesSection />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
