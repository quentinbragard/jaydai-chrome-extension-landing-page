"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-4 text-left font-medium text-foreground hover:text-primary transition-colors"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-foreground/70">{answer}</p>
      </div>
    </div>
  )
}

interface FAQContainerProps {
  faqs: { question: string; answer: string }[]
  className?: string
}

const FAQContainer = ({ faqs, className = "" }: FAQContainerProps) => {
  const [openIndex, setOpenIndex] = React.useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className={`rounded-xl border border-border bg-card p-6 ${className}`}>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          onToggle={() => toggleFAQ(index)}
        />
      ))}
    </div>
  )
}

export default FAQContainer
