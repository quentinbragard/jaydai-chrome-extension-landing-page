"use client"
import React from "react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import AnimatedElement from "./common/AnimatedElement"
import Card from "./common/Card"
import GridContainer from "./common/GridContainer"
import Image from "next/image"
import CTAButton from "./common/CTAButton"
import { Building, CheckCircle, Users } from "lucide-react"

const EnterpriseSolutionsSection = () => {
  return (
    <SectionWrapper id="enterprise" className="bg-muted">
      <SectionHeading 
        title="Enterprise Solutions"
        description="Empower your entire organization with AI prompt management"
      />
      
      <div className="max-w-6xl mx-auto">
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative aspect-auto lg:aspect-auto bg-muted">
                <Image
                  src="/images/enterprise_dashboard.jpg"
                  alt="Jaydai Enterprise Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  <Building className="h-4 w-4 mr-1" />
                  <span>For Teams & Organizations</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">Scale AI Across Your Organization</h3>
                <p className="text-foreground/70 mb-6">
                  Jaydai Enterprise provides centralized prompt management, usage analytics, and collaboration features designed for teams of all sizes.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-foreground/80">Centralized template library for consistent AI interactions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-foreground/80">Role-based access controls and permissions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-foreground/80">Usage analytics and ROI reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-foreground/80">Custom onboarding and training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-foreground/80">Enterprise-grade security and compliance</span>
                  </li>
                </ul>
                
                <CTAButton
                  href="#contact"
                  variant="primary"
                >
                  Request Enterprise Demo
                </CTAButton>
              </div>
            </div>
          </div>
        </AnimatedElement>
        
        <div className="mt-16">
          <SectionHeading 
            title="Trusted by Leading Companies"
            description="Join hundreds of organizations using Jaydai to standardize their AI workflows"
            titleClassName="text-2xl md:text-3xl"
          />
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-8">
            <AnimatedElement animation="fadeIn" delay={0.1}>
              <Image
                src="/images/company_logo_1.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.2}>
              <Image
                src="/images/company_logo_2.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.3}>
              <Image
                src="/images/company_logo_3.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.4}>
              <Image
                src="/images/company_logo_4.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.5}>
              <Image
                src="/images/company_logo_5.png"
                alt="Company Logo"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default EnterpriseSolutionsSection
