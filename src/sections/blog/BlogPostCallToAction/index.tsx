"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight, Star, ChevronRight } from 'lucide-react'
import { trackEvent, gtagSendEvent } from '@/lib/analytics'
import { useIsMobile } from '@/hooks/use-mobile'
import { useExtensionModal } from '@/components/common/ExtensionModalContext'

interface BlogPostCallToActionProps {
  title?: string
  content?: string
  href?: string
  variant?: 'gradient' | 'solid' | 'outline'
  className?: string
}

/**
 * A  call-to-action banner component for blog posts inspired by 21st.dev
 * Promotes the Jaydai Chrome extension with customizable content
 */
const BlogPostCallToAction: React.FC<BlogPostCallToActionProps> = ({
  title,
  content,
  href = "https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd",
  variant = 'gradient',
  className = ""
}) => {
  const t = useTranslations('blog')
  
  // Use provided props or fall back to localized defaults
  const ctaTitle = title || t('blogCta.defaultTitle')
  const ctaContent = content || t('blogCta.defaultContent')
  
  const handleClick = () => {
    trackEvent(`${isMobile ? 'Mobile Download Extension' : 'Download Extension'}`, {
      button_name: 'blogPostCallToAction',
      page_location: window.location.pathname,
      source: 'blogPost',
      timestamp: new Date().toISOString()
    })
  }

  const isMobile = useIsMobile()
  const { open } = useExtensionModal()
  // Get the style based on variant
  const getContainerStyle = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-primary/80 via-primary to-indigo-600 text-white';
      case 'solid':
        return 'bg-primary text-primary-foreground';
      case 'outline':
        return 'bg-background border-2 border-primary/20';
      default:
        return 'bg-gradient-to-r from-primary/80 via-primary to-indigo-600 text-white';
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`my-12 rounded-xl overflow-hidden shadow-xl ${getContainerStyle()} ${className}`}
    >
      <div className="relative p-8 md:p-10">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-30"></div>
        
        <div className="relative z-10">
          {/* Badge */}
          <div className={`inline-flex items-center rounded-full ${
            variant === 'outline' ? 'bg-primary/10 text-primary' : 'bg-white/20 text-white'
          } px-3 py-1 text-sm font-medium mb-5`}>
            <Star size={14} className="mr-1" fill="currentColor" /> {t('blogCta.extensionLabel')}
          </div>
          
          {/* Main content */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className={`text-3xl font-bold mb-4 ${variant === 'outline' ? 'text-foreground' : 'text-white'}`}>
                {ctaTitle}
              </h3>
              <p className={`mb-6 ${variant === 'outline' ? 'text-foreground/70' : 'text-white/80'}`}>
                {ctaContent}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  data-extension
                  href={href}
                  target="_blank"
                  onClick={(e) => {
                    handleClick()
                    if (isMobile) {
                      e.preventDefault()
                      open()
                    } else {
                      e.preventDefault()
                      gtagSendEvent(href)
                    }
                  }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    variant === 'outline'
                      ? 'bg-primary !text-primary-foreground hover:bg-primary/90'
                      : 'bg-white !text-primary hover:bg-white/90'
                  }`}
                >
                  <span>{t('blogCta.buttonText')}</span>
                  <ArrowRight size={16} />
                </Link>
                
                <Link 
                  href="/learn"
                  className={`inline-flex items-center gap-1 px-4 py-3 ${
                    variant === 'outline' ? 'text-primary' : 'text-white/90'
                  } hover:underline`}
                >
                  <span>{t('blogPost.readMore')}</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
            
            {/* Right side - ratings or illustration */}
            <div className={`flex-shrink-0 flex flex-col items-center p-6 rounded-xl ${
              variant === 'outline' ? 'bg-card border border-border' : 'bg-white/10'
            }`}>
              <div className="flex items-center justify-center mb-2">
                <Image 
                  src="/images/google_chrome_icon.png"
                  alt="Chrome Extension"
                  width={48}
                  height={48}
                />
              </div>
              
              <div className={`font-semibold text-lg mb-1 ${variant === 'outline' ? 'text-foreground' : 'text-white'}`}>
                Jaydai
              </div>
              
              <div className={`text-sm mb-4 ${variant === 'outline' ? 'text-foreground/60' : 'text-white/70'}`}>
                {t('blogCta.rating')}
              </div>
              
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i <= 5 ? "text-amber-400" : "text-amber-400/30"} 
                    fill={i <= 5 ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogPostCallToAction