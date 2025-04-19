"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Plus, 
  Minus, 
  MessageSquare, 
  Building, 
  Shield, 
  Lock, 
  Clock, 
  FileText, 
  Users,
  HeadphonesIcon,
  Database,
  RefreshCw,
  Settings,
  Globe,
  Server
} from "lucide-react"

const faqs = [
  {
    category: "Implementation",
    icon: <Building size={20} className="text-blue-500" />,
    questions: [
      {
        id: 1,
        question: "How long does it take to implement Jaydai across our organization?",
        answer: "Implementation timeframes vary based on your organization's size and requirements. Typically, our standard implementation takes 1-2 weeks, professional implementation 2-3 weeks, and enterprise implementations 4-6 weeks. We provide a detailed timeline during the discovery phase to ensure a smooth rollout tailored to your needs."
      },
      {
        id: 2,
        question: "Can we customize Jaydai to match our company branding?",
        answer: "Yes. Enterprise customers can customize the Jaydai interface with their company logo, colors, and branding elements. We also offer custom domain deployment, allowing you to host Jaydai on your own domain for a seamless branded experience across your organization."
      },
      {
        id: 3,
        question: "Do you provide training for our teams?",
        answer: "Absolutely. All enterprise packages include comprehensive training sessions for your teams. We offer role-specific training modules, hands-on workshops, and continuing education resources. Our training programs are designed to ensure your teams can effectively leverage AI prompt engineering for their specific roles and responsibilities."
      }
    ]
  },
  {
    category: "Security & Compliance",
    icon: <Shield size={20} className="text-purple-500" />,
    questions: [
      {
        id: 4,
        question: "How does Jaydai handle data privacy and security?",
        answer: "Jaydai was built with enterprise-grade security from the ground up. We use end-to-end encryption for all data, implement strict access controls, and store your data in SOC 2 Type II compliant facilities. Your prompts, templates, and analytics data remain private and secure. We do not train our models on your proprietary data or share it with third parties."
      },
      {
        id: 5,
        question: "Is Jaydai compliant with regulations like GDPR, HIPAA, and SOC 2?",
        answer: "Yes, Jaydai is designed to support compliance with major regulations. We are SOC 2 Type II certified and offer features to help you maintain GDPR and HIPAA compliance. For healthcare organizations, we offer specialized HIPAA-compliant deployment options with additional security controls and Business Associate Agreements (BAA) when required."
      },
      {
        id: 6,
        question: "Does Jaydai support Single Sign-On (SSO)?",
        answer: "Yes, enterprise plans include SSO integration with your existing identity provider such as Okta, Azure AD, Google Workspace, and others. This ensures seamless and secure access for your team members while maintaining your organization's authentication standards and policies."
      }
    ]
  },
  {
    category: "Features & Functionality",
    icon: <Settings size={20} className="text-green-500" />,
    questions: [
      {
        id: 7,
        question: "How many custom prompt templates can we create?",
        answer: "Enterprise plans include unlimited custom prompt templates. You can create as many organization-specific templates as needed, organized by department, use case, or any other categorization that works for your teams. Templates can be shared across the organization or restricted to specific teams based on your requirements."
      },
      {
        id: 8,
        question: "Can we track usage and ROI across departments?",
        answer: "Yes, the enterprise analytics dashboard provides comprehensive insights into usage patterns, time saved, and ROI across your organization. You can analyze data by department, team, or individual user to measure impact and optimize your implementation. Custom reports can be generated to align with your specific KPIs and business objectives."
      },
      {
        id: 9,
        question: "Does Jaydai integrate with other enterprise tools?",
        answer: "Yes, Jaydai offers enterprise API access and integrations with popular workplace tools including Microsoft Teams, Slack, Google Workspace, and more. Our enterprise solutions also support custom integrations with your existing systems and workflows. Our implementation team will work with you to ensure Jaydai fits seamlessly into your technology ecosystem."
      }
    ]
  },
  {
    category: "Support & Maintenance",
    icon: <HeadphonesIcon size={20} className="text-amber-500" />,
    questions: [
      {
        id: 10,
        question: "What kind of support does Jaydai provide for enterprise customers?",
        answer: "Enterprise customers receive priority support with guaranteed response times, a dedicated customer success manager, and regular check-ins to ensure your organization is maximizing value. We provide 24/7 technical support, quarterly business reviews, and ongoing optimization recommendations based on your usage patterns and feedback."
      },
      {
        id: 11,
        question: "How often is Jaydai updated with new features?",
        answer: "Jaydai is continuously improved with regular feature updates and enhancements. Enterprise customers receive priority access to new features, early access to beta functionality, and the ability to request custom feature development. We release major updates quarterly, with minor improvements and security updates deployed more frequently."
      },
      {
        id: 12,
        question: "Can we request custom features for our organization?",
        answer: "Yes, enterprise customers can request custom feature development tailored to their specific needs. Our product and engineering teams work closely with enterprise clients to understand requirements, prioritize development, and deliver custom solutions that address unique use cases and workflows. Custom development is included in enterprise plans based on scope and requirements."
      }
    ]
  }
]

const EnterpriseFAQSection = () => {
  const [activeCategory, setActiveCategory] = React.useState(faqs[0].category)
  const [openQuestions, setOpenQuestions] = React.useState<number[]>([])
  
  const toggleQuestion = (id: number) => {
    setOpenQuestions(prev => 
      prev.includes(id) 
        ? prev.filter(q => q !== id) 
        : [...prev, id]
    )
  }
  
  const activeFaqs = faqs.find(cat => cat.category === activeCategory)?.questions || []
  
  return (
    <section id="faq" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] pointer-events-none"></div>
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
              <MessageSquare size={14} />
              <span>Enterprise Support</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            Everything you need to know about our enterprise solutions
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {faqs.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === category.category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-foreground/70 hover:border-primary/30 hover:bg-primary/5"
                }`}
              >
                {category.icon}
                <span>{category.category}</span>
              </button>
            ))}
          </motion.div>
          
          {/* FAQ accordions */}
          <div className="space-y-4">
            {activeFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {openQuestions.includes(faq.id) ? (
                      <Minus size={20} className="text-primary" />
                    ) : (
                      <Plus size={20} className="text-primary" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openQuestions.includes(faq.id) 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-foreground/80 border-t border-border/50">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Additional support information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-center mb-8">Enterprise Support Resources</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 mb-4">
                  <FileText size={24} className="text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold">Documentation</h4>
                <p className="text-foreground/70 mt-2">Comprehensive guides and API documentation for technical teams</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500/10 mb-4">
                  <Users size={24} className="text-purple-500" />
                </div>
                <h4 className="text-lg font-semibold">Customer Success</h4>
                <p className="text-foreground/70 mt-2">Dedicated team to ensure maximum value from your implementation</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/10 mb-4">
                  <HeadphonesIcon size={24} className="text-green-500" />
                </div>
                <h4 className="text-lg font-semibold">24/7 Support</h4>
                <p className="text-foreground/70 mt-2">Priority support with guaranteed response times for critical issues</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500/10 mb-4">
                  <RefreshCw size={24} className="text-amber-500" />
                </div>
                <h4 className="text-lg font-semibold">Regular Updates</h4>
                <p className="text-foreground/70 mt-2">Continuous improvements and priority access to new features</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 mb-6">
            Still have questions? Our enterprise team is here to help.
          </p>
          <a
            href="#contact"
            className="px-6 py-2 rounded-md bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseFAQSection