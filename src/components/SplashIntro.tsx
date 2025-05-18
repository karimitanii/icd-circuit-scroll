// components/SplashIntro.tsx
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

interface SplashIntroProps {
  onComplete: () => void;
}

const words = ["Innovation", "Creativity", "Development"];

const SplashIntro = ({ onComplete }: SplashIntroProps) => {
  const logoCtrls = useAnimationControls();
  const pulseCtrls = useAnimationControls();
  const wordCtrls = useAnimationControls();
  const fadeCtrls = useAnimationControls();

  useEffect(() => {
    /* sequence:
       0. logo pop-in
       1. for each word:
          - pulse expand
          - word reveal
       2. fade entire splash
    */
    (async () => {
      await logoCtrls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
      });

      for (let i = 0; i < words.length; i++) {
        await Promise.all([
          pulseCtrls.start({
            scale: [0, 1],
            opacity: [0.8, 0],
            transition: { duration: 1.2, ease: "easeOut" },
          }),
          wordCtrls.start((idx) =>
            idx === i
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                }
              : {}
          ),
        ]);
        await new Promise((r) => setTimeout(r, 150)); // slight gap between pulses
      }

      await fadeCtrls.start({ opacity: 0, transition: { duration: 0.6 } });
      onComplete();
    })();
  }, [logoCtrls, pulseCtrls, wordCtrls, fadeCtrls, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white select-none"
      initial={{ opacity: 1 }}
      animate={fadeCtrls}
    >
      {/* glow pulse (single circle re-used 3×) */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border-[3px] border-icd-blue/80"
        initial={{ scale: 0, opacity: 0 }}
        animate={pulseCtrls}
      />

      {/* logo */}
      <motion.img
        src="/lovable-uploads/7f00208c-2b91-4a73-9151-d078f7307838.png"
        alt="ICD Logo"
        className="w-32 h-32 md:w-40 md:h-40"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={logoCtrls}
      />

      {/* words */}
      <div className="mt-8 space-y-2">
        {words.map((w, i) => (
          <motion.h1
            key={w}
            custom={i}
            initial={{ opacity: 0, y: 20 }}
            animate={wordCtrls}
            className="text-center text-4xl md:text-5xl font-orbitron font-bold text-icd-blue glitch"
            data-text={w}
          >
            {w}
          </motion.h1>
        ))}
      </div>
    </motion.div>
  );
};

export default SplashIntro;
