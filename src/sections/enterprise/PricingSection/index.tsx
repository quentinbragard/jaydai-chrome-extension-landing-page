"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
  Check, 
  X, 
  HelpCircle, 
  Building, 
  Users, 
  BarChart3, 
  Shield, 
  Zap,
  MessageCircle,
  ArrowRight,
  Calendar,
  CheckCircle,
  FileText
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

// Helper function to get the right icon for feature categories
const getIconForCategory = (iconName: string, size: number, className: string) => {
  switch (iconName) {
    case "Users":
      return <Users size={size} className={className} />;
    case "Shield":
      return <Shield size={size} className={className} />;
    case "BarChart3":
      return <BarChart3 size={size} className={className} />;
    case "Zap":
      return <Zap size={size} className={className} />;
    case "Building":
      return <Building size={size} className={className} />;
    case "MessageCircle":
      return <MessageCircle size={size} className={className} />;
    default:
      return <Building size={size} className={className} />;
  }
};

const FeatureItem = ({ feature, included = true, featureTooltips }: { feature: string, included?: boolean, featureTooltips: any }) => (
  <li className="flex items-start gap-2 py-2">
    {included ? (
      <Check className="h-5 w-5 shrink-0 text-green-500" />
    ) : (
      <X className="h-5 w-5 shrink-0 text-red-400/70" />
    )}
    <span className={included ? "text-foreground/90" : "text-foreground/50"}>
      {feature}
      {featureTooltips[feature as keyof typeof featureTooltips] && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="inline-block ml-1 h-3.5 w-3.5 text-foreground/40" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>{featureTooltips[feature as keyof typeof featureTooltips]}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </span>
  </li>
);

const PricingCard = ({ 
  plan, 
  billingCycle,
  featureLabels,
  featureTooltips
}: { 
  plan: any, 
  billingCycle: "monthly" | "annually",
  featureLabels: any,
  featureTooltips: any
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: plan.id === "enterprise" ? 0.2 : 0.1 }}
      className={`relative bg-card rounded-xl overflow-hidden border ${
        plan.highlight 
          ? "border-primary/50 shadow-lg shadow-primary/10" 
          : "border-border"
      }`}
    >
      {plan.highlight && (
        <div className="absolute inset-x-0 top-0 h-2 bg-primary" />
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-foreground/60 text-sm mt-1">{plan.description}</p>
          </div>
          
          {plan.highlight && (
            <div className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
              {featureLabels.popular}
            </div>
          )}
        </div>
        
        <div className="mt-6 flex items-baseline">
          <span className="text-4xl font-bold">{plan.price[billingCycle]}</span>
          <span className="ml-2 text-foreground/70 text-sm">{plan.unit}</span>
        </div>
        
        <div className="mt-8">
          <Link
            href={plan.id === "enterprise" ? "#contact" : "#"}
            className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-md ${
              plan.highlight
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary/50 text-foreground hover:bg-secondary/70"
            } transition-colors text-sm font-medium`}
          >
            {plan.cta}
            {plan.id === "enterprise" && <ArrowRight size={14} />}
          </Link>
        </div>
        
        <div className="mt-8 space-y-2">
          <div className="text-sm font-medium text-foreground flex items-center gap-2">
            <CheckCircle size={14} className="text-primary" />
            {featureLabels.included}
          </div>
          <ul className="space-y-1 text-sm">
            {plan.features.map((feature: string, index: number) => (
              <FeatureItem key={index} feature={feature} featureTooltips={featureTooltips} />
            ))}
          </ul>
        </div>
        
        {plan.notIncluded && plan.notIncluded.length > 0 && (
          <div className="mt-8 space-y-2 pt-4 border-t border-border/50">
            <div className="text-sm text-foreground/50 flex items-center gap-2">
              <X size={14} />
              {featureLabels.notIncluded}
            </div>
            <ul className="space-y-1 text-sm">
              {plan.notIncluded.map((feature: string, index: number) => (
                <FeatureItem key={index} feature={feature} included={false} featureTooltips={featureTooltips} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Define missing icons
const Search = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const Rocket = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const Graduation = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export default function EnterprisePricingSection() {
  const t = useTranslations('enterprisePricing');
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");

  // Get data from translations
  const offerings = t.raw('offerings');
  const enterpriseFeaturesCategories = t.raw('enterpriseFeatures.categories');
  const processSteps = t.raw('implementation.process.steps');
  const featureTooltips = t.raw('featureTooltips');
  const featureLabels = t.raw('featureLabels');
  
  return (
    <section id="pricing" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:25px_25px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6"
          >
            <span className="flex items-center gap-1.5">
              <Building size={14} />
              <span>{t('badge')}</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {t('title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <Tabs defaultValue="plans" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="plans">{t('tabs.plans')}</TabsTrigger>
              <TabsTrigger value="implementation">{t('tabs.implementation')}</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="plans" className="mt-0">
            {/* Billing toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-card border border-border rounded-lg p-1 inline-flex">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    billingCycle === "monthly"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary/10"
                  } transition-colors`}
                >
                  {t('billingToggle.monthly')}
                </button>
                <button
                  onClick={() => setBillingCycle("annually")}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    billingCycle === "annually"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary/10"
                  } transition-colors`}
                >
                  {t('billingToggle.annually')} <span className="text-xs font-normal">{t('billingToggle.discount')}</span>
                </button>
              </div>
            </div>
            
            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {offerings.map((offering: any) => (
                <PricingCard 
                  key={offering.id} 
                  plan={offering} 
                  billingCycle={billingCycle} 
                  featureLabels={featureLabels}
                  featureTooltips={featureTooltips}
                />
              ))}
            </div>
            
            {/* Enterprise features grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 max-w-5xl mx-auto"
            >
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">{t('enterpriseFeatures.title')}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enterpriseFeaturesCategories.map((category: any, index: number) => (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg bg-${category.color}-500/10`}>
                          {getIconForCategory(category.icon, 18, `text-${category.color}-500`)}
                        </div>
                        <h4 className="font-semibold">{category.title}</h4>
                      </div>
                      <ul className="space-y-2 text-sm pl-9">
                        {category.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check size={14} className="text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="implementation" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 max-w-3xl mx-auto"
            >
              <p className="text-foreground/70">
                {t('implementation.intro')}
              </p>
            </motion.div>
            
            {/* Implementation process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 max-w-5xl mx-auto"
            >
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">{t('implementation.process.title')}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {processSteps.map((phase: any, index: number) => {
                    // Setup icons based on step number
                    const icons = [
                      <Search size={24} className="text-blue-500" key="search" />,
                      <FileText size={24} className="text-purple-500" key="filetext" />,
                      <Rocket size={24} className="text-green-500" key="rocket" />,
                      <Graduation size={24} className="text-amber-500" key="graduation" />
                    ];
                    
                    return (
                      <div key={index} className="text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                          <span className="text-lg font-bold">{index + 1}</span>
                        </div>
                        <h4 className="font-semibold mb-2">{phase.title}</h4>
                        <p className="text-sm text-foreground/70">{phase.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            {t('finalCta.text')}
          </p>
          <Link
            href="#contact"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
          >
            <span>{t('finalCta.button')}</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
