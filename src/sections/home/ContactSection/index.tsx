"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Mail, MessageSquare, Send } from "lucide-react"
import { submitContactForm } from "./action"

const ContactSection = () => {
  const t = useTranslations('contact')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setError(result.error || t('form.error'))
      }
    } catch (err) {
      setError(t('form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-secondary/10">
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
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('emailContact.title')}</h3>
              <p className="text-foreground/70 text-center mb-4">
                {t('emailContact.description')}
              </p>
              <a href={`mailto:${t('emailContact.email')}`} className="text-primary hover:underline">
                {t('emailContact.email')}
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('liveChat.title')}</h3>
              <p className="text-foreground/70 text-center mb-4">
                {t('liveChat.description')}
              </p>
              <button className="text-primary hover:underline">
                {t('liveChat.buttonText')}
              </button>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Send className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('enterprise.title')}</h3>
              <p className="text-foreground/70 text-center mb-4">
                {t('enterprise.description')}
              </p>
              <a href={`mailto:${t('enterprise.email')}`} className="text-primary hover:underline">
                {t('enterprise.email')}
              </a>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">{t('form.title')}</h3>
            {success && (
              <div className="mb-6 p-4 bg-green-500/10 text-green-500 rounded-md text-center">
                {t('form.success')}
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 text-red-500 rounded-md text-center">
                {error}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                    {t('form.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                    {t('form.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                  {t('form.subjectLabel')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder={t('form.subjectPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  {t('form.messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder={t('form.messagePlaceholder')}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('form.submitting') : t('form.submitButton')}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection