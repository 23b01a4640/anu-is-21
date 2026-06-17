"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sky } from "@/components/Sky";
import { Clouds } from "@/components/Clouds";
import { Sun } from "@/components/Sun";
import { SunflowerField } from "@/components/SunflowerField";
import { Particles } from "@/components/Particles";
import { PasswordCard } from "@/components/PasswordCard";
import { Sunflower } from "@/components/Sunflower";
import { Letter } from "@/components/Letter";
import { ChallengeReveal } from "@/components/ChallengeReveal";
import { EasterEggs } from "@/components/EasterEggs";
import { Dashboard } from "@/components/Dashboard";

export default function Home() {
  const [stage, setStage] = useState("entrance"); // entrance, success, success-final, letter, challenge, dashboard
  const [showSecret, setShowSecret] = useState(false);

  const handleSuccess = () => {
    setStage("success");
  };

  // Effect to handle transitions between success stages
  useEffect(() => {
    if (stage === "success") {
      const timer = setTimeout(() => {
        setStage("success-final");
      }, 1000); // 1 second delay after card disappears
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Effect to handle transition from success-final to letter
  useEffect(() => {
    if (stage === "success-final") {
      const timer = setTimeout(() => {
        setStage("letter");
      }, 4000); // 4 seconds of "Happy 21st Birthday" before moving to letter
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const isLetterStage = stage === "letter" || stage === "challenge";

  return (
    <main className="relative w-full h-screen overflow-hidden bg-white selection:bg-yellow-200">
      {/* Background Environment */}
      <Sky isLetterStage={isLetterStage} />
      <Sun />
      <Clouds />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <SunflowerField isBlurred={isLetterStage} />
      </motion.div>

      {/* Ambient Pollen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <Particles isBlurred={isLetterStage} />
      </motion.div>

      {/* Centerpiece Blooms at 2s (Only shown on entrance) */}
      <AnimatePresence>
        {(stage === "entrance" || stage === "success") && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            transition={{ delay: stage === "entrance" ? 2 : 0, duration: 1, type: "spring" }}
            className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <Sunflower size={120} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Password Card */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-auto">
        <AnimatePresence>
          {stage === "entrance" && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <PasswordCard onSuccess={handleSuccess} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Final Message */}
      <AnimatePresence>
        {stage === "success-final" && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{ duration: 2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-yellow-900 tracking-wide text-center px-4 drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              style={{ textShadow: "0 4px 20px rgba(255,255,255,0.8)" }}
            >
              21 years of grace, care and love
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Letter Page */}
      <AnimatePresence>
        {isLetterStage && (
          <motion.div
            className="absolute inset-0 z-30 overflow-y-auto overflow-x-hidden pt-12 pb-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 2 }}
          >
            <Letter onFinish={() => setStage("challenge")} />

            {/* Challenge Reveal Section */}
            {stage === "challenge" && (
              <ChallengeReveal onAccept={() => setStage("dashboard")} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* The 12 Adventures Dashboard */}
      <AnimatePresence>
        {stage === "dashboard" && (
          <motion.div
            className="absolute inset-0 z-50 bg-[#FFF8E7]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Dashboard />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Eggs (Only show during letter stage to avoid cluttering password page) */}
      {isLetterStage && <EasterEggs />}

      {/* Hidden Secret from Password Page */}
      {(stage === "entrance" || stage === "success") && (
        <div className="absolute bottom-4 right-4 z-50 flex flex-col items-end">
          <AnimatePresence>
            {showSecret && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mb-2 px-4 py-2 bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-yellow-100"
              >
                <p className="text-yellow-800 text-sm italic">
                  Psst...<br/>You look beautiful today.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => {
              setShowSecret(true);
              setTimeout(() => setShowSecret(false), 5000);
            }}
            className="text-2xl opacity-30 hover:opacity-100 transition-opacity outline-none"
            title="A secret"
          >
            🌻
          </button>
        </div>
      )}
    </main>
  );
}
