"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  Building, 
  Phone, 
  Send,
  Users,
  FileCheck,
  Globe,
  Check,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const EnterpriseContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:25px_25px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
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
              <MessageSquare size={14} />
              <span>Get in Touch</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Ready to Transform Your Organization?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            Our enterprise team is here to help you implement AI that delivers real business value
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
              <div className="p-6 border-b border-border bg-secondary/5">
                <h3 className="font-semibold flex items-center">
                  <Building className="mr-2 text-primary" size={18} />
                  Enterprise Contact
                </h3>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-secondary/10 rounded-lg p-3 h-max">
                      <Calendar size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Schedule a Demo</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        See how Jaydai can transform your organization's AI workflow.
                      </p>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
                      >
                        <span>Book a time</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-secondary/10 rounded-lg p-3 h-max">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email Us</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        Direct contact with our enterprise sales team.
                      </p>
                      <a 
                        href="mailto:enterprise@jaydai.com" 
                        className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
                      >
                        <span>enterprise@jaydai.com</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-secondary/10 rounded-lg p-3 h-max">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Call Us</h4>
                      <p className="text-foreground/70 text-sm mt-1">
                        Speak directly with an enterprise specialist.
                      </p>
                      <a 
                        href="tel:+18005551234" 
                        className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
                      >
                        <span>+1 (800) 555-1234</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <h4 className="font-medium mb-4">Enterprise Benefits</h4>
                  <ul className="space-y-2">
                    {[
                      "Dedicated account management",
                      "Custom implementation support",
                      "Enterprise security & compliance",
                      "Team training & onboarding"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check size={14} className="text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
              <div className="p-6 border-b border-border bg-secondary/5">
                <h3 className="font-semibold">Enterprise Inquiry Form</h3>
                <p className="text-foreground/70 text-sm">Tell us about your organization and requirements</p>
              </div>
              
              <div className="p-6">
                <form className="space-y-6">
                  {/* Contact details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/70">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="title" className="block text-sm font-medium text-foreground/70">
                        Job Title*
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="CTO"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/70">
                        Work Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="john.smith@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground/70">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  {/* Company details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-foreground/70">
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Acme Corporation"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company-size" className="block text-sm font-medium text-foreground/70">
                        Company Size*
                      </label>
                      <select
                        id="company-size"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      >
                        <option value="">Select size</option>
                        <option value="1-50">1-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1,000 employees</option>
                        <option value="1001-5000">1,001-5,000 employees</option>
                        <option value="5001+">5,001+ employees</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="industry" className="block text-sm font-medium text-foreground/70">
                        Industry*
                      </label>
                      <select
                        id="industry"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      >
                        <option value="">Select industry</option>
                        <option value="technology">Technology</option>
                        <option value="financial-services">Financial Services</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="region" className="block text-sm font-medium text-foreground/70">
                        Region*
                      </label>
                      <select
                        id="region"
                        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      >
                        <option value="">Select region</option>
                        <option value="north-america">North America</option>
                        <option value="europe">Europe</option>
                        <option value="asia-pacific">Asia Pacific</option>
                        <option value="latin-america">Latin America</option>
                        <option value="middle-east-africa">Middle East & Africa</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Inquiry details */}
                  <div className="space-y-2">
                    <label htmlFor="interest" className="block text-sm font-medium text-foreground/70">
                      Primary Interest*
                    </label>
                    <select
                      id="interest"
                      className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Select your primary interest</option>
                      <option value="team-implementation">Team Implementation</option>
                      <option value="custom-prompts">Custom Prompts Development</option>
                      <option value="analytics">Enterprise Analytics</option>
                      <option value="training">Team Training & Coaching</option>
                      <option value="security">Security & Compliance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/70">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tell us about your requirements, goals, or specific use cases..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-border rounded bg-background focus:ring-3 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-foreground/70">
                        I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <span>Submit Request</span>
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Enterprise success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="p-3 rounded-xl bg-blue-500/10 mb-4">
                <Users size={24} className="text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold">30,000+</h4>
              <p className="text-foreground/70 mt-2">Enterprise users globally</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="p-3 rounded-xl bg-purple-500/10 mb-4">
                <FileCheck size={24} className="text-purple-500" />
              </div>
              <h4 className="text-lg font-semibold">98%</h4>
              <p className="text-foreground/70 mt-2">Enterprise client retention</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="p-3 rounded-xl bg-green-500/10 mb-4">
                <Globe size={24} className="text-green-500" />
              </div>
              <h4 className="text-lg font-semibold">20+</h4>
              <p className="text-foreground/70 mt-2">Countries with enterprise clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseContactSection