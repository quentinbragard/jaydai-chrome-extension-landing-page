"use client"
import React from "react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import AnimatedElement from "./common/AnimatedElement"
import Card from "./common/Card"
import GridContainer from "./common/GridContainer"
import Image from "next/image"

const TemplatesSection = () => {
  return (
    <SectionWrapper id="templates" className="bg-background">
      <SectionHeading 
        title="Expert-Crafted Templates"
        description="Access our growing library of templates designed for various use cases"
      />
      
      <GridContainer columns={3} gap="lg" className="max-w-6xl mx-auto">
        {/* Template Card 1 */}
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <Card className="h-full">
            <div className="aspect-video w-full bg-muted rounded-lg mb-4 overflow-hidden">
              <Image
                src="/images/template_content_writing.jpg"
                alt="Content Writing Template"
                width={400}
                height={225}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-foreground">Content Writing</h3>
              <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">Popular</span>
            </div>
            <p className="text-foreground/70 text-sm mb-4">
              Create engaging blog posts, articles, and social media content with structured prompts that guide AI to match your brand voice.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-foreground/60">12 templates</span>
              <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Marketing</span>
            </div>
          </Card>
        </AnimatedElement>
        
        {/* Template Card 2 */}
        <AnimatedElement animation="fadeInUp" delay={0.2}>
          <Card className="h-full">
            <div className="aspect-video w-full bg-muted rounded-lg mb-4 overflow-hidden">
              <Image
                src="/images/template_code_assistant.jpg"
                alt="Code Assistant Template"
                width={400}
                height={225}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-foreground">Code Assistant</h3>
              <span className="text-xs bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full">New</span>
            </div>
            <p className="text-foreground/70 text-sm mb-4">
              Debug, refactor, and optimize your code with templates designed for different programming languages and common development tasks.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-foreground/60">18 templates</span>
              <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Development</span>
            </div>
          </Card>
        </AnimatedElement>
        
        {/* Template Card 3 */}
        <AnimatedElement animation="fadeInUp" delay={0.3}>
          <Card className="h-full">
            <div className="aspect-video w-full bg-muted rounded-lg mb-4 overflow-hidden">
              <Image
                src="/images/template_data_analysis.jpg"
                alt="Data Analysis Template"
                width={400}
                height={225}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-foreground">Data Analysis</h3>
              <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">Pro</span>
            </div>
            <p className="text-foreground/70 text-sm mb-4">
              Transform raw data into insights with templates for data cleaning, visualization suggestions, and statistical analysis.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-foreground/60">15 templates</span>
              <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Analytics</span>
            </div>
          </Card>
        </AnimatedElement>
      </GridContainer>
      
      <AnimatedElement animation="fadeInUp" delay={0.4} className="mt-12 text-center">
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          These are just a few examples from our library of over 100 templates. Unlock the full collection with our Pro plan.
        </p>
        <a
          href="#pricing"
          className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium inline-block"
        >
          View Pricing
        </a>
      </AnimatedElement>
    </SectionWrapper>
  )
}

export default TemplatesSection
