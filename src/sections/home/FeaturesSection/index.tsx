"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Sparkles, 
  Library, 
  FileText, 
  BarChart3, 
  Zap, 
  GraduationCap
} from "lucide-react"
import { useTranslations } from "next-intl"

import { FeatureCard, FeatureCardProps } from "./FeatureCard"

const FeaturesSection = () => {
  const t = useTranslations('features')

  const features: FeatureCardProps[] = [
    {
      id: 1,
      title: t('libraries.title'),
      description: t('libraries.description'),
      icon: Library,
      color: "bg-blue-500/10",
      iconColor: "text-blue-500",
      delay: 0.1
    },
    {
      id: 2,
      title: t('companyTemplates.title'),
      description: t('companyTemplates.description'),
      icon: FileText,
      color: "bg-purple-500/10",
      iconColor: "text-purple-500",
      delay: 0.2
    },
    {
      id: 3,
      title: t('customTemplates.title'),
      description: t('customTemplates.description'),
      icon: Sparkles,
      color: "bg-amber-500/10",
      iconColor: "text-amber-500",
      delay: 0.3
    },
    {
      id: 4,
      title: t('analytics.title'),
      description: t('analytics.description'),
      icon: BarChart3,
      color: "bg-green-500/10",
      iconColor: "text-green-500",
      delay: 0.4
    },
    {
      id: 5,
      title: t('aiUpdates.title'),
      description: t('aiUpdates.description'),
      icon: Zap,
      color: "bg-red-500/10",
      iconColor: "text-red-500",
      delay: 0.5
    },
    {
      id: 6,
      title: t('learningSchool.title'),
      description: t('learningSchool.description'),
      icon: GraduationCap,
      color: "bg-teal-500/10",
      iconColor: "text-teal-500",
      delay: 0.6
    }
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          
          <a
            href={t('cta.link')}
            target="_blank"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            {t('cta.buttonText')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection