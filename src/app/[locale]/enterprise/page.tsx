"use client"

import React from "react"
import HeroEnterpriseSection from "@/sections/enterprise/HeroSection"
import EnterpriseValuePropsSection from "@/sections/enterprise/ValuePropsSection"
import EnterpriseServicesSection from "@/sections/enterprise/ServicesSection"
import EnterprisePricingSection from "@/sections/enterprise/PricingSection"
import EnterpriseFAQSection from "@/sections/enterprise/FAQSection"
import ContactSection from "@/sections/home/ContactSection"
import EnterpriseTeamSection from "@/sections/enterprise/TeamSection"
import SubtleBackgroundEffect from "@/components/effects/SubtleBackgroundEffect"

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
      <ContactSection />
    </div>
  )
}