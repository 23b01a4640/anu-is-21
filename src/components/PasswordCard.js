"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function PasswordCard({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === "anuisabaddie") {
      setError(false);
      setIsUnlocking(true);
      onSuccess();
    } else {
      setError(true);
      setErrorMessage(
        Math.random() > 0.5
          ? "Hmm... That doesn't sound quite right 🌻"
          : "The sunflowers don't recognize that word."
      );
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <motion.div
      className="relative z-30 flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl"
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
        width: "90%",
        maxWidth: "480px",
      }}
      animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      {/* Delayed text entrance */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="flex flex-col items-center w-full text-center"
      >
        <span className="text-4xl mb-4">🌻</span>
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-3 tracking-tight">
          Anu is 21
        </h1>

        <div className="h-16 mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {errorMessage ? (
              <motion.p
                key="error"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-amber-800 font-medium"
              >
                {errorMessage}
              </motion.p>
            ) : (
              <motion.p
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-yellow-800/80 font-medium max-w-[280px]"
              >
                Surprise ahead!
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
          <div className="relative w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMessage(""); // clear error on typing
              }}
              placeholder="Enter the secret word..."
              className={cn(
                "w-full px-6 py-4 rounded-2xl bg-white/40 border-2 border-white/50",
                "text-yellow-900 placeholder:text-yellow-700/50 outline-none transition-all",
                "focus:bg-white/60 focus:border-yellow-400 focus:shadow-[0_0_15px_rgba(250,204,21,0.4)]"
              )}
              disabled={isUnlocking}
            />
          </div>

          <motion.button
            type="submit"
            disabled={!password || isUnlocking}
            className={cn(
              "mt-2 px-8 py-4 rounded-full font-bold text-white shadow-lg w-full text-lg",
              "transition-all disabled:opacity-50 disabled:cursor-not-allowed",
              isUnlocking ? "cursor-default" : "cursor-[url('/sunflower-cursor.png'),_pointer]"
            )}
            style={{
              background: "linear-gradient(90deg, #FACC15 0%, #FDBA74 100%)",
            }}
            whileHover={!isUnlocking && password ? {
              scale: 1.03,
              boxShadow: "0 0 20px 5px rgba(250, 204, 21, 0.4)"
            } : {}}
            whileTap={!isUnlocking && password ? { scale: 0.98 } : {}}
            animate={isUnlocking ? {
              boxShadow: ["0 0 0px 0px rgba(250, 204, 21, 0)", "0 0 40px 20px rgba(250, 204, 21, 0.8)", "0 0 100px 50px rgba(250, 204, 21, 1)"],
              scale: [1, 1.05, 1.1]
            } : {}}
            transition={{ duration: 1 }}
          >
            {isUnlocking ? "Unlocking..." : "Unlock 🌻"}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
