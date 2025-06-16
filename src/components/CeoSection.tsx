import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Add custom styles for the animations
const styles = `
  @keyframes spin-clockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes spin-counterclockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  
  @keyframes glow-pulse {
    0% { opacity: 4; filter: blur(3px); }
    50% { opacity: 4; filter: blur(3px); }
    100% { opacity: 4; filter: blur(3px); }
  }
  
  .animate-spin-clockwise {
    animation: spin-clockwise 12s linear infinite;
  }
  
  .animate-spin-counterclockwise {
    animation: spin-counterclockwise 12s linear infinite;
  }
  
  .animate-glow {
    animation: glow-pulse 3s ease-in-out infinite;
  }
`;

// Add the styles to the document
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}

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
      <div className="section-content z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-16 text-gray-800">
          Meet Our <span className="text-icd-blue">CEO</span>
        </h2>

        {/* Rest of the CEO section content remains unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
          <div ref={imageRef} className="relative mx-auto">
            {/* CEO image with digital overlay */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-white relative border-8 border-icd-blue shadow-lg">
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
              
              {/* Removed the circular glowing animations */}
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
