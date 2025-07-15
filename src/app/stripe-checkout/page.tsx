import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'Stripe Checkout - Jaydai',
  description: 'Stripe checkout for Jaydai, your smart AI assistant for ChatGPT.',
}

export default async function StripeCheckoutPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Await searchParams
  const awaitedSearchParams = await searchParams

  // Flatten out searchParams into an array of [key,value] pairs
  const queryEntries = Object.entries(awaitedSearchParams).flatMap(([key, val]) => {
    if (val === undefined) return []
    if (Array.isArray(val)) return val.map(v => [key, v])
    return [[key, val]]
  })

  const queryString = queryEntries.length
    ? '?' + new URLSearchParams(queryEntries).toString()
    : ''

  console.log('🔍 Redirecting from /stripe-checkout to:', `/${defaultLocale}/stripe-checkout${queryString}`)
  console.log('🔍 Preserved query parameters:', Object.fromEntries(queryEntries))

  // Redirect to the locale-specific stripe-checkout page with preserved query parameters
  redirect(`/${defaultLocale}/stripe-checkout${queryString}`)
}