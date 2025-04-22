"use client"
import { useLocale } from 'next-intl'
import { locales } from '@/lib/navigation'
import { usePathname, useRouter } from '@/lib/navigation'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Check } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
interface LanguageSwitcherProps {
  className?: string
}

// Language options with their flags
const languageOptions = [
  {
    locale: "en",
    name: "English",
    flag: "/images/flags/en.svg",
  },
  {
    locale: "fr",
    name: "Français",
    flag: "/images/flags/fr.svg",
  },
  {
    locale: "de",
    name: "Deutsch",
    flag: "/images/flags/de.svg",
  }
  // Add more languages here in the future
]

const LanguageSwitcher = ({ className = "" }: LanguageSwitcherProps) => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  // Find current language details
  const currentLang = languageOptions.find(lang => lang.locale === locale) || languageOptions[0]
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  
  const handleLocaleChange = (newLocale: string) => {
    // Only change if it's a different locale
    if (newLocale !== locale) {
      trackEvent('Language Switcher Clicked', {
        button_name: locale,
        page_location: window.location.pathname,
        timestamp: new Date().toISOString()
      })
      
      try {
        // Use the router.replace with the new locale
        router.replace(pathname, { locale: newLocale });
      } catch (error) {
        console.error("Error changing locale:", error);
      }
    }
    
    setIsOpen(false)
  }
  
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-secondary/20 transition-colors"
        type="button"
      >
        <Image 
          src={currentLang.flag}
          alt={currentLang.name}
          width={20}
          height={20}
          className="rounded-sm"
        />
        <span className="text-sm font-medium hidden sm:inline">{currentLang.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 bg-card border border-border rounded-md shadow-lg overflow-hidden z-50">
          {languageOptions.map(lang => (
            <button
              key={lang.locale}
              onClick={() => handleLocaleChange(lang.locale)}
              className={`flex items-center gap-2 w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors
                ${locale === lang.locale ? 'bg-primary/10' : ''}`}
              type="button"
            >
              <Image 
                src={lang.flag}
                alt={lang.name}
                width={18}
                height={18}
                className="rounded-sm"
              />
              <span className="flex-grow">{lang.name}</span>
              {locale === lang.locale && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher