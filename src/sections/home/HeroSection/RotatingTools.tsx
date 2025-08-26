"use client";

import { useState, useEffect } from "react";
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
  const maxNameLength = Math.max(...TOOLS.map((t) => t.name.length));

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TOOLS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block" style={{ minWidth: `${maxNameLength}ch` }}>
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
    </span>
  );
};

export default RotatingTools;
