"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "ChatGPT",
  "Claude",
  "AI Tools",
  "Gemini",
  "Midjourney",
];

interface LetterSwapHeadlineProps {
  baseText?: string;
  className?: string;
  swapInterval?: number;
}

export default function LetterSwapHeadline({
  baseText = "Your Smart AI Assistant for",
  className = "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl",
  swapInterval = 3000
}: LetterSwapHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(false);
      }, 500); // Half the animation duration
    }, swapInterval);

    return () => clearInterval(interval);
  }, [swapInterval]);

  return (
    <h1 className={className}>
      {baseText}{" "}
      <span className="relative inline-block">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-primary relative inline-block"
          >
            {phrases[currentIndex]}
            <motion.span 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 rounded-full"
              layoutId="underline"
            ></motion.span>
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}