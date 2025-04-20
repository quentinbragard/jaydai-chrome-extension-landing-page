"use client"

import React from "react"
import HeroEnterpriseSection from "@/sections/enterprise/HeroSection"
import EnterpriseServicesSection from "@/sections/enterprise/ServicesSection"
import EnterprisePricingSection from "@/sections/enterprise/PricingSection"
import EnterpriseFAQSection from "@/sections/enterprise/FAQSection"
import ContactSection from "@/sections/home/ContactSection"
import EnterpriseTeamSection from "@/sections/enterprise/TeamSection"
import { AuroraBackground } from "@/components/ui/aurora-backgound"

export default function EnterprisePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <AuroraBackground>
        <HeroEnterpriseSection />
      </AuroraBackground>
      
      {/* Services Section */}
      <EnterpriseServicesSection />
      
      {/* Team Section */}
      <EnterpriseTeamSection />
      
      {/* Pricing Section */}
      <EnterprisePricingSection />
      
      {/* FAQ Section */}
      <EnterpriseFAQSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}