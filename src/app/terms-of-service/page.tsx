import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'Terms of Service - Jaydai',
  description: 'Terms of service for Jaydai, your smart AI assistant for ChatGPT.',
}

export default function TermsOfServicePage() {
  redirect(`/${defaultLocale}/terms-of-service`)
}