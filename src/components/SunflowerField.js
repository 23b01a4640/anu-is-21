"use client";

import { useEffect, useState } from "react";
import { Sunflower } from "./Sunflower";

export function SunflowerField({ isBlurred }) {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const count = 70; // High density
    const newFlowers = Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const depth = Math.random(); // 0 to 1
      const bottom = depth * 15 - 5; // -5% to 10% from bottom
      const size = 60 + depth * 100; // 60 to 160 based on depth
      const delay = Math.random() * 5;
      const duration = 3 + Math.random() * 3;
      
      return { id: i, left, bottom, size, delay, duration, depth };
    });
    
    // Sort by depth so closer flowers render on top
    newFlowers.sort((a, b) => a.depth - b.depth);
    setFlowers(newFlowers);
  }, []);

  return (
    <div 
      className={`absolute bottom-0 left-0 w-full h-[35%] pointer-events-none z-10 transition-all duration-[3000ms] ${isBlurred ? 'blur-[4px] opacity-60' : 'opacity-100'}`}
    >
      {flowers.map((f) => (
        <Sunflower
          key={f.id}
          size={f.size}
          delay={f.delay}
          duration={f.duration}
          className="absolute"
          style={{ left: `${f.left}%`, bottom: `${f.bottom}%` }}
        />
      ))}
    </div>
  );
}
