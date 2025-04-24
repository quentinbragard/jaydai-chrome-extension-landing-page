"use client"

import React from "react"
import { motion } from "framer-motion"

interface PlainHtmlProps {
  content: string
  index?: number
  className?: string
}

const PlainHtml: React.FC<PlainHtmlProps> = ({ 
  content, 
  index = 0,
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`my-8 ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PlainHtml