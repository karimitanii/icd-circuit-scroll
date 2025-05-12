
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Partner logos represented as letters for the example
const partners = [
  { name: "TechCorp", letter: "T" },
  { name: "InnovaSys", letter: "I" },
  { name: "Digital Solutions", letter: "D" },
  { name: "GlobalTech", letter: "G" },
  { name: "EvoSystems", letter: "E" },
  { name: "Quantum Data", letter: "Q" },
  { name: "Future Networks", letter: "F" },
  { name: "Adaptive Systems", letter: "A" },
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    // Partner logos animation
    if (carouselRef.current) {
      const logos = carouselRef.current.querySelectorAll('.partner-logo');
      gsap.fromTo(
        logos,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Horizontal scroll animation for larger screens
    if (window.innerWidth >= 768) {
      const horizontalScroll = gsap.to(carouselRef.current, {
        x: () => -(carouselRef.current!.scrollWidth - window.innerWidth + 32),
        ease: "none",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 60%",
          end: "+=2000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });
      
      return () => {
        horizontalScroll.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      id="partners" 
      ref={sectionRef}
      className="section bg-gradient-to-b from-icd-dark to-black relative overflow-hidden py-24"
    >
      <div className="section-content z-10">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16"
        >
          Our <span className="text-icd-blue">Partners</span>
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="partners-carousel flex md:w-[200%] space-x-8 py-8"
          >
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="partner-logo flex-shrink-0 w-36 h-36 md:w-48 md:h-48 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:border-icd-blue/50 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-orbitron font-bold text-white/70 group-hover:text-icd-blue transition-colors duration-300">{partner.letter}</div>
                  <div className="mt-2 font-robotomono text-white/50 group-hover:text-white/90 transition-colors duration-300">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fade effect on sides for horizontal scroll */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none hidden md:block"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none hidden md:block"></div>
        </div>
        
        <div className="text-center mt-8 text-white/60 text-sm hidden md:block">
          <p>← Scroll horizontally to see more partners →</p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
