'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FileText, PenTool, BookOpen } from 'lucide-react'

interface BlogHeaderProps {
  title?: string
  subtitle?: string
  showBadge?: boolean
  category?: string
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  subtitle,
  showBadge = true,
  category
}) => {
  const t = useTranslations('blog')
  
  return (
    <div className="text-center mb-16">
      {showBadge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6"
        >
          <div className="relative flex items-center gap-1.5">
            {category ? <FileText size={14} /> : <BookOpen size={14} />}
            <span>{category || t('blogBadge')}</span>
          </div>
        </motion.div>
      )}
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
      >
        {title || t('title')}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
      >
        {subtitle || t('subtitle')}
      </motion.p>
    </div>
  )
}

export default BlogHeader