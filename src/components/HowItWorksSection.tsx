"use client"
import React from "react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import AnimatedElement from "./common/AnimatedElement"
import Card from "./common/Card"
import GridContainer from "./common/GridContainer"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react"
import CTAButton from "./common/CTAButton"

const HowItWorksSection = () => {
  return (
    <SectionWrapper id="how-it-works" className="bg-background">
      <SectionHeading 
        title="How Jaydai Works"
        description="Seamlessly integrate with ChatGPT to enhance your AI experience"
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <Card className="h-full">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-500">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Install the Extension</h3>
              <p className="text-foreground/70">
                Add Jaydai to your Chrome browser with a single click. No account creation required to get started.
              </p>
            </Card>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <Card className="h-full">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-500">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Access Templates</h3>
              <p className="text-foreground/70">
                Browse our library of expert-crafted prompts or create your own custom templates for recurring tasks.
              </p>
            </Card>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInUp" delay={0.3}>
            <Card className="h-full">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-green-500">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Get Better Results</h3>
              <p className="text-foreground/70">
                Use our templates to generate more accurate, relevant responses from ChatGPT while tracking your usage.
              </p>
            </Card>
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="fadeInUp" delay={0.4}>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Seamless Integration</h3>
                <p className="text-foreground/70 mb-6">
                  Jaydai works directly within the ChatGPT interface, providing a non-intrusive experience that enhances your workflow without disrupting it.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-foreground/80">One-click template insertion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-foreground/80">Automatic prompt formatting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-foreground/80">Response quality tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-foreground/80">Works with ChatGPT Free and Plus</span>
                  </li>
                </ul>
                
                <CTAButton
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  variant="primary"
                >
                  Get Started Now
                </CTAButton>
              </div>
              
              <div className="relative aspect-auto lg:aspect-auto bg-muted">
                <Image
                  src="/images/integration_screenshot.jpg"
                  alt="Jaydai Integration with ChatGPT"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  )
}

export default HowItWorksSection
