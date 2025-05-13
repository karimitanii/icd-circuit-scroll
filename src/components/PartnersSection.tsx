import { useEffect, useRef } from "react";

// Partner logos and websites
const partners = [
  { name: "TechCorp", logo: "techcorp.png", website: "https://techcorp.com" },
  {
    name: "Kaic.ai",
    logo: "lovable-uploads/Kaic.ai.png",
    website: "https://kaic.ai",
  },
  {
    name: "Digital Solutions",
    logo: "digitalsolutions.png",
    website: "https://digitalsolutions.com",
  },
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll animation
    const observerOptions = {
      threshold: 0.1,
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          titleObserver.unobserve(entry.target);
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    // Setup observers for partner logos with appear/disappear effect
    const logoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            entry.target.classList.remove("inactive");
          } else {
            entry.target.classList.remove("active");
            entry.target.classList.add("inactive");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-50px 0px",
      }
    );

    const logos = document.querySelectorAll(".partner-logo");
    logos.forEach((logo) => {
      logoObserver.observe(logo);
    });

    return () => {
      titleObserver.disconnect();
      logoObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="section bg-white relative overflow-hidden py-24"
    >
      <div className="section-content z-10">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800 reveal"
        >
          Our <span className="text-icd-blue">Partners</span>
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="partners-carousel flex flex-wrap justify-center md:justify-start md:w-[200%] gap-8 py-8"
          >
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo flex-shrink-0 w-36 h-36 md:w-48 md:h-48 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 hover:border-icd-blue/50 transition-all duration-300 group opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="w-full h-full object-cover"
                />
                <div className="mt-2 font-robotomono text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
                  {partner.name}
                </div>
              </a>
            ))}
          </div>

          {/* Fade effect on sides for horizontal scroll */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm hidden md:block"></div>
      </div>
    </section>
  );
};

export default PartnersSection;
