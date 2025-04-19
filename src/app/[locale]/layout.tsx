import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
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
  const locale = params.locale
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
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}