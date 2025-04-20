"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

// Ensure this matches your environment variable
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Page view tracking
    if (GA_TRACKING_ID && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  // Only render if tracking ID is present
  if (!GA_TRACKING_ID) return null

  return (
    <>
      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script 
        id="google-analytics" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}

// Extend the global window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, config: string, options?: Record<string, any>) => void;
  }
}