
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    description: "Implementing intelligent solutions that learn and adapt to your needs, from predictive analytics to natural language processing systems."
  },
  {
    icon: "💻",
    title: "Software Development",
    description: "Creating custom applications and systems tailored to your specific requirements using the latest technologies and best practices."
  },
  {
    icon: "🔄",
    title: "System Integration",
    description: "Seamlessly connecting disparate systems and technologies to create cohesive, efficient technological ecosystems."
  },
  {
    icon: "☁️",
    title: "Cloud Applications",
    description: "Developing and deploying scalable, secure applications in the cloud for maximum flexibility and reliability."
  },
  {
    icon: "⚙️",
    title: "Automation Systems",
    description: "Streamlining operations through intelligent automation, reducing costs and increasing efficiency across your organization."
  },
  {
    icon: "🏗️",
    title: "Large-scale Project Delivery",
    description: "Managing and executing complex technological projects from conception to completion with our proven methodology."
  },
  {
    icon: "🏛️",
    title: "Municipality & Public Sector Solutions",
    description: "Specialized digital transformation services for government and public institutions, enhancing citizen services."
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
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
    );
    
    // Animate cards with stagger
    gsap.fromTo(
      ".service-card",
      { 
        opacity: 0, 
        y: 50,
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section bg-gradient-to-b from-black to-icd-dark relative overflow-hidden py-24"
    >
      <div className="section-content z-10">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16"
        >
          Our <span className="text-icd-blue">Services</span>
        </h2>
        
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group h-full"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-orbitron mb-3 group-hover:text-icd-blue transition-colors duration-300">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background circuit animation */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern 
              id="services-pattern" 
              x="0" 
              y="0" 
              width="200" 
              height="200" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M10 10 L50 10 L50 50 L90 50 L90 90 L130 90 L130 130 L170 130 L170 170"
                stroke="#0047AB" 
                strokeOpacity="0.05" 
                strokeWidth="2" 
                fill="none"
              />
              <path 
                d="M190 10 L150 10 L150 50 L110 50 L110 90 L70 90 L70 130 L30 130 L30 170"
                stroke="#0047AB" 
                strokeOpacity="0.05" 
                strokeWidth="2" 
                fill="none"
              />
              <circle cx="50" cy="10" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="90" cy="50" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="130" cy="90" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="170" cy="130" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="150" cy="10" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="110" cy="50" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="70" cy="90" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="30" cy="130" r="3" fill="#0047AB" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-pattern)" />
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;
