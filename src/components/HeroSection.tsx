import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import NetworkGraph from "./NetworkGraph";

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the hero section
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      }
    );

    gsap.fromTo(
      scrollCueRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 1.2,
      }
    );

    // Parallax effect on scroll
    gsap.to(heroRef.current, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="section min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/background-icd-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="section-content flex flex-col items-center justify-center z-6 pt-10">
        <h1
          ref={headlineRef}
          className="text-2xl md:text-2xl lg:text-2xl font-bold font-orbitron text-center mb-6 leading-tight text-white font-futuristic"
        >
          Let's talk about the future <br />
          <span className="text-light-blue">
            Innovation, Creativity, Development
          </span>
        </h1>

        <p
          ref={paragraphRef}
          className="text-lg md:text-l text-white/90 text-center max-w-2xl mb-12 font-futuristic"
        >
          We blend technology with creative solutions.
          <br />
          It's not about building systems we are innovating future.
        </p>

        <div
          ref={scrollCueRef}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-white/80 mb-2">Scroll to explore</span>
          <div className="w-6 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>

      {/* Interactive network graph background */}
      <NetworkGraph />
    </section>
  );
}

export default HeroSection;
