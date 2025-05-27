import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CeoSection() {
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
      className="section bg-white relative overflow-hidden py-24"
    >
      {/* Background circuit animation - updated to match services section */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="ceo-services-pattern"
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
          <rect width="100%" height="100%" fill="url(#ceo-services-pattern)" />
        </svg>
      </div>

      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800">
          Meet Our <span className="text-icd-blue">CEO</span>
        </h2>

        {/* Rest of the CEO section content remains unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
          <div ref={imageRef} className="relative mx-auto">
            {/* CEO image with digital overlay */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-white relative border-2 border-icd-blue/30">
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
                      animation: `pulse-slow ${Math.random() * 3 + 3}s infinite`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div ref={contentRef} className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-orbitron mb-2 text-gray-900">
              Dr Abbas Khawaja
            </h3>
            <p className="text-icd-blue mb-6 font-robotomono">
              Chief Executive Officer PhD in Public Management
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A distinguished expert in public administration and e-governance
              with extensive experience in high-level management and project
              solutions. Dr. Khawaja's expertise spans administrative reform,
              public sector digitalization, and governance enhancement in
              Lebanon. His published work includes "Administrative Reform in
              Lebanon: The Perspective of Sound Governance" (2018),
              demonstrating his commitment to modernizing public administration.
            </p>
            <blockquote className="border-l-4 border-icd-blue/50 pl-4 italic text-gray-800">
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
}
export default CeoSection;
