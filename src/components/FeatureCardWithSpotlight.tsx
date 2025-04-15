"use client";

import React, { useState, useRef } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function FeatureCardWithSpotlight({
  title,
  description,
  icon: Icon,
  index,
}: FeatureCardProps) {
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Get position relative to card element
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      onMouseMove={handleMouseMove}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      {/* Spotlight effect */}
      {isFocused && (
        <div
          className="absolute inset-0 rounded-xl opacity-70 pointer-events-none"
          style={{
            background: `radial-gradient(
              120px circle at ${position.x}px ${position.y}px,
              hsl(var(--primary) / 0.15), 
              transparent
            )`,
            zIndex: 0,
          }}
        />
      )}
      
      {/* Card content */}
      <div className="relative z-10">
        <div 
          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
        >
          <Icon className="text-primary" size={24} />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-foreground/70">
          {description}
        </p>
      </div>
      
      {/* Subtle pattern decoration */}
      <div className="absolute bottom-3 right-3 w-16 h-16 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}