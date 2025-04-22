import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { Analytics } from '@/components/Analytics'
import SchemaOrg from '@/components/SchemaOrg'
import { getTranslations } from 'next-intl/server'

import { Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})  

export async function generateMetadata(
  { params }: { params: { locale: string } }
): Promise<Metadata> {
  // now we can safely read locale
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'seoMetadata' })
  
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      url: `https://jayd.ai/`,
    },
    alternates: {
      languages: {
        'en': 'https://jayd.ai/en',
        'fr': 'https://jayd.ai/fr',
      },
    },
  }
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params?: { locale?: string }
}>) {
  const locale = params?.locale || 'en'
  
  return (
    <html lang={locale} suppressHydrationWarning>
            <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DWG2Y6PC5G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${roboto.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            {children}

            {/* Analytics Component */}
            <Analytics />
            
            {/* Schema.org structured data */}
            <SchemaOrg locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  )
}