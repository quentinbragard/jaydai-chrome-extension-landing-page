'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'
import { BlogPost } from '@/lib/blog'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation' 

interface BlogCardProps {
  post: BlogPost
  index?: number
  featured?: boolean
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  post, 
  index = 0, 
  featured = false 
}) => {
  const locale = useLocale()
  const t = useTranslations('blog')
  const dateLocale = locale === 'fr' ? fr : enUS
  
  // Format date for display
  const publishedDate = new Date(post.published_at)
  const timeAgo = formatDistanceToNow(publishedDate, { 
    addSuffix: true,
    locale: dateLocale
  })

  console.log("locale", locale)
  console.log("post", post)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: featured ? 0.1 : 0.1 * (index % 6) }}
      className={`group overflow-hidden flex flex-col border border-border rounded-xl bg-card transition-all duration-300 hover:shadow-md ${
        featured ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden w-full aspect-video">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative w-full h-full">
            <Image
              src={post.featured_image || '/images/blog-placeholder.jpg'}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Category Badge */}
            <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-primary-foreground py-1 px-3 text-xs rounded-full z-10">
              {post.category}
            </div>
          </div>
        </Link>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
        </Link>
        
        <p className="text-foreground/70 line-clamp-3 mb-4">
          {post.summary}
        </p>
        
        {/* Meta information */}
        <div className="mt-auto">
          <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{timeAgo}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.reading_time} min read</span>
            </div>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-primary hover:underline text-sm"
          >
            <span>{t('blogPost.readMore')}</span>
            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogCard