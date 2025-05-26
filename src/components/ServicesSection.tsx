import { useEffect, useRef } from "react";

const services = [
  {
    icon: "💼",
    title: "Digital & Business Consulting",
    description:
      "Strategic advisory across digital transformation, AI integration, smart infrastructure, and process reengineering.",
  },
  {
    icon: "⚙️",
    title: "Smart IT & Automation Systems",
    description:
      "Design and deployment of intelligent automation, IoT frameworks, and AI-driven control systems.",
  },
  {
    icon: "💻",
    title: "Custom Software & Platform Development",
    description:
      "Scalable, secure, and modular applications tailored to enterprise and public-sector needs.",
  },
  {
    icon: "☁️",
    title: "Integrated Cloud & On-Premise Solutions",
    description:
      "Deployment and management of hybrid environments including Oracle, Microsoft Azure, and custom MCP infrastructures.",
  },
  {
    icon: "💳",
    title: "Fintech & Digital Payment Systems",
    description:
      "Implementation of secure financial technologies including digital wallets, core banking integrations, and e-payment gateways.",
  },
  {
    icon: "🏛️",
    title: "E-Governance & Public Sector Platforms",
    description:
      "Full-scale municipal and national-level software systems for smart cities, citizen services, and digital governance.",
  },
  {
    icon: "🤖",
    title: "Enterprise AI & Virtual Workforce Solutions",
    description:
      "AI employee orchestration through platforms like Tenn.ai, enabling autonomous digital teams.",
  },
  {
    icon: "🏗️",
    title: "Large-Scale, Multi-Stakeholder Project Execution",
    description:
      "Proven expertise in managing complex deployments across ministries, municipalities, and international organizations.",
  },
  {
    icon: "🎓",
    title: "Higher Education Training & Development",
    description:
      "Comprehensive training programs designed to enhance technical skills, digital literacy, and leadership capabilities for professionals and organizations.",
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
              <circle
                cx="170"
                cy="130"
                r="3"
                fill="#0047AB"
                fillOpacity="0.1"
              />
              <circle cx="150" cy="10" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="110" cy="50" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="70" cy="90" r="3" fill="#0047AB" fillOpacity="0.1" />
              <circle cx="30" cy="130" r="3" fill="#0047AB" fillOpacity="0.1" />
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
                className="relative bg-white rounded-xl p-6 h-full transform-gpu transition-all duration-500 
                border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-xl
                group-hover:translate-y-[-10px] overflow-hidden"
              >
                {/* Futuristic background elements */}
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                ></div>

                <div
                  className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-tl-3xl 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                <div
                  className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 
                  rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 
                  group-hover:scale-150"
                ></div>

                {/* Icon with special animation */}
                <div
                  className="relative z-10 text-4xl mb-6 bg-blue-50 w-16 h-16 rounded-lg flex items-center 
                  justify-center group-hover:bg-blue-100 group-hover:text-blue-600 
                  transform-gpu transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3
                  className="relative z-10 text-xl font-orbitron mb-3 text-gray-800 
                  group-hover:text-blue-600 transition-colors duration-300"
                >
                  {service.title}
                </h3>

                <p className="relative z-10 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Futuristic corner accent */}
                <div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] 
                  border-t-transparent border-r-blue-50 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                {/* Animated dots */}
                <div
                  className="absolute bottom-3 left-3 flex space-x-1 opacity-0 
                  group-hover:opacity-100 transition-all duration-500 delay-300"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></div>
                  <div
                    className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-1 h-1 rounded-full bg-blue-600 animate-pulse"
                    style={{ animationDelay: "600ms" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
