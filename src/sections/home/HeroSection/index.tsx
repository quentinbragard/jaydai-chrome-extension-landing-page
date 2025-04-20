"use client"

import React from "react"
import { useTranslations } from "next-intl"
import HeroContent from "./HeroContent"
import HeroStats from "./HeroStats"

const HeroSection = ({ openVideoDialog }: { openVideoDialog: () => void }) => {
  const t = useTranslations('hero')

  return (
    
      <section  className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <HeroContent 
              openVideoDialog={openVideoDialog} 
              translations={t} 
            />
            <HeroStats translations={t.raw('stats')} />
          </div>
        </div>
      </section>
  )
}

export default HeroSection