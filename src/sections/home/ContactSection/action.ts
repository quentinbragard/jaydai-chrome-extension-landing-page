'use server'

import { createClient } from '@/utils/supabase/server'
import { trackEvent } from '@/lib/analytics'

export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const supabase = await createClient()
    
    const { error } = await supabase
      .from('landing_page_contact_form')
      .insert([
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Error submitting contact form:', error)
      trackEvent('Contact Form Submission Failed', {
        error: error.message,
        timestamp: new Date().toISOString()
      })
      return { success: false, error: error.message }
    }

    //revalidatePath('/')
    trackEvent('Contact Form Submission Success', {
      timestamp: new Date().toISOString()
    })
    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    trackEvent('Contact Form Submission Error', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    })
    return { success: false, error: 'An unexpected error occurred' }
  }
}
