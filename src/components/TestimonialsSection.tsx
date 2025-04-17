"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    image: "/images/testimonial-1.png", // Will create placeholder images later
    content: "Jaydai has completely transformed how our marketing team uses AI. The prompt templates save us hours every week, and the analytics help us understand which approaches work best.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Content Creator",
    company: "Digital Nomad",
    image: "/images/testimonial-2.png",
    content: "As someone who uses ChatGPT daily, Jaydai is a game-changer. The ability to save and organize my custom prompts means I never have to rewrite the same instructions again.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateCorp",
    image: "/images/testimonial-3.png",
    content: "The analytics feature is what sets Jaydai apart. Being able to track our AI usage across the team has helped us optimize our workflows and identify training opportunities.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Park",
    role: "Software Engineer",
    company: "DevStack",
    image: "/images/testimonial-4.png",
    content: "I love how Jaydai keeps me updated with AI advancements. The curated prompt library means I'm always using the most effective techniques without having to research them myself.",
    rating: 5,
  },
]

const TestimonialsSection = () => {
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
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Join thousands of professionals who are maximizing their AI potential with Jaydai
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary/50 flex items-center justify-center">
                  {/* Placeholder for testimonial images */}
                  <Quote size={20} className="text-primary/70" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-primary/30" />
                  ))}
                </div>
              </div>
              <blockquote className="text-foreground/80 italic relative">
                <Quote size={24} className="absolute -top-2 -left-1 text-primary/20" />
                <p className="pl-6">{testimonial.content}</p>
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
            Join thousands of users who have transformed their AI experience with Jaydai.
            Download our Chrome extension today and see the difference for yourself.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Download Extension
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
