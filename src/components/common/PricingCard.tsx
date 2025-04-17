"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  popular?: boolean
  icon?: LucideIcon
  delay?: number
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  ctaText,
  ctaHref,
  popular = false,
  icon: Icon,
  delay = 0
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-6 rounded-xl border ${popular ? 'border-primary' : 'border-border'} bg-card hover:shadow-lg transition-all duration-300`}
    >
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
            Popular
          </span>
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          {Icon && (
            <div className={`w-10 h-10 rounded-lg ${popular ? 'bg-primary/20' : 'bg-secondary/20'} flex items-center justify-center mr-3`}>
              <Icon className={popular ? 'text-primary' : 'text-foreground'} size={20} />
            </div>
          )}
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        
        <div className="mb-4">
          <span className="text-3xl font-bold text-foreground">{price}</span>
        </div>
        
        <p className="text-foreground/70 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a
          href={ctaHref}
          className={`w-full py-3 px-4 rounded-md text-center font-medium ${
            popular 
              ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
              : 'bg-secondary/50 text-foreground hover:bg-secondary/70'
          } transition-colors`}
        >
          {ctaText}
        </a>
      </div>
    </motion.div>
  )
}

export default PricingCard
