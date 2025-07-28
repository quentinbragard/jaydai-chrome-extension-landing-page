'use client';

import React from "react"
import { useIsMobile } from '@/hooks/use-mobile'
import { useExtensionModal } from '@/components/common/ExtensionModalContext'
import { trackEvent } from '@/lib/analytics'
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import RotatingTools from "./RotatingTools"

interface HeroContentProps {
  openVideoDialog: () => void
  translations: any
}

const HeroContent: React.FC<HeroContentProps> = ({ 
  openVideoDialog, 
  translations 
}) => {
  const isMobile = useIsMobile()
  const { open } = useExtensionModal()
  return (
    <>
      {/* Animated badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6"
      >
        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse-glow"></span>
        {translations('badge')}
      </motion.div>
      
      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl"
      >
        {translations('title')}{" "}
        <span className="text-primary relative inline-block">
          <RotatingTools />
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 rounded-full"></span>
        </span>
      </motion.h1>
      
      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-xl text-foreground/70 max-w-2xl"
      >
        {translations('subtitle')}
      </motion.p>
      
      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
      <ShimmerButton
        data-extension
        onClick={() => {
          trackEvent(`${isMobile ? 'Mobile Download Extension' : 'Download Extension'}`, {
            button_name: 'homeHeroDownloadExtension',
            page_location: window.location.pathname,
            source: 'homeHeroSection',
            timestamp: new Date().toISOString()
          })
          if (isMobile) {
            open()
          } else {
            window.open("https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd", "_blank")
          }
        }}
          className="px-8 py-3 rounded-md text-primary-foreground font-black"
          shimmerColor="#FFCD00"
          shimmerSize="0.05em"
          shimmerDuration="3s"
          borderRadius="0.375rem"
          background="hsl(var(--primary))"
        >
          {translations('ctaExtension')}
        </ShimmerButton>
        <button
          onClick={openVideoDialog}
          className="px-8 py-3 rounded-md bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors font-medium inline-flex items-center"
        >
          <Play size={18} className="mr-2" />
          {translations('ctaDemo')}
        </button>
      </motion.div>
    </>
  )
}

export default HeroContent