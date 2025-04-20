'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Filter, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlogCategoryFilterProps {
  categories: string[]
  activeCategory?: string | null
}

const BlogCategoryFilter: React.FC<BlogCategoryFilterProps> = ({
  categories,
  activeCategory
}) => {
  const t = useTranslations('blog')
  const router = useRouter()
  const pathname = usePathname()
  
  const handleCategoryChange = (category: string | null) => {
    if (category) {
      router.push(`${pathname}?category=${encodeURIComponent(category)}`)
    } else {
      router.push(pathname)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8"
    >
      <div className="flex flex-wrap items-center gap-3 border border-border rounded-lg p-4 bg-card">
        <div className="flex items-center mr-1">
          <Filter size={16} className="mr-2 text-primary" />
          <span className="font-medium">{t('filter')}:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange(null)}
            className={cn(
              "px-3 py-1 rounded-full text-sm transition-colors",
              !activeCategory
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/20 hover:bg-secondary/30 text-foreground"
            )}
          >
            {t('allPosts')}
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-3 py-1 rounded-full text-sm transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/20 hover:bg-secondary/30 text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {activeCategory && (
          <button
            onClick={() => handleCategoryChange(null)}
            className="ml-auto text-foreground/70 hover:text-foreground flex items-center text-sm"
          >
            <X size={14} className="mr-1" />
            {t('clearFilter')}
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default BlogCategoryFilter