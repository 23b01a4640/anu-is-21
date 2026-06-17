"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Placeholder for the secret petal
const SecretPetal = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <span className="relative inline-block mx-1">
      <AnimatePresence>
        {!clicked ? (
          <motion.button
            key="petal"
            initial={{ opacity: 0, y: -20, rotate: -20 }}
            animate={{ opacity: 1, y: 0, rotate: 10 }}
            transition={{ delay: 15, duration: 2, type: "spring" }} // appears midway
            onClick={() => setClicked(true)}
            className="text-xl hover:scale-110 transition-transform origin-bottom text-yellow-500 drop-shadow-sm outline-none"
            title="A fallen petal..."
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block">
              <path d="M12 2C8 2 4 8 4 12C4 16 8 22 12 22C16 22 20 16 20 12C20 8 16 2 12 2Z" />
            </svg>
          </motion.button>
        ) : (
          <motion.span
            key="message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 -translate-x-1/2 -top-10 bg-white/90 text-yellow-800 text-xs px-3 py-1.5 rounded-xl shadow-sm whitespace-nowrap z-10 border border-yellow-100"
          >
            You make ordinary days feel special.
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

// Paragraph component that reveals character by character
const TypewriterParagraph = ({ text, delay = 0, onComplete }) => {
  const characters = text.split("");

  return (
    <motion.p
      className="mb-4 text-yellow-900/90 leading-relaxed font-serif text-lg md:text-xl"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } },
        hidden: {}
      }}
      onAnimationComplete={onComplete}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export function Letter({ onFinish }) {
  const [showSeparator, setShowSeparator] = useState(false);

  // Trigger the separator after a short delay since we removed the typing animation
  useEffect(() => {
    const timer = setTimeout(() => setShowSeparator(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animations removed for static letter

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 md:px-8 py-12">
      <motion.div
        className="relative bg-[#FFF8E7] rounded-sm p-8 md:p-14 text-yellow-950"
        style={{
          boxShadow: "0 20px 60px -15px rgba(0,0,0,0.1), 0 0 40px rgba(250,204,21,0.05)",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        }}
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Corner illustrations */}
        <div className="absolute top-4 left-4 text-yellow-600/30 text-xl">🌻</div>
        <div className="absolute bottom-4 right-4 text-yellow-600/30 text-xl">🌻</div>

        <header className="mb-12 border-b border-yellow-900/10 pb-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="text-2xl md:text-3xl font-serif mb-2"
          >
            To My Favorite Human 🌻
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="text-sm text-yellow-800/60 uppercase tracking-widest"
          >
            June 2026
          </motion.p>
        </header>

        <div className="font-serif text-lg md:text-xl leading-relaxed space-y-6">
          <p>Hey Babygurll,</p>

          <p>Happiest, happiest, happiest birthday, Anu! ❤️</p>

          <p>
            I couldn&apos;t be beside you this year, but virtually, you know I was there. We&apos;ve shared laughter and sorrow equally like sisters, fought like enemies, helped each other like family, and shared everything like partners. Honestly, at this point, we should just get married! 😭
          </p>

          <p>
            Around this time last year, we manifested you getting placed in a product-based company, and I&apos;m so happy that you got your first job at Providence before your birthday. I&apos;m always proud of you, Anu. Always.
          </p>

          <p>
            Even though it means we&apos;re doing long-distance friendship now, I hope you get to enjoy the years ahead and cherish every moment of them. <SecretPetal /> Please respect yourself, take care of yourself, and whenever someone or something starts bothering your overthinking mind, just say, "Whatevs, this doesn&apos;t deserve my energy," and move on. Hopefully, one day, we will buy swarovski bracelets for eachother fs!
          </p>

          <p>Love you so, so, so muchhh. ❤️</p>

          <p>
            Love,<br />
            P :))
          </p>
        </div>

        {/* Separator and trigger for next phase */}
        <AnimatePresence>
          {showSeparator && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              onAnimationComplete={() => setTimeout(onFinish, 1500)}
              className="mt-16 text-center text-yellow-800/40 tracking-[0.5em]"
            >
              ──────── ✨ ────────
            </motion.div>
          )}
        </AnimatePresence>

        {/* Margin Doodles */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8, duration: 3 }}
          className="absolute right-[-30px] top-[40%] text-2xl opacity-20 hidden md:block"
        >
          ☀️
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 16, duration: 3 }}
          className="absolute left-[-30px] top-[60%] text-2xl opacity-20 hidden md:block"
        >
          📖
        </motion.div>
      </motion.div>
    </div>
  );
}
