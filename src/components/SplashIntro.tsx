
import { useState, useEffect, useRef } from "react";

interface SplashIntroProps {
  onComplete: () => void;
}

const SplashIntro = ({ onComplete }: SplashIntroProps) => {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const pathwaysRef = useRef<SVGSVGElement>(null);
  
  // Services data for endpoint circles
  const services = [
    { name: "AI", position: { x: 75, y: 30 }, delay: 0.5 },
    { name: "E-Governance", position: { x: 85, y: 50 }, delay: 1.0 },
    { name: "Software Dev", position: { x: 70, y: 70 }, delay: 1.5 },
    { name: "Cloud Solutions", position: { x: 30, y: 70 }, delay: 2.0 },
    { name: "System Integration", position: { x: 15, y: 50 }, delay: 2.5 },
    { name: "Cybersecurity", position: { x: 25, y: 30 }, delay: 3.0 },
  ];

  useEffect(() => {
    // Animation sequence using timeouts
    const timer1 = setTimeout(() => {
      setStep(1); // Show Innovation
      animatePathways();
    }, 1000);

    const timer2 = setTimeout(() => {
      setStep(2); // Show Creativity
    }, 2500);

    const timer3 = setTimeout(() => {
      setStep(3); // Show Development
    }, 4000);

    const timer4 = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(onComplete, 1000); // Complete animation after fade-out
    }, 5500);

    return () => {
      // Clear all timeouts on unmount
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  // Function to animate the pathways from center to service endpoints
  const animatePathways = () => {
    if (!pathwaysRef.current) return;
    
    const svg = pathwaysRef.current;
    const paths = svg.querySelectorAll('.pathway');
    const circles = svg.querySelectorAll('.endpoint');
    const serviceBoxes = svg.querySelectorAll('.service-box');
    
    // Animate each path
    paths.forEach((path, index) => {
      const pathLength = (path as SVGPathElement).getTotalLength();
      (path as SVGPathElement).style.strokeDasharray = `${pathLength}`;
      (path as SVGPathElement).style.strokeDashoffset = `${pathLength}`;
      
      setTimeout(() => {
        // Animate the path drawing
        (path as SVGPathElement).style.transition = 'stroke-dashoffset 1.5s ease-in-out';
        (path as SVGPathElement).style.strokeDashoffset = '0';
        
        // After path animation, show the circle
        setTimeout(() => {
          (circles[index] as SVGCircleElement).style.opacity = '1';
          
          // After circle appears, show the service box
          setTimeout(() => {
            (serviceBoxes[index] as SVGGElement).style.opacity = '1';
          }, 200);
        }, 1300);
      }, services[index].delay * 1000);
    });
  };

  return (
    <div
      className={`splash-container fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="splash-logo mb-8 animate-fade-in">
        <img
          src="/lovable-uploads/7f00208c-2b91-4a73-9151-d078f7307838.png"
          alt="ICD Logo"
          className="w-32 h-32 md:w-40 md:h-40"
        />
      </div>

      {/* SVG for animated pathways */}
      <svg 
        ref={pathwaysRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Center position based on the logo */}
        <g>
          {services.map((service, index) => {
            // Calculate path from center (50,50) to service position
            const pathId = `path-${index}`;
            return (
              <g key={index}>
                {/* Path from center to endpoint */}
                <path 
                  id={pathId}
                  className="pathway" 
                  d={`M 50,50 Q ${(50 + service.position.x) / 2 + (index % 2 ? 10 : -10)},${
                    (50 + service.position.y) / 2 + (index % 3 ? -8 : 8)
                  } ${service.position.x},${service.position.y}`}
                  stroke="#0047AB"
                  strokeWidth="0.5"
                  fill="none"
                  style={{ opacity: 0.8 }}
                />
                
                {/* Endpoint circle */}
                <circle 
                  className="endpoint" 
                  cx={service.position.x} 
                  cy={service.position.y} 
                  r="1.5" 
                  fill="#0047AB"
                  style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                />
                
                {/* Service box */}
                <g 
                  className="service-box"
                  style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                >
                  <rect
                    x={service.position.x - 5}
                    y={service.position.y - 2}
                    width="10"
                    height="4"
                    rx="1"
                    fill="#0047AB"
                    fillOpacity="0.9"
                  />
                  <text
                    x={service.position.x}
                    y={service.position.y + 0.8}
                    textAnchor="middle"
                    fill="white"
                    fontSize="1.8"
                    fontFamily="Orbitron, sans-serif"
                  >
                    {service.name}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </svg>

      <div className="relative h-20 flex flex-col items-center justify-center z-10">
        <h1
          className={`text-center text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-icd-blue ${
            step === 1
              ? "animate-text-reveal"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          Innovation
        </h1>
        <h1
          className={`text-center text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-icd-blue ${
            step === 2
              ? "animate-text-reveal"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          Creativity
        </h1>
        <h1
          className={`text-center text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-icd-blue ${
            step === 3
              ? "animate-text-reveal"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          Development
        </h1>
      </div>
    </div>
  );
};

export default SplashIntro;
