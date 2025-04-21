'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'
import { useLocale, useTranslations } from 'next-intl'
import { BlogPost } from '@/lib/blog'

interface BlogFeaturedProps {
  post: BlogPost
}

const BlogFeatured: React.FC<BlogFeaturedProps> = ({ post }) => {
  const locale = useLocale()
  const t = useTranslations('blog')
  const dateLocale = locale === 'fr' ? fr : enUS
  
  // Format date for display
  const publishedDate = new Date(post.published_at)
  const timeAgo = formatDistanceToNow(publishedDate, { 
    addSuffix: true,
    locale: dateLocale
  })
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-xl overflow-hidden"
    >
      {/* Featured post banner */}
      <div className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
        {t('featuredPost')}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card border border-border rounded-xl overflow-hidden">
        {/* Image Side */}
        <div className="relative aspect-video md:aspect-auto overflow-hidden">
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.featured_image || '/images/blog-placeholder.jpg'}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-primary-foreground py-1 px-3 text-xs rounded-full">
            {post.category}
          </div>
        </div>
        
        {/* Content Side */}
        <div className="p-6 md:p-8 flex flex-col">
          <Link href={`/blog/${post.slug}`} className="block hover:text-primary transition-colors">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>
          </Link>
          
          <p className="text-foreground/70 mb-6 line-clamp-4">
            {post.summary}
          </p>
          
          {/* Meta information */}
          <div className="mt-auto">
            <div className="flex flex-wrap items-center justify-between text-sm text-foreground/60 mb-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{timeAgo}</span>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <Clock size={16} className="mr-2" />
                <span>{post.reading_time} min {t('readTime')}</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="font-medium text-sm">{post.author.charAt(0)}</span>
                </div>
              </div>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-xs text-foreground/60">{t('author')}</div>
              </div>
            </div>
            
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-primary hover:underline text-sm mt-6"
            >
              <span>{t('readMore')}</span>
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogFeatured