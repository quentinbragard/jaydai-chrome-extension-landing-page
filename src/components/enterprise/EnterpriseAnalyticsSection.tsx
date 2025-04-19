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
  BadgeCheck,
  ArrowUpRight,
  Download,
  BarChart4,
  Users,
  FileText,
  Building,
  Layers,
  BookOpen
} from "lucide-react"

const EnterpriseAnalyticsSection = () => {
  return (
    <section id="analytics" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:25px_25px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full opacity-40 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
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
              <BarChart3 size={14} />
              <span>Enterprise Analytics</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Measure Your AI Impact at Scale
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            Comprehensive analytics to track productivity gains and ROI across your entire organization
          </motion.p>
        </div>

        {/* Analytics dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto"
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
                analytics.jaydai.app/enterprise
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6">
              {/* Dashboard header */}
              <div className="flex flex-wrap justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground flex items-center">
                    <Building className="mr-2 text-primary" size={24} />
                    Enterprise Analytics Dashboard
                  </h3>
                  <p className="text-foreground/70">Organization-wide AI insights and performance metrics</p>
                </div>
                
                <div className="flex items-center mt-4 sm:mt-0 gap-2">
                  <div className="bg-secondary/20 rounded-md px-3 py-1.5 text-sm font-medium flex items-center">
                    <Calendar size={14} className="mr-1.5" />
                    Last 30 days
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-primary/10 text-primary rounded-md px-3 py-1.5 text-sm font-medium flex items-center">
                      <Download size={14} className="mr-1.5" />
                      Export
                    </div>
                    <div className="bg-secondary/20 rounded-md px-3 py-1.5 text-sm font-medium flex items-center">
                      <BadgeCheck size={14} className="mr-1.5" />
                      Enterprise
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company-wide summary */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="col-span-4 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold flex items-center">
                        <Building size={18} className="mr-2 text-primary" />
                        Company Performance Summary
                      </h4>
                      <p className="text-foreground/70 text-sm">Overall AI performance metrics across all departments</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/20 text-center">
                      <div className="text-foreground/70 text-xs">Total Value Generated</div>
                      <div className="text-2xl font-bold text-primary">$248,500</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Company-wide metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-foreground/70 text-sm">Active Employees</p>
                      <h4 className="text-2xl font-bold mt-1 text-foreground">2,486</h4>
                    </div>
                    <div className="bg-blue-500/10 rounded-md p-2">
                      <Users className="text-blue-500" size={18} />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-green-500 text-sm">
                    <TrendingUp size={14} className="mr-1" />
                    <span>+14% vs previous period</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-foreground/70 text-sm">Total Prompts</p>
                      <h4 className="text-2xl font-bold mt-1 text-foreground">28,543</h4>
                    </div>
                    <div className="bg-purple-500/10 rounded-md p-2">
                      <Lightbulb className="text-purple-500" size={18} />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-green-500 text-sm">
                    <TrendingUp size={14} className="mr-1" />
                    <span>+32% vs previous period</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-foreground/70 text-sm">Time Saved</p>
                      <h4 className="text-2xl font-bold mt-1 text-foreground">6,428 hrs</h4>
                    </div>
                    <div className="bg-green-500/10 rounded-md p-2">
                      <Clock className="text-green-500" size={18} />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-green-500 text-sm">
                    <TrendingUp size={14} className="mr-1" />
                    <span>158.2 hrs per day</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-foreground/70 text-sm">Templates Created</p>
                      <h4 className="text-2xl font-bold mt-1 text-foreground">3,247</h4>
                    </div>
                    <div className="bg-amber-500/10 rounded-md p-2">
                      <FileText className="text-amber-500" size={18} />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-green-500 text-sm">
                    <TrendingUp size={14} className="mr-1" />
                    <span>246 new this month</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Analytics panels */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Department distribution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-card border border-border rounded-lg p-5 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-semibold flex items-center">
                      <Layers size={18} className="mr-2 text-primary" />
                      Usage By Department
                    </h5>
                    <div className="text-xs text-foreground/70 bg-secondary/20 px-2 py-1 rounded">Last 30 days</div>
                  </div>
                  
                  {/* Chart visualization */}
                  <div className="h-64 relative">
                    <div className="flex items-center h-full">
                      <div className="w-1/2 flex justify-center">
                        {/* SVG donut chart */}
                        <svg width="150" height="150" viewBox="0 0 150 150">
                          <circle cx="75" cy="75" r="60" fill="none" stroke="#e9e9e9" strokeWidth="20" />
                          <motion.circle 
                            initial={{ strokeDasharray: "0 375", strokeDashoffset: 0 }}
                            whileInView={{ strokeDasharray: "140 375", strokeDashoffset: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.7 }}
                            cx="75" cy="75" r="60" fill="none" stroke="#6366f1" strokeWidth="20" 
                            strokeDasharray="140 375" strokeDashoffset="0" 
                            transform="rotate(-90 75 75)"
                          />
                          <motion.circle 
                            initial={{ strokeDasharray: "0 375", strokeDashoffset: -140 }}
                            whileInView={{ strokeDasharray: "94 375", strokeDashoffset: -140 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.8 }}
                            cx="75" cy="75" r="60" fill="none" stroke="#8b5cf6" strokeWidth="20" 
                            strokeDasharray="94 375" strokeDashoffset="-140" 
                            transform="rotate(-90 75 75)"
                          />
                          <motion.circle 
                            initial={{ strokeDasharray: "0 375", strokeDashoffset: -234 }}
                            whileInView={{ strokeDasharray: "75 375", strokeDashoffset: -234 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.9 }}
                            cx="75" cy="75" r="60" fill="none" stroke="#10b981" strokeWidth="20" 
                            strokeDasharray="75 375" strokeDashoffset="-234" 
                            transform="rotate(-90 75 75)"
                          />
                          <motion.circle 
                            initial={{ strokeDasharray: "0 375", strokeDashoffset: -309 }}
                            whileInView={{ strokeDasharray: "38 375", strokeDashoffset: -309 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                            cx="75" cy="75" r="60" fill="none" stroke="#f59e0b" strokeWidth="20" 
                            strokeDasharray="38 375" strokeDashoffset="-309" 
                            transform="rotate(-90 75 75)"
                          />
                          <motion.circle 
                            initial={{ strokeDasharray: "0 375", strokeDashoffset: -347 }}
                            whileInView={{ strokeDasharray: "28 375", strokeDashoffset: -347 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.1 }}
                            cx="75" cy="75" r="60" fill="none" stroke="#ef4444" strokeWidth="20" 
                            strokeDasharray="28 375" strokeDashoffset="-347" 
                            transform="rotate(-90 75 75)"
                          />
                          <circle cx="75" cy="75" r="40" fill="hsl(var(--card))" />
                        </svg>
                      </div>
                      
                      <div className="w-1/2 space-y-3">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                          <span className="flex-1 text-sm">Marketing</span>
                          <span className="text-sm font-medium">37%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                          <span className="flex-1 text-sm">Engineering</span>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                          <span className="flex-1 text-sm">Sales</span>
                          <span className="text-sm font-medium">20%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                          <span className="flex-1 text-sm">Finance</span>
                          <span className="text-sm font-medium">10%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                          <span className="flex-1 text-sm">HR</span>
                          <span className="text-sm font-medium">8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Time saved trend */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-card border border-border rounded-lg p-5 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-semibold flex items-center">
                      <Clock size={18} className="mr-2 text-primary" />
                      Time Saved Trend
                    </h5>
                    <div className="text-xs text-foreground/70 bg-secondary/20 px-2 py-1 rounded">Last 12 weeks</div>
                  </div>
                  
                  {/* Chart visualization */}
                  <div className="h-64 w-full relative">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-48">
                      {/* Line chart path */}
                      <svg className="absolute bottom-0 left-0 right-0 top-0" viewBox="0 0 100 48" preserveAspectRatio="none">
                        {/* Grid lines */}
                        {[0, 1, 2, 3].map((i) => (
                          <line
                            key={i}
                            x1="0"
                            y1={i * 12}
                            x2="100"
                            y2={i * 12}
                            stroke="hsl(var(--border))"
                            strokeWidth="0.2"
                            strokeDasharray="1,1"
                          />
                        ))}
                        
                        {/* Chart line */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                          d="M0,48 L8.3,44 L16.6,42 L25,38 L33.3,35 L41.6,30 L50,24 L58.3,20 L66.6,15 L75,12 L83.3,8 L91.6,6 L100,4"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                        />
                        
                        {/* Area fill */}
                        <motion.path
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 1.5 }}
                          d="M0,48 L8.3,44 L16.6,42 L25,38 L33.3,35 L41.6,30 L50,24 L58.3,20 L66.6,15 L75,12 L83.3,8 L91.6,6 L100,4 L100,48 Z"
                          fill="url(#gradient)"
                          opacity="0.2"
                        />
                        
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* X-axis labels */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-2 border-t border-border text-xs text-foreground/50 px-2">
                        <span>Week 1</span>
                        <span>Week 4</span>
                        <span>Week 8</span>
                        <span>Week 12</span>
                      </div>
                      
                      {/* Y-axis labels */}
                      <div className="absolute top-0 left-0 bottom-8 flex flex-col justify-between items-start pr-2 text-xs text-foreground/50">
                        <span>1000h</span>
                        <span>750h</span>
                        <span>500h</span>
                        <span>250h</span>
                        <span>0h</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Top templates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-card border border-border rounded-lg p-5 shadow-sm"
              >
                <div className="flex justify-between items-center mb-4">
                  <h5 className="font-semibold flex items-center">
                    <FileText size={18} className="mr-2 text-primary" />
                    Most Used Enterprise Templates
                  </h5>
                  <div className="text-primary text-sm cursor-pointer hover:underline">View all</div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs text-foreground/70 border-b border-border">
                        <th className="pb-2 text-left font-medium">Template</th>
                        <th className="pb-2 text-left font-medium">Department</th>
                        <th className="pb-2 text-left font-medium">Total Uses</th>
                        <th className="pb-2 text-left font-medium">Time Saved</th>
                        <th className="pb-2 text-left font-medium">Efficiency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { 
                          name: "Customer Support Response", 
                          department: "Support", 
                          uses: 2893, 
                          timeSaved: "724h",
                          efficiency: "+82%",
                          departmentColor: "bg-blue-500/10 text-blue-500" 
                        },
                        { 
                          name: "Code Documentation Generator", 
                          department: "Engineering", 
                          uses: 2312, 
                          timeSaved: "578h",
                          efficiency: "+76%",
                          departmentColor: "bg-purple-500/10 text-purple-500" 
                        },
                        { 
                          name: "Marketing Campaign Creator", 
                          department: "Marketing", 
                          uses: 1845, 
                          timeSaved: "461h",
                          efficiency: "+68%",
                          departmentColor: "bg-pink-500/10 text-pink-500" 
                        },
                        { 
                          name: "Financial Report Analysis", 
                          department: "Finance", 
                          uses: 1563, 
                          timeSaved: "391h",
                          efficiency: "+75%",
                          departmentColor: "bg-amber-500/10 text-amber-500" 
                        },
                        { 
                          name: "HR Policy Explainer", 
                          department: "HR", 
                          uses: 1254, 
                          timeSaved: "313h",
                          efficiency: "+64%",
                          departmentColor: "bg-red-500/10 text-red-500" 
                        },
                      ].map((template, i) => (
                        <tr key={i} className="text-sm h-12 hover:bg-secondary/5">
                          <td className="py-3 font-medium">{template.name}</td>
                          <td>
                            <span className={`px-2 py-1 rounded-full text-xs ${template.departmentColor}`}>
                              {template.department}
                            </span>
                          </td>
                          <td>{template.uses.toLocaleString()}</td>
                          <td>{template.timeSaved}</td>
                          <td className="text-green-500">{template.efficiency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
            Gain valuable insights into your organization's AI usage and measure the productivity 
            improvements across departments with our enterprise analytics dashboard.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
          >
            <span>Schedule Analytics Demo</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseAnalyticsSection