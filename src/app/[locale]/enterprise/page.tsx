"use client"

import React from "react"
import HeroEnterpriseSection from "@/components/enterprise/HeroEnterpriseSection"
import EnterpriseValuePropsSection from "@/components/enterprise/EnterpriseValuePropsSection"
import EnterpriseServicesSection from "@/components/enterprise/EnterpriseServicesSection"
import EnterpriseAnalyticsSection from "@/components/enterprise/EnterpriseAnalyticsSection"
import EnterpriseTestimonialsSection from "@/components/enterprise/EnterpriseTestimonialsSection"
import EnterpriseCaseStudiesSection from "@/components/enterprise/EnterpriseCaseStudiesSection"
import EnterprisePricingSection from "@/components/enterprise/EnterprisePricingSection"
import EnterpriseFAQSection from "@/components/enterprise/EnterpriseFAQSection"
import EnterpriseContactSection from "@/components//enterprise/EnterpriseContactSection"
import EnterpriseTeamSection from "@/components/enterprise/EnterpriseTeamSection"
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
      
      {/* Analytics Dashboard Section */}
      <EnterpriseAnalyticsSection />
      
      {/* Team Section */}
      <EnterpriseTeamSection />
      
      {/* Case Studies Section */}
      <EnterpriseCaseStudiesSection />
      
      {/* Testimonials Section */}
      <EnterpriseTestimonialsSection />
      
      {/* Pricing Section */}
      <EnterprisePricingSection />
      
      {/* FAQ Section */}
      <EnterpriseFAQSection />
      
      {/* Contact Section */}
      <EnterpriseContactSection />
    </div>
  )
}