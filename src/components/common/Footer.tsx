"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useTranslations } from 'next-intl'
import { useTheme } from "next-themes"
import { useIsMobile } from "@/hooks/use-mobile"
import { useExtensionModal } from '@/components/common/ExtensionModalContext'
import { trackEvent } from '@/lib/analytics'

const Footer = () => {
  const t = useTranslations('footer')
  const isMobile = useIsMobile()
  const { open } = useExtensionModal()
  const { theme } = useTheme()
  // Add mounted state to fix hydration issues
  const [mounted, setMounted] = React.useState(false)
  
  // Only access theme after mounting
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  // Determine isDark based on mounted state
  const isDark = mounted && theme === 'dark'
  
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block"
              onClick={() => {
                trackEvent('Footer Logo Clicked', {
                  page_location: window.location.pathname,
                  source: 'footer',
                  timestamp: new Date().toISOString()
                })
              }}
            > 
              <Image 
                src={mounted ? (isDark ? "/images/full-logo-dark.png" : "/images/full-logo-light.png") : "/images/full-logo-dark.png"} 
                alt="Jaydai Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto mb-4"
              />
            </Link>
            <p className="text-foreground/70 mt-4 max-w-md">
              {t('description')}
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://www.linkedin.com/company/104914264" target="_blank"
                onClick={() => {
                  trackEvent('Footer LinkedIn Clicked', {
                    page_location: window.location.pathname,
                    source: 'footer',
                    timestamp: new Date().toISOString()
                  })
                }}
              >
                <Linkedin size={20} />
                <span className="sr-only">{t('linkedin')}</span>
              </Link>
              <Link href="mailto:contact@jayd.ai"
                onClick={() => {
                  trackEvent('Footer Button Clicked', {
                    button_name: 'email',
                    page_location: window.location.pathname,
                    source: 'footer',
                    timestamp: new Date().toISOString()
                  })
                }}
              >
                <Mail size={20} />
                <span className="sr-only">{t('email')}</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('product')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'features',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('features')}
                </Link>
              </li>
              <li>
                <Link href="/#templates"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'templates',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('templates')}
                </Link>
              </li>
              <li>
                <Link href="/#pricing"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'pricing',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('pricing')}
                </Link>
              </li>
              <li>
                <Link href="/enterprise"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'enterprise',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('enterprise')}
                </Link>
              </li>
              <li>
                <Link href="https://app.jayd.ai"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'learningSchool',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('learningSchool')}
                </Link>
              </li>
            </ul>
          </div>

          {/* More links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/enterprise"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'aboutUs',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="https://thetunnel.substack.com/" target="_blank"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'blog',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('blog')}
                </Link>
              </li>
                <li>
                <Link href="#contact"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'contact',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('contact')}
                </Link>
              </li>
                <li>
                <Link href="/privacy"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'privacyPolicy',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service"
                  onClick={() => {
                    trackEvent('Footer Button Clicked', {
                      button_name: 'termsOfService',
                      page_location: window.location.pathname,
                      source: 'footer',
                      timestamp: new Date().toISOString()
                    })
                  }}
                >
                  {t('termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Jaydai. {t('allRightsReserved')}
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              onClick={() => {
                trackEvent(`${isMobile ? 'Mobile Download Extension' : 'Download Extension'}`, {
                  button_name: 'footerLink_downloadExtension',
                  page_location: window.location.pathname,
                  source: 'footer',
                  timestamp: new Date().toISOString()
                })
                if (isMobile) {
                  open()
                } else {
                  window.open("https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd", "_blank")
                }
              }}
            >
              {t('downloadExtension')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer