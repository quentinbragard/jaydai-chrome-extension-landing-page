"use client"
import React from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import AnimatedBadge from "./common/AnimatedBadge"
import AnimatedElement from "./common/AnimatedElement"
import SectionWrapper from "./common/SectionWrapper"
import CTAButton from "./common/CTAButton"
import StatsRow from "./common/StatsRow"
import FloatingElement from "./common/FloatingElement"

interface HeroSectionProps {
  openVideoDialog: () => void
}

const HeroSection = ({ openVideoDialog }: HeroSectionProps) => {
  const stats = [
    { value: "+50%", label: "More effective responses" },
    { value: "70%", label: "Time saved writing prompts" },
    { value: "100%", label: "Usage statistics control" }
  ]

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated badge */}
          <AnimatedBadge text="Maximize your AI potential with Jaydai" className="mb-6" />
          
          {/* Main heading with animated typing effect */}
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl">
              Your Smart AI Assistant for{" "}
              <span className="text-primary relative">
                ChatGPT
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 rounded-full"></span>
              </span>
            </h1>
          </AnimatedElement>
          
          {/* Subheading */}
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <p className="mt-6 text-xl text-foreground/70 max-w-2xl">
              Transform how you use ChatGPT with our library of expert prompts, custom templates, and detailed analytics.
            </p>
          </AnimatedElement>
          
          {/* CTA buttons */}
          <AnimatedElement animation="fadeInUp" delay={0.3} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              href="https://chrome.google.com/webstore" 
              target="_blank" 
              variant="shimmer"
            >
              Get Chrome Extension
            </CTAButton>
            
            <CTAButton 
              onClick={openVideoDialog} 
              variant="secondary"
            >
              <div className="inline-flex items-center">
                <Play size={18} className="mr-2" />
                Watch Demo
              </div>
            </CTAButton>
          </AnimatedElement>
          
          {/* Stats */}
          <StatsRow stats={stats} className="mt-16" />
        </div>
        
        {/* Floating elements animation */}
        <FloatingElement position="top-left" size="md" delay={0.5} />
        <FloatingElement position="bottom-right" size="lg" delay={0.7} />
        <FloatingElement position="top-right" size="sm" delay={0.9} />
      </div>
    </section>
  )
}

export default HeroSection
