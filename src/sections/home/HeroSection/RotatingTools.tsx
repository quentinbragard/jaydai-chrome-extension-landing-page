"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Simple list of tools with their logo URLs
const TOOLS = [
  {
    name: "ChatGPT",
    logo:
      "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/chatgpt_logo.png",
  },
  {
    name: "Claude",
    logo:
      "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/claude_logo.png",
  },
  {
    name: "Mistral",
    logo:
      "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/mistral_logo.png",
  },
  {
    name: "Gemini",
    logo:
      "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/gemini_logo.png",
  },
];

export const RotatingTools = () => {
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(40)
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TOOLS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // Update the radius based on text size so the circle always
  // surrounds the full content on any screen size
  const updateRadius = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      // Add some extra space around the text for the logos
      setRadius(Math.max(rect.width, rect.height) / 2 + 20)
    }
  }

  useEffect(() => {
    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  useEffect(() => {
    updateRadius()
  }, [index])

  return (
    <span ref={containerRef} className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={TOOLS[index].name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {TOOLS[index].name}
        </motion.span>
      </AnimatePresence>
      {/* Logos orbiting around */}
      <span
        className="absolute inset-0 flex items-center justify-center animate-spin"
        aria-hidden="true"
        style={{ animationDuration: "20s" }}
      >
        {TOOLS.map((tool, idx) => {
          const angle = (idx / TOOLS.length) * 360;
          const transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
          return (
            <span
              key={tool.name}
              className="absolute h-5 w-5"
              style={{ transform }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-full w-full rounded-full"
              />
            </span>
          );
        })}
        <span
          className="absolute rounded-full border border-primary/40"
          style={{ width: radius * 2, height: radius * 2 }}
        />
      </span>
    </span>
  );
};

export default RotatingTools;
