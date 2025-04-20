"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import StatsCards from "./StatsCards"
import DashboardViewer from "./DashboardViewer"
import SectionHeader from "./SectionHeader"
import Link from "next/link"
import Image from "next/image"
import { trackEvent } from '@/lib/analytics'

const AnalyticsDashboardSection = () => {
  const t = useTranslations('analyticsDashboard')

  return (
    <section id="analytics" className="py-20 bg-background/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-50 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full opacity-40 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title={t('title')}
          subtitle={t('subtitle')}
          className="mb-16"
        />

        {/* Stats cards row - above dashboard */}
        <StatsCards className="mb-8 max-w-5xl mx-auto" />

        {/* Dashboard screenshot */}
        <DashboardViewer />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>
         {/* CTA Button */}
         <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 w-full flex justify-center"
            >
             <Link 
                href="https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd" 
                target="_blank"
                className="inline-flex items-center gap-2 font-black px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => {
                  trackEvent('Button Clicked', {
                    button_name: 'homeAnalyticsDashboardDownloadExtension',
                    page_location: window.location.pathname,
                    source: 'homeAnalyticsDashboardSection',
                    timestamp: new Date().toISOString()
                  })
                }}
              >
              <Image
                src="/images/google_chrome_icon.png"
                alt="Google Chrome"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              {t('ctaText')}
            </Link>
            </motion.div>

      </div>
    </section>
  )
}

export default AnalyticsDashboardSection