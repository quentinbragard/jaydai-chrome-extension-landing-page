"use client"

import React from "react"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle,
  className = ""
}) => {
  return (
    <div className={`text-center ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-foreground"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}

export default SectionHeader