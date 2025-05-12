
import { useEffect, useRef } from "react";

const WhoWeAreSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple animation using Intersection Observer instead of GSAP
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section 
      id="who-we-are" 
      ref={sectionRef}
      className="section bg-white relative overflow-hidden py-24"
    >
      {/* Animated background particles - muted for white background */}
      <div className="particles-bg">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-icd-blue/10 rounded-full blur-sm"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animation: `pulse-slow ${Math.random() * 3 + 3}s infinite`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="section-content z-10 reveal">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-12 text-gray-800 reveal"
        >
          Who <span className="text-icd-blue">We Are</span>
        </h2>
        
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto"
        >
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-icd-blue">Technology Pioneers</h3>
            <p className="text-gray-700">
              ICD is at the forefront of technological innovation, driving digital transformation for businesses and public institutions. We combine expertise in AI, cloud computing, and software development to deliver solutions that transcend traditional boundaries.
            </p>
          </div>
          
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-icd-blue">Industry Leaders</h3>
            <p className="text-gray-700">
              With years of experience in the technology sector, our team has established a reputation for excellence in system integration and project delivery. We specialize in complex public sector digitalization initiatives that transform how governments serve their citizens.
            </p>
          </div>
          
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-icd-blue">Visionary Problem Solvers</h3>
            <p className="text-gray-700">
              We approach each project with a unique perspective, combining creative thinking with technical prowess to solve complex challenges. Our solutions are not just functional—they're forward-thinking and designed for long-term success.
            </p>
          </div>
          
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-icd-blue">Committed Partners</h3>
            <p className="text-gray-700">
              At ICD, we believe in building lasting relationships with our clients. We're committed to understanding your unique needs and working collaboratively to achieve your goals. Your success is our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
