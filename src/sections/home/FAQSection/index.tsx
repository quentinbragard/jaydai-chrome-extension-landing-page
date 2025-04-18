"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Plus, Minus } from "lucide-react"

interface FAQ {
  id: number
  question: string
  answer: string
}

const FAQSection = () => {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const faqs: FAQ[] = [
    {
      id: 1,
      question: t('questions.1.question'),
      answer: t('questions.1.answer')
    },
    {
      id: 2,
      question: t('questions.2.question'),
      answer: t('questions.2.answer')
    },
    {
      id: 3,
      question: t('questions.3.question'),
      answer: t('questions.3.answer')
    },
    {
      id: 4,
      question: t('questions.4.question'),
      answer: t('questions.4.answer')
    },
    {
      id: 5,
      question: t('questions.5.question'),
      answer: t('questions.5.answer')
    },
    {
      id: 6,
      question: t('questions.6.question'),
      answer: t('questions.6.answer')
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus size={20} className="text-primary" />
                    ) : (
                      <Plus size={20} className="text-primary" />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-foreground/70">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-6">
              {t('ctaDescription')}
            </p>
            
            <a
              href="#contact"
              className="px-6 py-2 rounded-md bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors"
            >
              {t('ctaButtonText')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection