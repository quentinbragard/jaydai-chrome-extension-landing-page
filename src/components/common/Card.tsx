"use client"
import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

const Card = ({
  children,
  className = "",
  hoverEffect = true
}: CardProps) => {
  const hoverClasses = hoverEffect 
    ? "hover:shadow-lg hover:border-primary/20 transition-all duration-300" 
    : "";
  
  return (
    <div className={`p-6 rounded-xl border border-border bg-card ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

export default Card
