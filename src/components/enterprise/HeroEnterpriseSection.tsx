"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Building, 
  Users, 
  LineChart, 
  ChevronRight, 
  ArrowRight, 
  Play,
  BriefcaseBusiness,
  BarChart4,
  PenTool,
  Zap
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PulseBeams } from "@/components/enterprise/PulseBeams"

const HeroEnterpriseSection = () => {
  const [videoDialogOpen, setVideoDialogOpen] = React.useState(false)
  
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)]"></div>
      <div className="absolute -top-[40%] -left-[10%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px] opacity-60 animate-pulse" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column: Text content */}
          <div className="w-full lg:w-1/2 text-left md:max-w-2xl md:mx-auto lg:mx-0 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-8"
            >
              <div className="relative flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Enterprise AI Solutions</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              Transform Your <span className="text-primary relative inline-block">
                Organization
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/50 rounded-full"></div>
              </span> with Enterprise AI
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-foreground/70"
            >
              Empower your teams with expert-crafted AI prompts, custom templates, and analytics designed for enterprise-scale deployment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-start sm:flex-row sm:items-center gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 group"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setVideoDialogOpen(true)}
                className="px-8 py-3 rounded-md border border-border bg-background/50 backdrop-blur-sm text-foreground hover:bg-card transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Play size={18} className="text-primary" />
                <span>Watch Success Stories</span>
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border/40"
            >
              <div className="text-sm text-foreground/50 mb-4">Trusted by industry leaders:</div>
              <div className="flex flex-wrap gap-6 items-center">
                {/* Company logos */}
                <div className="w-24 h-8 bg-foreground/5 rounded-md flex items-center justify-center">
                  <div className="text-foreground/70 font-semibold">Acme Inc</div>
                </div>
                <div className="w-24 h-8 bg-foreground/5 rounded-md flex items-center justify-center">
                  <div className="text-foreground/70 font-semibold">Globex</div>
                </div>
                <div className="w-24 h-8 bg-foreground/5 rounded-md flex items-center justify-center">
                  <div className="text-foreground/70 font-semibold">TechCorp</div>
                </div>
                <div className="w-24 h-8 bg-foreground/5 rounded-md flex items-center justify-center">
                  <div className="text-foreground/70 font-semibold">Initech</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right column: Feature tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative p-1 bg-gradient-to-br from-primary/20 via-primary/5 to-background rounded-2xl border border-border/50 shadow-2xl">
              <div className="absolute inset-0 pointer-events-none">
                <PulseBeams />
              </div>
              
              <Tabs defaultValue="teams" className="w-full">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/40">
                  <div className="text-foreground/70 text-sm font-medium">Enterprise Solutions</div>
                  <TabsList className="bg-background/50 backdrop-blur-sm border border-border/60">
                    <TabsTrigger value="teams" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Users size={14} className="mr-1" /> Teams
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <BarChart4 size={14} className="mr-1" /> Analytics
                    </TabsTrigger>
                    <TabsTrigger value="prompts" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <PenTool size={14} className="mr-1" /> Prompts
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="p-4">
                  <TabsContent value="teams" className="mt-0">
                    <div className="space-y-4">
                      <div className="rounded-lg border border-border bg-card overflow-hidden">
                        <div className="p-4 border-b border-border flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <BriefcaseBusiness size={16} className="text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">Enterprise Team Collaboration</div>
                              <div className="text-sm text-foreground/60">Centralized prompt management</div>
                            </div>
                          </div>
                          <div className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                            Active
                          </div>
                        </div>
                        
                        <div className="p-4 space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-500">MB</div>
                            <div className="flex-1 p-2 rounded bg-secondary/20 text-sm">Added new prompt: Financial Analysis Template</div>
                            <div className="text-xs text-foreground/50">2m ago</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-500">KL</div>
                            <div className="flex-1 p-2 rounded bg-secondary/20 text-sm">Updated Marketing Campaign Template</div>
                            <div className="text-xs text-foreground/50">1h ago</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-xs text-amber-500">TJ</div>
                            <div className="flex-1 p-2 rounded bg-secondary/20 text-sm">Shared Customer Service Templates with Sales Team</div>
                            <div className="text-xs text-foreground/50">3h ago</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        <div className="p-4 rounded-lg border border-border bg-card">
                          <div className="text-foreground/70 text-sm">Total Users</div>
                          <div className="mt-1 text-2xl font-bold">248</div>
                          <div className="mt-1 text-xs text-green-500 flex items-center">
                            <ArrowRight size={12} className="rotate-45" />
                            <span>+12% this month</span>
                          </div>
                        </div>
                        <div className="p-4 rounded-lg border border-border bg-card">
                          <div className="text-foreground/70 text-sm">Shared Templates</div>
                          <div className="mt-1 text-2xl font-bold">1,204</div>
                          <div className="mt-1 text-xs text-green-500 flex items-center">
                            <ArrowRight size={12} className="rotate-45" />
                            <span>+85 new templates</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="analytics" className="mt-0">
                    <div className="space-y-4">
                      <div className="rounded-lg border border-border bg-card overflow-hidden">
                        <div className="p-4 border-b border-border">
                          <div className="font-medium flex items-center">
                            <LineChart size={16} className="mr-2 text-primary" />
                            Enterprise Analytics Dashboard
                          </div>
                          <div className="text-sm text-foreground/60">Real-time performance metrics</div>
                        </div>
                        
                        <div className="p-4">
                          <div className="mb-4 flex justify-between items-center">
                            <div className="text-sm font-medium">AI Prompt Usage By Department</div>
                            <div className="text-xs text-foreground/60">Last 30 days</div>
                          </div>
                          
                          {/* Simulated bar chart */}
                          <div className="h-32 flex items-end justify-between gap-2">
                            {Array.from({ length: 5 }).map((_, i) => {
                              const height = [65, 85, 55, 70, 40][i];
                              const department = ["Marketing", "Sales", "Engineering", "HR", "Finance"][i];
                              const bgColor = [
                                "bg-blue-500",
                                "bg-purple-500",
                                "bg-green-500",
                                "bg-amber-500",
                                "bg-red-500"
                              ][i];
                              
                              return (
                                <div key={i} className="flex flex-col items-center flex-1">
                                  <div 
                                    className={`w-full rounded-t ${bgColor} opacity-80`}
                                    style={{ height: `${height}%` }}
                                  ></div>
                                  <div className="text-xs text-foreground/70 mt-2 w-full truncate text-center">
                                    {department}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        <div className="p-3 rounded-lg border border-border bg-card">
                          <div className="flex items-center justify-between">
                            <div className="text-foreground/70 text-xs">Time Saved</div>
                            <Zap size={14} className="text-amber-500" />
                          </div>
                          <div className="mt-1 text-xl font-bold">356 hrs</div>
                        </div>
                        <div className="p-3 rounded-lg border border-border bg-card">
                          <div className="flex items-center justify-between">
                            <div className="text-foreground/70 text-xs">ROI</div>
                            <LineChart size={14} className="text-green-500" />
                          </div>
                          <div className="mt-1 text-xl font-bold">287%</div>
                        </div>
                        <div className="p-3 rounded-lg border border-border bg-card">
                          <div className="flex items-center justify-between">
                            <div className="text-foreground/70 text-xs">Engagement</div>
                            <Users size={14} className="text-blue-500" />
                          </div>
                          <div className="mt-1 text-xl font-bold">92%</div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="prompts" className="mt-0">
                    <div className="space-y-4">
                      <div className="rounded-lg border border-border bg-card overflow-hidden">
                        <div className="p-4 border-b border-border">
                          <div className="font-medium flex items-center">
                            <PenTool size={16} className="mr-2 text-primary" />
                            Enterprise Prompt Library
                          </div>
                          <div className="text-sm text-foreground/60">Customized for your business needs</div>
                        </div>
                        
                        <div className="p-4 space-y-3">
                          <div className="p-3 rounded-lg bg-secondary/10 border border-border">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">Financial Report Generator</div>
                              <div className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                                Finance
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-foreground/70">
                              Automatically creates detailed financial reports with analysis from raw data inputs...
                            </div>
                          </div>
                          
                          <div className="p-3 rounded-lg bg-secondary/10 border border-border">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">Customer Support Template</div>
                              <div className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                                Support
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-foreground/70">
                              Generate personalized, compassionate responses to customer inquiries with...
                            </div>
                          </div>
                          
                          <div className="p-3 rounded-lg bg-secondary/10 border border-border">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">Market Research Assistant</div>
                              <div className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                                Marketing
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-foreground/70">
                              Analyze competitors, identify market trends, and generate actionable insights...
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 rounded-lg border border-border bg-card flex items-center justify-between">
                        <div>
                          <div className="font-medium">Custom Template Creator</div>
                          <div className="text-sm text-foreground/60">Design your own business-specific prompts</div>
                        </div>
                        <button className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                          Create New
                        </button>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Video dialog */}
      {videoDialogOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setVideoDialogOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl bg-card rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Enterprise Success Stories" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setVideoDialogOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              X
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground">Transform Your Organization with Jaydai</h3>
              <p className="mt-2 text-foreground/70">
                See how enterprise companies are maximizing their AI potential with custom prompt libraries, team collaboration, and analytics.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default HeroEnterpriseSection