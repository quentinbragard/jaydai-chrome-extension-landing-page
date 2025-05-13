"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Mail, MessageSquare, Send } from "lucide-react"
import ContactForm from "./ContactForm"

interface ContactSectionProps {
  enterpriseMode?: boolean;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  enterpriseMode = false,
  className = ""
}) => {
  const t = useTranslations('contact')

  return (
    <section id="ontact" className={`py-20 bg-secondary/10 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {enterpriseMode ? t('enterpriseTitle') : t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            {enterpriseMode ? t('enterpriseSubtitle') : t('subtitle')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        > 
          {/* Reusable contact form component */}
          <ContactForm 
            enterpriseMode={enterpriseMode}
            translationNamespace={enterpriseMode ? 'enterpriseContact' : 'contact'}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection