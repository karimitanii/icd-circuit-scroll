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
            entry.target.classList.add("fade-in");
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
      {/* Circuit background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 z-0"></div>

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
              className="reveal partner-card flex flex-col items-center"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                onMouseEnter={() => setActivePartner(index)}
                onMouseLeave={() => setActivePartner(null)}
                className="relative w-full aspect-square bg-white rounded-xl flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-icd-blue transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                <div className="w-full h-32 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-orbitron text-gray-800 text-center mt-2">
                  {partner.name}
                </h3>

                <p className="text-gray-500 text-sm text-center mt-2">
                  {partner.description}
                </p>

                <div
                  className={`mt-4 transition-opacity duration-300 ${
                    activePartner === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-icd-blue text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
