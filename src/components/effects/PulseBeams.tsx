"use client";

import React, { useRef, useEffect } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

interface PulseBeamsProps {
  beams?: number;
  beamColor1?: string;
  beamColor2?: string;
  className?: string;
}

export default function PulseBeams({
  beams = 5,
  beamColor1 = "hsl(var(--primary) / 0.5)",
  beamColor2 = "hsl(var(--primary) / 0.2)",
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
    const delay = i * 0.1;
    const initialRotation = (i * 360) / beams;
    const rotateAngle = useMotionTemplate`${initialRotation}deg`;
    
    return (
      <motion.div
        key={i}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          rotate: rotateAngle,
        }}
      >
        <motion.div
          className="absolute z-0 w-[50%] origin-left h-[20px] opacity-30"
          style={{
            left: "50%",
            top: "50%",
            translateY: "-50%",
            background: `linear-gradient(90deg, transparent, ${beamColor1} 40%, ${beamColor2})`,
            filter: "blur(10px)",
            animationDelay: `${delay}s`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  });

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} ref={containerRef}>
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