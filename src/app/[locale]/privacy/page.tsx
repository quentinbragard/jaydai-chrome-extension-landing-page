"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('privacy')
  
  return (
    <div className="relative py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <Link 
              href="/"
              className="inline-flex items-center text-primary hover:underline mb-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              {t('title')}
            </motion.h1>
            
            <div className="text-sm text-foreground/60 mb-8">
              {t('lastUpdated')}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="legal-content prose prose-lg prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: t.raw('content') }}
          />
        </div>
      </div>
    </div>
  )
}