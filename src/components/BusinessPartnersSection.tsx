import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BusinessPartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    ).fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.7"
    );

    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const partners = [
    {
      name: "Mr. Firas Sleiman",
      role: "Technical Director",
      expertise: "AI Solutions & Cloud Architecture",
      image: "/lovable-uploads/Mr.Firas.png",
      quote:
        "Pioneering AI-driven solutions with 25+ years in tech consulting and innovation leadership.",
    },
    {
      name: "Mr. Mahmoud Baltouni",
      role: "Program Director",
      expertise: "Digital Transformation & Government Services",
      image: "/lovable-uploads/Mr.Mahmoud.png",
      quote:
        "35+ years of excellence in transforming government operations through innovative technology solutions.",
    },
  ];

  return (
    <section
      id="business-partners"
      ref={sectionRef}
      className="section bg-gradient-to-b from-black to-icd-dark relative overflow-hidden py-24"
    >
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit-pattern-partners"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10 L30 10 L30 30 L50 30 L50 50 L70 50 L70 70 L90 70"
                stroke="#0047AB"
                strokeOpacity="0.1"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M20 80 L40 80 L40 60 L60 60 L60 40 L80 40 L80 20"
                stroke="#0047AB"
                strokeOpacity="0.1"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="30" cy="10" r="2" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="50" cy="30" r="2" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="70" cy="50" r="2" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="40" cy="80" r="2" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="60" cy="60" r="2" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="80" cy="40" r="2" fill="#0047AB" fillOpacity="0.2" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#circuit-pattern-partners)"
          />
        </svg>
      </div>

      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16">
          Business Project <span className="text-icd-blue">Partners</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              ref={index === 0 ? imageRef : undefined}
              className="relative"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 relative border-2 border-icd-blue/30 mx-auto mb-6">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
                <div className="absolute inset-0 bg-circuit-pattern opacity-30 z-20"></div>

                {/* Digital overlay animation */}
                <div className="absolute inset-0">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-px bg-icd-blue/40"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: 0,
                        right: 0,
                        animation: `pulse-slow ${
                          Math.random() * 3 + 3
                        }s infinite`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div
                ref={index === 0 ? contentRef : undefined}
                className="text-center"
              >
                <h3 className="text-xl md:text-2xl font-orbitron mb-2">
                  {partner.name}
                </h3>
                <p className="text-icd-blue mb-2 font-robotomono">
                  {partner.role}
                </p>
                <p className="text-white/60 mb-4 text-sm">
                  {partner.expertise}
                </p>
                <blockquote className="border-l-4 border-icd-blue/50 pl-4 italic text-white/80 text-sm">
                  "{partner.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPartnersSection;
