"use client"
import React from "react"
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import LanguageSwitcher from './common/LanguageSwitcher'
import Image from "next/image"
import { Building, Menu, Sparkles, X } from "lucide-react"

const Navbar = () => {
  const t = useTranslations('nav')
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isEnterprisePage, setIsEnterprisePage] = React.useState(false)
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    const checkIfEnterprisePage = () => {
      setIsEnterprisePage(window.location.pathname.includes('enterprise'))
    }
    
    window.addEventListener('scroll', handleScroll)
    checkIfEnterprisePage()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Jaydai Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="ml-2 text-xl font-bold text-foreground">Jaydai</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-center justify-center bg-secondary/20 rounded-lg p-1">
              <Link 
                href="/" 
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  !isEnterprisePage 
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary/50"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>{t('personal')}</span>
                </span>
              </Link>
              <Link 
                href="/enterprise" 
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  isEnterprisePage 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-secondary/50"
                }`}
              >
                <span className="flex items-center gap-1.5">
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
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <Link 
                  href="/enterprise#case-studies" 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
                <Link 
                  href="/enterprise#team" 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Team
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="#features" 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {t('features')}
                </Link>
                <Link 
                  href="#learn" 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {t('learn')}
                </Link>
                <Link 
                  href="#testimonials" 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {t('testimonials')}
                </Link>
                <Link 
                  href="#templates" 
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {t('templates')}
                </Link>
              </>
            )}
            
            {/* Common links */}
            <Link 
              href={`${isEnterprisePage ? "/enterprise" : ""}#pricing`} 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('pricing')}
            </Link>
            <Link 
              href={`${isEnterprisePage ? "/enterprise" : ""}#faq`} 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('faq')}
            </Link>
            <Link 
              href={`${isEnterprisePage ? "/enterprise" : ""}#contact`} 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('contact')}
            </Link>
            
            <LanguageSwitcher />
            
            <Link 
              href="https://chrome.google.com/webstore" 
              target="_blank"
              className="flex items-center gap-2 font-black px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Image
                src="/images/google_chrome_icon.png"
                alt="Google Chrome"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              {isEnterprisePage ? t('requestDemo') : t('downloadExtension')}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                  Services
                </Link>
                <Link 
                  href="/enterprise#case-studies" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  Case Studies
                </Link>
                <Link 
                  href="/enterprise#team" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  Team
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="#features" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('features')}
                </Link>
                <Link 
                  href="#learn" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('learn')}
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
            
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
            
            <Link 
              href="https://chrome.google.com/webstore" 
              target="_blank"
              className="flex items-center gap-2 font-black px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Image
                src="/images/google_chrome_icon.png"
                alt="Google Chrome"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              {isEnterprisePage ? t('requestDemo') : t('downloadExtension')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
