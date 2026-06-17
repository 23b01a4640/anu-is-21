"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Particles({ isBlurred }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const count = 40; 
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 20,
      drift: (Math.random() - 0.5) * 30, // Horizontal drift
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none z-20 overflow-hidden transition-all duration-[3000ms] ${isBlurred ? 'blur-[2px] opacity-70' : 'opacity-100'}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-[-20px] bg-yellow-300 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 10px 2px rgba(253, 224, 71, 0.8)",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: ["0vw", `${p.drift}vw`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
