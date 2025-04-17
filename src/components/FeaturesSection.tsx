"use client"
import React from "react"
import { BarChart3, FileText, GraduationCap, Sparkles, Zap } from "lucide-react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import FeatureCard from "./common/FeatureCard"
import GridContainer from "./common/GridContainer"
import AnimatedElement from "./common/AnimatedElement"
import CTAButton from "./common/CTAButton"

const features = [
  {
    id: 1,
    title: "Expert Prompt Library",
    description: "Access a curated collection of expert-crafted prompts for various use cases. Save time and get better results with proven prompt structures.",
    icon: Sparkles,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
    delay: 0.1
  },
  {
    id: 2,
    title: "Company Templates",
    description: "Share a customized prompt bank with your entire team for specific business use cases. Standardize AI interactions across your organization and ensure consistent results.",
    icon: FileText,
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
    delay: 0.2
  },
  {
    id: 3,
    title: "Create Custom Templates",
    description: "Build and save your own prompt templates to save time when working on recurring projects. Organize them by category and access them with a single click.",
    icon: Sparkles,
    color: "bg-amber-500/10",
    iconColor: "text-amber-500",
    delay: 0.3
  },
  {
    id: 4,
    title: "Detailed Analytics",
    description: "Track your AI usage with comprehensive analytics. Monitor time saved, energy footprint, and effectiveness of different prompt types to optimize your workflow.",
    icon: BarChart3,
    color: "bg-green-500/10",
    iconColor: "text-green-500",
    delay: 0.4
  },
  {
    id: 5,
    title: "AI Advancement Updates",
    description: "Stay informed about the latest AI developments and how to leverage them. We continuously update our prompt libraries to incorporate new capabilities and techniques.",
    icon: Zap,
    color: "bg-red-500/10",
    iconColor: "text-red-500",
    delay: 0.5
  },
  {
    id: 6,
    title: "Learning School",
    description: "Access our online learning platform with real-world simulations to master AI prompt engineering. Learn how to craft effective prompts for any situation.",
    icon: GraduationCap,
    color: "bg-teal-500/10",
    iconColor: "text-teal-500",
    delay: 0.6
  }
]

const FeaturesSection = () => {
  return (
    <SectionWrapper id="features" className="bg-background">
      <SectionHeading 
        title="Powerful Features"
        description="Everything you need to maximize your AI potential"
      />
      
      <GridContainer columns={3} gap="lg" className="max-w-6xl mx-auto">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            backgroundColor={feature.color}
            iconColor={feature.iconColor}
            delay={feature.delay}
          />
        ))}
      </GridContainer>
      
      <AnimatedElement 
        animation="fadeInUp" 
        delay={0.7} 
        className="mt-16 text-center"
      >
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          Experience all these features and more with our free Chrome extension.
        </p>
        <CTAButton
          href="https://chrome.google.com/webstore"
          target="_blank"
          variant="primary"
        >
          Download Now
        </CTAButton>
      </AnimatedElement>
    </SectionWrapper>
  )
}

export default FeaturesSection
