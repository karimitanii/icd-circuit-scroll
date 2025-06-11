import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const services = [
  {
    icon: "/lovable-uploads/services/business-consulting.png",
    title: "Digital & Business Consulting",
    description:
      "Strategic advisory across digital transformation, AI integration, smart infrastructure, and process reengineering.",
    slug: "digital-business-consulting",
  },
  {
    icon: "/lovable-uploads/services/automation.png",
    title: "Smart IT & Automation Systems",
    description:
      "Design and deployment of intelligent automation, IoT frameworks, and AI-driven control systems.",
    slug: "smart-it-automation",
  },
  {
    icon: "/lovable-uploads/services/software-dev.png",
    title: "Custom Software & Platform Development",
    description:
      "Scalable, secure, and modular applications tailored to enterprise and public-sector needs.",
    slug: "custom-software-development",
  },
  {
    icon: "/lovable-uploads/services/cloud.png",
    title: "Integrated Cloud & On-Premise Solutions",
    description:
      "Deployment and management of hybrid environments including AWS, Oracle, Microsoft Azure, and custom MCP infrastructures.",
    slug: "cloud-solutions",
  },
  {
    icon: "/lovable-uploads/services/fintech.png",
    title: "Fintech & Digital Payment Systems",
    description:
      "Implementation of secure financial technologies including digital wallets, core banking integrations, and e-payment gateways.",
    slug: "fintech-payment-systems",
  },
  {
    icon: "/lovable-uploads/services/public-sector.png",
    title: "E-Governance & Public Sector Platforms",
    description:
      "Full-scale municipal and national-level software systems for smart cities, citizen services, and digital governance.",
    slug: "e-governance-platforms",
  },
  {
    icon: "/lovable-uploads/services/ai.png",
    title: "Enterprise AI & Virtual Workforce Solutions",
    description:
      "AI employee orchestration through platforms, enabling autonomous digital teams.",
    slug: "enterprise-ai-solutions",
  },
  {
    icon: "/lovable-uploads/services/large-scale.png",
    title: "Large-Scale, Multi-Stakeholder Project Execution",
    description:
      "Proven expertise in managing complex deployments across ministries, municipalities, and international organizations.",
    slug: "large-scale-projects",
  },
  {
    icon: "/lovable-uploads/services/training.png",
    title: "Higher Education Training & Development",
    description:
      "Comprehensive training programs designed to enhance technical skills, digital literacy, and leadership capabilities for professionals and organizations.",
    slug: "education-training",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Improved animation using Intersection Observer
    const observerOptions = {
      threshold: 0.05, // Lower threshold to trigger earlier
      rootMargin: "0px 0px -50px 0px", // Adjusted to trigger sooner
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          // Add initial animation for service cards
          if (entry.target.classList.contains("service-card")) {
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

    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => {
      observer.observe(card as Element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section bg-white relative overflow-hidden py-24"
    >
      {/* Background circuit animation - moved to top for earlier rendering */}
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
              <circle
                cx="130"
                cy="90"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
              <circle
                cx="170"
                cy="130"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
              <circle
                cx="150"
                cy="10"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
              <circle
                cx="110"
                cy="50"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
              <circle cx="70" cy="90" r="3" fill="#0047AB" fillOpacity="0.05" />
              <circle
                cx="30"
                cy="130"
                r="3"
                fill="#0047AB"
                fillOpacity="0.02"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-pattern)" />
        </svg>
      </div>

      <div className="section-content z-10">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800 reveal"
        >
          Our <span className="text-icd-blue">Services</span>
        </h2>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group h-full reveal perspective-1000"
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

                {/* Image with special animation - replacing icon */}
                <div
                  className="service-icon relative z-10 mb-6 bg-blue-600 w-600 h-600 rounded-lg flex items-center 
                  justify-center group-hover:bg-blue-500 text-white overflow-hidden
                  transform-gpu transition-all duration-700 group-hover:scale-110"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-500 h-500 object-contain service-image opacity-0 animate-fade-in transition-transform duration-700
                    group-hover:scale-125"
                  />
                </div>

                {/* Content */}
                <h3
                  className="relative z-10 text-xl font-orbitron mb-3 text-white 
                  group-hover:text-blue-100 transition-colors duration-300"
                >
                  {service.title}
                </h3>

                <p className="relative z-10 text-blue-100 group-hover:text-white transition-colors duration-300 mb-10">
                  {service.description}
                </p>

                {/* Learn More Arrow Box */}
                <Link to={`/services/${service.slug}`}>
                  <div
                    className="absolute bottom-3 right-3 z-20 w-10 h-10 bg-blue-800/80 hover:bg-blue-700 
                    rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300
                    border border-blue-400/30 hover:border-blue-300/50 transform hover:scale-110 group-hover:shadow-glow"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white transition-transform duration-300 transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </Link>

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
        
        .service-image {
          animation: fadeIn 1s ease-in-out forwards;
          animation-delay: 0.3s;
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .shadow-glow {
          box-shadow: 0 0 8px 2px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
