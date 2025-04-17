"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"

interface StatItemProps {
  value: string
  label: string
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="text-foreground/70 mt-1">{label}</div>
    </div>
  )
}

interface StatsRowProps {
  stats: StatItemProps[]
  className?: string
  delay?: number
}

const StatsRow = ({ stats, className = "", delay = 0.4 }: StatsRowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`grid grid-cols-1 sm:grid-cols-${Math.min(stats.length, 3)} gap-8 max-w-3xl ${className}`}
    >
      {stats.map((stat, index) => (
        <StatItem key={index} value={stat.value} label={stat.label} />
      ))}
    </motion.div>
  )
}

export default StatsRow
