import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function BusinessPartnersSection() {
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
      className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden py-24"
    >
      {/* Circuit pattern overlay remains the same */}
      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-900">
          Business Project <span className="text-icd-blue">Partners</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              ref={index === 0 ? imageRef : undefined}
              className="relative"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-white relative border-2 border-icd-blue/30 mx-auto mb-6">
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
                        animation: `pulse-slow ${Math.random() * 3 + 3}s infinite`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div
                ref={index === 0 ? contentRef : undefined}
                className="text-center"
              >
                <h3 className="text-xl md:text-2xl font-orbitron mb-2 text-gray-900">
                  {partner.name}
                </h3>
                <p className="text-icd-blue mb-2 font-robotomono">
                  {partner.role}
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  {partner.expertise}
                </p>
                <blockquote className="border-l-4 border-icd-blue/50 pl-4 italic text-gray-700 text-sm">
                  "{partner.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessPartnersSection;
