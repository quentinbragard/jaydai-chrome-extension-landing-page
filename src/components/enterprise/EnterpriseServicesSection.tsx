"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  FileText, 
  BarChart3, 
  Shield, 
  BookOpen,
  Bookmark,
  ChevronRight,
  Check,
  ArrowRight,
  Layers,
  Brain,
  Code,
  Presentation,
  Settings,
  ClipboardCheck,
  CheckCircle,
  Sparkles
} from "lucide-react"

const services = [
  {
    id: "training",
    title: "Team Training & Coaching",
    description: "Equip your workforce with the skills to leverage AI effectively in their daily tasks.",
    icon: Users,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    features: [
      "Customized workshop programs",
      "Role-specific training modules",
      "Practical use case development",
      "Ongoing coaching sessions",
      "Progress tracking and certification"
    ],
    cta: "Book a training consultation",
    image: "/images/training.jpg"
  },
  {
    id: "prompts",
    title: "Custom Prompt Engineering",
    description: "Develop bespoke prompt templates tailored to your company's specific needs and use cases.",
    icon: Bookmark,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/30",
    features: [
      "Industry-specific prompt libraries",
      "Department-tailored templates",
      "Prompt performance testing",
      "Regular optimization updates",
      "Comprehensive documentation"
    ],
    cta: "Request custom prompts",
    image: "/images/prompts.jpg"
  },
  {
    id: "analytics",
    title: "Enterprise Analytics Dashboard",
    description: "Track ROI and usage patterns across your organization with comprehensive reporting.",
    icon: BarChart3,
    color: "bg-green-500/10 text-green-500 border-green-500/30",
    features: [
      "Team-wide usage metrics",
      "Productivity gain tracking",
      "Department comparison reports",
      "Cost-saving analytics",
      "Custom report generation"
    ],
    cta: "See analytics demo",
    image: "/images/analytics.jpg"
  },
  {
    id: "consulting",
    title: "AI Implementation Consulting",
    description: "Strategic guidance on integrating AI into existing workflows and business processes.",
    icon: Brain,
    color: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    features: [
      "Business process analysis",
      "AI opportunity assessment",
      "Implementation roadmap",
      "ROI measurement framework",
      "Change management support"
    ],
    cta: "Schedule a consultation",
    image: "/images/consulting.jpg"
  },
  {
    id: "governance",
    title: "AI Governance Framework",
    description: "Implement responsible AI usage policies and ensure compliance across your organization.",
    icon: Shield,
    color: "bg-red-500/10 text-red-500 border-red-500/30",
    features: [
      "Usage policy development",
      "Data security protocols",
      "Compliance monitoring",
      "Ethical guidelines",
      "Risk assessment tools"
    ],
    cta: "Learn about governance",
    image: "/images/governance.jpg"
  }
]

// SVG background pattern for process steps
const ProcessStepPattern = () => (
  <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-border/50 z-0">
    <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="absolute left-1/2 -translate-x-1/2">
      <path d="M0 0L20 0L10 8L0 0Z" className="fill-border/50" />
    </svg>
  </div>
)

const EnterpriseProcessStep = ({ number, title, description, icon: Icon }: { 
  number: number; 
  title: string; 
  description: string; 
  icon: React.ElementType;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * number }}
    className="flex flex-col lg:flex-row items-center gap-6 relative z-10"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
      {number}
    </div>
    
    <div className="flex-1 lg:bg-card lg:border lg:border-border lg:rounded-xl lg:p-6 lg:shadow-sm relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon size={18} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-foreground/70">{description}</p>
    </div>
  </motion.div>
)

const EnterpriseServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0].id)
  
  const activeServiceData = services.find(s => s.id === activeService) || services[0]
  
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
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
              <ClipboardCheck size={14} />
              <span>Comprehensive Solutions</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Enterprise Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            From implementation to optimization, we provide end-to-end support for your AI journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Services nav */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-border bg-secondary/5">
                <h3 className="font-semibold flex items-center">
                  <Layers className="mr-2 text-primary" size={18} />
                  Enterprise Services
                </h3>
              </div>
              
              <div className="divide-y divide-border">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-4 flex items-start gap-3 transition-colors ${
                      activeService === service.id ? "bg-primary/5" : "hover:bg-secondary/5"
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${service.color}`}>
                      <service.icon size={18} />
                    </div>
                    <div>
                      <h4 className={`font-medium ${activeService === service.id ? "text-primary" : "text-foreground"}`}>
                        {service.title}
                      </h4>
                      <p className="text-foreground/70 text-sm line-clamp-2 mt-1">
                        {service.description}
                      </p>
                      
                      {activeService === service.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-1 text-primary text-xs font-medium flex items-center"
                        >
                          Learn more
                          <ChevronRight size={12} className="ml-1" />
                        </motion.div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Service details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className={`p-6 md:p-8 rounded-xl border ${activeServiceData.color.split(" ")[0]} border-${activeServiceData.color.split(" ")[2]}`}>
              <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8">
                <div className={`p-5 rounded-xl ${activeServiceData.color}`}>
                  <activeServiceData.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{activeServiceData.title}</h3>
                  <p className="text-foreground/70 mt-2">{activeServiceData.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={18} />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {activeServiceData.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-start gap-2"
                      >
                        <div className={`shrink-0 mt-1 p-0.5 rounded-full ${activeServiceData.color.split(" ")[0]} ${activeServiceData.color.split(" ")[1]}`}>
                          <Check size={12} />
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className={`px-4 py-2 rounded-md ${activeServiceData.color.split(" ")[0]} ${activeServiceData.color.split(" ")[1]} hover:opacity-90 transition-opacity flex items-center gap-1`}
                    >
                      <span>{activeServiceData.cta}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="md:col-span-2 h-64 md:h-auto bg-secondary/20 rounded-xl overflow-hidden flex items-center justify-center border border-border">
                  <div className="p-6 text-center">
                    <Sparkles size={36} className="mx-auto mb-4 text-primary/70" />
                    <p className="text-foreground/70 text-sm">Content visualization goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Implementation Process */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Implementation Process</h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful AI adoption across your organization
            </p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            <ProcessStepPattern />
            
            <div className="space-y-8 md:space-y-12 relative z-10">
              <EnterpriseProcessStep 
                number={1} 
                title="Discovery & Assessment" 
                description="We analyze your current workflows, identify AI opportunities, and develop a tailored strategy for implementation."
                icon={ClipboardCheck}
              />
              
              <EnterpriseProcessStep 
                number={2} 
                title="Solution Design" 
                description="Our team creates custom prompt libraries, implementation plans, and training programs specific to your organization's needs."
                icon={Settings}
              />
              
              <EnterpriseProcessStep 
                number={3} 
                title="Team Training" 
                description="We provide comprehensive training to ensure your teams can effectively leverage AI tools and prompt engineering."
                icon={Users}
              />
              
              <EnterpriseProcessStep 
                number={4} 
                title="Implementation" 
                description="We deploy Jaydai across your organization with custom templates, analytics, and governance frameworks."
                icon={Code}
              />
              
              <EnterpriseProcessStep 
                number={5} 
                title="Optimization & Support" 
                description="Ongoing analysis, template refinement, and support to ensure continuous improvement and ROI."
                icon={BarChart3}
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseServicesSection