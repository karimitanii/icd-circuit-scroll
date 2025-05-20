import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    description:
      "Implementing intelligent solutions that learn and adapt to your needs, from predictive analytics to natural language processing systems.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Creating custom applications and systems tailored to your specific requirements using the latest technologies and best practices.",
  },
  {
    icon: "🔄",
    title: "System Integration",
    description:
      "Seamlessly connecting disparate systems and technologies to create cohesive, efficient technological ecosystems.",
  },
  {
    icon: "☁️",
    title: "Cloud Applications",
    description:
      "Developing and deploying scalable, secure applications in the cloud for maximum flexibility and reliability.",
  },
  {
    icon: "⚙️",
    title: "Automation Systems",
    description:
      "Streamlining operations through intelligent automation, reducing costs and increasing efficiency across your organization.",
  },
  {
    icon: "🏗️",
    title: "Large-scale Project Delivery",
    description:
      "Managing and executing complex technological projects from conception to completion with our proven methodology.",
  },
  {
    icon: "🏛️",
    title: "Municipality & Public Sector Solutions",
    description:
      "Specialized digital transformation services for government and public institutions, enhancing citizen services.",
  },
  // New service 1
  {
    icon: "🔒",
    title: "Cybersecurity & Compliance",
    description:
      "Protecting your digital assets with advanced security solutions and ensuring compliance with industry regulations and standards.",
  },
  // New service 2
  {
    icon: "📊",
    title: "Data Analytics & Business Intelligence",
    description:
      "Transforming raw data into actionable insights through powerful analytics tools and customized dashboards for informed decision-making.",
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
              {/* Pattern paths remain unchanged */}
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
              {/* Other circles remain unchanged */}
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

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="service-card group h-full reveal">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-orbitron mb-3 text-gray-800 group-hover:text-icd-blue transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
