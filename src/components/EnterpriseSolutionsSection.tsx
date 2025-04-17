"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Building, 
  Users, 
  LineChart, 
  Briefcase, 
  Shield, 
  Bookmark,
  ChevronRight,
  CheckCircle,
  ArrowRight
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
    ]
  },
  {
    id: "consulting",
    title: "AI Implementation Consulting",
    description: "Strategic guidance on integrating AI into existing workflows and business processes.",
    icon: Briefcase,
    color: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    features: [
      "Business process analysis",
      "AI opportunity assessment",
      "Implementation roadmap",
      "ROI measurement framework",
      "Change management support"
    ]
  },
  {
    id: "custom",
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
    ]
  },
  {
    id: "analytics",
    title: "Enterprise Analytics Dashboard",
    description: "Track ROI and usage patterns across your organization with comprehensive reporting.",
    icon: LineChart,
    color: "bg-green-500/10 text-green-500 border-green-500/30",
    features: [
      "Team-wide usage metrics",
      "Productivity gain tracking",
      "Department comparison reports",
      "Cost-saving analytics",
      "Custom report generation"
    ]
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
    ]
  }
]

const EnterpriseSolutionsSection = () => {
  const [activeService, setActiveService] = React.useState(services[0].id)
  
  const activeServiceData = services.find(s => s.id === activeService) || services[0]
  
  return (
    <section id="enterprise" className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full opacity-40 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Enterprise Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Comprehensive AI strategy and implementation for organizations
          </motion.p>
        </div>
        
        {/* Enterprise companies using the product */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16"
        > 
        </motion.div>
        
        {/* Services section with tabs navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
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
                  <Building className="mr-2 text-primary" size={18} />
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
            <div className={`p-6 rounded-xl border ${activeServiceData.color.split(" ")[0]} border-${activeServiceData.color.split(" ")[2]}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${activeServiceData.color}`}>
                  <activeServiceData.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{activeServiceData.title}</h3>
                  <p className="text-foreground/70">{activeServiceData.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <CheckCircle className="mr-2" size={18} />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {activeServiceData.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${activeServiceData.color.split(" ")[1]}`}></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-background/50 rounded-lg p-5 border border-border">
                  <h4 className="text-lg font-semibold mb-4">How It Works</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <div className="bg-secondary/20 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5">1</div>
                      <div>
                        <p className="font-medium">Initial Consultation</p>
                        <p className="text-sm text-foreground/70">We assess your specific needs and objectives</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-secondary/20 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="font-medium">Custom Solution Design</p>
                        <p className="text-sm text-foreground/70">We create a tailored implementation plan</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-secondary/20 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5">3</div>
                      <div>
                        <p className="font-medium">Implementation & Training</p>
                        <p className="text-sm text-foreground/70">We deploy solutions and train your teams</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-secondary/20 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5">4</div>
                      <div>
                        <p className="font-medium">Ongoing Support & Optimization</p>
                        <p className="text-sm text-foreground/70">We provide continuous improvement</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-5 border border-border">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">Ready to Get Started?</h4>
                    <p className="text-foreground/70 mt-1">
                      Our enterprise team is ready to help you implement AI solutions across your organization.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className={`px-4 py-2 rounded-md ${activeServiceData.color.split(" ")[0]} ${activeServiceData.color.split(" ")[1]} hover:opacity-90 transition-opacity flex items-center gap-1`}
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-10">Enterprise Success Metrics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <div className="text-xl font-bold text-primary">42%</div>
                </div>
                <h4 className="text-lg font-semibold">Productivity Increase</h4>
                <p className="text-foreground/70 mt-2">Average productivity gain reported by teams using Jaydai</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <div className="text-xl font-bold text-primary">67%</div>
                </div>
                <h4 className="text-lg font-semibold">Time Saved</h4>
                <p className="text-foreground/70 mt-2">Reduction in time spent on repetitive AI interactions</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <div className="text-xl font-bold text-primary">89%</div>
                </div>
                <h4 className="text-lg font-semibold">User Satisfaction</h4>
                <p className="text-foreground/70 mt-2">Team members reporting improved AI experience with Jaydai</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:enterprise@jaydai.com"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
          >
            <Building size={18} />
            <span>Request Enterprise Demo</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseSolutionsSection