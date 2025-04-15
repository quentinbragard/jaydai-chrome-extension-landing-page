"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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

// Feature tooltip details
const featureInfos = {
  "customPrompts": "Develop bespoke prompt templates tailored to your company's specific needs and use cases.",
  "teamSharing": "Share prompt templates and libraries across your entire organization with role-based access control.",
  "dataPrivacy": "Advanced data privacy controls ensuring your prompt data and analytics remain secure.",
  "dedicatedSuccess": "A dedicated customer success manager will help you implement and optimize Jaydai across your organization.",
  "analytics": "Track usage, ROI, and efficiency gains across teams and departments.",
  "apiAccess": "Access Jaydai's functionality programmatically through our secure enterprise API.",
  "prioritySupport": "24/7 priority support with guaranteed response times.",
  "customTraining": "Tailored training sessions for teams to master prompt engineering and AI workflows.",
  "customDomain": "Deploy Jaydai on your own custom domain for enterprise-wide access.",
  "ssoIntegration": "Single sign-on integration with your existing identity provider.",
  "promptLibrary": "Access to our full library of expert-crafted prompt templates across industries.",
  "complianceReporting": "Detailed compliance reporting for AI usage across your organization."
}

// Pricing plans
const pricingPlans = [
  {
    id: "business",
    name: "Business",
    description: "Perfect for small to medium businesses looking to standardize AI usage.",
    price: {
      monthly: "$29",
      annually: "$24"
    },
    unit: "per user / month",
    cta: "Get Started",
    highlight: false,
    features: [
      "Up to 50 team members",
      "Team prompt sharing",
      "10 custom prompt templates",
      "Basic analytics dashboard",
      "Standard support",
      "Email support",
      "Community access"
    ],
    notIncluded: [
      "Custom implementation",
      "Dedicated success manager",
      "Advanced compliance controls",
      "SSO integration",
      "Custom domain"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For organizations seeking advanced customization and enterprise features.",
    price: {
      monthly: "Custom",
      annually: "Custom"
    },
    unit: "tailored pricing",
    cta: "Contact Sales",
    highlight: true,
    features: [
      "Unlimited team members",
      "Advanced role-based access",
      "Unlimited custom templates",
      "Enterprise analytics dashboard",
      "Dedicated success manager",
      "24/7 priority support",
      "Custom implementation",
      "Team training workshops",
      "SSO integration",
      "Custom domain",
      "API access",
      "Compliance reporting",
      "Data privacy controls",
      "Custom feature development"
    ],
    notIncluded: []
  }
];

// Implementation packages
const implementationPackages = [
  {
    name: "Standard",
    description: "Basic implementation support for smaller teams",
    price: "$2,500",
    features: [
      "Up to 50 users",
      "2 departments",
      "5 custom templates",
      "1 training session",
      "Email setup support"
    ],
    timeframe: "1-2 weeks",
    cta: "Select Package"
  },
  {
    name: "Professional",
    description: "Comprehensive implementation for mid-size organizations",
    price: "$5,000",
    features: [
      "Up to 200 users",
      "5 departments",
      "15 custom templates",
      "3 training sessions",
      "Integration support",
      "30-day post-launch support"
    ],
    timeframe: "2-3 weeks",
    highlight: true,
    cta: "Select Package"
  },
  {
    name: "Enterprise",
    description: "Full-service implementation for large organizations",
    price: "Custom",
    features: [
      "Unlimited users",
      "All departments",
      "Custom template library",
      "Unlimited training",
      "Dedicated project manager",
      "Full integration support",
      "90-day post-launch support",
      "Quarterly business reviews"
    ],
    timeframe: "4-6 weeks",
    cta: "Contact Sales"
  }
];

const FeatureItem = ({ feature, included = true }: { feature: string, included?: boolean }) => (
  <li className="flex items-start gap-2 py-2">
    {included ? (
      <Check className="h-5 w-5 shrink-0 text-green-500" />
    ) : (
      <X className="h-5 w-5 shrink-0 text-red-400/70" />
    )}
    <span className={included ? "text-foreground/90" : "text-foreground/50"}>
      {feature}
      {featureInfos[feature as keyof typeof featureInfos] && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="inline-block ml-1 h-3.5 w-3.5 text-foreground/40" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>{featureInfos[feature as keyof typeof featureInfos]}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </span>
  </li>
);

const PricingCard = ({ 
  plan, 
  billingCycle 
}: { 
  plan: typeof pricingPlans[0], 
  billingCycle: "monthly" | "annually" 
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
              Popular
            </div>
          )}
        </div>
        
        <div className="mt-6 flex items-baseline">
          <span className="text-4xl font-bold">{plan.price[billingCycle]}</span>
          {plan.price[billingCycle] !== "Custom" && (
            <span className="ml-2 text-foreground/70 text-sm">{plan.unit}</span>
          )}
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
            What's included:
          </div>
          <ul className="space-y-1 text-sm">
            {plan.features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </ul>
        </div>
        
        {plan.notIncluded.length > 0 && (
          <div className="mt-8 space-y-2 pt-4 border-t border-border/50">
            <div className="text-sm text-foreground/50 flex items-center gap-2">
              <X size={14} />
              Not included:
            </div>
            <ul className="space-y-1 text-sm">
              {plan.notIncluded.map((feature, index) => (
                <FeatureItem key={index} feature={feature} included={false} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ImplementationCard = ({ 
  pack, 
  index 
}: { 
  pack: typeof implementationPackages[0], 
  index: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`bg-card rounded-xl overflow-hidden border ${
        pack.highlight
          ? "border-primary/50 shadow-lg shadow-primary/10" 
          : "border-border"
      }`}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold">{pack.name}</h3>
        <p className="text-foreground/60 text-sm mt-1">{pack.description}</p>
        
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{pack.price}</span>
          <span className="ml-2 text-foreground/70 text-sm">one-time fee</span>
        </div>
        
        <div className="flex items-center gap-2 mt-3 text-sm text-foreground/70">
          <Calendar size={14} />
          <span>Estimated timeframe: {pack.timeframe}</span>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="text-sm font-medium text-foreground">Package includes:</div>
          <ul className="space-y-2 text-sm">
            {pack.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-4 w-4 shrink-0 text-green-500 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6">
          <Link
            href={pack.name === "Enterprise" ? "#contact" : "#"}
            className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-md ${
              pack.highlight
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary/50 text-foreground hover:bg-secondary/70"
            } transition-colors text-sm font-medium`}
          >
            {pack.cta}
            {pack.name === "Enterprise" && <ArrowRight size={14} />}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const EnterprisePricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");
  
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
              <span>Enterprise Solutions</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Transparent Enterprise Pricing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            Flexible options to support your organization's AI transformation
          </motion.p>
        </div>

        <Tabs defaultValue="plans" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
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
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annually")}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    billingCycle === "annually"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary/10"
                  } transition-colors`}
                >
                  Annually <span className="text-xs font-normal">(-20%)</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} />
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
                <h3 className="text-xl font-bold mb-6 text-center">Enterprise-grade features</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Users size={18} className="text-blue-500" />
                      </div>
                      <h4 className="font-semibold">Team Management</h4>
                    </div>
                    <ul className="space-y-2 text-sm pl-9">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Role-based access control</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Team template sharing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Team analytics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <Shield size={18} className="text-purple-500" />
                      </div>
                      <h4 className="font-semibold">Security & Compliance</h4>
                    </div>
                    <ul className="space-y-2 text-sm pl-9">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>SSO integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Data privacy controls</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Compliance reporting</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-green-500/10">
                        <BarChart3 size={18} className="text-green-500" />
                      </div>
                      <h4 className="font-semibold">Enterprise Analytics</h4>
                    </div>
                    <ul className="space-y-2 text-sm pl-9">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>ROI tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Department analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Custom reporting</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-amber-500/10">
                        <Zap size={18} className="text-amber-500" />
                      </div>
                      <h4 className="font-semibold">Expert Support</h4>
                    </div>
                    <ul className="space-y-2 text-sm pl-9">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Dedicated success manager</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>24/7 priority support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Quarterly business reviews</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-pink-500/10">
                        <Building size={18} className="text-pink-500" />
                      </div>
                      <h4 className="font-semibold">Custom Deployment</h4>
                    </div>
                    <ul className="space-y-2 text-sm pl-9">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Custom domain</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>API access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Integration support</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-indigo-500/10">
                        <MessageCircle size={18} className="text-indigo-500" />
                      </div>
                      <h4 className="font-semibold">Customization</h4>
                    </div>
                    <ul className="space-y-2 text-sm pl-9">
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Custom prompt libraries</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Custom training</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check size={14} className="text-green-500" />
                        <span>Custom feature development</span>
                      </li>
                    </ul>
                  </div>
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
                Our professional implementation services ensure your organization gets maximum value from Jaydai from day one.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {implementationPackages.map((pack, index) => (
                <ImplementationCard key={pack.name} pack={pack} index={index} />
              ))}
            </div>
            
            {/* Implementation process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 max-w-5xl mx-auto"
            >
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Our Implementation Process</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      step: 1,
                      title: "Discovery",
                      description: "We analyze your current workflows and identify AI opportunities.",
                      icon: <Search size={24} className="text-blue-500" />
                    },
                    {
                      step: 2,
                      title: "Planning",
                      description: "We design a tailored implementation strategy for your organization.",
                      icon: <FileText size={24} className="text-purple-500" />
                    },
                    {
                      step: 3,
                      title: "Deployment",
                      description: "We set up Jaydai across your organization with custom templates.",
                      icon: <Rocket size={24} className="text-green-500" />
                    },
                    {
                      step: 4,
                      title: "Training",
                      description: "We train your teams and provide ongoing support and optimization.",
                      icon: <Graduation size={24} className="text-amber-500" />
                    }
                  ].map((phase) => (
                    <div key={phase.step} className="text-center">
                      <div className="mx-auto w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                        <span className="text-lg font-bold">{phase.step}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{phase.title}</h4>
                      <p className="text-sm text-foreground/70">{phase.description}</p>
                    </div>
                  ))}
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
            Need a custom solution for your organization? We offer tailored enterprise packages to meet your specific requirements.
          </p>
          <Link
            href="#contact"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
          >
            <span>Contact Our Enterprise Team</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
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

export default EnterprisePricingSection;