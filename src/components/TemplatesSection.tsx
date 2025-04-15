"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const templateCategories = [
  {
    id: 1,
    title: "Business & Marketing",
    description: "Optimize your marketing copy, create business plans, and analyze market trends",
    icon: "💼",
    color: "bg-blue-500/10 border-blue-500/30",
    textColor: "text-blue-500",
    count: 45,
  },
  {
    id: 2,
    title: "Content Creation",
    description: "Generate blog posts, social media content, and creative writing with perfect tone",
    icon: "✍️",
    color: "bg-purple-500/10 border-purple-500/30",
    textColor: "text-purple-500",
    count: 38,
  },
  {
    id: 3,
    title: "Data Analysis",
    description: "Interpret data, create reports, and extract insights from complex information",
    icon: "📊",
    color: "bg-green-500/10 border-green-500/30",
    textColor: "text-green-500",
    count: 29,
  },
  {
    id: 4,
    title: "Programming",
    description: "Debug code, generate functions, and explain complex programming concepts",
    icon: "💻",
    color: "bg-amber-500/10 border-amber-500/30",
    textColor: "text-amber-500",
    count: 42,
  },
  {
    id: 5,
    title: "Education",
    description: "Create lesson plans, study guides, and educational content for any subject",
    icon: "🎓",
    color: "bg-red-500/10 border-red-500/30",
    textColor: "text-red-500",
    count: 31,
  },
  {
    id: 6,
    title: "Research",
    description: "Formulate research questions, analyze literature, and summarize findings",
    icon: "🔍",
    color: "bg-teal-500/10 border-teal-500/30",
    textColor: "text-teal-500",
    count: 27,
  },
  {
    id: 7,
    title: "Personal Development",
    description: "Create habit trackers, goal-setting frameworks, and self-improvement plans",
    icon: "🌱",
    color: "bg-indigo-500/10 border-indigo-500/30",
    textColor: "text-indigo-500",
    count: 24,
  },
  {
    id: 8,
    title: "Creative Projects",
    description: "Generate ideas for art, music, fiction, and other creative endeavors",
    icon: "🎨",
    color: "bg-pink-500/10 border-pink-500/30",
    textColor: "text-pink-500",
    count: 33,
  },
  {
    id: 9,
    title: "Custom Templates",
    description: "Create your own templates tailored to your specific needs and workflows",
    icon: "⚙️",
    color: "bg-primary/10 border-primary/30",
    textColor: "text-primary",
    count: "∞",
  },
]

const TemplatesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="templates" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Prompt Template Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Access hundreds of expert-crafted prompt templates organized by category
          </motion.p>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                style={{ y: y }}
                className={`border ${category.color} rounded-xl p-6 bg-card hover:shadow-md transition-shadow transform hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div className={`${category.textColor} text-sm font-medium px-2 py-1 rounded-full bg-background`}>
                    {typeof category.count === "number" ? `${category.count}+ templates` : `${category.count} templates`}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-foreground/70 mb-4">{category.description}</p>
                <a 
                  href="#" 
                  className={`inline-flex items-center ${category.textColor} hover:underline`}
                >
                  Explore templates <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Tilted background decoration */}
          <div className="absolute -top-10 -left-10 -right-10 -bottom-10 -z-10 bg-primary/5 rounded-3xl -rotate-1 transform"></div>
          <div className="absolute -top-10 -left-10 -right-10 -bottom-10 -z-10 bg-primary/5 rounded-3xl rotate-2 transform"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Can't find what you need? Create your own custom templates or request new ones from our team.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TemplatesSection
