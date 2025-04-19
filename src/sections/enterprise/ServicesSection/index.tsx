"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { 
  ClipboardCheck,
  ArrowRight,
  Layers
} from "lucide-react"
import EnterpriseFeatures from './EnterpriseFeatures'
import { EnterpriseImplementationProcess } from './EnterpriseImplementationProcess'

const EnterpriseServicesSection = () => {
  const t = useTranslations('enterpriseServices')
  
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none"></div>
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
              <ClipboardCheck size={14} />
              <span>{t('badge')}</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {t('title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Features Section */}
        <EnterpriseFeatures className="mb-16" />
        
        {/* Implementation Process */}
        <EnterpriseImplementationProcess />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
          >
            <span>{t('cta')}</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseServicesSection