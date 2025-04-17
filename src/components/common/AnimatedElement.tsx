"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedElementProps {
  children: ReactNode
  delay?: number
  className?: string
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "scale"
  duration?: number
  once?: boolean
}

const AnimatedElement = ({
  children,
  delay = 0,
  className = "",
  animation = "fadeInUp",
  duration = 0.6,
  once = true
}: AnimatedElementProps) => {
  const getAnimationProps = () => {
    switch (animation) {
      case "fadeIn":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          whileInView: { opacity: 1 }
        }
      case "fadeInUp":
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          whileInView: { opacity: 1, y: 0 }
        }
      case "fadeInDown":
        return {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          whileInView: { opacity: 1, y: 0 }
        }
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          whileInView: { opacity: 1, scale: 1 }
        }
      default:
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          whileInView: { opacity: 1, y: 0 }
        }
    }
  }

  const animationProps = getAnimationProps()

  return (
    <motion.div
      {...animationProps}
      viewport={{ once }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedElement
