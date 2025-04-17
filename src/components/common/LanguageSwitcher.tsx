"use client"
import { useTranslations } from 'next-intl'
import { usePathname, Link } from '@/lib/navigation'

interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher = ({ className = "" }: LanguageSwitcherProps) => {
  const t = useTranslations()
  const pathname = usePathname()
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Link href={pathname} locale="en" className="text-sm hover:text-primary transition-colors">
        EN
      </Link>
      <span className="text-foreground/30">|</span>
      <Link href={pathname} locale="fr" className="text-sm hover:text-primary transition-colors">
        FR
      </Link>
    </div>
  )
}

export default LanguageSwitcher
