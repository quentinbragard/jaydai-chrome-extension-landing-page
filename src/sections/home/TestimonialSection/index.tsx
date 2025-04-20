"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Star, Quote, ArrowUpRight } from "lucide-react"
import { trackEvent } from '@/lib/analytics'

interface Testimonial {
  id: number
  name: string
  role?: string
  company?: string
  image?: string
  content: string
  rating: number
  link?: string
}

const TestimonialsSection = () => {
  const t = useTranslations('testimonials')

  const testimonials = t.raw("users")

  return (
    <section id="testimonials" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={`testimonial-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {/* Avatar container with explicit styling */}
                <div 
                  className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
                  style={{ 
                    backgroundColor: "rgba(100, 100, 150, 0.15)" 
                  }}
                >
                  {/* Placeholder for testimonial images */}
                  <Quote 
                    size={20} 
                    style={{ color: "rgba(99, 102, 241, 0.7)" }} // Explicit color for consistency
                  />
                </div>
                
                <div className="ml-4">
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  {testimonial.link && (
                    <a 
                      href={testimonial.link} 
                      onClick={() => {
                        trackEvent('Testimonial Clicked', {
                          button_name: testimonial.name,
                          page_location: window.location.pathname,
                          source: 'testimonialsSection',
                          timestamp: new Date().toISOString()
                        })
                      }}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm flex items-center gap-1"
                      style={{ color: "rgba(99, 102, 241, 0.7)" }} // Explicit color
                    >
                      {t("viewOnGoogle")}
                      <ArrowUpRight size={16} className="inline-block" />
                    </a>
                  )}
                </div>
                
                <div className="ml-auto flex">
                  {/* Stars with explicit coloring */}
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      style={{ 
                        color: "rgb(99, 102, 241)", 
                        fill: "rgb(99, 102, 241)" 
                      }} 
                    />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      style={{ color: "rgba(99, 102, 241, 0.3)" }} 
                    />
                  ))}
                </div>
              </div>
              
              {/* Testimonial quote with improved spacing and positioning */}
              <blockquote 
                className="relative" 
                style={{ 
                  fontStyle: "italic",
                  color: "rgba(55, 65, 81, 0.8)" 
                }}
              >
                {/* Quote icon with explicit positioning */}
                <div 
                  style={{ 
                    position: "absolute", 
                    top: "-10px", 
                    left: "-5px", 
                    color: "rgba(99, 102, 241, 0.2)" 
                  }}
                >
                </div>
                
                {/* Testimonial text with increased padding */}
                <p style={{ paddingLeft: "35px", position: "relative", zIndex: 10 }}>
                  {testimonial.content}
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          
          <a
            href={t('cta.link')}
            onClick={() => {
              trackEvent('Button Clicked', {
                button_name: 'testimonialsSectionCta',
                page_location: window.location.pathname,
                source: 'testimonialsSection',
                timestamp: new Date().toISOString()
              })
            }}
            target="_blank"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            style={{ 
              backgroundColor: "rgb(99, 102, 241)", 
              color: "white" 
            }} // Explicit styling for button
          >
            {t('cta.buttonText')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection