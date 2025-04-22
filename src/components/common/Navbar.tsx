"use client"

import * as React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { usePathname, redirect } from "next/navigation"
import { Menu, X, Moon, Sun, Building, Sparkles } from "lucide-react"
import { useTranslations } from 'next-intl'
import { Link, useRouter } from '@/lib/navigation'
import { useLocale } from 'next-intl'
import LanguageSwitcher from "@/components/common/LanguageSwitcher"
import { trackEvent } from "@/lib/analytics"
import { useIsMobile } from "@/hooks/use-mobile"
import { useExtensionModal } from "@/components/common/ExtensionModalContext"

const Navbar = () => {
  const t = useTranslations('nav')
  const locale = useLocale()
  const isMobile = useIsMobile()
  const { open } = useExtensionModal()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const isEnterprisePage = pathname.includes("/enterprise")
  const darkLogo = "/images/full-logo-dark.png"
  const lightLogo = "/images/full-logo-light.png"
  const router = useRouter()
  
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = React.useState(false)
  
  // Only access theme after component has mounted
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  const toggleMenu = () => {
    trackEvent('Navbar Menu Toggled', {
      button_name: isMenuOpen ? 'closeMenu' : 'openMenu',
      page_location: window.location.pathname,
      timestamp: new Date().toISOString()
    })
    setIsMenuOpen(!isMenuOpen)
  }

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    trackEvent('Theme Toggle Clicked', {
      button_name: theme,
      page_location: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  }

  // Determine current logo
  const currentLogo = !mounted ? darkLogo : (theme === "dark" ? darkLogo : lightLogo)

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src={currentLogo} 
                alt="Jaydai Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Product Type Switcher (B2C/B2B) - Desktop */}
          <div className="hidden xl:flex items-center mx-4 bg-secondary/20 rounded-full p-0.5">
            <Link
              href="/"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !isEnterprisePage 
                  ? "bg-primary text-primary-foreground" 
                  : "text-foreground/80 hover:text-primary"
              }`}
              onClick={() => {
                trackEvent('Navbar Switcher Clicked', {
                  button_name: 'personal',
                  page_location: window.location.pathname,
                  timestamp: new Date().toISOString()
                })
              }}
            >
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>{t('personal')}</span>
              </span>
            </Link>
            <Link
              href="/enterprise"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isEnterprisePage 
                  ? "bg-primary text-primary-foreground" 
                  : "text-foreground/80 hover:text-primary"
              }`}
              onClick={() => {
                trackEvent('Navbar Switcher Clicked', {
                  button_name: 'enterprise',
                  page_location: window.location.pathname,
                  timestamp: new Date().toISOString()
                })
              }}
            >
              <span className="flex items-center gap-1.5">
                <Building size={14} />
                <span>{t('enterprise')}</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:block flex-1">
            <div className="ml-10 flex items-center justify-center space-x-8">
              {/* Navigation items differ based on whether we're on the enterprise page */}
              {isEnterprisePage ? (
                <>
                  <Link
                    href="/enterprise#services"
                    className="text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('Navbar Button Clicked', {
                        button_name: 'services',
                        page_location: window.location.pathname,
                        timestamp: new Date().toISOString()
                      })
                    }}
                  >
                    {t('services')}
                  </Link>
                  <Link
                    href="/enterprise#team"
                    className="text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('Navbar Button Clicked', {
                        button_name: 'team',
                        page_location: window.location.pathname,
                        timestamp: new Date().toISOString()
                      })
                    }}
                  >
                    {t('team')}
                  </Link>
                </>
              ) : (
                <>
                    <Link
                    href="#features"
                    className="text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('Navbar Button Clicked', {
                        button_name: 'features',
                        page_location: window.location.pathname,
                        timestamp: new Date().toISOString()
                      })
                    }}
                  >
                    {t('features')}
                  </Link>
                  <Link
                    href="#testimonials"
                    className="text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('Navbar Button Clicked', {
                        button_name: 'testimonials',
                        page_location: window.location.pathname,
                        timestamp: new Date().toISOString()
                        })
                    }}
                  >
                    {t('testimonials')}
                  </Link>
                  <Link
                    href="#templates"
                    className="text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('Navbar Button Clicked', {
                        button_name: 'templates',
                        page_location: window.location.pathname,
                        timestamp: new Date().toISOString()
                      })
                    }}
                  >
                    {t('templates')}
                  </Link>
                </>
              )}
              
              {/* Common links for both pages */}
              <Link
                href={`${isEnterprisePage ? "/enterprise" : ""}#pricing`}
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => {
                  trackEvent('Navbar Button Clicked', {
                    button_name: 'pricing',
                    page_location: window.location.pathname,
                    timestamp: new Date().toISOString()
                  })
                }}
              >
                {t('pricing')}
              </Link>
              <Link
                href={`${isEnterprisePage ? "/enterprise" : ""}#contact`}
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => {
                  trackEvent('Navbar Button Clicked', {
                    button_name: 'faq',
                    page_location: window.location.pathname,
                    timestamp: new Date().toISOString()
                  })
                }}
              >
                {t('contact')}
              </Link>
            </div>
          </div>
          
          {/* Right side buttons */}
          <div className="hidden xl:flex items-center space-x-4 pl-8">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Theme Toggle - Only show after mounted */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {!mounted ? null : theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {isEnterprisePage ? (
              <a 
                className="flex items-center gap-2 font-bold whitespace-nowrap text-sm px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => {
                  trackEvent('Button Clicked', {
                    button_name: 'navbarRequestDemo',
                    page_location: window.location.pathname,
                    source: 'navbar',
                    timestamp: new Date().toISOString()
                  })
                  router.push("/enterprise#contact")
                }}
              > 
                {t('requestDemo')}
              </a>
            ) : (
              <a 
                className="flex items-center gap-2 font-bold whitespace-nowrap text-xs lg:text-sm px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => {
                  trackEvent('Button Clicked', {
                    button_name: 'navbarDownloadExtension',
                    page_location: window.location.pathname,
                    source: 'navbar',
                    timestamp: new Date().toISOString()
                  })
                  if (isMobile) {
                    open()
                  } else {
                    window.open("https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd", "_blank")
                  }
                }}
              >
                <Image
                  src="/images/google_chrome_icon.png"
                  alt="Google Chrome"
                  width={10}
                  height={10}
                  className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                />
                {t('downloadExtension')}
              </a>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center">
            {/* Mobile Language Switcher */}
            <LanguageSwitcher className="mr-2" />
            
            {/* Mobile Theme Toggle - Only show after mounted */}
            <button
              onClick={handleThemeToggle}
              className="p-2 mr-2 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {!mounted ? null : theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary/50 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">{t('openMenu')}</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="xl:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {/* Product Type Switcher (B2C/B2B) - Mobile */}
            <div className="flex items-center justify-center bg-secondary/20 rounded-lg p-1 mb-4 mx-2">
              <Link 
                href="/" 
                className={`flex-1 text-center px-3 py-2 rounded-md text-base font-medium ${
                  !isEnterprisePage 
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary/50"
                }`}
                onClick={toggleMenu}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <Sparkles size={14} />
                  <span>{t('personal')}</span>
                </span>
              </Link>
              <Link 
                href="/enterprise" 
                className={`flex-1 text-center px-3 py-2 rounded-md text-base font-medium ${
                  isEnterprisePage 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-secondary/50"
                }`}
                onClick={toggleMenu}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <Building size={14} />
                  <span>{t('enterprise')}</span>
                </span>
              </Link>
            </div>
            
            {/* Navigation links - change based on page */}
            {isEnterprisePage ? (
              <>
                <Link 
                  href="/enterprise#services" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('services')}
                </Link>
                <Link 
                  href="/enterprise#case-studies" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('caseStudies')}
                </Link>
                <Link 
                  href="/enterprise#team" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('team')}
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="/#features" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('features')}
                </Link>
                <Link 
                  href="#testimonials" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('testimonials')}
                </Link>
                <Link 
                  href="#templates" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('templates')}
                </Link>
              </>
            )}
            
            {/* Common links */}
            <Link 
              href={`${isEnterprisePage ? "/enterprise" : ""}#pricing`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
              onClick={toggleMenu}
            >
              {t('pricing')}
            </Link>
            <Link 
              href={`${isEnterprisePage ? "/enterprise" : ""}#faq`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
              onClick={toggleMenu}
            >
              {t('faq')}
            </Link>
            <Link 
              href={`${isEnterprisePage ? "/enterprise" : ""}#contact`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
              onClick={toggleMenu}
            >
              {t('contact')}
            </Link>
            
            {isEnterprisePage ? (
              <a 
                className="flex items-center gap-2 font-bold whitespace-nowrap text-sm px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => {
                  trackEvent('Button Clicked', {
                    button_name: 'navbarDownloadExtension',
                    page_location: window.location.pathname,
                    source: 'navbar',
                    timestamp: new Date().toISOString()
                  })
                  router.push("/enterprise#contact")
                }}
              > 
                {t('requestDemo')}
              </a>
            ) : (
              <a 
                className="flex items-center gap-2 font-bold whitespace-nowrap text-sm px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => {
                  trackEvent('Button Clicked', {
                    button_name: 'navbarDownloadExtension',
                    page_location: window.location.pathname,
                    source: 'navbar',
                    timestamp: new Date().toISOString()
                  })
                  if (isMobile) {
                    open()
                  } else {
                    window.open("https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd", "_blank")
                  }
                }}
              >
                <Image
                  src="/images/google_chrome_icon.png"
                  alt="Google Chrome"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                {t('downloadExtension')}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar