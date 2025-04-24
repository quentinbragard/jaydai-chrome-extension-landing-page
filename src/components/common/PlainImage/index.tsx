"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface PlainImageProps {
  imageUrl: string
  imageAlt?: string
  caption?: string
  width?: number
  height?: number
  aspectRatio?: "square" | "video" | "vertical" | "auto" | "custom"
  customAspectRatio?: string
  alignment?: "left" | "center" | "right"
  rounded?: boolean
  shadow?: boolean
  className?: string
  maxWidth?: string
  border?: boolean
  index?: number
}

const PlainImage: React.FC<PlainImageProps> = ({
  imageUrl,
  imageAlt = "",
  caption,
  width,
  height,
  aspectRatio = "video",
  customAspectRatio,
  alignment = "center",
  rounded = true,
  shadow = true,
  border = false,
  maxWidth = "full",
  className = "",
  index = 0,
}) => {
  // Determine aspect ratio
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square"
      case "video":
        return "aspect-video"
      case "vertical":
        return "aspect-[3/4]"
      case "auto":
        return "" // No aspect ratio constraint
      case "custom":
        return customAspectRatio ? `aspect-[${customAspectRatio}]` : "aspect-video"
      default:
        return "aspect-video"
    }
  }

  // Get alignment class
  const getAlignmentClass = () => {
    switch (alignment) {
      case "left":
        return "mr-auto"
      case "right":
        return "ml-auto"
      case "center":
      default:
        return "mx-auto"
    }
  }

  // Get max width class
  const getMaxWidthClass = () => {
    if (maxWidth === "full") return "w-full"
    if (maxWidth.includes("px") || maxWidth.includes("%") || maxWidth.includes("rem")) {
      return `max-w-[${maxWidth}]`
    }
    return `max-w-${maxWidth}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={cn(
        "my-8",
        getMaxWidthClass(),
        getAlignmentClass(),
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          getAspectRatioClass(),
          rounded && "rounded-xl",
          shadow && "shadow-md",
          border && "border border-border"
        )}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={index < 2} // Set priority for the first two images
        />
      </div>
      
      {caption && (
        <p className="text-center text-sm text-foreground/60 mt-2 italic">
          {caption}
        </p>
      )}
    </motion.div>
  )
}

export default PlainImage