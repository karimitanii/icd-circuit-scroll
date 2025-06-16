import { useEffect, useRef, useState } from "react";

// Partner logos and websites
const partners = [
  {
    name: "IDEAS s.a.r.l",
    logo: "/lovable-uploads/IDEAS-Logo.png",
    website: "https://i2-ideas.com/contents.aspx?pagetitle=home&Language=Eng",
    description: "Innovative Digital Engineering and Advanced Solutions",
  },
  {
    name: "Kaic.ai",
    logo: "/lovable-uploads/Kaic-Logo.png",
    website: "https://kaic.ai",
    description: "Advanced AI solutions for business transformation",
  },
  {
    name: "Quality & Reliability",
    logo: "/lovable-uploads/QNR-Logo.png",
    website: "https://www.qnr.com.gr/",
    description:
      "Leading provider of quality assurance and reliability services",
  },
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activePartner, setActivePartner] = useState<number | null>(null);

  useEffect(() => {
    // Add class to make section visible when component mounts
    if (sectionRef.current) {
      sectionRef.current.classList.add("section-visible");
    }

    // Intersection Observer for scroll animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          titleObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const title = document.querySelector("#partners-title");
    if (title) {
      titleObserver.observe(title);
    }

    // Setup observers for partner cards
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            
            // Add initial animation for partner cards
            if (entry.target.classList.contains("partner-card")) {
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
            
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".partner-card");
    cards.forEach((card) => {
      cardObserver.observe(card);
    });

    return () => {
      titleObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="section bg-white relative overflow-hidden py-24"
    >
      {/* Background circuit animation - updated to match services section */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="partners-pattern"
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
          <rect width="100%" height="100%" fill="url(#partners-pattern)" />
        </svg>
      </div>

      <div className="section-content z-10 max-w-6xl mx-auto px-4">
        <h2
          id="partners-title"
          className="reveal text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800"
        >
          <span className="text-icd-blue">Business Partners</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-card group h-full reveal perspective-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 h-full transform-gpu transition-all duration-500 
                border border-blue-700 hover:border-blue-600 shadow-sm hover:shadow-xl text-white
                group-hover:translate-y-[-10px] overflow-hidden initial-animate-container"
                onMouseEnter={() => setActivePartner(index)}
                onMouseLeave={() => setActivePartner(null)}
              >
                {/* Futuristic background elements */}
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-blue-500 
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                ></div>

                <div
                  className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-800 rounded-tl-3xl 
                  opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                ></div>

                <div
                  className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-700/40 to-blue-500/40 
                  rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 
                  group-hover:scale-150"
                ></div>

                {/* Logo with special animation */}
                <div className="w-full h-32 flex items-center justify-center mb-4 overflow-hidden relative z-10">
                  <div className="bg-white/90 rounded-lg p-4 w-full h-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="relative z-10 text-xl font-orbitron mb-3 text-white 
                  group-hover:text-blue-100 transition-colors duration-300 text-center"
                >
                  {partner.name}
                </h3>

                <p className="relative z-10 text-blue-100 group-hover:text-white transition-colors duration-300 text-center mb-6">
                  {partner.description}
                </p>

                {/* Visit Website Button */}
                <div className="relative z-10 flex justify-center mt-auto">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-md text-sm 
                    hover:bg-white/30 transition-colors border border-white/30 hover:border-white/50"
                  >
                    Visit Website
                  </a>
                </div>

                {/* Futuristic corner accent */}
                <div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] 
                  border-t-transparent border-r-blue-800 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                {/* Animated dots */}
                <div
                  className="absolute bottom-3 left-3 flex space-x-1 opacity-0 
                  group-hover:opacity-100 transition-all duration-500 delay-300"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-700 animate-pulse"></div>
                  <div
                    className="w-1 h-1 rounded-full bg-blue-600 animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"
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

export default PartnersSection;
