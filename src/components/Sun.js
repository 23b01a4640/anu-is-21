"use client";

import { motion } from "framer-motion";

export function Sun() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute top-10 right-20 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(253,253,253,1) 0%, rgba(253,224,71,0.8) 40%, rgba(253,224,71,0) 70%)",
          boxShadow: "0 0 120px 40px rgba(253,224,71,0.6)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
