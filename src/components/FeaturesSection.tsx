"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Sparkles, 
  Library, 
  FileText, 
  BarChart3, 
  Zap, 
  GraduationCap
} from "lucide-react"

const features = [
  {
    id: 1,
    title: "Official Prompt Libraries",
    description: "Access curated collections of expert-crafted prompts organized by use case and industry. Our libraries are constantly updated with the latest techniques and best practices.",
    icon: Library,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
    delay: 0.1
  },
  {
    id: 2,
    title: "Company Templates",
    description: "Share a customized prompt bank with your entire team for specific business use cases. Standardize AI interactions across your organization and ensure consistent results.",
    icon: FileText,
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
    delay: 0.2
  },
  {
    id: 3,
    title: "Create Custom Templates",
    description: "Build and save your own prompt templates to save time when working on recurring projects. Organize them by category and access them with a single click.",
    icon: Sparkles,
    color: "bg-amber-500/10",
    iconColor: "text-amber-500",
    delay: 0.3
  },
  {
    id: 4,
    title: "Detailed Analytics",
    description: "Track your AI usage with comprehensive analytics. Monitor time saved, energy footprint, and effectiveness of different prompt types to optimize your workflow.",
    icon: BarChart3,
    color: "bg-green-500/10",
    iconColor: "text-green-500",
    delay: 0.4
  },
  {
    id: 5,
    title: "AI Advancement Updates",
    description: "Stay informed about the latest AI developments and how to leverage them. We continuously update our prompt libraries to incorporate new capabilities and techniques.",
    icon: Zap,
    color: "bg-red-500/10",
    iconColor: "text-red-500",
    delay: 0.5
  },
  {
    id: 6,
    title: "Learning School",
    description: "Access our online learning platform with real-world simulations to master AI prompt engineering. Learn how to craft effective prompts for any situation.",
    icon: GraduationCap,
    color: "bg-teal-500/10",
    iconColor: "text-teal-500",
    delay: 0.6
  }
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Everything you need to maximize your AI potential
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
              }}
              className="relative p-6 rounded-xl border border-border bg-card group"
            >
              {/* Feature icon */}
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`${feature.iconColor}`} size={24} />
              </div>
              
              {/* Feature title */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Feature description */}
              <p className="text-foreground/70">
                {feature.description}
              </p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Experience all these features and more with our free Chrome extension.
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Download Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
