import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ReactNode } from 'react'

// Layout for the enterprise page segment, providing localized metadata
export async function generateMetadata(
  { params }: { params: { locale: string } }
): Promise<Metadata> {
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'enterprisePage' })
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      type: 'website',
      locale,
      url: `https://jayd.ai/${locale}/enterprise`
    }
  }
}

// Server-side layout component to wrap the enterprise page
export default function EnterpriseLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}