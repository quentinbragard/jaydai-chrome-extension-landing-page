"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  Brain, 
  Code, 
  LineChart, 
  Sparkles, 
  PenTool, 
  BarChart3, 
  PieChart,
  Zap,
  ClipboardCheck,
  TrendingUp,
  Clock,
  Building,
  BookOpen,
  ArrowUpRight,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

interface ValueCardProps {
  icon: React.ReactNode
  iconColor: string
  title: string
  description: string
  stats: { value: string; label: string }[]
  index: number
}

const ValueCard = ({ icon, iconColor, title, description, stats, index }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col"
    >
      <div className="p-6 flex flex-col h-full">
        <div className={`w-12 h-12 rounded-xl ${iconColor} flex items-center justify-center mb-5`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mt-auto">
          {stats.map((stat, i) => (
            <div key={i} className="bg-secondary/10 rounded-lg p-3">
              <div className="text-xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-3 px-6 border-t border-border flex items-center justify-between bg-secondary/5">
        <Link 
          href="#contact" 
          className="text-sm text-primary hover:underline flex items-center"
        >
          Learn more <ChevronRight size={14} className="ml-1" />
        </Link>
        <div className="text-xs text-foreground/60 bg-secondary/20 px-2 py-0.5 rounded-full">Enterprise Ready</div>
      </div>
    </motion.div>
  )
}

const valueProps = [
  {
    icon: <Users size={24} className="text-blue-500" />,
    iconColor: "bg-blue-500/10",
    title: "Team Collaboration",
    description: "Share a customized prompt bank with your entire team for specific business use cases. Standardize AI interactions across your organization.",
    stats: [
      { value: "87%", label: "Increase in team efficiency" },
      { value: "100+", label: "Concurrent users" }
    ]
  },
  {
    icon: <PenTool size={24} className="text-purple-500" />,
    iconColor: "bg-purple-500/10",
    title: "Custom-Tailored Prompts",
    description: "Expert crafted prompts designed specifically for your business needs and industry requirements.",
    stats: [
      { value: "250+", label: "Industry-specific templates" },
      { value: "48hr", label: "Custom prompt delivery" }
    ]
  },
  {
    icon: <LineChart size={24} className="text-green-500" />,
    iconColor: "bg-green-500/10",
    title: "Enterprise Analytics",
    description: "Measure the impact of AI across your organization with detailed analytics on usage, performance, and ROI.",
    stats: [
      { value: "356h", label: "Average time saved monthly" },
      { value: "287%", label: "Average ROI" }
    ]
  },
  {
    icon: <BookOpen size={24} className="text-amber-500" />,
    iconColor: "bg-amber-500/10",
    title: "Training & Coaching",
    description: "Comprehensive training programs to help your teams master AI prompt engineering and maximize productivity.",
    stats: [
      { value: "1,200+", label: "Trained professionals" },
      { value: "92%", label: "User satisfaction" }
    ]
  }
]

const EnterpriseValuePropsSection = () => {
  return (
    <section id="value-props" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
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
              <Building size={14} />
              <span>For Organizations of All Sizes</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Enterprise-grade AI solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            Transform how your organization leverages AI with powerful tools designed for teams and businesses
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueProps.map((prop, index) => (
            <ValueCard
              key={index}
              icon={prop.icon}
              iconColor={prop.iconColor}
              title={prop.title}
              description={prop.description}
              stats={prop.stats}
              index={index}
            />
          ))}
        </div>
        
        {/* Enterprise metrics band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start">
              <div className="p-3 rounded-xl bg-blue-500/10 mr-4">
                <TrendingUp size={24} className="text-blue-500" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">42%</div>
                <div className="text-foreground/60">Average productivity increase</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 rounded-xl bg-purple-500/10 mr-4">
                <Clock size={24} className="text-purple-500" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">68%</div>
                <div className="text-foreground/60">Time saved on prompting</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 rounded-xl bg-green-500/10 mr-4">
                <Sparkles size={24} className="text-green-500" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">3.8x</div>
                <div className="text-foreground/60">AI response quality</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 rounded-xl bg-amber-500/10 mr-4">
                <Zap size={24} className="text-amber-500" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">91%</div>
                <div className="text-foreground/60">Team adoption rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseValuePropsSection