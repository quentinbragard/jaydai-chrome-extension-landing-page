"use client"

import React from "react"
import { motion } from "framer-motion"

interface PlainHtmlProps {
  content: string;
  index?: number;
  className?: string;
}

const PlainHtml: React.FC<PlainHtmlProps> = ({ 
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

export default PlainHtml;