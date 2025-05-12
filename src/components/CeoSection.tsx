import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CeoSection = () => {
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

  return (
    <section
      id="ceo"
      ref={sectionRef}
      className="section bg-gradient-to-b from-icd-dark to-black relative overflow-hidden py-24"
    >
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit-pattern"
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
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16">
          Meet Our <span className="text-icd-blue">CEO</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
          <div ref={imageRef} className="relative mx-auto">
            {/* CEO image with digital overlay */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 relative border-2 border-icd-blue/30">
              <img
                src="/lovable-uploads/Dr-Abbas.jpg"
                alt="CEO Dr. Abbas"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
              <div className="absolute inset-0 bg-circuit-pattern opacity-30 z-20"></div>

              {/* Digital overlay animation */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
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
          </div>

          <div ref={contentRef} className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-orbitron mb-2">
              Dr Abbas Khawaja
            </h3>
            <p className="text-icd-blue mb-6 font-robotomono">
              Chief Executive Officer PhD in Public Management
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              A distinguished expert in public administration and e-governance
              with extensive experience in high-level management and project
              solutions. Dr. Khawaja's expertise spans administrative reform,
              public sector digitalization, and governance enhancement in
              Lebanon. His published work includes "Administrative Reform in
              Lebanon: The Perspective of Sound Governance" (2018),
              demonstrating his commitment to modernizing public administration.
            </p>
            <blockquote className="border-l-4 border-icd-blue/50 pl-4 italic text-white/90">
              "Our mission is to transform public administration through
              innovative solutions, fostering efficiency and transparency in
              governance while creating lasting positive impact for communities
              we serve."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
