"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  FileText, 
  TrendingUp, 
  Clock, 
  Building, 
  ArrowRight,
  BarChart3,
  BookOpen,
  Users,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  Sparkles
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const caseStudies = [
  {
    id: "finance",
    company: "GlobalBank International",
    industry: "Financial Services",
    employeeCount: "5,000+",
    challenge: "Need to analyze financial documents and generate reports faster while maintaining accuracy. Manual processes were taking too much time.",
    solution: "Implemented custom prompt templates for financial analysis, report generation, and regulatory compliance. Rolled out to 600+ analysts across 20 departments.",
    results: [
      { metric: "Time Saved", value: "68%", description: "Reduction in time spent analyzing financial data" },
      { metric: "Accuracy", value: "95%", description: "Quality match with expert analyst reviews" },
      { metric: "ROI", value: "$2.4M", description: "Annual cost savings from improved efficiency" }
    ],
    testimonial: {
      quote: "Jaydai's enterprise solution has transformed how our analysts work with financial data. What used to take hours now takes minutes, with even greater accuracy.",
      author: "Sarah Chen",
      role: "Chief Analytics Officer"
    },
    logo: "/images/globalbank-logo.png", // placeholder
    bgClass: "bg-blue-500/5 border-blue-500/20",
    iconClass: "text-blue-500 bg-blue-500/10"
  },
  {
    id: "tech",
    company: "InnovateTech Solutions",
    industry: "Software Development",
    employeeCount: "1,200+",
    challenge: "Engineering teams needed to improve code documentation, troubleshooting, and knowledge sharing across distributed teams.",
    solution: "Deployed specialized AI prompt templates for code review, documentation generation, and bug resolution. Created custom templates for internal APIs and systems.",
    results: [
      { metric: "Dev Productivity", value: "+42%", description: "Increase in developer productivity" },
      { metric: "Documentation", value: "3.5x", description: "Improvement in documentation quality and coverage" },
      { metric: "Bug Resolution", value: "-58%", description: "Reduction in time to resolve critical bugs" }
    ],
    testimonial: {
      quote: "With Jaydai's enterprise solution, our engineering teams have significantly improved code quality and reduced the time spent on documentation by leveraging AI effectively.",
      author: "Miguel Rodriguez",
      role: "VP of Engineering"
    },
    logo: "/images/innovatetech-logo.png", // placeholder
    bgClass: "bg-purple-500/5 border-purple-500/20",
    iconClass: "text-purple-500 bg-purple-500/10"
  },
  {
    id: "healthcare",
    company: "MediCorp Health Systems",
    industry: "Healthcare",
    employeeCount: "8,500+",
    challenge: "Medical staff spent excessive time on administrative tasks rather than patient care. Documentation and reporting were major bottlenecks.",
    solution: "Implemented AI prompts for clinical documentation, patient education materials, and administrative workflows. Provided specialized training for medical staff.",
    results: [
      { metric: "Admin Time", value: "-45%", description: "Reduction in administrative documentation time" },
      { metric: "Patient Time", value: "+32%", description: "Increase in direct patient care time" },
      { metric: "Satisfaction", value: "+28%", description: "Improvement in staff satisfaction scores" }
    ],
    testimonial: {
      quote: "Jaydai has revolutionized how our medical professionals handle documentation, allowing them to focus more on patient care while maintaining thorough records.",
      author: "Dr. James Wilson",
      role: "Chief Medical Officer"
    },
    logo: "/images/medicorp-logo.png", // placeholder
    bgClass: "bg-green-500/5 border-green-500/20",
    iconClass: "text-green-500 bg-green-500/10"
  },
  {
    id: "retail",
    company: "Omnichannel Retail Group",
    industry: "Retail",
    employeeCount: "12,000+",
    challenge: "Marketing and customer service teams struggled to create consistent, high-quality content across multiple brands and channels.",
    solution: "Deployed enterprise-wide prompt template library for product descriptions, marketing copy, customer service responses, and social media content.",
    results: [
      { metric: "Content Creation", value: "5x", description: "Increase in content production speed" },
      { metric: "Response Time", value: "-62%", description: "Reduction in customer response times" },
      { metric: "Conversion", value: "+23%", description: "Improvement in marketing conversion rates" }
    ],
    testimonial: {
      quote: "The consistency and quality of our customer communications have dramatically improved since implementing Jaydai across our brands. It's been transformative.",
      author: "Lisa Thompson",
      role: "Chief Marketing Officer"
    },
    logo: "/images/omnichannel-logo.png", // placeholder
    bgClass: "bg-amber-500/5 border-amber-500/20",
    iconClass: "text-amber-500 bg-amber-500/10"
  }
]

const CaseStudyCard = ({ study, isActive, onClick }: { 
  study: typeof caseStudies[0]; 
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * caseStudies.findIndex(s => s.id === study.id) }}
      className={`cursor-pointer group rounded-xl overflow-hidden transition-all duration-300 ${
        isActive 
          ? `border-2 ${study.bgClass} shadow-lg scale-[1.02]` 
          : "border border-border bg-card hover:border-primary/20 hover:bg-primary/5"
      }`}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg ${study.iconClass} flex items-center justify-center`}>
              <Building size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">{study.company}</h3>
              <p className="text-foreground/70 text-sm">{study.industry}</p>
            </div>
          </div>
          <div className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-foreground/70">
            {study.employeeCount} employees
          </div>
        </div>
        
        <p className="text-foreground/80 text-sm line-clamp-2 mb-4">
          {study.challenge}
        </p>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center text-sm">
            <TrendingUp size={14} className={`mr-1 ${isActive ? "text-primary" : "text-foreground/70"}`} />
            <span>{study.results[0].value}</span>
            <span className="mx-1 text-foreground/50">•</span>
            <Clock size={14} className={`mr-1 ${isActive ? "text-primary" : "text-foreground/70"}`} />
            <span>{study.results[1].value}</span>
          </div>
          
          <ChevronRight size={16} className={`transform transition-transform duration-300 ${
            isActive ? "text-primary translate-x-1" : "text-foreground/50 group-hover:translate-x-1"
          }`} />
        </div>
      </div>
    </motion.div>
  )
}

const EnterpriseCaseStudiesSection = () => {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0].id)
  
  const currentStudy = caseStudies.find(study => study.id === activeStudy) || caseStudies[0]
  
  return (
    <section id="case-studies" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:25px_25px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6"
          >
            <span className="flex items-center gap-1.5">
              <FileText size={14} />
              <span>Success Stories</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Enterprise Case Studies
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            See how organizations across industries achieved measurable results with Jaydai
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Case study selector cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <Tabs defaultValue="all" className="w-full mb-6">
              <TabsList className="w-full grid grid-cols-4 mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="tech">Technology</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="space-y-4">
              {caseStudies.map(study => (
                <CaseStudyCard 
                  key={study.id}
                  study={study}
                  isActive={activeStudy === study.id}
                  onClick={() => setActiveStudy(study.id)}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Selected case study details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className={`rounded-xl border ${currentStudy.bgClass} p-6 md:p-8 h-full flex flex-col`}>
              {/* Header with logo */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/40">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl ${currentStudy.iconClass} flex items-center justify-center`}>
                    {currentStudy.logo ? (
                      <Image
                        src={currentStudy.logo}
                        alt={currentStudy.company}
                        width={48}
                        height={48}
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <Building size={32} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentStudy.company}</h3>
                    <p className="text-foreground/70">{currentStudy.industry} • {currentStudy.employeeCount} employees</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <Link 
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <span>Full case study</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
              
              {/* Challenge and solution */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-border/40">
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <div className={`p-1 rounded ${currentStudy.iconClass}`}>
                      <FileText size={14} />
                    </div>
                    Challenge
                  </h4>
                  <p className="text-foreground/80">
                    {currentStudy.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <div className={`p-1 rounded ${currentStudy.iconClass}`}>
                      <Sparkles size={14} />
                    </div>
                    Solution
                  </h4>
                  <p className="text-foreground/80">
                    {currentStudy.solution}
                  </p>
                </div>
              </div>
              
              {/* Results */}
              <div className="py-6 flex-1">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className={`p-1 rounded ${currentStudy.iconClass}`}>
                    <BarChart3 size={14} />
                  </div>
                  Results
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle size={16} className="text-primary" />
                        <h5 className="font-medium">{result.metric}</h5>
                      </div>
                      <div className="text-3xl font-bold mb-1">{result.value}</div>
                      <p className="text-sm text-foreground/70">{result.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Testimonial */}
                <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-border/50">
                  <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    <div className="relative">
                      <div className="absolute -top-3 -left-3 text-4xl text-primary/30">"</div>
                      <p className="italic text-foreground/90 relative z-10 pl-2">
                        {currentStudy.testimonial.quote}
                      </p>
                    </div>
                    
                    <div className="shrink-0 md:border-l md:border-border/40 md:pl-4 flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="font-medium">{currentStudy.testimonial.author}</span>
                        <span className="text-sm text-foreground/70">{currentStudy.testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-3 justify-end mt-auto pt-4">
                <Link 
                  href="#pricing"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-secondary/30 text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
                >
                  <span>View Pricing</span>
                </Link>
                <Link 
                  href="#contact" 
                  className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <span>Contact Sales</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-center mb-8">Enterprise Impact Metrics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-foreground/70 mt-1">Enterprise clients</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">32,000+</div>
                <div className="text-foreground/70 mt-1">Active users</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$7.2M</div>
                <div className="text-foreground/70 mt-1">Customer savings</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">97%</div>
                <div className="text-foreground/70 mt-1">Renewal rate</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="#testimonials"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <span>See what our clients say about us</span>
            <ChevronRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseCaseStudiesSection