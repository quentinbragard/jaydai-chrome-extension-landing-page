"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Building2 } from "lucide-react";
import { ShimmerButton } from "@/components/ShimmerButton";
import { useTranslations } from "next-intl";

export default function PricingSection() {
  const t = useTranslations("pricing");
  return (
    <section
      id="pricing"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background gradient decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-30 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-30 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Free Tier Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-primary/30 
            bg-gradient-to-br from-primary/10 to-background shadow-[0_0_0_1px_rgba(255,255,255,0.05)] 
            backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] before:absolute 
            before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br 
            before:from-primary/40 before:to-primary/10 before:content-[''] before:z-[-1]"
          >
            <div className="absolute -top-10 -right-10">
              <div className="w-40 h-40 bg-primary/10 rounded-full blur-xl" />
            </div>
            <div className="absolute -bottom-8 -left-8">
              <div className="w-32 h-32 bg-primary/10 rounded-full blur-lg" />
            </div>

            <div className="p-8 md:p-10 relative z-10">
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-md animate-pulse">
                {t("freePlan.badge")}
              </div>

              <div className="md:flex justify-between items-start gap-8">
                <div className="md:flex-1">
                  <h3 className="text-3xl font-bold text-foreground">
                    {t("freePlan.name")}
                  </h3>
                  <p className="mt-3 text-foreground/70 max-w-md">
                    {t("freePlan.description")}
                  </p>

                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-foreground mb-4">
                      {t("freePlan.featuresTitle")}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                      {t.raw("freePlan.features").map((feature: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 md:mt-0 md:w-64 flex flex-col">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-extrabold text-foreground tracking-tight">
                      {t("freePlan.price")}
                    </div>
                    <div className="text-sm text-foreground/60 mt-1 uppercase tracking-wide">
                      {t("freePlan.priceSubtext")}
                    </div>
                  </div>

                  <ShimmerButton
                    className="w-full py-6 text-lg hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-shadow"
                    background="hsl(var(--primary))"
                    shimmerColor="#ffffff"
                    shimmerDuration="1.5s"
                    shimmerSize="0.1em"
                  >
                    {t("freePlan.ctaText")}
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
            className="relative rounded-xl overflow-hidden border border-muted bg-card shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center shrink-0">
                  <Building2 className="text-secondary" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {t("enterprise.title")}
                      </h3>
                      <p className="mt-1 text-foreground/70">
                        {t("enterprise.description")}
                      </p>
                    </div>

                    <a
                      href="/enterprise"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg 
                      bg-primary text-primary-foreground hover:bg-primary/90 
                      transition-colors duration-200 shadow-md"
                    >
                      <span>{t("enterprise.ctaText")}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {t.raw("enterprise.features").map((feature: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-2">
            {t("faqPrompt")}
          </p>
          <a href="#faq" className="text-primary hover:underline">
            {t("faqLink")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
