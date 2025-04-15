"use client";

import React, { useRef, useEffect } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

interface PulseBeamsProps {
  beams?: number;
  beamColor1?: string;
  beamColor2?: string;
  className?: string;
}

export function PulseBeams({
  beams = 8,
  beamColor1 = "hsla(var(--primary) / 0.4)",
  beamColor2 = "hsla(var(--primary) / 0.05)",
  className = "",
}: PulseBeamsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const element = containerRef.current;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const beamElements = Array.from({ length: beams }).map((_, i) => {
    const delay = i * 0.15;
    const initialRotation = (i * 360) / beams;
    const rotateAngle = useMotionTemplate`${initialRotation}deg`;
    
    return (
      <motion.div
        key={i}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50"
        style={{
          rotate: rotateAngle,
        }}
      >
        <motion.div
          className="absolute z-0 w-[50%] origin-left h-[5px] opacity-50"
          style={{
            left: "50%",
            top: "50%",
            translateY: "-50%",
            background: `linear-gradient(90deg, transparent, ${beamColor1} 40%, ${beamColor2})`,
            filter: "blur(8px)",
            animationDelay: `${delay}s`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  });

  return (
    <div className={`absolute inset-0 overflow-hidden rounded-lg ${className}`} ref={containerRef}>
      <motion.div 
        className="absolute inset-0"
        style={{
          transform: `translate(${mouseX}px, ${mouseY}px)`,
          transformOrigin: "center center",
        }}
      >
        {beamElements}
      </motion.div>
    </div>
  );
}