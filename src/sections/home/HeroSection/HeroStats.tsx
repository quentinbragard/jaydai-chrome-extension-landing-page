import React from "react"
import { motion } from "framer-motion"

interface HeroStatsProps {
  translations: Array<{ value: string; label: string }>
}

const HeroStats: React.FC<HeroStatsProps> = ({ translations }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 w-full max-w-3xl" // Ensure full width
    >
      {/* Force a grid layout with explicit widths */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {translations.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-foreground/70 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default HeroStats