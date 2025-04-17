"use client"

import React from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What is Jaydai and how does it work?",
    answer: "Jaydai is a Chrome extension that enhances your ChatGPT experience by providing a library of expert prompts organized by topic. It allows you to save custom prompts for instant access and provides detailed analytics on your usage. With just one click, you can access our ecosystem designed to optimize your interactions with ChatGPT for both professional and personal projects."
  },
  {
    id: 2,
    question: "Is Jaydai free to use?",
    answer: "Yes, Jaydai offers a free version that includes access to our basic prompt library and template saving features. We also offer premium plans for individuals and teams that include additional features such as advanced analytics, unlimited template storage, and priority support."
  },
  {
    id: 3,
    question: "How do I install the Jaydai Chrome extension?",
    answer: "Installing Jaydai is simple. Just visit the Chrome Web Store, search for 'Jaydai', and click 'Add to Chrome'. Once installed, you'll see the Jaydai icon in your browser toolbar. Click on it to start using our prompt library and templates with ChatGPT."
  },
  {
    id: 4,
    question: "Can I create and save my own prompt templates?",
    answer: "Absolutely! Jaydai allows you to create, save, and organize your own custom prompt templates. This feature helps you save time when working on different projects that require similar AI interactions. You can categorize your templates, edit them anytime, and access them with just one click."
  },
  {
    id: 5,
    question: "What kind of analytics does Jaydai provide?",
    answer: "Jaydai provides detailed analytics on your AI usage, including the number of prompts used, time saved, energy footprint, and effectiveness of different prompt types. These insights help you understand your interaction patterns and optimize your AI workflow for better results."
  },
  {
    id: 6,
    question: "Is there an enterprise version available for teams?",
    answer: "Yes, we offer an enterprise version that allows your entire team to share a customized prompt bank for your specific business use cases. The enterprise plan includes team management features, shared templates, usage analytics across the team, and dedicated support."
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Everything you need to know about Jaydai
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus size={20} className="text-primary" />
                    ) : (
                      <Plus size={20} className="text-primary" />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-foreground/70">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-6">
              Still have questions? We're here to help.
            </p>
            <a
              href="#contact"
              className="px-6 py-2 rounded-md bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
