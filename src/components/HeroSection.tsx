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
      className="section min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
      }}
    >
      <div className="section-content flex flex-col items-center justify-center z-10 pt-20">
        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron text-center mb-6 leading-tight text-black"
        >
          Let's talk about the future with <br />
          <span className="text-gradient">
            Innovation, Creativity, and Development
          </span>
        </h1>

        <p
          ref={paragraphRef}
          className="text-lg md:text-xl text-black/80 text-center max-w-3xl mb-12"
        >
          We blend cutting-edge technology with creative solutions.
          <br />
          It's not just about building systems—it's about shaping the digital
          future.
        </p>

        <div
          ref={scrollCueRef}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-black/60 mb-2">Scroll to explore</span>
          <div className="w-6 h-12 rounded-full border-2 border-black/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-black/60 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>

      {/* Interactive network graph background */}
      <NetworkGraph />
    </section>
  );
}

export default HeroSection;
