"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { 
  TrendingUp, 
  Clock, 
  Zap, 
  Tag,
  Calendar
} from "lucide-react"

// Define the structure of a stat card
interface StatCard {
  label: string
  value: string
  icon: React.ElementType
  iconColor: string
  trend: string
  trendDescription: string
}

interface StatsCardsProps {
  className?: string
}

const StatsCards: React.FC<StatsCardsProps> = ({ className = "" }) => {
  const t = useTranslations('analyticsDashboard')

  const statsCards: StatCard[] = [
    {
      label: t('stats.totalPrompts.label'),
      value: "285",
      icon: Calendar,
      iconColor: "text-primary bg-primary/10",
      trend: "+24%",
      trendDescription: t('stats.totalPrompts.trend')
    },
    {
      label: t('stats.timeSaved.label'),
      value: "26.8 hrs",
      icon: Clock,
      iconColor: "text-blue-500 bg-blue-500/10",
      trend: "2.4 hrs",
      trendDescription: t('stats.timeSaved.trend')
    },
    {
      label: t('stats.efficiencyGain.label'),
      value: "58%",
      icon: Zap,
      iconColor: "text-purple-500 bg-purple-500/10",
      trend: "+12%",
      trendDescription: t('stats.efficiencyGain.trend')
    },
    {
      label: t('stats.templatesSaved.label'),
      value: "37",
      icon: Tag,
      iconColor: "text-amber-500 bg-amber-500/10",
      trend: "5",
      trendDescription: t('stats.templatesSaved.trend')
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
    >
      {statsCards.map((card, index) => (
        <StatCardItem key={index} card={card} index={index} />
      ))}
    </motion.div>
  )
}

// Separate component for individual stat card
const StatCardItem: React.FC<{ card: StatCard; index: number }> = ({ card, index }) => {
  const { label, value, icon: Icon, iconColor, trend, trendDescription } = card

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      className="bg-secondary/5 border border-border rounded-lg p-4"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-foreground/70 text-sm">{label}</p>
          <h4 className="text-2xl font-bold mt-1 text-foreground">{value}</h4>
        </div>
        <div className={`${iconColor} rounded-md p-2`}>
          <Icon className={iconColor.split(' ')[0]} size={18} />
        </div>
      </div>
      <div className="flex items-center mt-2 text-green-500 text-sm">
        <TrendingUp size={14} className="mr-1" />
        <span>{trend} {trendDescription}</span>
      </div>
    </motion.div>
  )
}

export default StatsCards