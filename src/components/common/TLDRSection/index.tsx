"use client"

import React from "react"
import { motion } from "framer-motion"
import { AlertCircle, Clock, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TldrItem {
  text: string
  html?: string // Optional HTML content for rich formatting
}

export interface TldrSectionProps {
  title?: string
  subtitle?: string
  items: TldrItem[]
  icon?: "alert" | "clock" | "lightbulb" | "none"
  variant?: "default" | "bordered" | "filled"
  className?: string
  index?: number
}

const TldrSection: React.FC<TldrSectionProps> = ({
  title = "TL;DR",
  subtitle = "Pour ceux qui veulent aller à l'essentiel:",
  items,
  icon = "clock",
  variant = "bordered",
  className = "",
  index = 0,
}) => {
  // Get the appropriate icon element
  const getIcon = () => {
    switch (icon) {
      case "alert":
        return <AlertCircle size={24} className="text-primary" />
      case "clock":
        return <Clock size={24} className="text-primary" />
      case "lightbulb":
        return <Lightbulb size={24} className="text-primary" />
      case "none":
      default:
        return null
    }
  }

  // Get container styles based on variant
  const getContainerStyles = () => {
    switch (variant) {
      case "bordered":
        return "border border-primary/20 bg-primary/5 rounded-xl"
      case "filled":
        return "bg-primary/10 rounded-xl"
      default:
        return "border-l-4 border-primary/50"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={cn(
        "my-8 p-6",
        getContainerStyles(),
        className
      )}
    >
      <div className="flex items-start gap-3 mb-4">
        {icon !== "none" && (
          <div className="flex-shrink-0 mt-1">
            {getIcon()}
          </div>
        )}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-1">{title}</h2>
          {subtitle && (
            <p className="text-foreground/70">{subtitle}</p>
          )}
        </div>
      </div>

      <ul className="space-y-3 pl-4 md:pl-10">
        {items.map((item, itemIndex) => (
          <motion.li
            key={itemIndex}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 + (index + itemIndex) * 0.1 }}
            className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-3 before:h-3 before:bg-primary/30 before:rounded-full"
          >
            {item.html ? (
              <div 
                className="text-base md:text-lg text-foreground/80"
                dangerouslySetInnerHTML={{ __html: item.html }}
              />
            ) : (
              <span className="text-base md:text-lg text-foreground/80">{item.text}</span>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default TldrSection