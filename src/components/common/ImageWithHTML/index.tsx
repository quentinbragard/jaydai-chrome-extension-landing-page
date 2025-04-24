"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ImageWithHTMLProps {
  html: string
  imageUrl: string
  imagePosition?: "left" | "right" | "top" | "bottom" | "center"
  imageAlt?: string
  className?: string
  index?: number
  aspectRatio?: "square" | "video" | "vertical" | "custom"
  customAspectRatio?: string // e.g. "4/3"
  roundedImage?: boolean
  shadow?: boolean
  maxWidth?: string // e.g. "400px"
}

const ImageWithHTML: React.FC<ImageWithHTMLProps> = ({
  html,
  imageUrl,
  imagePosition = "right",
  imageAlt = "Image",
  className = "",
  index = 0,
  aspectRatio = "video", // 16/9 by default
  customAspectRatio,
  roundedImage = true,
  shadow = true,
  maxWidth,
}) => {
  // Define aspect ratio class
  const getAspectRatio = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square"
      case "video":
        return "aspect-video"
      case "vertical":
        return "aspect-[3/4]"
      case "custom":
        return customAspectRatio ? `aspect-[${customAspectRatio}]` : "aspect-video"
      default:
        return "aspect-video"
    }
  }

  // Handle different layout based on image position
  const renderContent = () => {
    const imageElement = (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        className={cn(
          getAspectRatio(),
          "relative overflow-hidden w-full",
          roundedImage && "rounded-xl",
          shadow && "shadow-lg",
          maxWidth && `max-w-[${maxWidth}]`
        )}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </motion.div>
    )

    const htmlElement = (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )

    // Return the appropriate layout based on image position
    switch (imagePosition) {
      case "left":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>{imageElement}</div>
            <div>{htmlElement}</div>
          </div>
        )
      case "right":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>{htmlElement}</div>
            <div>{imageElement}</div>
          </div>
        )
      case "top":
        return (
          <div className="flex flex-col gap-6">
            <div>{imageElement}</div>
            <div>{htmlElement}</div>
          </div>
        )
      case "bottom":
        return (
          <div className="flex flex-col gap-6">
            <div>{htmlElement}</div>
            <div>{imageElement}</div>
          </div>
        )
      case "center":
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">{htmlElement}</div>
            <div className="max-w-2xl mx-auto">{imageElement}</div>
          </div>
        )
      default:
        return (
          <div className="flex flex-col gap-6">
            <div>{htmlElement}</div>
            <div>{imageElement}</div>
          </div>
        )
    }
  }

  return (
    <div className={`my-12 ${className}`}>
      {renderContent()}
    </div>
  )
}

export default ImageWithHTML