'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const supabase = await createClient()
    console.log("data", data)
    
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
      return { success: false, error: error.message }
    }

    //revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}
