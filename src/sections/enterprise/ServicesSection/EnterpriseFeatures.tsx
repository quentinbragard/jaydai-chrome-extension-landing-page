"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { 
  Users, 
  FileText, 
  BarChart3, 
  Shield, 
  BookOpen,
  Bookmark,
  ChevronRight,
  Check,
  ArrowRight,
  Layers,
  Brain,
  Code,
  Settings,
  ClipboardCheck,
  CheckCircle,
  Sparkles
} from "lucide-react"
import Image from "next/image"

// Service icon mapping
const getServiceIcon = (id: string) => {
  switch(id) {
    case 'training':
      return Users;
    case 'prompts':
      return Bookmark;
    case 'analytics':
      return BarChart3;
    case 'consulting':
      return Brain;
    case 'governance':
      return Shield;
    default:
      return Users;
  }
}

// Color mapping for services
const getServiceColor = (id: string) => {
  switch(id) {
    case 'training':
      return "bg-blue-500/10 text-blue-500 border-blue-500/30";
    case 'prompts':
      return "bg-purple-500/10 text-purple-500 border-purple-500/30";
    case 'analytics':
      return "bg-green-500/10 text-green-500 border-green-500/30";
    case 'consulting':
      return "bg-amber-500/10 text-amber-500 border-amber-500/30";
    case 'governance':
      return "bg-red-500/10 text-red-500 border-red-500/30";
    default:
      return "bg-blue-500/10 text-blue-500 border-blue-500/30";
  }
}

interface EnterpriseFeaturesProps {
  translationNamespace?: string; // Optional namespace for translations
  compact?: boolean; // Optional flag for compact display in home page
  className?: string; // Optional class name for styling
}

const EnterpriseFeatures: React.FC<EnterpriseFeaturesProps> = ({
  translationNamespace = 'enterpriseServices',
  compact = false,
  className = ""
}) => {
  const t = useTranslations(translationNamespace)
  const services = t.raw('services')
  const [activeService, setActiveService] = useState(services[0].id)
  
  // Get the active service data
  const activeServiceData = services.find((s: any) => s.id === activeService) || services[0]
  const activeServiceColor = getServiceColor(activeServiceData.id)
  const ServiceIcon = getServiceIcon(activeServiceData.id)
  // Image URL and alt text from translations, fallback to default
  const imageUrl = activeServiceData.imageUrl || '/images/coaching-illustration.png'
  const imageAlt = activeServiceData.imageAlt || activeServiceData.title
  
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${className}`}>
      {/* Services nav */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="lg:col-span-4"
      >
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="p-4 border-b border-border bg-secondary/5">
            <h3 className="font-semibold flex items-center">
              <Layers className="mr-2 text-primary" size={18} />
              {t('sidebarTitle')}
            </h3>
          </div>
          
          <div className="divide-y divide-border">
            {services.map((service: any) => {
              const ServiceIcon = getServiceIcon(service.id);
              const serviceColor = getServiceColor(service.id);
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4 flex items-start gap-3 transition-colors ${
                    activeService === service.id ? "bg-primary/5" : "hover:bg-secondary/5"
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${serviceColor}`}>
                    <ServiceIcon size={18} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${activeService === service.id ? "text-primary" : "text-foreground"}`}>
                      {service.title}
                    </h4>
                    <p className="text-foreground/70 text-sm line-clamp-2 mt-1">
                      {service.description}
                    </p>
                    
                    {activeService === service.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-1 text-primary text-xs font-medium flex items-center"
                      >
                        {t('learnMore')}
                        <ChevronRight size={12} className="ml-1" />
                      </motion.div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
      
      {/* Service details */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="lg:col-span-8"
      >
        <div className={`p-6 md:p-8 rounded-xl border ${activeServiceColor.split(" ")[0]} border-${activeServiceColor.split(" ")[2]}`}>
          <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8">
            <div className={`p-5 rounded-xl ${activeServiceColor}`}>
              <ServiceIcon size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{activeServiceData.title}</h3>
              <p className="text-foreground/70 mt-2">{activeServiceData.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <CheckCircle className="mr-2" size={18} />
                {t('keyFeatures')}
              </h4>
              <ul className="space-y-3">
                {activeServiceData.features.map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-2"
                  >
                    <div className={`shrink-0 mt-1 p-0.5 rounded-full ${activeServiceColor.split(" ")[0]} ${activeServiceColor.split(" ")[1]}`}>
                      <Check size={12} />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              {!compact && (
                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`px-4 py-2 rounded-md ${activeServiceColor.split(" ")[0]} ${activeServiceColor.split(" ")[1]} hover:opacity-90 transition-opacity flex items-center gap-1`}
                  >
                    <span>{activeServiceData.cta}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              )}
            </div>
            
            {!compact && (
              <div className="md:col-span-2 h-64 md:h-auto bg-secondary/20 rounded-xl overflow-hidden flex items-center justify-center border border-border">
                <div className="p-6 text-center">
                  <Image src={imageUrl} alt={imageAlt} width={300} height={300} className="rounded-xl" />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default EnterpriseFeatures