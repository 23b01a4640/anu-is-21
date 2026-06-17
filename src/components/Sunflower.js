"use client";

import { motion } from "framer-motion";

export function Sunflower({ size = 100, delay = 0, duration = 4, className = "", style = {} }) {
  return (
    <motion.div
      className={`origin-bottom ${className}`}
      style={{ width: size, height: size * 2, ...style }}
      animate={{ rotate: [-2, 3, -2] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-md">
        {/* Stem */}
        <path d="M50 80 Q 45 140 50 200" stroke="#4ade80" strokeWidth="6" fill="none" />
        {/* Leaves */}
        <path d="M48 130 Q 20 120 10 100 Q 30 110 48 130" fill="#22c55e" />
        <path d="M52 160 Q 80 150 90 130 Q 70 140 52 160" fill="#22c55e" />
        {/* Petals */}
        <g transform="translate(50, 60)">
          {Array.from({ length: 15 }).map((_, i) => (
            <path
              key={i}
              d="M0 -15 Q 10 -35 0 -45 Q -10 -35 0 -15"
              fill="#fbbf24"
              transform={`rotate(${i * 24})`}
            />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <path
              key={i}
              d="M0 -10 Q 8 -25 0 -35 Q -8 -25 0 -10"
              fill="#f59e0b"
              transform={`rotate(${i * 24 + 12})`}
            />
          ))}
          {/* Center */}
          <circle cx="0" cy="0" r="18" fill="#78350f" />
          <circle cx="0" cy="0" r="14" fill="#451a03" />
        </g>
      </svg>
    </motion.div>
  );
}
