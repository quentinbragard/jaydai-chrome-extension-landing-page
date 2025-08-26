// Analytics Utility Functions

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

/**
 * Track a custom event in Google Analytics
 * @param eventName - Name of the event
 * @param eventParams - Optional parameters for the event
 */
export function trackEvent(
  eventName: string, 
  eventParams: Record<string, any> = {}
) {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', eventName, {
      ...eventParams,
      send_to: GA_TRACKING_ID
    })
  }
}

/**
 * Track a page view manually
 * @param path - Path of the page to track
 */
export function trackPageView(path: string) {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: path,
    })
  }
}

/**
 * Send a Google Analytics event and delay navigation until it's recorded
 * @param url - URL to open after the event is sent
 */
export function gtagSendEvent(url: string) {
  const callback = () => {
    if (typeof url === 'string') {
      window.open(url, '_blank')
    }
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'Download Extension', {
      event_callback: callback,
      event_timeout: 2000,
    })
  } else {
    callback()
  }

  return false
}

// Extend gtag typing for client-side tracking
declare global {
  interface Window {
    gtag?: (
      command: string, 
      config: string, 
      options?: Record<string, any>
    ) => void;
  }
}