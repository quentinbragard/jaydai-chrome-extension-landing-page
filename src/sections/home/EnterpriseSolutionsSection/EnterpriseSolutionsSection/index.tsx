"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { 
  Building, 
  Users, 
  LineChart, 
  Briefcase, 
  Shield, 
  Bookmark,
  ChevronRight,
  CheckCircle,
  ArrowRight
} from "lucide-react"

interface EnterpriseService {
  id: string
  title: string
  description: string
  icon: React.ElementType
  color: string
  features: string[]
}

const EnterpriseSolutionsSection = () => {
  const t = useTranslations('enterpriseSolutions')

  const services: EnterpriseService[] = [
    {
      id: "training",
      title: t('services.training.title'),
      description: t('services.training.description'),
      icon: Users,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/30",
      features: t.raw('services.training.features')
    },
    {
      id: "consulting",
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      icon: Briefcase,
      color: "bg-amber-500/10 text-amber-500 border-amber-500/30",
      features: t.raw('services.consulting.features')
    },
    {
      id: "custom",
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      icon: Bookmark,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/30",
      features: t.raw('services.custom.features')
    },
    {
      id: "analytics",
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      icon: LineChart,
      color: "bg-green-500/10 text-green-500 border-green-500/30",
      features: t.raw('services.analytics.features')
    },
    {
      id: "governance",
      title: t('services.governance.title'),
      description: t('services.governance.description'),
      icon: Shield,
      color: "bg-red-500/10 text-red-500 border-red-500/30",
      features: t.raw('services.governance.features')
    }
  ]

  const [activeService, setActiveService] = React.useState(services[0].id)
  
  const activeServiceData = services.find(s => s.id === activeService) || services[0]
  
  return (
    <section id="enterprise" className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full opacity-40 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>
        
        {/* Services section with tabs navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
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
                  <Building className="mr-2 text-primary" size={18} />
                  {t('servicesNavTitle')}
                </h3>
              </div>
              
              <div className="divide-y divide-border">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-4 flex items-start gap-3 transition-colors ${
                      activeService === service.id ? "bg-primary/5" : "hover:bg-secondary/5"
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${service.color}`}>
                      <service.icon size={18} />
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
                ))}
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
            <div className={`p-6 rounded-xl border ${activeServiceData.color.split(" ")[0]} border-${activeServiceData.color.split(" ")[2]}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${activeServiceData.color}`}>
                  <activeServiceData.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{activeServiceData.title}</h3>
                  <p className="text-foreground/70">{activeServiceData.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <CheckCircle className="mr-2" size={18} />
                    {t('keyFeaturesTitle')}
                  </h4>
                  <ul className="space-y-2">
                    {activeServiceData.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${activeServiceData.color.split(" ")[1]}`}></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-background/50 rounded-lg p-5 border border-border">
                  <h4 className="text-lg font-semibold mb-4">{t('workflowTitle')}</h4>
                  <ol className="space-y-3">
                    {t.raw('workflow').map((step: { title: string; description: string }, index: number) => (
                      <li key={index} className="flex gap-3">
                        <div className="bg-secondary/20 rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5">{index + 1}</div>
                        <div>
                          <p className="font-medium">{step.title}</p>
                          <p className="text-sm text-foreground/70">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-5 border border-border">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{t('ctaTitle')}</h4>
                    <p className="text-foreground/70 mt-1">
                      {t('ctaDescription')}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className={`px-4 py-2 rounded-md ${activeServiceData.color.split(" ")[0]} ${activeServiceData.color.split(" ")[1]} hover:opacity-90 transition-opacity flex items-center gap-1`}
                  >
                    <span>{t('ctaButtonText')}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-10">{t('successMetricsTitle')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.raw('successMetrics').map((metric: { value: string; title: string; description: string }, index: number) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <div className="text-xl font-bold text-primary">{metric.value}</div>
                  </div>
                  <h4 className="text-lg font-semibold">{metric.title}</h4>
                  <p className="text-foreground/70 mt-2">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:enterprise@jaydai.com"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
          >
            <Building size={18} />
            <span>{t('requestDemoButtonText')}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseSolutionsSection