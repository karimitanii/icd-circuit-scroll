import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "../lib/gsap";

interface LogoModelProps {
  animate: boolean;
}

const LogoModel = ({ animate }: LogoModelProps) => {
  useEffect(() => {
    if (animate) {
      // Animation logic for the 3D model
    }
  }, [animate]);

  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#0047AB" wireframe />
    </mesh>
  );
};

interface SplashIntroProps {
  onComplete: () => void;
}

const SplashIntro = ({ onComplete }: SplashIntroProps) => {
  const [step, setStep] = useState(0);
  const [animate3d, setAnimate3d] = useState(false);

  useEffect(() => {
    // Animation sequence
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => onComplete(), 500);
      },
    });

    // Start 3D animation
    setAnimate3d(true);

    // Text animation sequence
    timeline
      .to(".splash-logo", {
        opacity: 1,
        scale: 1.1,
        duration: 1,
        ease: "power2.out",
      })
      .to(".text-innovation", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: () => setStep(1),
      })
      .to(".text-innovation", {
        opacity: 0,
        duration: 0.4,
      })
      .to(".text-creativity", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: () => setStep(2),
      })
      .to(".text-creativity", {
        opacity: 0,
        duration: 0.4,
      })
      .to(".text-development", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: () => setStep(3),
      })
      .to(".splash-container", {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
      });

    return () => {
      timeline.kill();
    };
  }, [onComplete]);

  return (
    <div className="splash-container fixed inset-0 bg-icd-dark flex flex-col items-center justify-center z-50">
      <div className="w-full h-full absolute">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <LogoModel animate={animate3d} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
        </Canvas>
      </div>

      <div className="splash-logo opacity-0 z-10 mb-8">
        <img
          src="/lovable-uploads/7f00208c-2b91-4a73-9151-d078f7307838.png"
          alt="ICD Logo"
          className="w-32 h-32 md:w-40 md:h-40"
        />
      </div>

      <div className="relative h-20">
        <h1 className="text-innovation opacity-0 transform translate-y-10 absolute left-0 right-0 text-center text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-white">
          Innovation.
        </h1>
        <h1 className="text-creativity opacity-0 transform translate-y-10 absolute left-0 right-0 text-center text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-white">
          Creativity.
        </h1>
        <h1 className="text-development opacity-0 transform translate-y-10 absolute left-0 right-0 text-center text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-white">
          Development.
        </h1>
      </div>
    </div>
  );
};

export default SplashIntro;
