"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SubtleBackgroundEffect({ className = "" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const gradientRef = useRef<HTMLDivElement>(null);
  
  // Add this to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Mark component as mounted
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !gradientRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      // Calculate relative position within the container (0-1)
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Update mouse position with easing
      mouseRef.current = {
        x: mouseRef.current.x + (x - mouseRef.current.x) * 0.1,
        y: mouseRef.current.y + (y - mouseRef.current.y) * 0.1
      };
      
      // Apply position to gradient
      if (gradientRef.current) {
        const gradientX = mouseRef.current.x * 100;
        const gradientY = mouseRef.current.y * 100;
        
        gradientRef.current.style.background = `radial-gradient(
          circle at ${gradientX}% ${gradientY}%,
          hsl(var(--primary) / 0.08) 0%,
          transparent 60%
        )`;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Don't render random elements until client-side
  if (!isMounted) {
    return <div className={`fixed inset-0 pointer-events-none ${className}`}></div>;
  }

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
    >
      <div 
        ref={gradientRef}
        className="absolute inset-0 opacity-60 transition-all duration-1000 ease-out"
      />
      
      {/* Subtle ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`, 
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.2 + 0.05]
            }}
            transition={{ 
              duration: Math.random() * 15 + 15, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}