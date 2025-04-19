"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useTranslations } from 'next-intl'
import { useTheme } from "next-themes"

const Footer = () => {
  const t = useTranslations('footer')
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <Image 
                src={isDark ? "/images/full-logo-dark.png" : "/images/full-logo-light.png"} 
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
              <Link href="https://linkedin.com" target="_blank" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">{t('linkedin')}</span>
              </Link>
              <Link href="mailto:contact@jaydai.com" className="text-foreground/70 hover:text-primary transition-colors">
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
                <Link href="#features" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('features')}
                </Link>
              </li>
              <li>
                <Link href="#templates" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('templates')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('pricing')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('enterprise')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
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
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="https://thetunnel.substack.com/" target="_blank" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-foreground/70 hover:text-primary transition-colors">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-foreground/70 hover:text-primary transition-colors">
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
            <Link 
              href="https://chromewebstore.google.com/detail/jaydai-chrome-extension/enfcjmbdbldomiobfndablekgdkmcipd" 
              target="_blank"
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t('downloadExtension')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
