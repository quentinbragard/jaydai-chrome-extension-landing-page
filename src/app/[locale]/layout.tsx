import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
// Generate localized SEO metadata for all pages under [locale]
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } =  await params
  const t = await getTranslations({ locale, namespace: 'seoMetadata' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
      url: `https://jayd.ai/${locale}`,
      images: [
        {
          url: 'https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/landing/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Jayd.ai',
        },
      ],
    },
    alternates: {
      languages: {
        en: 'https://jayd.ai/en',
        fr: 'https://jayd.ai/fr'
      }
    }
  }
}
import { ExtensionModalProvider } from '@/components/common/ExtensionModalContext'
import NextIntlClientProvider from '@/providers/NextIntlClientProvider'
import { locales } from '@/lib/navigation'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

type LocaleLayoutProps = {
  children: ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const awaitedParams = await params
  const locale = awaitedParams.locale
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Load messages for the current locale
  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error)
    notFound()
  }

  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone="Europe/London"
      now={new Date()}
      messages={messages}
    >
      <ExtensionModalProvider>
        <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        <Footer />
      </ExtensionModalProvider>
    </NextIntlClientProvider>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}