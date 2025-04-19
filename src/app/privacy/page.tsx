import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'Privacy Policy - Jaydai',
  description: 'Privacy policy and data handling practices for Jaydai, your smart AI assistant for ChatGPT.',
}

export default function PrivacyPage() {
  redirect(`/${defaultLocale}/privacy`)
}