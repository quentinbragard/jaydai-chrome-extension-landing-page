"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeftRight } from "lucide-react"

const BeforeAfterComparison = () => {
  const [position, setPosition] = useState(50)
  
  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect()
    let clientX
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }
    
    const position = ((clientX - container.left) / container.width) * 100
    setPosition(Math.min(Math.max(position, 0), 100))
  }

  return (
    <section id="comparison" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            See the Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Compare AI responses with and without Jaydai's optimized prompts
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            className="relative rounded-xl overflow-hidden border border-border shadow-lg cursor-ew-resize"
            style={{ height: "600px" }} // Adjust based on your image aspect ratio
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* Before image - without Jaydai */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-4 left-4 z-20 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                Without Jaydai
              </div>
              <Image
                src="/images/comparison-before.png"
                alt="AI response without Jaydai"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* After image - with Jaydai */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <div className="absolute top-4 right-4 z-20 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                With Jaydai
              </div>
              <Image
                src="/images/comparison-after.png"
                alt="AI response with Jaydai"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            {/* Slider handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 cursor-ew-resize flex items-center justify-center"
              style={{ left: `${position}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ArrowLeftRight size={18} className="text-primary" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between mb-4 space-y-3 md:space-y-0">
              <div className="text-foreground/70">
                <span className="font-semibold">Basic prompt:</span> "Write about AI benefits"
              </div>
              <div className="text-foreground/70">
                <span className="font-semibold">Jaydai prompt:</span> "Analyze the top 5 business benefits of implementing AI..."
              </div>
            </div>
            <p className="text-foreground/70 mt-6">
              Drag the slider to compare the difference between basic prompts and Jaydai's optimized templates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfterComparison