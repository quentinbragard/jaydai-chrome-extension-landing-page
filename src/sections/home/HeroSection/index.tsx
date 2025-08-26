"use client"

import React from "react"
import { useTranslations } from "next-intl"
import HeroContent from "./HeroContent"
import HeroStats from "./HeroStats"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

const HeroSection = ({ openVideoDialog }: { openVideoDialog: () => void }) => {
  const t = useTranslations('hero')

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <HeroContent
            openVideoDialog={openVideoDialog}
            translations={t}
          />
          <InfiniteSlider gap={20} reverse className="w-full sm:w-3/4 md:w-1/2 mt-8">
            <img
              src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/chatgpt_logo.png"
              alt="ChatGPT"
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <img
              src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/copilot_logo.png"
              alt="Copilot"
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <img
              src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/mistral_logo.png"
              alt="Mistral"
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <img
              src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/claude_logo.png"
              alt="Claude"
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <img
              src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/gemini_logo.png"
              alt="Gemini"
              className="h-12 w-12 md:h-16 md:w-16"
            />
            <img
              src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/perplexity_logo.png"
              alt="Perplexity"
              className="h-12 w-12 md:h-16 md:w-16"
            />
          </InfiniteSlider>
          <HeroStats translations={t.raw('stats')} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

