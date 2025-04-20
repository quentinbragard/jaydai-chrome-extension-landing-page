"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;

  const floatingElements = [
    { top: "1/4", left: "10", size: 16, delay: 0.5 },
    { bottom: "1/4", right: "10", size: 20, delay: 0.7 },
    { top: "1/3", right: "1/4", size: 12, delay: 0.9 }
  ];

  return (
    <>
      {floatingElements.map((element, index) => (
        <div 
          key={index} 
          className={`absolute ${element.top ? `top-${element.top}` : ''} 
                      ${element.bottom ? `bottom-${element.bottom}` : ''} 
                      ${element.left ? `left-${element.left}` : ''} 
                      ${element.right ? `right-${element.right}` : ''} 
                      hidden lg:block`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: element.delay }}
            className={`w-${element.size} h-${element.size} rounded-full bg-primary/20 animate-float animation-delay-${element.delay * 200}`}
          />
        </div>
      ))}
    </>
  );
};

export default FloatingElements;