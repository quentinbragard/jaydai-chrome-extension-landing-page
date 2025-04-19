"use client"
import { useTranslations } from 'next-intl'
import React from "react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import AnimatedElement from "./common/AnimatedElement"
import Card from "./common/Card"
import GridContainer from "./common/GridContainer"
import CTAButton from "./common/CTAButton"
import { BookOpen, Lightbulb, Sparkles } from "lucide-react"
import Image from "next/image"

const LearnSection = () => {
  const t = useTranslations('learn')
  
  return (
    <SectionWrapper id="learn" className="bg-background">
      <SectionHeading 
        title={t('title')}
        description={t('subtitle')}
      />
      
      <div className="max-w-6xl mx-auto">
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">{t('mainHeading')}</h3>
                <p className="text-foreground/70 mb-6">
                  {t('mainDescription')}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {t.raw('benefits').map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <CTAButton
                  href="/learn"
                  variant="primary"
                >
                  {t('mainCta')}
                </CTAButton>
              </div>
              
              <div className="relative aspect-auto lg:aspect-auto bg-muted">
                <Image
                  src="/images/learn_chatgpt.jpg"
                  alt="Learn ChatGPT with Jaydai"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedElement>
        
        <SectionHeading 
          title={t('resourcesTitle')}
          description={t('resourcesSubtitle')}
          titleClassName="text-2xl md:text-3xl"
        />
        
        <GridContainer columns={3} gap="lg" className="max-w-6xl mx-auto">
          {t.raw('resources').map((resource: any, index: number) => (
            <AnimatedElement key={index} animation="fadeInUp" delay={0.1 * (index + 1)}>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {index === 0 ? (
                    <BookOpen className="text-primary" size={24} />
                  ) : index === 1 ? (
                    <Lightbulb className="text-primary" size={24} />
                  ) : (
                    <Sparkles className="text-primary" size={24} />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{resource.title}</h3>
                <p className="text-foreground/70 mb-4">{resource.description}</p>
                <CTAButton
                  href={resource.link}
                  variant="secondary"
                  className="mt-auto"
                >
                  {resource.cta}
                </CTAButton>
              </Card>
            </AnimatedElement>
          ))}
        </GridContainer>
      </div>
    </SectionWrapper>
  )
}

export default LearnSection
