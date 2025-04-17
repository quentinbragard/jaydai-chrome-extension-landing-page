"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { 
  Search, 
  MousePointer, 
  Settings, 
  Monitor, 
  ArrowRight,
  Brain,
  FileText,
  ZoomIn,
  X
} from "lucide-react"

const HowItWorksSection = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeStep, setActiveStep] = useState(1)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")
  const [imageTitle, setImageTitle] = useState("")
  
  // Only access the theme after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Helper function to get correct image path based on theme
  const getThemeAwareImagePath = (basePath) => {
    if (!mounted) return basePath; // Default during SSR
    
    // Insert -dark or -light before the file extension
    const lastDotIndex = basePath.lastIndexOf('.');
    if (lastDotIndex === -1) return basePath;
    
    const prefix = basePath.substring(0, lastDotIndex);
    const extension = basePath.substring(lastDotIndex);
    const themeSuffix = resolvedTheme === "dark" ? "-dark" : "-light";
    
    return `${prefix}${themeSuffix}${extension}`;
  };
  
  // Define steps with base image paths
  const steps = [
    {
      id: 1,
      title: "Install the Extension",
      description: "Add Jaydai to Chrome in just one click from the Chrome Web Store",
      icon: Monitor,
      color: "bg-blue-500/10 text-blue-500",
      image: "/images/step1-install.png"
    },
    {
      id: 2,
      title: "Create your account",
      description: 'Click on "Get Started" and create your account. You can sign up with Google or email.',
      icon: Search,
      color: "bg-purple-500/10 text-purple-500",
      image: "/images/step2-create-account.png"
    },
    {
      id: 3,
      title: "Go to ChatGPT",
      description: "You will see a new button to access Jaydai in the bottom right corner of the ChatGPT interface.",
      icon: Search,
      color: "bg-purple-500/10 text-purple-500",
      image: "/images/step3-navigate.png"
    },
    {
      id: 4,
      title: "Choose Your Prompt",
      description: "Select from our library of expert prompts or use your saved templates",
      icon: FileText,
      color: "bg-amber-500/10 text-amber-500",
      image: "/images/step4-choose.png"
    },
    {
      id: 5,
      title: "Personalize your prompt",
      description: "Replace the variables with your own information to create a personalized prompt",
      icon: FileText,
      color: "bg-amber-500/10 text-amber-500",
      image: "/images/step5-personalize.png"
    },
    {
      id: 6,
      title: "Watch AI Do the Work",
      description: "Get superior results thanks to expertly crafted prompts",
      icon: Brain,
      color: "bg-green-500/10 text-green-500",
      image: "/images/step6-results.png"
    },
    {
      id: 7,
      title: "Save your best prompts",
      description: "When you find a prompt that works, save it for future use",
      icon: FileText,
      color: "bg-amber-500/10 text-amber-500",
      image: "/images/step7-save.png"
    }
  ];
  
  const openImageModal = (baseImageSrc, title) => {
    setModalImage(getThemeAwareImagePath(baseImageSrc));
    setImageTitle(title);
    setIsImageModalOpen(true);
  };
  
  // Get the current step's image path based on theme
  const currentStepImage = activeStep > 0 && activeStep <= steps.length 
    ? getThemeAwareImagePath(steps[activeStep - 1].image)
    : "";
  
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
            Seven simple steps to maximize your AI potential
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
            <div className="relative rounded-xl overflow-hidden border-8 border-card shadow-xl bg-card aspect-video">
              {/* Browser chrome simulation */}
              <div className="absolute top-0 left-0 right-0 bg-secondary/20 h-10 flex items-center px-4 z-10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <div className="mx-auto bg-secondary/30 rounded-md w-1/2 h-6 flex items-center justify-center text-xs text-foreground/50">
                  chat.openai.com
                </div>
              </div>
              
              {/* Step Image - Theme Aware */}
              <AnimatePresence mode="wait">
                {mounted && (
                  <motion.div
                    key={activeStep + (resolvedTheme || "light")} // Re-render on theme change too
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <div className="absolute inset-0 flex items-center justify-center pt-10">
                      <div 
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => openImageModal(steps[activeStep-1].image, steps[activeStep-1].title)}
                      >
                        <Image 
                          src={currentStepImage}
                          alt={steps[activeStep-1].title}
                          fill
                          className="object-contain p-6 pt-8"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="bg-primary/80 rounded-full p-2">
                            <ZoomIn className="text-primary-foreground" size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Loading state - shown before mounting */}
              {!mounted && (
                <div className="absolute inset-0 flex items-center justify-center pt-10">
                  <div className="w-full h-full bg-secondary/10 animate-pulse flex items-center justify-center">
                    <div className="text-secondary/30">Loading...</div>
                  </div>
                </div>
              )}
              
              {/* Custom overlay for specific steps (optional) */}
              <div className="absolute bottom-4 right-4 z-10">
                {activeStep === 6 && (
                  <div className="bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-md">
                    Optimized with Jaydai
                  </div>
                )}
              </div>
            </div>
            
            {/* Mouse cursor animation */}
            <motion.div
              initial={{ x: -50, y: 100, opacity: 0 }}
              animate={{ 
                x: activeStep === 1 ? 0 : activeStep === 2 ? 100 : activeStep === 3 ? 30 : activeStep === 4 ? 50 : activeStep === 5 ? 70 : activeStep === 6 ? 90 : 110,
                y: activeStep === 1 ? 50 : activeStep === 2 ? 70 : activeStep === 3 ? 120 : activeStep === 4 ? 90 : activeStep === 5 ? 120 : activeStep === 6 ? 150 : 180,
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
      
      {/* Image Modal - Theme Aware with Larger Image */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-xl overflow-hidden shadow-2xl max-w-[95vw] w-[2000px] h-[90vh] max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with title */}
              <div className="absolute top-0 left-0 right-0 py-3 px-4 bg-card/90 backdrop-blur-sm border-b border-border z-30 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{imageTitle}</h3>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-primary/90 text-primary-foreground">
                    Step {activeStep}
                  </span>
                </div>
              </div>
              
              {/* Image container */}
              <div className="absolute inset-0 mt-12 overflow-auto flex items-center justify-center bg-black/20">
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <Image
                    src={modalImage}
                    alt={imageTitle}
                    width={2400}
                    height={1600}
                    className="max-w-full max-h-full object-contain"
                    priority
                  />
                </div>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-3 right-4 z-40 bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/90 transition-colors"
                aria-label="Close image viewer"
              >
                <X size={22} />
              </button>
              
              {/* Instruction hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-secondary/80 backdrop-blur-sm text-foreground/90 rounded-full px-4 py-1.5 text-sm flex items-center shadow-lg">
                <span>Click anywhere outside the image to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default HowItWorksSection