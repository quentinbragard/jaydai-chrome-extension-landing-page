"use client"
import React from "react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import AnimatedElement from "./common/AnimatedElement"
import Card from "./common/Card"
import GridContainer from "./common/GridContainer"
import Image from "next/image"

const AnalyticsDashboardSection = () => {
  return (
    <SectionWrapper id="analytics" className="bg-muted">
      <SectionHeading 
        title="Detailed Analytics Dashboard"
        description="Track and optimize your AI usage with comprehensive analytics"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <div className="relative aspect-video bg-card rounded-xl overflow-hidden border border-border shadow-lg">
            <Image
              src="/images/analytics_dashboard.jpg"
              alt="Analytics Dashboard"
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fadeInUp" delay={0.2}>
          <div className="space-y-6 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground">Make data-driven decisions</h3>
            <p className="text-foreground/70">
              Our analytics dashboard gives you unprecedented insights into your AI usage patterns, helping you understand how to get the most value from ChatGPT.
            </p>
            
            <GridContainer columns={2} gap="sm" className="mt-6">
              <Card className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-foreground">Time Saved</h4>
                </div>
                <p className="text-sm text-foreground/70">
                  Track how much time you save with templates compared to writing prompts from scratch.
                </p>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-foreground">Usage Patterns</h4>
                </div>
                <p className="text-sm text-foreground/70">
                  Identify which templates and prompt types you use most frequently.
                </p>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-foreground">Effectiveness</h4>
                </div>
                <p className="text-sm text-foreground/70">
                  Rate and track which prompts generate the most useful responses.
                </p>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-foreground">Insights</h4>
                </div>
                <p className="text-sm text-foreground/70">
                  Get personalized recommendations to improve your AI interactions.
                </p>
              </Card>
            </GridContainer>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  )
}

export default AnalyticsDashboardSection
