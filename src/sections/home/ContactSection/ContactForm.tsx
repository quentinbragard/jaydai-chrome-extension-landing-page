"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { submitContactForm } from "./action"

interface ContactFormProps {
  translationNamespace?: string; // Optional namespace for translations
  className?: string; // Optional additional classes
  enterpriseMode?: boolean; // Optional flag for enterprise-specific features
  initialFormData?: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  onFormSubmitSuccess?: () => void; // Optional callback on successful submission
}

const ContactForm: React.FC<ContactFormProps> = ({
  translationNamespace = 'contact',
  className = "",
  enterpriseMode = false,
  initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  },
  onFormSubmitSuccess
}) => {
  const t = useTranslations(translationNamespace)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const [formData, setFormData] = useState(initialFormData)

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
        if (onFormSubmitSuccess) {
          onFormSubmitSuccess()
        }
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
    <div className={`bg-card border border-border rounded-xl p-8 ${className}`}>
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
              {t('form.nameLabel')} <span className="text-red-500">*</span>
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
              {t('form.emailLabel')} <span className="text-red-500">*</span>
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
        
        {/* Additional enterprise fields can be added here conditionally */}
        {enterpriseMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground/70 mb-2">
                {t('form.companyLabel')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={(formData as any).company || ''}
                onChange={handleChange}
                required={enterpriseMode}
                className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={t('form.companyPlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-foreground/70 mb-2">
                {t('form.roleLabel')}
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={(formData as any).role || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={t('form.rolePlaceholder')}
              />
            </div>
          </div>
        )}
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
            {t('form.subjectLabel')} <span className="text-red-500">*</span>
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
            {t('form.messageLabel')} <span className="text-red-500">*</span>
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
  )
}

export default ContactForm