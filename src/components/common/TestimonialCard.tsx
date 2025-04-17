"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  company?: string
  avatarSrc?: string
  delay?: number
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatarSrc,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          {/* Quote marks */}
          <svg
            className="h-8 w-8 text-primary/40"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        
        <p className="text-foreground/80 flex-grow">{quote}</p>
        
        <div className="mt-6 flex items-center">
          {avatarSrc && (
            <div className="flex-shrink-0 mr-3">
              <img
                className="h-10 w-10 rounded-full"
                src={avatarSrc}
                alt={author}
              />
            </div>
          )}
          <div>
            <p className="text-foreground font-medium">{author}</p>
            {(role || company) && (
              <p className="text-foreground/60 text-sm">
                {role}{role && company && ", "}{company}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
