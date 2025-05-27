
import { useEffect, useRef } from "react";

const whoWeAreItems = [
  {
    title: "Technology Pioneers",
    description: "ICD is at the forefront of technological innovation, driving digital transformation for businesses and public institutions. We combine expertise in AI, cloud computing, and software development to deliver solutions that transcend traditional boundaries."
  },
  {
    title: "Industry Leaders",
    description: "With years of experience in the technology sector, our team has established a reputation for excellence in system integration and project delivery. We specialize in complex public sector digitalization initiatives that transform how governments serve their citizens."
  },
  {
    title: "Visionary Problem Solvers",
    description: "We approach each project with a unique perspective, combining creative thinking with technical prowess to solve complex challenges. Our solutions are not just functional—they're forward-thinking and designed for long-term success."
  },
  {
    title: "Committed Partners",
    description: "At ICD, we believe in building lasting relationships with our clients. We're committed to understanding your unique needs and working collaboratively to achieve your goals. Your success is our success."
  }
];

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
          
          // Add initial animation for who-we-are cards
          if (entry.target.classList.contains("whoweare-card")) {
            const card = entry.target;
            
            // Add class to trigger initial animation
            setTimeout(() => {
              card.classList.add("initial-animate");
              
              // Remove initial animation class after it completes
              setTimeout(() => {
                card.classList.remove("initial-animate");
              }, 1500);
            }, 300);
          }
          
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
    
    const whoWeAreCards = document.querySelectorAll(".whoweare-card");
    whoWeAreCards.forEach((card) => {
      observer.observe(card as Element);
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
      {/* Background circuit animation - updated to match services section */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="whoweare-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10 L50 10 L50 50 L90 50 L90 90 L130 90 L130 130 L170 130 L170 170"
                stroke="#0047AB"
                strokeOpacity="0.01"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M190 10 L150 10 L150 50 L110 50 L110 90 L70 90 L70 130 L30 130 L30 170"
                stroke="#0047AB"
                strokeOpacity="0.01"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="50" cy="10" r="3" fill="#0047AB" fillOpacity="0.05" />
              <circle cx="90" cy="50" r="3" fill="#0047AB" fillOpacity="0.05" />
              <circle cx="130" cy="90" r="3" fill="#0047AB" fillOpacity="0.02" />
              <circle cx="170" cy="130" r="3" fill="#0047AB" fillOpacity="0.02" />
              <circle cx="150" cy="10" r="3" fill="#0047AB" fillOpacity="0.02" />
              <circle cx="110" cy="50" r="3" fill="#0047AB" fillOpacity="0.02" />
              <circle cx="70" cy="90" r="3" fill="#0047AB" fillOpacity="0.05" />
              <circle cx="30" cy="130" r="3" fill="#0047AB" fillOpacity="0.02" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#whoweare-pattern)" />
        </svg>
      </div>
      
      <div className="section-content z-10 reveal">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800 reveal"
        >
          Who <span className="text-icd-blue">We Are</span>
        </h2>
        
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4"
        >
          {whoWeAreItems.map((item, index) => (
            <div
              key={index}
              className="whoweare-card group h-full reveal perspective-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="relative bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl p-6 h-full transform-gpu transition-all duration-500 
                border border-blue-400 hover:border-blue-300 shadow-sm hover:shadow-xl text-white
                group-hover:translate-y-[-10px] overflow-hidden initial-animate-container"
              >
                {/* Futuristic background elements */}
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-100 
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                ></div>

                <div
                  className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-600 rounded-tl-3xl 
                  opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                ></div>

                <div
                  className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-300/40 to-blue-100/40 
                  rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 
                  group-hover:scale-150"
                ></div>

                {/* Content */}
                <h3
                  className="relative z-10 text-xl font-orbitron mb-4 text-white 
                  group-hover:text-blue-100 transition-colors duration-300"
                >
                  {item.title}
                </h3>

                <p className="relative z-10 text-blue-100 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>

                {/* Futuristic corner accent */}
                <div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] 
                  border-t-transparent border-r-blue-600 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                {/* Animated dots */}
                <div
                  className="absolute bottom-3 left-3 flex space-x-1 opacity-0 
                  group-hover:opacity-100 transition-all duration-500 delay-300"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-300 animate-pulse"></div>
                  <div
                    className="w-1 h-1 rounded-full bg-blue-200 animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-1 h-1 rounded-full bg-blue-100 animate-pulse"
                    style={{ animationDelay: "600ms" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add CSS for animations */}
      <style>{`
        .initial-animate {
          animation: cardPulse 1.5s ease-in-out;
        }
        
        @keyframes cardPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAreSection;
