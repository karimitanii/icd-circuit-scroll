
import { useEffect, useRef } from "react";
import NetworkGraph from "./NetworkGraph";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation using timeouts
    const headline = headlineRef.current;
    const paragraph = paragraphRef.current;
    const scrollCue = scrollCueRef.current;

    if (headline) {
      headline.classList.add("active");
    }

    setTimeout(() => {
      if (paragraph) {
        paragraph.classList.add("active");
      }
    }, 300);

    setTimeout(() => {
      if (scrollCue) {
        scrollCue.classList.add("active");
      }
    }, 600);

    // Scroll effect for parallax
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPos = window.scrollY;
        const opacity = Math.max(0, 1 - scrollPos / 500);
        heroRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="section min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden"
    >
      <div className="section-content flex flex-col items-center justify-center z-10 pt-20">
        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron text-center mb-6 leading-tight text-gray-800 opacity-0 transform translate-y-10 transition-all duration-1000"
        >
          Engineering the Future with <br />
          <span className="text-gradient">
            Innovation, Creativity, and Development
          </span>
        </h1>

        <p
          ref={paragraphRef}
          className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-12 opacity-0 transform translate-y-10 transition-all duration-1000 delay-300"
        >
          At ICD, we blend cutting-edge technology with creative solutions to
          transform businesses and public institutions. We're not just building
          systems—we're shaping the digital future.
        </p>

        <div
          ref={scrollCueRef}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 transition-all duration-1000 delay-600"
        >
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <div className="w-6 h-12 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>

      {/* Interactive network graph background */}
      <NetworkGraph />
    </section>
  );
};

export default HeroSection;
