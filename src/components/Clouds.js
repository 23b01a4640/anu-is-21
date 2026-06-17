"use client";

import { motion } from "framer-motion";

const Cloud = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 256 256" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M168,104a56,56,0,0,0-108.67-12A48,48,0,0,0,64,184H184a40,40,0,0,0,0-80Zm16,64H64a32,32,0,0,1,0-64,32.41,32.41,0,0,1,6,.58,8,8,0,0,0,8.81-5.11,40,40,0,0,1,76.54,14.65,8,8,0,0,0,7.09,7.84A24,24,0,0,1,184,168Z" />
    <path d="M168,104a56,56,0,0,0-108.67-12A48,48,0,0,0,64,184H184a40,40,0,0,0,0-80Z" />
  </svg>
);

export function Clouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute top-[10%] left-[-20%] text-white/50 w-[400px] h-[200px]"
        animate={{ x: ["0vw", "120vw"] }}
        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
      >
        <Cloud className="w-full h-full" />
      </motion.div>
      <motion.div
        className="absolute top-[30%] left-[-30%] text-white/30 w-[600px] h-[300px]"
        animate={{ x: ["0vw", "130vw"] }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity, delay: 10 }}
      >
        <Cloud className="w-full h-full" />
      </motion.div>
      <motion.div
        className="absolute top-[5%] left-[-40%] text-white/60 w-[250px] h-[125px]"
        animate={{ x: ["0vw", "140vw"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity, delay: 25 }}
      >
        <Cloud className="w-full h-full" />
      </motion.div>
    </div>
  );
}
