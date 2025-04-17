"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Zap, 
  Tag,
  Calendar,
  BadgeCheck
} from "lucide-react"

const AnalyticsDashboardSection = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Only access the theme after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which dashboard image to display based on theme
  const dashboardImage = mounted && resolvedTheme === "dark" 
    ? "/images/analytics-dashboard-dark.png" 
    : "/images/analytics-dashboard-light.png"

  return (
    <section id="analytics" className="py-20 bg-background/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-50 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full opacity-40 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Measure Your AI Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Comprehensive analytics to track your productivity gains and usage patterns
          </motion.p>
        </div>

        {/* Stats cards row - above dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto"
        >
          <div className="bg-secondary/5 border border-border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-foreground/70 text-sm">Total Prompts</p>
                <h4 className="text-2xl font-bold mt-1 text-foreground">285</h4>
              </div>
              <div className="bg-primary/10 rounded-md p-2">
                <Calendar className="text-primary" size={18} />
              </div>
            </div>
            <div className="flex items-center mt-2 text-green-500 text-sm">
              <TrendingUp size={14} className="mr-1" />
              <span>+24% vs previous period</span>
            </div>
          </div>
          
          <div className="bg-secondary/5 border border-border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-foreground/70 text-sm">Time Saved</p>
                <h4 className="text-2xl font-bold mt-1 text-foreground">26.8 hrs</h4>
              </div>
              <div className="bg-blue-500/10 rounded-md p-2">
                <Clock className="text-blue-500" size={18} />
              </div>
            </div>
            <div className="flex items-center mt-2 text-green-500 text-sm">
              <TrendingUp size={14} className="mr-1" />
              <span>2.4 hrs this week</span>
            </div>
          </div>
          
          <div className="bg-secondary/5 border border-border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-foreground/70 text-sm">Efficiency Gain</p>
                <h4 className="text-2xl font-bold mt-1 text-foreground">58%</h4>
              </div>
              <div className="bg-purple-500/10 rounded-md p-2">
                <Zap className="text-purple-500" size={18} />
              </div>
            </div>
            <div className="flex items-center mt-2 text-green-500 text-sm">
              <TrendingUp size={14} className="mr-1" />
              <span>+12% improvement</span>
            </div>
          </div>
          
          <div className="bg-secondary/5 border border-border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-foreground/70 text-sm">Templates Saved</p>
                <h4 className="text-2xl font-bold mt-1 text-foreground">37</h4>
              </div>
              <div className="bg-amber-500/10 rounded-md p-2">
                <Tag className="text-amber-500" size={18} />
              </div>
            </div>
            <div className="flex items-center mt-2 text-green-500 text-sm">
              <TrendingUp size={14} className="mr-1" />
              <span>5 new this week</span>
            </div>
          </div>
        </motion.div>

        {/* Dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Dashboard container with browser chrome */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
            {/* Browser bar */}
            <div className="bg-secondary/20 px-4 py-3 border-b border-border flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <div className="bg-background/60 rounded-md h-6 w-1/2 flex items-center justify-center text-xs text-foreground/50 mx-auto">
                chat.openai.com
              </div>
              <div className="flex items-center ml-auto">
              </div>
            </div>
            
            {/* Dashboard image */}
            <div className="relative">
              {/* Loading placeholder */}
              {!imageLoaded && (
                <div className="w-full aspect-[16/9] bg-secondary/10 animate-pulse flex items-center justify-center">
                  <BarChart3 className="text-secondary/30" size={48} />
                </div>
              )}
              
              {/* Actual dashboard image */}
              {mounted && (
                <Image 
                  src={dashboardImage}
                  alt="Analytics Dashboard"
                  width={1920}
                  height={1080}
                  className={`w-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              )}
            </div>
          </div>
          
          {/* Decorative elements around the dashboard */}
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/10 rounded-xl blur-lg"></div>
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Gain valuable insights into your AI usage and measure the productivity 
            improvements across your team with our detailed analytics.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AnalyticsDashboardSection