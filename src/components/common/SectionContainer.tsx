"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionContainerProps {
  id?: string
  children: ReactNode
  className?: string
  background?: "default" | "alt"
}

const SectionContainer = ({ 
  id, 
  children, 
  className = "", 
  background = "default" 
}: SectionContainerProps) => {
  const bgClass = background === "alt" ? "bg-muted" : "bg-background"
  
  return (
    <section id={id} className={`py-20 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
