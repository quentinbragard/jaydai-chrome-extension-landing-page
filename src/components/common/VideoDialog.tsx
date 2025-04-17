"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"

interface VideoDialogProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title: string
  description: string
}

const VideoDialog = ({
  isOpen,
  onClose,
  videoSrc,
  title,
  description
}: VideoDialogProps) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-card rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video w-full bg-black">
          <iframe 
            width="100%" 
            height="100%" 
            src={videoSrc} 
            title={title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          X
        </button>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-foreground/70">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoDialog
