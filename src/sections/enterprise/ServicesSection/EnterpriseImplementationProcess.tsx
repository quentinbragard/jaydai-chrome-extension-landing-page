"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { 
  ClipboardCheck, 
  Settings, 
  Users, 
  Code, 
  BarChart3 
} from "lucide-react"

// SVG background pattern for process steps
const ProcessStepPattern = () => (
  <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-border/50 z-0">
    <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="absolute left-1/2 -translate-x-1/2">
      <path d="M0 0L20 0L10 8L0 0Z" className="fill-border/50" />
    </svg>
  </div>
)

// Process step icon mapping
const getProcessStepIcon = (step: number) => {
  switch(step) {
    case 1:
      return ClipboardCheck;
    case 2:
      return Settings;
    case 3:
      return Users;
    case 4:
      return Code;
    case 5:
      return BarChart3;
    default:
      return ClipboardCheck;
  }
}

const EnterpriseProcessStep = ({ 
  number, 
  title, 
  description, 
  icon: Icon 
}: { 
  number: number; 
  title: string; 
  description: string; 
  icon: React.ElementType;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * number }}
    className="flex flex-col lg:flex-row items-center gap-6 relative z-10"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
      {number}
    </div>
    
    <div className="flex-1 lg:bg-card lg:border lg:border-border lg:rounded-xl lg:p-6 lg:shadow-sm relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon size={18} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-foreground/70">{description}</p>
    </div>
  </motion.div>
)

export const EnterpriseImplementationProcess = () => {
  const t = useTranslations('enterpriseServices')
  
  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {t('process.title')}
        </h2>
        <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
          {t('process.subtitle')}
        </p>
      </motion.div>
      
      <div className="relative max-w-4xl mx-auto">
        <ProcessStepPattern />
        
        <div className="space-y-8 md:space-y-12 relative z-10">
          {t.raw('process.steps').map((step: any, index: number) => {
            const ProcessIcon = getProcessStepIcon(index + 1);
            
            return (
              <EnterpriseProcessStep 
                key={index}
                number={index + 1} 
                title={step.title} 
                description={step.description}
                icon={ProcessIcon}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default EnterpriseImplementationProcess