"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { ShimmerButton } from "./ShimmerButton";

const tiers = [
  {
    name: "Free",
    id: "free",
    price: "$0",
    features: [
      "30 expert prompt templates",
      "Save up to 10 custom prompts",
      "Basic usage analytics",
      "Chrome extension access",
      "Community support"
    ],
    notIncluded: [
      "Advanced analytics dashboard",
      "Unlimited custom templates",
      "AI advancement updates",
      "Multi-device sync",
      "Premium support"
    ],
    gradient: "bg-gradient-to-br from-secondary/40 to-secondary/5",
    buttonText: "Get Started",
    buttonColor: "hsl(var(--secondary))",
    popular: false,
  },
  {
    name: "Pro",
    id: "pro",
    price: "$9.99",
    period: "per month",
    features: [
      "Unlimited expert prompt templates",
      "Unlimited custom prompts",
      "Advanced analytics dashboard",
      "AI advancement updates",
      "Multi-device sync",
      "Premium support",
      "Early access to new features"
    ],
    notIncluded: [
      "Team collaboration",
      "Admin controls",
      "Custom onboarding"
    ],
    gradient: "bg-gradient-to-br from-primary/40 to-primary/5",
    buttonText: "Start Pro Trial",
    buttonColor: "hsl(var(--primary))",
    popular: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom prompt libraries",
      "Admin controls & user management",
      "Usage analytics for teams",
      "Dedicated account manager",
      "Custom onboarding & training",
      "Priority support"
    ],
    notIncluded: [],
    gradient: "bg-gradient-to-br from-purple-500/40 to-purple-500/5",
    buttonText: "Contact Us",
    buttonColor: "hsl(270, 70%, 65%)",
    popular: false,
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Choose the plan that best fits your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden border border-border ${tier.gradient} shadow-lg backdrop-blur-sm`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-bold text-primary-foreground bg-primary px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  {tier.period && (
                    <span className="ml-2 text-foreground/70">{tier.period}</span>
                  )}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-foreground mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {tier.notIncluded.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <h4 className="text-sm font-medium text-foreground/70 mb-4">Not included:</h4>
                    <ul className="space-y-3">
                      {tier.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <X className="h-4 w-4 text-foreground/40 mr-2 shrink-0" />
                          <span className="text-foreground/50 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-8">
                  <ShimmerButton
                    className="w-full py-6"
                    background={tier.buttonColor}
                    shimmerColor={tier.popular ? "#ffffff" : "rgba(255,255,255,0.2)"}
                    shimmerDuration={tier.popular ? "1.5s" : "2.5s"}
                  >
                    {tier.buttonText}
                  </ShimmerButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* FAQ note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-2">
            Have questions about our pricing?
          </p>
          <a
            href="#faq"
            className="text-primary hover:underline"
          >
            Check our FAQ section
          </a>
        </motion.div>
      </div>
    </section>
  );
}