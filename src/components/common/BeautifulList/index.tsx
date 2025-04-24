"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, Star, ArrowRight, ChevronRight, Circle, BookOpen, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ListItem {
  title: string
  content: string
  icon?: string // Optional custom icon name (from Lucide)
}

export interface BeautifulListProps {
  items: ListItem[]
  title?: string
  description?: string
  listType?: "default" | "numbered" | "iconList"
  customIcon?: React.ReactNode // For a custom icon for all items
  iconColor?: string // For styling the icons
  className?: string
  index?: number
  compact?: boolean // For a more compact view
  size?: "small" | "medium" | "large" // Control overall size
}

const BeautifulList: React.FC<BeautifulListProps> = ({
  items,
  title,
  description,
  listType = "default",
  customIcon,
  iconColor = "text-primary",
  className = "",
  index = 0,
  compact = false,
  size = "medium",
}) => {
  // Function to determine text sizes based on size prop
  const getTitleSize = () => {
    switch (size) {
      case "small":
        return "text-xl sm:text-2xl font-bold mb-2"
      case "large":
        return "text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
      default: // medium
        return "text-xl sm:text-2xl md:text-3xl font-bold mb-2"
    }
  }

  const getDescriptionSize = () => {
    switch (size) {
      case "small":
        return "text-base text-foreground/70"
      case "large":
        return "text-lg md:text-xl text-foreground/70"
      default: // medium
        return "text-lg md:text-xl text-foreground/70"
    }
  }
  
  const getItemTitleSize = () => {
    switch (size) {
      case "small":
        return "text-lg font-bold mb-1"
      case "large":
        return "text-xl md:text-2xl font-bold mb-3"
      default: // medium
        return "text-xl md:text-2xl font-bold mb-2"
    }
  }
  
  const getItemContentSize = () => {
    switch (size) {
      case "small":
        return "text-base text-foreground/70"
      case "large":
        return "text-lg md:text-xl text-foreground/70"
      default: // medium
        return "text-lg md:text-xl text-foreground/70"
    }
  }

  // Function to get circle/container size based on size prop
  const getCircleSize = () => {
    switch (size) {
      case "small":
        return "w-10 h-10 md:w-12 md:h-12"
      case "large":
        return "w-14 h-14 md:w-16 md:h-16"
      default: // medium
        return "w-12 h-12 md:w-14 md:h-14"
    }
  }

  // Function to get text/icon size based on size prop
  const getContentSize = () => {
    switch (size) {
      case "small":
        return "text-lg"
      case "large":
        return "text-2xl md:text-3xl"
      default: // medium
        return "text-xl md:text-2xl"
    }
  }

  // Function to get icon size based on size prop
  const getIconSize = () => {
    switch (size) {
      case "small":
        return 16
      case "large":
        return 24
      default: // medium
        return 20
    }
  }

  // Function to get icon component by name
  const getIconByName = (name: string) => {
    const iconSize = getIconSize()
    
    switch (name?.toLowerCase()) {
      case "check":
        return <Check size={iconSize} className={iconColor} />
      case "star":
        return <Star size={iconSize} className={iconColor} />
      case "arrowright":
      case "arrow":
        return <ArrowRight size={iconSize} className={iconColor} />
      case "chevronright":
      case "chevron":
        return <ChevronRight size={iconSize} className={iconColor} />
      case "circle":
        return <Circle size={iconSize} className={iconColor} />
      case "book":
      case "bookopen":
        return <BookOpen size={iconSize} className={iconColor} />
      case "sparkles":
        return <Sparkles size={iconSize} className={iconColor} />
      default:
        return <Circle size={iconSize} className={iconColor} />
    }
  }

  // Helper function for icon list
  const renderIconListItem = (item: ListItem, itemIndex: number) => {
    const icon = item.icon 
      ? getIconByName(item.icon) 
      : customIcon || <Circle size={getIconSize()} className={iconColor} />

    const circleSize = getCircleSize()

    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 + (index + itemIndex) * 0.1 }}
        className={cn(
          "flex gap-4 md:gap-8",
          compact ? "mb-4" : "mb-6 md:mb-8"
        )}
        key={itemIndex}
      >
        <div className="flex-shrink-0">
          <div className={`flex items-center justify-center ${circleSize} rounded-full bg-primary/10 ${iconColor} shadow-sm`}>
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h4 className={getItemTitleSize()}>{item.title}</h4>
          <div 
            className={getItemContentSize()}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      </motion.div>
    )
  }

  // Helper function for numbered list
  const renderNumberedListItem = (item: ListItem, itemIndex: number) => {
    const circleSize = getCircleSize()
    const contentSize = getContentSize()

    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 + (index + itemIndex) * 0.1 }}
        className={cn(
          "flex gap-4 md:gap-6",
          compact ? "mb-6" : "mb-8 md:mb-10"
        )}
        key={itemIndex}
      >
        <div className="flex-shrink-0">
          <div className={`flex items-center justify-center ${circleSize} rounded-full bg-primary/10 ${iconColor} shadow-sm`}>
            <span className={`${contentSize} font-bold`}>{itemIndex + 1}</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className={getItemTitleSize()}>{item.title}</h4>
          <div 
            className={getItemContentSize()}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      </motion.div>
    )
  }

  // Helper function for default list
  const renderDefaultListItem = (item: ListItem, itemIndex: number) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 + (index + itemIndex) * 0.1 }}
        className={cn(
          "border-b border-border last:border-0",
          compact ? "pb-4 mb-4" : "pb-6 mb-6"
        )}
        key={itemIndex}
      >
        <h4 className={getItemTitleSize()}>{item.title}</h4>
        <div 
          className={getItemContentSize()}
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </motion.div>
    )
  }

  // Render appropriate list item based on list type
  const renderListItem = (item: ListItem, itemIndex: number) => {
    switch (listType) {
      case "numbered":
        return renderNumberedListItem(item, itemIndex)
      case "iconList":
        return renderIconListItem(item, itemIndex)
      default:
        return renderDefaultListItem(item, itemIndex)
    }
  }

  return (
    <div className={`my-12 ${className}`}>
      {(title || description) && (
        <div className={compact ? "mb-6" : "mb-8 md:mb-10"}>
          {title && (
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={getTitleSize()}
            >
              {title}
            </motion.h3>
          )}
          
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={getDescriptionSize()}
            >
              {description}
            </motion.p>
          )}
        </div>
      )}
      
      <div className="space-y-12">
        {items.map((item, itemIndex) => renderListItem(item, itemIndex))}
      </div>
    </div>
  )
}

export default BeautifulList