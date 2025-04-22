"use client"

import React, { useState } from "react"
import TestimonialsSection from "@/sections/home/TestimonialSection"
import BeforeAfterComparison from "@/sections/home/BeforeAfterComparison"
import FAQSection from "@/sections/home/FAQSection"
import TemplatesSection from "@/sections/home/TemplatesSection"
import ContactSection from "@/sections/home/ContactSection"
import HowItWorksSection from "@/sections/home/HowItWorksSection"
import AnalyticsDashboardSection from "@/sections/home/AnalyticsDashboardSection"
import EnterpriseSolutionsSection from "@/sections/home/EnterpriseSolutionsSection"
import PricingSection from "@/sections/home/PricingSection"
import HeroSection from "@/sections/home/HeroSection"
import FeaturesSection from "@/sections/home/FeaturesSection"
import { AuroraBackground } from "@/components/ui/aurora-backgound"
import { useTranslations } from "next-intl"
import { trackEvent } from "@/lib/analytics"

export default function Home() {
  const t = useTranslations('homePage')

  // State for video dialog
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false)
  
  const openVideoDialog = () => {
    trackEvent('Button Clicked', {
      button_name: 'homeHeroOpenVideoDialog',
      page_location: window.location.pathname,
      source: 'homeHeroSection',
      timestamp: new Date().toISOString()
    })
    setIsVideoDialogOpen(true)
  }
  
  const closeVideoDialog = () => {
    trackEvent('Button Clicked', {
      button_name: 'homeHeroCloseVideoDialog',
      page_location: window.location.pathname,
      source: 'homeHeroSection',
      timestamp: new Date().toISOString()
    })
    setIsVideoDialogOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">

      
    {/* Hero Section */}
    <AuroraBackground>
      <HeroSection openVideoDialog={openVideoDialog} />
    </AuroraBackground>
      
      {/* Video Dialog */}
      {isVideoDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
             onClick={closeVideoDialog}>
          <div className="relative w-full max-w-4xl bg-card rounded-xl shadow-2xl overflow-hidden"
               onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video w-full bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/vUAbWXIa2EA" 
                title={t('videoDialog.title')} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={closeVideoDialog}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              X
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground">
                {t('videoDialog.title')}
              </h3>
              <p className="mt-2 text-foreground/70">
                {t('videoDialog.description')}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Redesigned Features Section */}
      <FeaturesSection />

      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Before/After Comparison
      <BeforeAfterComparison /> */}
      
      
      {/* Templates Section */}
      <TemplatesSection />
      
      {/* Analytics Dashboard Section */}
      <AnalyticsDashboardSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />

       {/* Pricing Section */}
       <PricingSection />
      
      {/* Enterprise Solutions Section */}
      <EnterpriseSolutionsSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}