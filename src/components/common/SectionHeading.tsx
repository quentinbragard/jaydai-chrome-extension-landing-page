"use client"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  titleClassName?: string
  descriptionClassName?: string
}

const SectionHeading = ({
  title,
  description,
  centered = true,
  titleClassName = "",
  descriptionClassName = ""
}: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-bold text-foreground ${titleClassName}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-4 text-xl text-foreground/70 ${centered ? "max-w-2xl mx-auto" : ""} ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading
