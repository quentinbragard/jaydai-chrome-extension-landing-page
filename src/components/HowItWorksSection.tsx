"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Search, 
  MousePointer, 
  Settings, 
  Monitor, 
  ArrowRight,
  Brain,
  FileText
} from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Install the Extension",
    description: "Add Jaydai to Chrome in just one click from the Chrome Web Store",
    icon: Monitor,
    color: "bg-blue-500/10 text-blue-500",
    image: "/images/step1-install.png" // Placeholder image paths
  },
  {
    id: 2,
    title: "Navigate to Any AI Tool",
    description: "Open your favorite AI tool like ChatGPT or Claude",
    icon: Search,
    color: "bg-purple-500/10 text-purple-500",
    image: "/images/step2-navigate.png"
  },
  {
    id: 3,
    title: "Choose Your Prompt",
    description: "Select from our library of expert prompts or use your saved templates",
    icon: FileText,
    color: "bg-amber-500/10 text-amber-500",
    image: "/images/step3-choose.png"
  },
  {
    id: 4,
    title: "Watch AI Do the Work",
    description: "Get superior results thanks to expertly crafted prompts",
    icon: Brain,
    color: "bg-green-500/10 text-green-500",
    image: "/images/step4-results.png"
  }
]

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1)
  
  return (
    <section id="how-it-works" className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-background to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -left-64 -top-64 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute -right-64 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            How Jaydai Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Four simple steps to maximize your AI potential
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Steps navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * step.id }}
                whileHover={{ x: 10 }}
                className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeStep === step.id 
                    ? "border border-primary/20 bg-primary/5 shadow-lg shadow-primary/5" 
                    : "border border-transparent hover:border-primary/10 hover:bg-primary/5"
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className={`${step.color} rounded-full p-3 w-14 h-14 flex items-center justify-center shrink-0`}>
                  <step.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center ${
                      activeStep === step.id ? "bg-primary text-white" : "bg-secondary/50 text-foreground/70"
                    }`}>
                      {step.id}
                    </span>
                    <h3 className={`text-lg font-bold ${activeStep === step.id ? "text-primary" : "text-foreground"}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-foreground/70">{step.description}</p>
                  
                  {activeStep === step.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center mt-3 text-primary font-medium"
                    >
                      <span>See how</span>
                      <ArrowRight size={14} className="ml-1" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Visual preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border-8 border-card shadow-xl bg-card aspect-video flex items-center justify-center">
              {/* Browser chrome simulation */}
              <div className="absolute top-0 left-0 right-0 bg-secondary/20 h-10 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <div className="mx-auto bg-secondary/30 rounded-md w-1/2 h-6 flex items-center justify-center text-xs text-foreground/50">
                  chat.openai.com
                </div>
              </div>
              
              {/* Visualization of current step */}
              <div className="pt-12 px-6 pb-6 w-full">
                {activeStep === 1 && (
                  <div className="flex flex-col items-center text-center">
                    <MousePointer className="text-primary animate-bounce mb-4" size={24} />
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium mb-4">
                      Add to Chrome
                    </div>
                    <p className="text-foreground/70">One-click installation, no configuration needed</p>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-secondary/20 w-full rounded-md py-8 flex flex-col items-center gap-4">
                      <Search className="text-primary" size={24} />
                      <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium">
                        ChatGPT Interface
                      </div>
                      <div className="absolute top-28 right-8 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 animate-pulse">
                        <Settings size={20} className="text-primary" />
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-secondary/10 w-full rounded-md p-4 border border-border">
                      <div className="text-lg font-medium mb-2">Prompt Library</div>
                      <div className="space-y-2">
                        <div className="bg-primary/5 rounded p-2 border border-primary/20 flex items-center">
                          <div className="w-4 h-4 rounded bg-primary/20 mr-2"></div>
                          <span className="text-sm">Data Analysis Template</span>
                        </div>
                        <div className="bg-secondary/5 rounded p-2 border border-secondary/10 flex items-center">
                          <div className="w-4 h-4 rounded bg-secondary/20 mr-2"></div>
                          <span className="text-sm">Marketing Copy Generator</span>
                        </div>
                        <div className="bg-secondary/5 rounded p-2 border border-secondary/10 flex items-center">
                          <div className="w-4 h-4 rounded bg-secondary/20 mr-2"></div>
                          <span className="text-sm">Code Debugger Helper</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 4 && (
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-secondary/5 w-full rounded-md p-4 border border-border">
                      <div className="mb-4 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                          <span className="text-xs text-primary">AI</span>
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium">Assistant</div>
                        </div>
                      </div>
                      <div className="space-y-2 text-left">
                        <div className="h-2 bg-primary/10 rounded w-full"></div>
                        <div className="h-2 bg-primary/10 rounded w-3/4"></div>
                        <div className="h-2 bg-primary/10 rounded w-5/6"></div>
                        <div className="h-2 bg-primary/10 rounded w-2/3"></div>
                        <div className="h-2 bg-primary/10 rounded w-full"></div>
                        <div className="h-2 bg-primary/10 rounded w-4/5"></div>
                      </div>
                      <div className="mt-4 text-xs text-right text-primary font-medium">
                        Optimized with Jaydai
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Mouse cursor animation */}
            <motion.div
              initial={{ x: -50, y: 100, opacity: 0 }}
              animate={{ 
                x: activeStep === 1 ? 0 : activeStep === 2 ? 100 : activeStep === 3 ? 30 : 50,
                y: activeStep === 1 ? 50 : activeStep === 2 ? 70 : activeStep === 3 ? 120 : 90,
                opacity: 1
              }}
              transition={{ duration: 0.5 }}
              className="absolute pointer-events-none"
            >
              <MousePointer size={24} className="text-primary drop-shadow-md" />
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
          >
            <span>Try It Now</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection