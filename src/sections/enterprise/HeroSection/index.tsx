"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Building, 
  Play,
  ArrowRight,
  X
} from "lucide-react"
import { useTranslations } from "next-intl"
import { trackEvent } from '@/lib/analytics'
import HeroTabs from "./HeroTabs"

const HeroEnterpriseSection = () => {
  const t = useTranslations('enterpriseHero')
  const [videoDialogOpen, setVideoDialogOpen] = useState(false)
  
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column: Text content */}
          <div className="w-full lg:w-1/2 text-left md:max-w-2xl md:mx-auto lg:mx-0 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-8"
            >
              <div className="relative flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>{t('badge')}</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              {t('title')} <span className="text-primary relative inline-block">
                {t('titleHighlight')}
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/50 rounded-full"></div>
              </span> {t('titleSuffix')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-foreground/70"
            >
              {t('subtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center lg:items-center lg:justify-start justify-center"
            >
              <a
                href="#contact"
                onClick={() => trackEvent('Button Clicked', {
                  button_name: 'enterpriseHeroCta',
                  page_location: window.location.pathname,
                  source: 'enterpriseHeroSection',
                  timestamp: new Date().toISOString()
                })}
                className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 group"
              >
                <span>{t('ctaDemo')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          
          {/* Right column: Feature tabs */}
          <HeroTabs />
        </div>
      </div>
    </section>
  )
}

export default HeroEnterpriseSection