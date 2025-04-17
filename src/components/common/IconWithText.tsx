"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface IconWithTextProps {
  icon: LucideIcon
  text: string
  iconClassName?: string
  textClassName?: string
  className?: string
}

const IconWithText = ({
  icon: Icon,
  text,
  iconClassName = "",
  textClassName = "",
  className = ""
}: IconWithTextProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Icon className={iconClassName} size={18} />
      <span className={textClassName}>{text}</span>
    </div>
  )
}

export default IconWithText
