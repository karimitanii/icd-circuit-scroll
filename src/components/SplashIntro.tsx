import { useState, useEffect } from "react";

interface SplashIntroProps {
  onComplete: () => void;
}

const SplashIntro = ({ onComplete }: SplashIntroProps) => {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animation sequence using timeouts instead of GSAP
    const timer1 = setTimeout(() => {
      setStep(1); // Show Innovation
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

      <div className="relative h-20 flex flex-col items-center justify-center">
        <h1
          className={`text-center text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-icd-blue ${
            step === 1
              ? "animate-text-reveal"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          Innovation.
        </h1>
        <h1
          className={`text-center text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-icd-blue ${
            step === 2
              ? "animate-text-reveal"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          Creativity.
        </h1>
        <h1
          className={`text-center text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-icd-blue ${
            step === 3
              ? "animate-text-reveal"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          Development.
        </h1>
      </div>
    </div>
  );
};

export default SplashIntro;
