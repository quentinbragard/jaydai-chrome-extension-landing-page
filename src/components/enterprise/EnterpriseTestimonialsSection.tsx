"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Building,
  MessageSquare,
  ArrowRight,
  Linkedin,
  Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechGrowth Inc.",
    image: "/images/testimonial-1.png", // placeholder image path
    content: "Implementing Jaydai across our engineering teams has revolutionized how we approach AI. The custom prompt templates have standardized our AI interactions, resulting in consistent, high-quality outputs while reducing the learning curve for new team members. The analytics dashboard provides invaluable insights into how AI is impacting our productivity.",
    rating: 5,
    industry: "Technology",
    companySize: "1,000+ employees",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Innovation",
    company: "GlobalFinance Partners",
    image: "/images/testimonial-2.png", // placeholder image path
    content: "As a financial services firm, we needed an AI solution that could be deployed securely across teams while maintaining strict compliance standards. Jaydai's enterprise offering delivered exactly what we needed. The custom prompt templates for financial analysis have saved our analysts countless hours, and the ROI has been remarkable.",
    rating: 5,
    industry: "Financial Services",
    companySize: "5,000+ employees",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Chief Marketing Officer",
    company: "Retail Innovations Group",
    image: "/images/testimonial-3.png", // placeholder image path
    content: "Our marketing team has seen a 300% increase in content production since implementing Jaydai. The ability to create and share custom templates across our global team ensures brand consistency while allowing for localization. The time saved has allowed our creatives to focus on strategy rather than repetitive writing tasks.",
    rating: 5,
    industry: "Retail",
    companySize: "10,000+ employees",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 4,
    name: "David Park",
    role: "Director of Operations",
    company: "HealthTech Solutions",
    image: "/images/testimonial-4.png", // placeholder image path
    content: "Jaydai's enterprise solution has transformed how our healthcare professionals document patient interactions and analyze medical data. The customized prompts for healthcare scenarios ensure accuracy and compliance, while the analytics have helped us quantify the time savings. Our staff can now spend more time with patients instead of documentation.",
    rating: 5,
    industry: "Healthcare",
    companySize: "3,500+ employees",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Jennifer Liu",
    role: "VP of Research",
    company: "InnovateLabs",
    image: "/images/testimonial-5.png", // placeholder image path
    content: "The level of customization Jaydai offers for research and development teams is unmatched. Our scientists can now focus on discovery rather than documentation. The implementation team was exceptional, providing specialized training for our technical staff and developing prompts tailored to our specific research domains.",
    rating: 5,
    industry: "Biotechnology",
    companySize: "800+ employees",
    linkedIn: "https://linkedin.com",
  }
]

// Company logos
const companies = [
  { name: "TechGrowth Inc.", logo: "/images/logo1.png" },
  { name: "GlobalFinance Partners", logo: "/images/logo2.png" },
  { name: "Retail Innovations Group", logo: "/images/logo3.png" },
  { name: "HealthTech Solutions", logo: "/images/logo4.png" },
  { name: "InnovateLabs", logo: "/images/logo5.png" },
  { name: "Acme Corporation", logo: "/images/logo6.png" },
  { name: "Quantum Industries", logo: "/images/logo7.png" },
  { name: "DataStream Networks", logo: "/images/logo8.png" }
]

const EnterpriseTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] pointer-events-none"></div>
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
              <MessageSquare size={14} />
              <span>Client Testimonials</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            What Enterprise Leaders Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            Trusted by organizations across industries to transform their AI workflows
          </motion.p>
        </div>

        {/* Featured testimonial carousel */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Testimonial card */}
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-lg"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Left column - Testimonial author */}
                  <div className="md:w-1/4 flex flex-col items-center md:items-start">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl bg-secondary/20 overflow-hidden mb-4">
                      {testimonials[activeIndex].image ? (
                        <Image
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-foreground/20">
                          {testimonials[activeIndex].name.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center md:text-left mb-4">
                      <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
                      <p className="text-foreground/70">{testimonials[activeIndex].role}</p>
                      <p className="text-primary font-medium">{testimonials[activeIndex].company}</p>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                        <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    
                    <div className="space-y-2 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Building size={14} />
                        <span>{testimonials[activeIndex].industry}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} />
                        <span>{testimonials[activeIndex].companySize}</span>
                      </div>
                    </div>
                    
                    {testimonials[activeIndex].linkedIn && (
                      <a 
                        href={testimonials[activeIndex].linkedIn}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="mt-4 inline-flex items-center gap-1.5 text-primary hover:underline"
                      >
                        <Linkedin size={14} />
                        <span>Connect on LinkedIn</span>
                      </a>
                    )}
                  </div>
                  
                  {/* Right column - Testimonial content */}
                  <div className="md:w-3/4 relative">
                    <Quote size={40} className="absolute top-0 left-0 text-primary/10" />
                    
                    <div className="relative pt-8 pl-8">
                      <p className="text-foreground/90 text-lg leading-relaxed">
                        {testimonials[activeIndex].content}
                      </p>
                      
                      {/* Navigation buttons on medium+ screens */}
                      <div className="hidden md:flex items-center justify-between mt-8">
                        <div className="flex gap-2">
                          <button 
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button 
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
                            aria-label="Next testimonial"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>
                        
                        <div className="text-sm text-foreground/50">
                          {activeIndex + 1} / {testimonials.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile navigation */}
                <div className="flex md:hidden items-center justify-between mt-8">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  
                  <div className="text-sm text-foreground/50">
                    {activeIndex + 1} / {testimonials.length}
                  </div>
                  
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/10 rounded-xl blur-lg"></div>
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
        
        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold">Trusted by leading organizations</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card border border-border rounded-xl h-24 flex items-center justify-center p-4"
              >
                {company.logo ? (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="text-foreground/50 font-medium text-lg">
                    {company.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/20 rounded-xl p-8 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to transform your organization with AI?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join hundreds of enterprise clients who are maximizing their AI potential with Jaydai's custom solutions.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <span>Schedule Enterprise Demo</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseTestimonialsSection