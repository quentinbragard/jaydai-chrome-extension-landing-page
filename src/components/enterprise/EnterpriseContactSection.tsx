"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Mail, 
  MessageSquare, 
  Building, 
  Calendar, 
  Phone, 
  Globe, 
  CheckCircle,
  User,
  Briefcase,
  Users,
  Send,
  ArrowRight,
  MapPin,
  ExternalLink,
  Clock
} from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PulseBeams } from "@/components/enterprise/PulseBeams"

// Predefined options for the form
const companySize = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees"
]

const industries = [
  "Technology",
  "Financial Services",
  "Healthcare",
  "Education",
  "Retail",
  "Manufacturing",
  "Media & Entertainment",
  "Government",
  "Professional Services",
  "Non-profit",
  "Other"
]

const interests = [
  "Enterprise Implementation",
  "Custom Prompt Templates",
  "Team Training & Coaching",
  "Analytics & ROI Tracking",
  "Security & Compliance",
  "API Integration",
  "Custom Feature Development"
]

const EnterpriseContactSection = () => {
  const [activeTab, setActiveTab] = useState("contact")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    companySize: "",
    industry: "",
    interests: [] as string[],
    message: ""
  })
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
      
      return {
        ...prev,
        interests: newInterests
      }
    })
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    
    // For demo purposes, just show the success message
    setFormSubmitted(true)
    
    // In a real implementation, you'd reset the form only after successful submission
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        companySize: "",
        industry: "",
        interests: [],
        message: ""
      })
    }, 5000)
  }
  
  return (
    <section id="contact" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
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
              <Building size={14} />
              <span>Enterprise Inquiries</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            Our enterprise team is ready to help you transform your organization with AI
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="contact" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-[400px] grid-cols-2">
                <TabsTrigger value="contact" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <MessageSquare size={14} className="mr-2" />
                  Contact Us
                </TabsTrigger>
                <TabsTrigger value="demo" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Calendar size={14} className="mr-2" />
                  Schedule Demo
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="contact" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="lg:col-span-2"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-border bg-secondary/5">
                      <h3 className="font-semibold flex items-center">
                        <MessageSquare className="mr-2 text-primary" size={18} />
                        Enterprise Inquiry Form
                      </h3>
                      <p className="text-sm text-foreground/70">
                        Fill out the form below and our enterprise team will get back to you within 24 hours
                      </p>
                    </div>
                    
                    <div className="p-6">
                      {formSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center"
                        >
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 mb-4">
                            <CheckCircle className="text-green-500" size={24} />
                          </div>
                          <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                          <p className="text-foreground/70">
                            Your inquiry has been submitted successfully. Our enterprise team will contact you shortly.
                          </p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-foreground/70 mb-2">
                                First Name <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                                placeholder="John"
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-foreground/70 mb-2">
                                Last Name <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                                placeholder="Smith"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                                Business Email <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                                placeholder="john.smith@company.com"
                              />
                            </div>
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-foreground/70 mb-2">
                                Phone Number
                              </label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full"
                                placeholder="+1 (555) 123-4567"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="company" className="block text-sm font-medium text-foreground/70 mb-2">
                                Company Name <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                                placeholder="Acme Corporation"
                              />
                            </div>
                            <div>
                              <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground/70 mb-2">
                                Job Title <span className="text-red-500">*</span>
                              </label>
                              <Input
                                id="jobTitle"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                                placeholder="Director of AI Strategy"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="companySize" className="block text-sm font-medium text-foreground/70 mb-2">
                                Company Size <span className="text-red-500">*</span>
                              </label>
                              <select
                                id="companySize"
                                name="companySize"
                                value={formData.companySize}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 rounded-md border border-input bg-transparent text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                              >
                                <option value="" disabled>Select company size</option>
                                {companySize.map((size) => (
                                  <option key={size} value={size}>{size}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label htmlFor="industry" className="block text-sm font-medium text-foreground/70 mb-2">
                                Industry <span className="text-red-500">*</span>
                              </label>
                              <select
                                id="industry"
                                name="industry"
                                value={formData.industry}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 rounded-md border border-input bg-transparent text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                              >
                                <option value="" disabled>Select industry</option>
                                {industries.map((industry) => (
                                  <option key={industry} value={industry}>{industry}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          
                          <div>
                            <span className="block text-sm font-medium text-foreground/70 mb-2">
                              What are you interested in? <span className="text-red-500">*</span>
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {interests.map((interest) => (
                                <div key={interest} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id={`interest-${interest}`}
                                    checked={formData.interests.includes(interest)}
                                    onChange={() => handleCheckboxChange(interest)}
                                    className="h-4 w-4 rounded border-border bg-transparent text-primary focus:ring-primary"
                                  />
                                  <label htmlFor={`interest-${interest}`} className="ml-2 text-sm text-foreground/90">
                                    {interest}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                              Additional Information
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              className="w-full"
                              placeholder="Tell us about your specific requirements and goals..."
                              rows={5}
                            />
                          </div>
                          
                          <div className="pt-2">
                            <button
                              type="submit"
                              className="w-full py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                            >
                              <span>Submit Inquiry</span>
                              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-xs text-foreground/50 text-center mt-2">
                              By submitting this form, you agree to our <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                            </p>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* Contact information */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="lg:col-span-1"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
                    <div className="p-6 border-b border-border bg-secondary/5">
                      <h3 className="font-semibold flex items-center">
                        <Phone className="mr-2 text-primary" size={18} />
                        Contact Information
                      </h3>
                    </div>
                    
                    <div className="p-6 space-y-6">
                      <div className="flex flex-col gap-5">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 mt-0.5">
                            <Mail size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium">Email Us</h4>
                            <p className="text-foreground/70 text-sm mb-1">For enterprise inquiries:</p>
                            <a href="mailto:enterprise@jayd.ai" className="text-primary hover:underline">
                              enterprise@jayd.ai
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 mt-0.5">
                            <Phone size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium">Call Us</h4>
                            <p className="text-foreground/70 text-sm mb-1">Enterprise sales team:</p>
                            <a href="tel:+1-800-123-4567" className="text-primary hover:underline">
                              +1-800-123-4567
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-green-500/10 text-green-500 mt-0.5">
                            <Clock size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium">Business Hours</h4>
                            <p className="text-foreground/70 text-sm mb-1">Monday - Friday:</p>
                            <p className="text-foreground/90 text-sm">9:00 AM - 6:00 PM ET</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 mt-0.5">
                            <MapPin size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium">Headquarters</h4>
                            <p className="text-foreground/70 text-sm mb-1">Our main office:</p>
                            <address className="text-foreground/90 text-sm not-italic">
                              123 AI Innovation Center<br />
                              San Francisco, CA 94103<br />
                              United States
                            </address>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 mt-6 border-t border-border">
                        <h4 className="font-medium mb-3">Connect With Us</h4>
                        <div className="flex gap-3">
                          <a 
                            href="https://linkedin.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-foreground"
                            >
                              <path
                                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6 9H2V21H6V9Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a 
                            href="https://twitter.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                            aria-label="Twitter"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-foreground"
                            >
                              <path
                                d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.83767 18.4573 3.34774 17.567 3.12397C16.6767 2.90021 15.7395 2.9515 14.8821 3.2703C14.0247 3.5891 13.2884 4.15961 12.773 4.90137C12.2575 5.64314 11.9877 6.52208 12 7.42029V8.42029C10.2426 8.47876 8.50127 8.0929 6.93101 7.29927C5.36074 6.50565 4.01032 5.32812 3 3.88029C3 3.88029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.38029C20.9991 7.10638 20.9723 6.83315 20.92 6.56029C21.9406 5.57499 22.6608 4.35233 23 3.00029Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a 
                            href="https://facebook.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                            aria-label="Facebook"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-foreground"
                            >
                              <path
                                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
            
            <TabsContent value="demo" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 pointer-events-none">
                  <PulseBeams beams={12} />
                </div>
                
                {/* Calendly embed mockup */}
                <div className="p-6 border-b border-border bg-secondary/5 relative z-10">
                  <h3 className="font-semibold flex items-center">
                    <Calendar className="mr-2 text-primary" size={18} />
                    Schedule a Personalized Demo
                  </h3>
                  <p className="text-sm text-foreground/70">
                    Choose a time that works for you to see how Jaydai can transform your organization
                  </p>
                </div>
                
                <div className="p-6 relative z-10">
                  <div className="aspect-video max-w-4xl mx-auto flex items-center justify-center">
                    {/* This would be a real calendar integration in production */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Calendar className="text-primary" size={24} />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Schedule Your Demo</h4>
                      <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                        Select a convenient time for a personalized demo with our enterprise team. We'll show you how Jaydai can be customized for your specific needs.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors gap-2"
                      >
                        <span>View Available Times</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Global presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-center mb-8">Global Enterprise Support</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 mb-4">
                  <Globe size={24} className="text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold">Americas</h4>
                <p className="text-foreground/70 mt-2 text-sm">
                  San Francisco (HQ)<br />
                  New York<br />
                  Toronto
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500/10 mb-4">
                  <Globe size={24} className="text-purple-500" />
                </div>
                <h4 className="text-lg font-semibold">EMEA</h4>
                <p className="text-foreground/70 mt-2 text-sm">
                  London<br />
                  Berlin<br />
                  Paris
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/10 mb-4">
                  <Globe size={24} className="text-green-500" />
                </div>
                <h4 className="text-lg font-semibold">APAC</h4>
                <p className="text-foreground/70 mt-2 text-sm">
                  Singapore<br />
                  Tokyo<br />
                  Sydney
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseContactSection