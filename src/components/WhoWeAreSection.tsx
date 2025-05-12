
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhoWeAreSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 70%",
        toggleActions: "play none none reverse"
      }
    });
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    ).fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      "-=0.4"
    );
    
    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      id="who-we-are" 
      ref={sectionRef}
      className="section bg-gradient-to-b from-black to-icd-dark relative overflow-hidden py-24"
    >
      {/* Animated background particles */}
      <div className="particles-bg">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-icd-blue/20 rounded-full blur-sm"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `pulse-slow ${Math.random() * 3 + 3}s infinite`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="section-content z-10 reveal">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-12"
        >
          Who <span className="text-icd-blue">We Are</span>
        </h2>
        
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto"
        >
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-gradient">Technology Pioneers</h3>
            <p className="text-white/80">
              ICD is at the forefront of technological innovation, driving digital transformation for businesses and public institutions. We combine expertise in AI, cloud computing, and software development to deliver solutions that transcend traditional boundaries.
            </p>
          </div>
          
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-gradient">Industry Leaders</h3>
            <p className="text-white/80">
              With years of experience in the technology sector, our team has established a reputation for excellence in system integration and project delivery. We specialize in complex public sector digitalization initiatives that transform how governments serve their citizens.
            </p>
          </div>
          
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-gradient">Visionary Problem Solvers</h3>
            <p className="text-white/80">
              We approach each project with a unique perspective, combining creative thinking with technical prowess to solve complex challenges. Our solutions are not just functional—they're forward-thinking and designed for long-term success.
            </p>
          </div>
          
          <div className="reveal">
            <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-gradient">Committed Partners</h3>
            <p className="text-white/80">
              At ICD, we believe in building lasting relationships with our clients. We're committed to understanding your unique needs and working collaboratively to achieve your goals. Your success is our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
