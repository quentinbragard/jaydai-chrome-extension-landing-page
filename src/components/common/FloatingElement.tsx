"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatingElementProps {
  size?: "sm" | "md" | "lg"
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"
  delay?: number
  className?: string
}

const FloatingElement = ({
  size = "md",
  position,
  delay = 0.5,
  className = ""
}: FloatingElementProps) => {
  // Size mapping
  const sizeMap = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  }
  
  // Position mapping
  const positionMap = {
    "top-left": "top-1/4 left-10",
    "top-right": "top-1/4 right-10",
    "bottom-left": "bottom-1/4 left-10",
    "bottom-right": "bottom-1/4 right-10",
    "center-left": "top-1/2 -translate-y-1/2 left-10",
    "center-right": "top-1/2 -translate-y-1/2 right-10"
  }
  
  return (
    <div className={`absolute ${positionMap[position]} hidden lg:block`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay }}
        className={`${sizeMap[size]} rounded-full bg-primary/20 animate-float ${className}`}
      />
    </div>
  )
}

export default FloatingElement
