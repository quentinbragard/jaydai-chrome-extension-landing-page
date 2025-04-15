"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Play } from "lucide-react"

const HeroSection = ({ openVideoDialog }: { openVideoDialog: () => void }) => {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[100px] opacity-60" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[100px] opacity-50" />
      </div>
      
      {/* Animated dots grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse-glow"></span>
            Maximize your AI potential with Jaydai
          </motion.div>
          
          {/* Main heading with animated typing effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl"
          >
            Your Smart AI Assistant for{" "}
            <span className="text-primary relative">
              ChatGPT
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 rounded-full"></span>
            </span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-foreground/70 max-w-2xl"
          >
            Transform how you use ChatGPT with our library of expert prompts, custom templates, and detailed analytics.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="https://chrome.google.com/webstore"
              target="_blank"
              className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Download Extension
            </Link>
            <button
              onClick={openVideoDialog}
              className="px-8 py-3 rounded-md bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors font-medium inline-flex items-center"
            >
              <Play size={18} className="mr-2" />
              Watch Demo
            </button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl"
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">+50%</div>
              <div className="text-foreground/70 mt-1">More effective responses</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">70%</div>
              <div className="text-foreground/70 mt-1">Time saved writing prompts</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-foreground/70 mt-1">Usage statistics control</div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements animation */}
        <div className="absolute top-1/4 left-10 hidden lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-16 h-16 rounded-full bg-primary/20 animate-float animation-delay-200"
          />
        </div>
        <div className="absolute bottom-1/4 right-10 hidden lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="w-20 h-20 rounded-full bg-primary/20 animate-float animation-delay-400"
          />
        </div>
        <div className="absolute top-1/3 right-1/4 hidden lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="w-12 h-12 rounded-full bg-primary/20 animate-float animation-delay-600"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
