"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ChallengeReveal({ onAccept }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [declinePos, setDeclinePos] = useState({ x: 0, y: 0 });
  const [showNiceTry, setShowNiceTry] = useState(false);
  const [isAccepting, setIsAccepting] = useState(false);

  const handleDeclineHover = () => {
    // Move the button randomly within a certain radius
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    setDeclinePos({ x: randomX, y: randomY });
  };

  const handleDeclineClick = () => {
    setShowNiceTry(true);
    setTimeout(() => setShowNiceTry(false), 3000);
  };

  const handleAcceptClick = () => {
    setIsAccepting(true);
    // Trigger sequence
    setTimeout(onAccept, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full flex flex-col items-center pb-24 z-30 relative"
    >
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-3xl font-serif text-yellow-900 mb-6"
      >
        One More Gift
      </motion.h3>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-center text-yellow-800/80 mb-10 space-y-4 max-w-sm"
      >
        <p>For the next 12 months,<br/>I want you to collect moments.</p>
        <p>Not achievements.<br/>Not deadlines.<br/>Not responsibilities.</p>
        <p>Just memories.</p>
        <p>So I made you a challenge.</p>
        <p>One place.<br/>One month.<br/>For an entire year.</p>
        <p>By your 22nd birthday,<br/>you'll have twelve new stories.</p>
      </motion.div>

      {/* Flippable Card */}
      <div 
        className="relative w-72 h-48 mb-12 perspective-1000 cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full preserve-3d relative transition-all duration-700"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div 
            className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-xl flex flex-col items-center justify-center border border-yellow-200"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">🌻</span>
            <h4 className="font-bold text-yellow-900 mb-2">THE SUNFLOWER CHALLENGE</h4>
            <div className="text-sm text-yellow-700/80 text-center">
              <p>12 Places</p>
              <p>12 Months</p>
              <p>1 Adventure</p>
            </div>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 backface-hidden bg-yellow-400 rounded-xl shadow-xl flex flex-col items-center justify-center text-yellow-950"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <span className="text-2xl mb-4">✨</span>
            <p className="font-serif text-lg tracking-wide">Unlocks</p>
            <p className="font-bold">June 2026 → June 2027</p>
          </div>
        </motion.div>
      </div>

      {/* Decision Buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.button
          onClick={handleAcceptClick}
          disabled={isAccepting}
          className={cn(
            "px-8 py-4 rounded-full font-bold text-white shadow-lg text-lg transition-all z-20",
            isAccepting ? "scale-110 shadow-[0_0_40px_10px_rgba(250,204,21,0.8)]" : ""
          )}
          style={{ background: "linear-gradient(90deg, #FACC15 0%, #FDBA74 100%)" }}
          whileHover={!isAccepting ? { scale: 1.05, boxShadow: "0 0 20px 5px rgba(250, 204, 21, 0.4)" } : {}}
          whileTap={!isAccepting ? { scale: 0.95 } : {}}
        >
          {isAccepting ? "Challenge Accepted ✨" : "🌻 Accept The Challenge"}
        </motion.button>

        <motion.button
          onMouseEnter={handleDeclineHover}
          onClick={handleDeclineClick}
          animate={{ x: declinePos.x, y: declinePos.y }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="px-6 py-2 rounded-full text-yellow-700/50 hover:text-yellow-700 border border-transparent hover:border-yellow-200 transition-colors z-10 text-sm"
        >
          Maybe Not 😌
        </motion.button>
      </motion.div>

      {/* Nice Try Modal */}
      <AnimatePresence>
        {showNiceTry && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-6 rounded-2xl shadow-2xl z-50 text-center border-2 border-yellow-300"
          >
            <p className="text-xl font-bold text-yellow-900 mb-2">Nice try.</p>
            <p className="text-yellow-800">You know you're doing this. 🌻</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
