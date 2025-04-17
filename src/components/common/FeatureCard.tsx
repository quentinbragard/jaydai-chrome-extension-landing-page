"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  iconColor?: string
  backgroundColor?: string
  delay?: number
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  iconColor = "text-primary",
  backgroundColor = "bg-primary/10",
  delay = 0
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
      }}
      className="relative p-6 rounded-xl border border-border bg-card group"
    >
      {/* Feature icon */}
      <div className={`w-12 h-12 rounded-lg ${backgroundColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={iconColor} size={24} />
      </div>
      
      {/* Feature title */}
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      {/* Feature description */}
      <p className="text-foreground/70">
        {description}
      </p>
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

export default FeatureCard
