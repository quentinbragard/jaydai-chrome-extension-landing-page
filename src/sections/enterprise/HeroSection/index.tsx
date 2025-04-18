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
import HeroTabs from "./HeroTabs"

const HeroEnterpriseSection = () => {
  const t = useTranslations('enterpriseHero')
  const [videoDialogOpen, setVideoDialogOpen] = useState(false)
  
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)]"></div>
      <div className="absolute -top-[40%] -left-[10%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px] opacity-60 animate-pulse" />
      
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
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 group"
              >
                <span>{t('ctaDemo')}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setVideoDialogOpen(true)}
                className="px-8 py-3 rounded-md border border-border bg-background/50 backdrop-blur-sm text-foreground hover:bg-card transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Play size={18} className="text-primary" />
                <span>{t('ctaVideo')}</span>
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border/40"
            >
              <div className="text-sm text-foreground/50 mb-4">{t('trustedBy')}</div>
              <div className="flex flex-wrap gap-6 items-center">
                {/* Company logos */}
                {t.raw('companies').map((company, index) => (
                  <div key={index} className="w-24 h-8 bg-foreground/5 rounded-md flex items-center justify-center">
                    <div className="text-foreground/70 font-semibold">{company}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right column: Feature tabs */}
          <HeroTabs />
        </div>
      </div>
      
      {/* Video dialog */}
      {videoDialogOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setVideoDialogOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl bg-card rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Enterprise Success Stories" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setVideoDialogOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground">{t('videoModal.title')}</h3>
              <p className="mt-2 text-foreground/70">
                {t('videoModal.description')}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default HeroEnterpriseSection