'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { BlogPost } from '@/lib/blog'
import BlogCard from '@/sections/blog/BlogCard'

interface BlogGridProps {
  posts: BlogPost[]
  loading?: boolean
}

const BlogGrid: React.FC<BlogGridProps> = ({ 
  posts,
  loading = false
}) => {
  const t = useTranslations('blog')
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border border-border rounded-xl bg-card overflow-hidden">
            <div className="w-full aspect-video bg-secondary/20 animate-pulse"></div>
            <div className="p-6">
              <div className="h-8 bg-secondary/20 rounded animate-pulse mb-3"></div>
              <div className="h-4 bg-secondary/20 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-secondary/20 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-secondary/20 rounded animate-pulse w-2/3"></div>
              <div className="mt-4 flex justify-between">
                <div className="h-3 bg-secondary/20 rounded animate-pulse w-1/4"></div>
                <div className="h-3 bg-secondary/20 rounded animate-pulse w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  if (!posts || posts.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-card border border-border rounded-xl p-8 text-center"
      >
        <h3 className="text-xl font-semibold mb-2">{t('noPosts.title')}</h3>
        <p className="text-foreground/70">{t('noPosts.message')}</p>
      </motion.div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  )
}

export default BlogGrid