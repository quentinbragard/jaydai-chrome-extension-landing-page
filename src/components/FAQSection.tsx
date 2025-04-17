"use client"
import React, { useState } from "react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import FAQContainer from "./common/FAQContainer"
import AnimatedElement from "./common/AnimatedElement"
import CTAButton from "./common/CTAButton"

const faqs = [
  {
    question: "What is Jaydai?",
    answer: "Jaydai is a Chrome extension that enhances your ChatGPT experience with expert prompts, custom templates, and detailed analytics. It helps you get better results from AI while saving time."
  },
  {
    question: "How does Jaydai improve my ChatGPT experience?",
    answer: "Jaydai provides a library of expert-crafted prompts, allows you to create and save your own templates, and offers detailed analytics on your AI usage. This helps you get more consistent, high-quality responses while saving time on prompt writing."
  },
  {
    question: "Is Jaydai compatible with ChatGPT Plus?",
    answer: "Yes, Jaydai works seamlessly with both free and Plus versions of ChatGPT. It enhances the experience regardless of your subscription level."
  },
  {
    question: "Can I share my templates with my team?",
    answer: "Yes, with our Team plan, you can create a shared template library for your entire organization, ensuring consistent AI interactions across your team."
  },
  {
    question: "How secure is my data with Jaydai?",
    answer: "We take security seriously. Jaydai doesn't store your ChatGPT conversations on our servers. Your templates are securely stored and encrypted, and you have full control over your data."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a free plan with limited features so you can experience the benefits of Jaydai before upgrading to our Pro or Team plans."
  }
]

const FAQSection = () => {
  return (
    <SectionWrapper id="faq" className="bg-muted">
      <SectionHeading 
        title="Frequently Asked Questions"
        description="Everything you need to know about Jaydai"
      />
      
      <div className="max-w-3xl mx-auto">
        <FAQContainer faqs={faqs} />
        
        <AnimatedElement animation="fadeInUp" delay={0.5} className="mt-12 text-center">
          <p className="text-foreground/70 mb-6">
            Still have questions? We're here to help.
          </p>
          <CTAButton
            href="#contact"
            variant="primary"
          >
            Contact Us
          </CTAButton>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  )
}

export default FAQSection
