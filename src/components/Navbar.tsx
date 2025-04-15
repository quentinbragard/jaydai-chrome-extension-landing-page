"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, Building, Sparkles, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const isEnterprisePage = pathname === "/enterprise"
  
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
                src="/images/full-logo-dark.png" 
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
                <span>Personal</span>
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
                <span>Enterprise</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="ml-10 flex items-center justify-end space-x-8">
              {/* Navigation items differ based on whether we're on the enterprise page */}
              {isEnterprisePage ? (
                <>
                  <Link href="/enterprise#services" className="text-foreground/80 hover:text-primary transition-colors">
                    Services
                  </Link>
                  <Link href="/enterprise#case-studies" className="text-foreground/80 hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                  <Link href="/enterprise#team" className="text-foreground/80 hover:text-primary transition-colors">
                    Team
                  </Link>
                </>
              ) : (
                <>
                  <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">
                    Features
                  </Link>
                  <Link href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
                    Testimonials
                  </Link>
                  <Link href="#templates" className="text-foreground/80 hover:text-primary transition-colors">
                    Templates
                  </Link>
                </>
              )}
              
              {/* Common links for both pages */}
              <Link href={`${isEnterprisePage ? "/enterprise" : ""}#pricing`} className="text-foreground/80 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href={`${isEnterprisePage ? "/enterprise" : ""}#faq`} className="text-foreground/80 hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href={`${isEnterprisePage ? "/enterprise" : ""}#contact`} className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <Link 
              href="https://chrome.google.com/webstore" 
              target="_blank"
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {isEnterprisePage ? "Request Demo" : "Download Extension"}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
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
                  <span>Personal</span>
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
                  <span>Enterprise</span>
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
                  Features
                </Link>
                <Link 
                  href="#testimonials" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  Testimonials
                </Link>
                <Link 
                  href="#templates" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
                  onClick={toggleMenu}
                >
                  Templates
                </Link>
              </>
            )}
            
            {/* Common links */}
            <Link 
              href={`${isEnterprisePage ? "/enterprise" : ""}#pricing`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              href={`${isEnterprisePage ? "/enterprise" : ""}#faq`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link 
              href={`${isEnterprisePage ? "/enterprise" : ""}#contact`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary/50 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            <Link 
              href="https://chrome.google.com/webstore" 
              target="_blank"
              className="block px-3 py-2 mt-4 text-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={toggleMenu}
            >
              {isEnterprisePage ? "Request Demo" : "Download Extension"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar