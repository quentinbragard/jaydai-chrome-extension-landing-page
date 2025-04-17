"use client"
import React, { useState } from "react"
import { Check } from "lucide-react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import PricingCard from "./common/PricingCard"
import GridContainer from "./common/GridContainer"

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true)
  
  const togglePricing = () => {
    setIsAnnual(!isAnnual)
  }
  
  return (
    <SectionWrapper id="pricing" className="bg-muted">
      <SectionHeading 
        title="Simple, Transparent Pricing"
        description="Choose the plan that's right for you"
      />
      
      {/* Pricing toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-card border border-border rounded-full p-1 flex items-center">
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isAnnual 
                ? 'bg-primary text-primary-foreground' 
                : 'text-foreground hover:bg-secondary/50'
            }`}
          >
            Annual
            <span className="ml-1 text-xs opacity-80">
              (Save 20%)
            </span>
          </button>
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !isAnnual 
                ? 'bg-primary text-primary-foreground' 
                : 'text-foreground hover:bg-secondary/50'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>
      
      <GridContainer columns={3} gap="lg" className="max-w-6xl mx-auto">
        {/* Free Plan */}
        <PricingCard
          title="Free"
          price="$0"
          description="Perfect for getting started with AI prompts"
          features={[
            "Basic prompt templates",
            "5 custom templates",
            "Basic analytics",
            "Chrome extension"
          ]}
          ctaText="Get Started"
          ctaHref="https://chrome.google.com/webstore"
          delay={0.1}
        />
        
        {/* Pro Plan */}
        <PricingCard
          title="Pro"
          price={isAnnual ? "$8/mo" : "$10/mo"}
          description="For professionals who want to maximize their AI potential"
          features={[
            "All Free features",
            "Unlimited custom templates",
            "Advanced analytics",
            "Template sharing",
            "Priority support"
          ]}
          ctaText="Upgrade to Pro"
          ctaHref="https://chrome.google.com/webstore"
          popular={true}
          delay={0.2}
        />
        
        {/* Team Plan */}
        <PricingCard
          title="Team"
          price={isAnnual ? "$20/mo" : "$25/mo"}
          description="For teams who want to collaborate with AI"
          features={[
            "All Pro features",
            "Team template library",
            "Admin dashboard",
            "Usage reporting",
            "Team training",
            "API access"
          ]}
          ctaText="Contact Sales"
          ctaHref="#contact"
          delay={0.3}
        />
      </GridContainer>
    </SectionWrapper>
  )
}

export default PricingSection
