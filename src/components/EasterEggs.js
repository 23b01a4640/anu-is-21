"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Egg = ({ top, left, bottom, right, message, delay }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="absolute z-50" style={{ top, left, bottom, right }}>
      <AnimatePresence>
        {!clicked ? (
          <motion.button
            key="icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.2 }}
            transition={{ delay, duration: 2 }}
            onClick={() => setClicked(true)}
            className="text-2xl outline-none"
            title="A hidden surprise..."
          >
            🌻
          </motion.button>
        ) : (
          <motion.div
            key="note"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bg-white/90 backdrop-blur text-yellow-900 text-sm px-4 py-2 rounded-xl shadow-lg border border-yellow-200 whitespace-nowrap"
            style={{
              // Adjust popover position based on corner
              top: bottom ? "auto" : "100%",
              bottom: top ? "auto" : "100%",
              left: right ? "auto" : "50%",
              right: left ? "auto" : "50%",
              transform: "translate(-50%, 10px)",
            }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function EasterEggs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="relative w-full h-full pointer-events-auto">
        <Egg top="15%" left="5%" message="You deserve beautiful things." delay={10} />
        <Egg top="5%" right="10%" message="Don't forget to drink water." delay={15} />
        <Egg bottom="20%" right="5%" message="I hope this makes you smile." delay={20} />
      </div>
    </div>
  );
}
