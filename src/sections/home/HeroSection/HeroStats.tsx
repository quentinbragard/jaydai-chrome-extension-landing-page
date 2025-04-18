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
      className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl"
    >
      {translations.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-3xl font-bold text-primary">{stat.value}</div>
          <div className="text-foreground/70 mt-1">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  )
}

export default HeroStats