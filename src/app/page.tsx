"use client"

import React, { useState } from "react"
import TestimonialsSection from "@/components/TestimonialsSection"
import BeforeAfterComparison from "@/components/BeforeAfterComparison"
import FAQSection from "@/components/FAQSection"
import TemplatesSection from "@/components/TemplatesSection"
import ContactSection from "@/components/ContactSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import UseCasesSection from "@/components/UseCasesSection"
import AnalyticsDashboardSection from "@/components/AnalyticsDashboardSection"
import EnterpriseSolutionsSection from "@/components/EnterpriseSolutionsSection"
import PricingSection from "@/components/PricingSection"
import HeroSection from "@/components/HeroSection"
import SubtleBackgroundEffect from "@/components/SubtleBackgroundEffect"
import FeaturesSection from "@/components/FeaturesSection"

export default function Home() {
  // State for video dialog
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false)
  
  const openVideoDialog = () => {
    setIsVideoDialogOpen(true)
  }
  
  const closeVideoDialog = () => {
    setIsVideoDialogOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Subtle background effect that follows cursor */}
      <SubtleBackgroundEffect />
      
      {/* Hero Section */}
      <HeroSection openVideoDialog={openVideoDialog} />
      
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
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Jaydai Demo Video" 
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
              <h3 className="text-2xl font-bold text-foreground">Maximize your AI potential with Jaydai</h3>
              <p className="mt-2 text-foreground/70">
                See how Jaydai transforms your ChatGPT experience with expert prompts, custom templates, and detailed analytics.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Redesigned Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      

      {/* Before/After Comparison */}
      <BeforeAfterComparison />
      
      {/* Templates Section */}
      <TemplatesSection />
      
      

      
      {/* Analytics Dashboard Section */}
      <AnalyticsDashboardSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      
      {/* Enterprise Solutions Section */}
      <EnterpriseSolutionsSection />
      
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}