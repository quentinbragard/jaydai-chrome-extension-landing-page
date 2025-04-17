"use client"
import { motion } from "framer-motion"

interface AnimatedBadgeProps {
  text: string
  className?: string
}

const AnimatedBadge = ({ text, className = "" }: AnimatedBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary ${className}`}
    >
      <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse-glow"></span>
      {text}
    </motion.div>
  )
}

export default AnimatedBadge
