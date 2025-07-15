// src/app/[locale]/stripe-checkout/layout.tsx
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ReactNode } from 'react'

export async function generateMetadata(
  { params }: { params: { locale: string } }
): Promise<Metadata> {
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'payment' })
  return {
    title: t('metaTitle', 'Payment Verification - Jayd.ai'),
    description: t('metaDescription', 'Verify your payment and get started with Jayd.ai'),
    openGraph: {
      title: t('metaTitle', 'Payment Verification - Jayd.ai'),
      description: t('metaDescription', 'Verify your payment and get started with Jayd.ai'),
      type: 'website',
      locale,
      url: `https://jayd.ai/${locale}/stripe-checkout`
    }
  }
}

export default function StripeCheckoutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}