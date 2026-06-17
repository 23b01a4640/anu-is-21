"use client";

import { motion } from "framer-motion";

export function Sky({ isLetterStage }) {
  return (
    <motion.div
      className="absolute inset-0 z-0 transition-colors duration-[3000ms]"
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: ["0% 0%", "0% 50%", "0% 0%"] }}
      transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      style={{
        backgroundImage: isLetterStage 
          ? "linear-gradient(180deg, #FDE68A 0%, #FEF3C7 50%, #FFFBEB 100%)" // softer golden morning
          : "linear-gradient(180deg, #a1c4fd 0%, #fde047 50%, #fef3c7 100%)",
        backgroundSize: "100% 200%",
      }}
    />
  );
}
