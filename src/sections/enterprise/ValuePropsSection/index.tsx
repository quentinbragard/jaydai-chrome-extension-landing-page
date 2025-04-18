"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { 
  Users, 
  Brain, 
  LineChart, 
  Sparkles, 
  PenTool, 
  TrendingUp,
  Clock,
  Building,
  BookOpen,
  ChevronRight,
  Zap
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
  const t = useTranslations('enterpriseSolutions')
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
          {t('learnMore')} <ChevronRight size={14} className="ml-1" />
        </Link>
        <div className="text-xs text-foreground/60 bg-secondary/20 px-2 py-0.5 rounded-full">
          {t('valuePropsSection.enterpriseReady')}
        </div>
      </div>
    </motion.div>
  )
}

const EnterpriseValuePropsSection = () => {
  const t = useTranslations('enterpriseSolutions')
  
  // Icons for cards
  const cardIcons = [
    <Users size={24} className="text-blue-500" key="users" />,
    <PenTool size={24} className="text-purple-500" key="pentool" />,
    <LineChart size={24} className="text-green-500" key="linechart" />,
    <BookOpen size={24} className="text-amber-500" key="bookopen" />
  ]
  
  // Icon colors for cards
  const iconColors = [
    "bg-blue-500/10",
    "bg-purple-500/10",
    "bg-green-500/10",
    "bg-amber-500/10"
  ]
  
  // Metrics section icons mapping
  const getMetricIcon = (iconName: string) => {
    switch(iconName) {
      case 'TrendingUp':
        return <TrendingUp size={24} className="text-blue-500" />;
      case 'Clock':
        return <Clock size={24} className="text-purple-500" />;
      case 'Sparkles':
        return <Sparkles size={24} className="text-green-500" />;
      case 'Zap':
        return <Zap size={24} className="text-amber-500" />;
      default:
        return <TrendingUp size={24} className="text-blue-500" />;
    }
  }
  
  // Metrics section background colors mapping
  const getMetricBgColor = (iconName: string) => {
    switch(iconName) {
      case 'TrendingUp':
        return "bg-blue-500/10";
      case 'Clock':
        return "bg-purple-500/10";
      case 'Sparkles':
        return "bg-green-500/10";
      case 'Zap':
        return "bg-amber-500/10";
      default:
        return "bg-blue-500/10";
    }
  }
  
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
              <span>{t('valuePropsSection.badge')}</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {t('valuePropsSection.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            {t('valuePropsSection.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.raw('valuePropsSection.cards').map((card: any, index: number) => (
            <ValueCard
              key={index}
              icon={cardIcons[index] || <Users size={24} className="text-blue-500" />}
              iconColor={iconColors[index] || "bg-blue-500/10"}
              title={card.title}
              description={card.description}
              stats={card.stats}
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
            {t.raw('valuePropsSection.metrics').map((metric: any, index: number) => (
              <div key={index} className="flex items-start">
                <div className={`p-3 rounded-xl ${getMetricBgColor(metric.icon)} mr-4`}>
                  {getMetricIcon(metric.icon)}
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-foreground/60">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseValuePropsSection