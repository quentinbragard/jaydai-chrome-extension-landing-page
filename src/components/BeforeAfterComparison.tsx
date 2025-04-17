"use client"
import React from "react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import AnimatedElement from "./common/AnimatedElement"
import Card from "./common/Card"

const BeforeAfterComparison = () => {
  return (
    <SectionWrapper id="comparison" className="bg-muted">
      <SectionHeading 
        title="Before & After Jaydai"
        description="See the difference our AI assistant makes in your ChatGPT experience"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <Card className="h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Without Jaydai</h3>
            </div>
            
            <div className="space-y-4 text-foreground/70">
              <p className="flex items-start">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Spend time crafting prompts from scratch</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Inconsistent results from poorly structured prompts</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No way to save or reuse successful prompts</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No insights into your AI usage patterns</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Limited knowledge of prompt engineering best practices</span>
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
              <p className="text-foreground/80 italic">
                "I was spending so much time trying to get ChatGPT to understand what I wanted. It was frustrating and inefficient."
              </p>
            </div>
          </Card>
        </AnimatedElement>
        
        <AnimatedElement animation="fadeInUp" delay={0.2}>
          <Card className="h-full border-primary/30">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">With Jaydai</h3>
            </div>
            
            <div className="space-y-4 text-foreground/70">
              <p className="flex items-start">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access expert-crafted prompts with one click</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Consistent, high-quality responses every time</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Save and organize templates for future use</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Detailed analytics on your AI usage and effectiveness</span>
              </p>
              <p className="flex items-start">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Learn prompt engineering through our learning platform</span>
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <p className="text-foreground/80 italic">
                "Jaydai has cut my prompt writing time by 70% and the quality of responses I get from ChatGPT has improved dramatically!"
              </p>
            </div>
          </Card>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  )
}

export default BeforeAfterComparison
