"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, BookOpen, Sparkles, Tag } from "lucide-react"
import { useTranslations } from "next-intl"
import { trackEvent } from '@/lib/analytics'

interface Prompt {
  title: string;
  content: string;
  category?: string;
  tags?: string[];
}

interface PromptLibrarySectionProps {
  prompts: Prompt[];
  title?: string;
  description?: string;
  index?: number;
  className?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const PromptLibrarySection: React.FC<PromptLibrarySectionProps> = ({ 
  prompts, 
  title, 
  description, 
  index = 0,
  className = "",
  ctaText,
  ctaUrl
}) => {
  const t = useTranslations('blog');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const copyPrompt = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
    
    // Track copy event
    trackEvent('Prompt Copied', {
      prompt_title: prompts[index].title,
      page_location: window.location.pathname,
      source: 'blogArticle',
      timestamp: new Date().toISOString()
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`my-12 ${className}`}
    >
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="text-primary" size={20} />
          <h3 className="text-xl font-bold">{title || t('promptLibrary.title') || 'Prompt Library'}</h3>
        </div>
        
        {description && (
          <p className="text-foreground/70 mb-6">{description}</p>
        )}
        
        <div className="space-y-4">
          {prompts.map((prompt, idx) => (
            <div 
              key={idx} 
              className="bg-secondary/10 border border-border rounded-lg p-4 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Sparkles className="text-amber-500" size={16} />
                    {prompt.title}
                  </h4>
                  {prompt.category && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary inline-block mt-1">
                      {prompt.category}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => copyPrompt(prompt.content, idx)}
                  className="flex items-center gap-1 text-sm bg-secondary/20 hover:bg-secondary/30 transition-colors rounded-md px-2 py-1"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check size={14} className="text-green-500" /> 
                      {t('promptLibrary.copied') || 'Copied'}
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> 
                      {t('promptLibrary.copy') || 'Copy'}
                    </>
                  )}
                </button>
              </div>

              {/* Tags */}
              {prompt.tags && prompt.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 my-2">
                  {prompt.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-foreground/70 flex items-center"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div 
                className={`mt-3 whitespace-pre-line text-foreground/80 border-t border-border/40 pt-3 text-sm ${
                  expandedIndex !== idx && prompt.content.length > 300 ? 'line-clamp-6' : ''
                }`}
              >
                {prompt.content}
              </div>
              
              {/* Show more/less button for long prompts */}
              {prompt.content.length > 300 && (
                <button
                  onClick={() => toggleExpand(idx)}
                  className="text-primary hover:underline text-sm mt-2"
                >
                  {expandedIndex === idx ? 
                    (t('promptLibrary.showLess') || 'Show less') : 
                    (t('promptLibrary.showMore') || 'Show more')}
                </button>
              )}
            </div>
          ))}
        </div>
        
        {/* Optional CTA */}
        {ctaText && ctaUrl && (
          <div className="mt-6 text-center">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={() => {
                trackEvent('Prompt Library CTA Clicked', {
                  cta_text: ctaText,
                  page_location: window.location.pathname,
                  source: 'blogArticle',
                  timestamp: new Date().toISOString()
                });
              }}
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PromptLibrarySection;