import { useState, useEffect, useRef } from "react";
import { toast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

function CareersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          
          // Add initial animation for career card
          if (entry.target.classList.contains("career-card")) {
            const card = entry.target;
            const iconElement = card.querySelector(".mail-icon");
            
            // Add class to trigger initial animation
            setTimeout(() => {
              card.classList.add("initial-animate");
              if (iconElement) {
                iconElement.classList.add("initial-rotate");
                
                // Remove initial animation class after it completes
                setTimeout(() => {
                  card.classList.remove("initial-animate");
                  iconElement.classList.remove("initial-rotate");
                }, 1500);
              }
            }, 300);
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const title = document.querySelector("#careers-title");
    if (title) {
      observer.observe(title);
    }

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="careers"
      ref={sectionRef}
      className="section bg-white relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/lovable-uploads/background-icd-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="section-content z-10 relative">
        <h2 
          id="careers-title"
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-white reveal"
        >
          Careers at<span className="text-blue-300"> ICD</span>
        </h2>

        <div className="max-w-3xl mx-auto px-4">
          <div 
            ref={cardRef}
            className="career-card group reveal perspective-1000"
          >
            <div
              className="relative bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl p-6 transform-gpu transition-all duration-500 
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
              <h3 className="text-2xl md:text-2xl font-orbitron mb-6 text-white group-hover:text-blue-100 transition-colors duration-300 relative z-10">
                Looking to join our team of innovators?
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 p-6 bg-blue-600/30 backdrop-blur-sm rounded-lg relative z-10">
                <a
                  ref={iconRef}
                  href="mailto:icd-careers@gmail.com"
                  className="mail-icon flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full text-white cursor-pointer hover:bg-blue-400 transition-colors border border-blue-300/30"
                  aria-label="Send email to careers"
                >
                  <Mail size={24} />
                </a>

                <div>
                  <p className="text-blue-100 font-medium mb-2">
                    Send your resume to:
                  </p>
                  <a
                    className="text-white hover:text-blue-200 font-bold text-lg flex items-center gap-2 transition-colors"
                    href="mailto:icd-careers@gmail.com"
                  >
                    <span>icd-careers@gmail.com</span>
                  </a>
                </div>
              </div>

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
        </div>
      </div>

      {/* Add CSS for animations */}
      <style>{`
        .initial-animate {
          animation: cardPulse 1.5s ease-in-out;
        }
        
        .initial-rotate {
          animation: iconRotate 1.5s ease-in-out;
        }
        
        @keyframes cardPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes iconRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default CareersSection;
