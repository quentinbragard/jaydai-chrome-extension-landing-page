import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'Stripe Checkout - Jaydai',
  description: 'Stripe checkout for Jaydai, your smart AI assistant for ChatGPT.',
}

export default function StripeCheckoutPage() {
  redirect(`/${defaultLocale}/stripe-checkout`)
}