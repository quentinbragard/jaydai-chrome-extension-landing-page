import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Jaydai - Your Smart AI Assistant for ChatGPT',
  description: 'Maximize your generative AI experience with Jaydai, the Chrome extension that transforms how you use ChatGPT with expert prompts, custom templates, and detailed analytics.',
  keywords: 'AI, ChatGPT, prompts, templates, Chrome extension, productivity',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}