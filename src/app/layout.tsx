import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
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
      <body className={`${poppins.variable} ${roboto.variable} antialiased min-h-screen flex flex-col`}>
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