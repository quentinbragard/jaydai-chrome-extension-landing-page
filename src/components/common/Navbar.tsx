"use client"

import * as React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, Building, Sparkles } from "lucide-react"
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import { useLocale } from 'next-intl'
import LanguageSwitcher from "@/components/common/LanguageSwitcher"

const Navbar = () => {
  const t = useTranslations('nav')
  const locale = useLocale()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const isEnterprisePage = pathname.includes("/enterprise")
  const darkLogo = "/images/full-logo-dark.png"
  const lightLogo = "/images/full-logo-light.png"
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src={theme === "dark" ? darkLogo : lightLogo} 
                alt="Jaydai Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Product Type Switcher (B2C/B2B) - Desktop */}
          <div className="hidden md:flex items-center mx-4 bg-secondary/20 rounded-full p-0.5">
            <Link
              href="/"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !isEnterprisePage 
                  ? "bg-primary text-primary-foreground" 
                  : "text-foreground/80 hover:text-primary"
              }`}
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
            >
              <span className="flex items-center gap-1.5">
                <Building size={14} />
                <span>{t('enterprise')}</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="ml-10 flex items-center justify-center space-x-8">
              {/* Navigation items differ based on whether we're on the enterprise page */}
              {isEnterprisePage ? (
                <>
                  <Link href="/enterprise#services" className="text-foreground/80 hover:text-primary transition-colors">
                    {t('services')}
                  </Link>
                  <Link href="/enterprise#case-studies" className="text-foreground/80 hover:text-primary transition-colors">
                    {t('caseStudies')}
                  </Link>
                  <Link href="/enterprise#team" className="text-foreground/80 hover:text-primary transition-colors">
                    {t('team')}
                  </Link>
                </>
              ) : (
                <>
                  <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">
                    {t('features')}
                  </Link>
                  <Link href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
                    {t('testimonials')}
                  </Link>
                  <Link href="#templates" className="text-foreground/80 hover:text-primary transition-colors">
                    {t('templates')}
                  </Link>
                </>
              )}
              
              {/* Common links for both pages */}
              <Link href={`${isEnterprisePage ? "/enterprise" : ""}#pricing`} className="text-foreground/80 hover:text-primary transition-colors">
                {t('pricing')}
              </Link>
              <Link href={`${isEnterprisePage ? "/enterprise" : ""}#faq`} className="text-foreground/80 hover:text-primary transition-colors">
                {t('faq')}
              </Link>
              <Link href={`${isEnterprisePage ? "/enterprise" : ""}#contact`} className="text-foreground/80 hover:text-primary transition-colors">
                {t('contact')}
              </Link>
            </div>
          </div>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4 pl-8">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <Link 
              href="https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd" 
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
          <div className="flex md:hidden">
            {/* Mobile Language Switcher */}
            <LanguageSwitcher className="mr-2" />
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 mr-2 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary/50 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
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
            
            <Link 
              href="https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd" 
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