"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"

interface GridContainerProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

const GridContainer = ({
  children,
  columns = 3,
  gap = 'md',
  className = ""
}: GridContainerProps) => {
  const columnsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }
  
  const gapMap = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8"
  }
  
  return (
    <div className={`grid ${columnsMap[columns]} ${gapMap[gap]} ${className}`}>
      {children}
    </div>
  )
}

export default GridContainer
