"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RippleProps {
  backgroundColor?: string;
  size?: number;
}

export default function BackgroundRippleEffect({
  backgroundColor = "hsl(var(--primary) / 0.15)",
  size = 300,
}: RippleProps) {
  const [ripples, setRipples] = useState<
    {
      x: number;
      y: number;
      id: number;
    }[]
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle ripple creation to every 500ms
      const now = Date.now();
      const lastRipple = ripples[ripples.length - 1];
      
      if (!lastRipple || now - lastRipple.id > 800) {
        // Create a new ripple
        const newRipple = {
          x: e.clientX,
          y: e.clientY,
          id: now,
        };
        
        setRipples((prevRipples) => [...prevRipples.slice(-4), newRipple]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ripples]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8, x: ripple.x - size / 2, y: ripple.y - size / 2 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute rounded-full pointer-events-none"
            style={{
              backgroundColor,
              width: size,
              height: size,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}