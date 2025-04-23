"use client"

import React from "react"
import { motion } from "framer-motion"

interface PlainHtmlSectionProps {
  content: string;
  index?: number;
  className?: string;
}

const PlainHtmlSection: React.FC<PlainHtmlSectionProps> = ({ 
  content, 
  index = 0,
  className = ""
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`mb-12 ${className}`}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} className="text-xl" />
    </motion.section>
  );
};

export default PlainHtmlSection;