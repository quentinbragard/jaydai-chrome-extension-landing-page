'use client'

import { NextIntlClientProvider as Provider } from 'next-intl'
import { ReactNode } from 'react'

type NextIntlClientProviderProps = {
  locale: string
  timeZone: string
  now: Date
  messages: Record<string, any>
  children: ReactNode
}

export default function NextIntlClientProvider({
  locale,
  timeZone,
  now,
  messages,
  children
}: NextIntlClientProviderProps) {
  return (
    <Provider locale={locale} timeZone={timeZone} now={now} messages={messages}>
      {children}
    </Provider>
  )
}