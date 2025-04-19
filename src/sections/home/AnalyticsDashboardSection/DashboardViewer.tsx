"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"
import { BarChart3 } from "lucide-react"

interface DashboardViewerProps {
  className?: string
}

const DashboardViewer: React.FC<DashboardViewerProps> = ({ className = "" }) => {
  const t = useTranslations('analyticsDashboard')
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Only access the theme after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which dashboard image to display based on theme
  const dashboardImage = mounted && resolvedTheme === "dark" 
    ? "/images/analytics-dashboard-dark.png" 
    : "/images/analytics-dashboard-light.png"

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className={`relative mx-auto max-w-5xl ${className}`}
    >
      {/* Dashboard container with browser chrome */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
        {/* Browser bar */}
        <BrowserChrome />
        
        {/* Dashboard image */}
        <div className="relative">
          {/* Loading placeholder */}
          {!imageLoaded && <LoadingPlaceholder />}
          
          {/* Actual dashboard image */}
          {mounted && (
            <Image 
              src={dashboardImage}
              alt={t('dashboardAlt')}
              width={1920}
              height={1080}
              className={`w-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              priority
              onLoad={() => setImageLoaded(true)}
            />
          )}
        </div>
      </div>
      
      {/* Decorative elements around the dashboard */}
      <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/10 rounded-xl blur-lg"></div>
      <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
    </motion.div>
  )
}

// Browser chrome component
const BrowserChrome: React.FC = () => {
  return (
    <div className="bg-secondary/20 px-4 py-3 border-b border-border flex items-center">
      <div className="flex space-x-2 mr-4">
        <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
      </div>
      <div className="bg-background/60 rounded-md h-6 w-1/2 flex items-center justify-center text-xs text-foreground/50 mx-auto">
        chat.openai.com
      </div>
      <div className="flex items-center ml-auto"></div>
    </div>
  )
}

// Loading placeholder component
const LoadingPlaceholder: React.FC = () => {
  return (
    <div className="w-full aspect-[16/9] bg-secondary/10 animate-pulse flex items-center justify-center">
      <BarChart3 className="text-secondary/30" size={48} />
    </div>
  )
}

export default DashboardViewer