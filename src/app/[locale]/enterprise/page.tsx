"use client"

import React from "react"
import HeroEnterpriseSection from "@/sections/enterprise/HeroSection"
import EnterpriseValuePropsSection from "@/sections/enterprise/ValuePropsSection"
import EnterpriseServicesSection from "@/sections/enterprise/ServicesSection"
import EnterpriseAnalyticsSection from "@/components/enterprise/EnterpriseAnalyticsSection"
import EnterpriseTestimonialsSection from "@/components/enterprise/EnterpriseTestimonialsSection"
import EnterpriseCaseStudiesSection from "@/components/enterprise/EnterpriseCaseStudiesSection"
import EnterprisePricingSection from "@/sections/enterprise/PricingSection"
import EnterpriseFAQSection from "@/sections/enterprise/FAQSection"
import EnterpriseContactSection from "@/sections/enterprise/ContactSection"
import EnterpriseTeamSection from "@/sections/enterprise/TeamSection"
import SubtleBackgroundEffect from "@/components/SubtleBackgroundEffect"

export default function EnterprisePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Subtle background effect that follows cursor */}
      <SubtleBackgroundEffect />
      
      {/* Hero Section */}
      <HeroEnterpriseSection />
      
      {/* Value Propositions Section */}
      <EnterpriseValuePropsSection />
      
      {/* Services Section */}
      <EnterpriseServicesSection />
      
      {/* Team Section */}
      <EnterpriseTeamSection />
      
      {/* Case Studies Section
      <EnterpriseCaseStudiesSection /> */}
      
      
      {/* Testimonials Section
            <EnterpriseTestimonialsSection />
 */}
      
      {/* Pricing Section */}
      <EnterprisePricingSection />
      
      {/* FAQ Section */}
      <EnterpriseFAQSection />
      
      {/* Contact Section */}
      <EnterpriseContactSection />
    </div>
  )
}