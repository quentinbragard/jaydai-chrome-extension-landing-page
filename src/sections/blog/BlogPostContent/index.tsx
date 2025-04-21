"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface BlogPostContentProps {
  sections: string[]
  className?: string
}

/**
 * BlogPostContent component renders blog post sections with beautiful styling
 * 
 * @param sections - Array of HTML strings representing blog post sections
 * @param className - Optional additional className for the container
 */
const BlogPostContent: React.FC<BlogPostContentProps> = ({ 
  sections, 
  className = "" 
}) => {
  return (
    <article className={`prose prose-lg md:prose-xl dark:prose-invert mx-auto ${className}`}>
      {sections.map((sectionHtml, index) => (
        <motion.section
          key={`section-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="mb-12"
        >
          <div dangerouslySetInnerHTML={{ __html: sectionHtml }} className="text-xl" />
        </motion.section>
      ))}
    </article>
  )
}

export default BlogPostContent