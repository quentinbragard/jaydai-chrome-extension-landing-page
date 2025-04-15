"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Zap, 
  PieChart,
  Calendar,
  Lightbulb,
  Tag,
  BarChart2,
  BadgeCheck
} from "lucide-react"

const AnalyticsDashboardSection = () => {
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

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
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
                analytics.jaydai.app
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6">
              {/* Dashboard header */}
              <div className="flex flex-wrap justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground flex items-center">
                    <BarChart3 className="mr-2 text-primary" size={24} />
                    AI Usage Dashboard
                  </h3>
                  <p className="text-foreground/70">Track your productivity gains and usage patterns</p>
                </div>
                
                <div className="flex items-center mt-4 sm:mt-0">
                  <div className="bg-secondary/20 rounded-md px-3 py-1.5 text-sm font-medium flex items-center">
                    <Calendar size={14} className="mr-1.5" />
                    Last 30 days
                  </div>
                  <div className="bg-primary/10 text-primary rounded-md px-3 py-1.5 text-sm font-medium ml-2 flex items-center">
                    <BadgeCheck size={14} className="mr-1.5" />
                    Premium
                  </div>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-secondary/5 border border-border rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-foreground/70 text-sm">Total Prompts</p>
                      <h4 className="text-2xl font-bold mt-1 text-foreground">285</h4>
                    </div>
                    <div className="bg-primary/10 rounded-md p-2">
                      <Lightbulb className="text-primary" size={18} />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-green-500 text-sm">
                    <TrendingUp size={14} className="mr-1" />
                    <span>+24% vs previous period</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-secondary/5 border border-border rounded-lg p-4"
                >
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
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-secondary/5 border border-border rounded-lg p-4"
                >
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
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-secondary/5 border border-border rounded-lg p-4"
                >
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
                </motion.div>
              </div>
              
              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Usage chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-card border border-border rounded-lg p-5 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-semibold flex items-center">
                      <BarChart2 size={18} className="mr-2 text-primary" />
                      Prompt Usage Over Time
                    </h5>
                    <div className="text-xs text-foreground/70 bg-secondary/20 px-2 py-1 rounded">Last 30 days</div>
                  </div>
                  
                  {/* Chart visualization */}
                  <div className="h-48 w-full relative">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-40">
                      {/* Chart columns - animated with varying heights */}
                      {Array.from({ length: 14 }).map((_, i) => {
                        // Generate random but consistent heights
                        const height = 25 + (Math.sin(i * 0.8) + 1) * 35 + Math.cos(i * 0.3) * 15
                        return (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 1, delay: 0.03 * i + 0.6, ease: "easeOut" }}
                            className={`w-5 rounded-t ${i % 4 === 0 ? 'bg-primary' : 'bg-primary/40'}`}
                          />
                        )
                      })}
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-0 right-0 pt-1 border-t border-border flex items-center justify-between text-[10px] text-foreground/50">
                      <span>Apr 1</span>
                      <span>Apr 8</span>
                      <span>Apr 15</span>
                      <span>Apr 22</span>
                      <span>Apr 29</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Category breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-card border border-border rounded-lg p-5 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-semibold flex items-center">
                      <PieChart size={18} className="mr-2 text-primary" />
                      Prompt Categories
                    </h5>
                    <div className="text-xs text-foreground/70 bg-secondary/20 px-2 py-1 rounded">By usage</div>
                  </div>
                  
                  {/* Donut chart visualization */}
                  <div className="flex">
                    <div className="relative w-40 h-40 mx-auto">
                      <svg width="160" height="160" viewBox="0 0 160 160">
                        <circle 
                          cx="80" 
                          cy="80" 
                          r="60" 
                          fill="none" 
                          stroke="#6366f1" 
                          strokeWidth="20" 
                          strokeDasharray="377 377" 
                          strokeDashoffset="0"
                          transform="rotate(-90 80 80)"
                        >
                          <motion.animate 
                            attributeName="stroke-dashoffset" 
                            from="377" 
                            to="159" 
                            dur="1s" 
                            fill="freeze" 
                            begin="0.7s"
                          />
                        </circle>
                        <circle 
                          cx="80" 
                          cy="80" 
                          r="60" 
                          fill="none" 
                          stroke="#8b5cf6" 
                          strokeWidth="20" 
                          strokeDasharray="377 377" 
                          strokeDashoffset="159"
                          transform="rotate(-90 80 80)"
                        >
                          <motion.animate 
                            attributeName="stroke-dashoffset" 
                            from="377" 
                            to="226" 
                            dur="1s" 
                            fill="freeze" 
                            begin="0.7s"
                          />
                        </circle>
                        <circle 
                          cx="80" 
                          cy="80" 
                          r="60" 
                          fill="none" 
                          stroke="#ec4899" 
                          strokeWidth="20" 
                          strokeDasharray="377 377" 
                          strokeDashoffset="226"
                          transform="rotate(-90 80 80)"
                        >
                          <motion.animate 
                            attributeName="stroke-dashoffset" 
                            from="377" 
                            to="301" 
                            dur="1s" 
                            fill="freeze" 
                            begin="0.7s"
                          />
                        </circle>
                        <circle 
                          cx="80" 
                          cy="80" 
                          r="60" 
                          fill="none" 
                          stroke="#10b981" 
                          strokeWidth="20" 
                          strokeDasharray="377 377" 
                          strokeDashoffset="301"
                          transform="rotate(-90 80 80)"
                        >
                          <motion.animate 
                            attributeName="stroke-dashoffset" 
                            from="377" 
                            to="358" 
                            dur="1s" 
                            fill="freeze" 
                            begin="0.7s"
                          />
                        </circle>
                        <circle 
                          cx="80" 
                          cy="80" 
                          r="50" 
                          fill="hsl(var(--card))" 
                        />
                      </svg>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-2 ml-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                        <span className="text-sm">Content Creation (42%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-sm">Development (24%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
                        <span className="text-sm">Business (18%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                        <span className="text-sm">Other (5%)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Popular templates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-card border border-border rounded-lg p-5 shadow-sm"
              >
                <div className="flex justify-between items-center mb-4">
                  <h5 className="font-semibold">Your Most Used Templates</h5>
                  <div className="text-xs text-primary underline cursor-pointer">View all</div>
                </div>
                
                <div className="divide-y divide-border">
                  {[
                    { name: "Content Outline Generator", uses: 42, category: "Content" },
                    { name: "Code Explanation Assistant", uses: 36, category: "Development" },
                    { name: "Meeting Summary Creator", uses: 29, category: "Business" },
                    { name: "SEO Keyword Researcher", uses: 18, category: "Marketing" },
                  ].map((template, i) => (
                    <div key={i} className="py-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs ${
                          i === 0 ? "bg-amber-500/10 text-amber-500" :
                          i === 1 ? "bg-blue-500/10 text-blue-500" :
                          i === 2 ? "bg-purple-500/10 text-purple-500" :
                          "bg-green-500/10 text-green-500"
                        }`}>
                          {i + 1}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">{template.name}</div>
                          <div className="text-xs text-foreground/70">{template.category}</div>
                        </div>
                      </div>
                      <div className="text-sm text-foreground/70">{template.uses} uses</div>
                    </div>
                  ))}
                </div>
              </motion.div>
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
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Gain valuable insights into your AI usage and measure the productivity 
            improvements across your team with our detailed analytics.
          </p>
          <a
            href="#pricing"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Explore Premium Features
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default AnalyticsDashboardSection