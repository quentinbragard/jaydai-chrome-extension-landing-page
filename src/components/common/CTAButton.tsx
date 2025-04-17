"use client"
import { ReactNode } from "react"
import { ShimmerButton as ShadcnShimmerButton } from "@/components/ui/shimmer-button"

interface CTAButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: "primary" | "secondary" | "shimmer"
  className?: string
  target?: "_blank" | "_self"
}

const CTAButton = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  target = "_self"
}: CTAButtonProps) => {
  const getButtonClasses = () => {
    switch (variant) {
      case "primary":
        return "px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
      case "secondary":
        return "px-8 py-3 rounded-md bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors font-medium"
      default:
        return ""
    }
  }

  const buttonClasses = variant !== "shimmer" ? getButtonClasses() : ""
  
  if (variant === "shimmer") {
    return (
      <ShadcnShimmerButton
        onClick={onClick}
        className={`px-8 py-3 rounded-md text-primary-foreground font-black ${className}`}
        shimmerColor="#FFCD00" // Gold shimmer effect
        shimmerSize="0.05em"
        shimmerDuration="3s"
        borderRadius="0.375rem"
        background="hsl(var(--primary))"
      >
        {children}
      </ShadcnShimmerButton>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        className={`${buttonClasses} ${className} inline-block text-center`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${buttonClasses} ${className}`}
    >
      {children}
    </button>
  )
}

export default CTAButton
