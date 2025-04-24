"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Copy, 
  Check, 
  BookOpen, 
  Tag, 
  ChevronDown, 
  ChevronUp, 
  ThumbsUp, 
  ThumbsDown,
  MessageSquare,
  ExternalLink,
  AlertCircle
} from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { trackEvent } from '@/lib/analytics'
import { useTranslations } from 'next-intl'

// Define the platforms we support
export type PromptPlatform = "chatgpt" | "claude" | "gemini" | "mistral" | "perplexity" | "all";

// Mapping of platform names to their logo URLs
const PLATFORM_LOGOS: Record<PromptPlatform, string> = {
  chatgpt: "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/chatgpt_logo.png",
  claude: "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/claude_logo.png",
  gemini: "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/gemini_logo.png",
  mistral: "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/mistral_logo.png",
  perplexity: "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/perplexity_logo.png",
  manus: "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/manus_logo.png",
  all: "https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_logo.png"
};

export interface EnhancedPrompt {
  title: string;
  purpose: string;
  tags?: string[];
  platforms: PromptPlatform[];
  badExample: string;
  goodExample: string;
  comment?: string;
  output?: string;
}

export interface PromptLibraryProps {
  prompts: EnhancedPrompt[];
  title?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  index?: number;
  className?: string;
}

const PromptLibrary: React.FC<PromptLibraryProps> = ({ 
  prompts, 
  title = "Bibliothèque de prompts", 
  description, 
  ctaText,
  ctaUrl,
  index = 0,
  className = ""
}) => {
  const t = useTranslations('promptLibrary')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`my-12 ${className}`}
    >
      <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="text-primary" size={24} />
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        </div>
        
        {description && (
          <p className="text-foreground/70 mb-6">{description}</p>
        )}
        
        <div className="space-y-8">
          {prompts.map((prompt, promptIdx) => (
            <PromptCard 
              key={promptIdx} 
              prompt={prompt}
              index={promptIdx}
              sectionIndex={index}
            />
          ))}
        </div>
        
        {/* Optional CTA */}
        {ctaText && ctaUrl && (
          <div className="mt-8 text-center">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md  transition-colors"
              onClick={() => {
                trackEvent('Prompt Library CTA Clicked', {
                  cta_text: ctaText,
                  page_location: window.location.pathname,
                  source: 'PromptLibrary',
                  timestamp: new Date().toISOString()
                });
              }}
            >
              {ctaText}
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const PromptCard: React.FC<{ 
  prompt: EnhancedPrompt;
  index: number;
  sectionIndex: number;
}> = ({ prompt, index, sectionIndex }) => {
  // State for copying prompts
  const [copiedType, setCopiedType] = useState<"none" | "bad" | "good">("none");
  
  // State for view more toggles
  const [expandedBad, setExpandedBad] = useState(false);
  const [expandedGood, setExpandedGood] = useState(false);
  const [expandedOutput, setExpandedOutput] = useState(false);
  
  // State for tab selection (Good/Bad examples)
  const [activeTab, setActiveTab] = useState<"good" | "bad">("good");

  // Function to handle copying prompts
  const copyPrompt = (content: string, type: "bad" | "good") => {
    navigator.clipboard.writeText(content);
    setCopiedType(type);
    
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopiedType("none");
    }, 2000);
    
    // Track the event
    trackEvent('Prompt Copied', {
      prompt_title: prompt.title,
      prompt_type: type,
      page_location: window.location.pathname,
      source: 'PromptLibrary',
      timestamp: new Date().toISOString()
    });
  };
  
  // Character limit for collapsible text
  const CHAR_LIMIT = 350;
  
  // Check if text needs to be truncated
  const isBadExampleLong = prompt.badExample.length > CHAR_LIMIT;
  const isGoodExampleLong = prompt.goodExample.length > CHAR_LIMIT;
  const isOutputLong = prompt.output && prompt.output.length > CHAR_LIMIT;
  
  // Get truncated text for preview
  const getTruncatedText = (text: string) => {
    if (text.length <= CHAR_LIMIT) return text;
    return text.substring(0, CHAR_LIMIT) + "...";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + (sectionIndex + index) * 0.1 }}
      className="bg-secondary/5 rounded-lg border border-border/60 overflow-hidden"
    >
      {/* Header section */}
      <div className="p-6 pb-4 border-b border-border/40">
        <div className="flex flex-wrap justify-between gap-4 mb-3">
          <h4 className="text-lg md:text-xl font-bold text-foreground">{prompt.title}</h4>
          
          {/* Platform badges */}
          <div className="flex gap-2 items-center">
            {prompt.platforms.map((platform) => (
              <div 
                key={platform}
                className="relative w-6 h-6 md:w-7 md:h-7 rounded-full overflow-hidden"
                title={`Prompt recommandé pour ${platform}`}
              >
                <Image
                  src={PLATFORM_LOGOS[platform]}
                  alt={platform}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Purpose */}
        <p className="text-foreground/80 mb-3">{prompt.purpose}</p>
        
        {/* Tags */}
        {prompt.tags && prompt.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {prompt.tags.map((tag, tagIdx) => (
              <span 
                key={tagIdx} 
                className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary flex items-center"
              >
                <Tag size={10} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Tabs for Good/Bad examples */}
      <div className="flex border-b border-border/40">
        <button
          onClick={() => setActiveTab("good")}
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            activeTab === "good" 
              ? "border-b-2 border-primary text-primary" 
              : "text-foreground/60 hover:text-foreground/80"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5">
            <ThumbsUp size={16} />
            <span>Bon exemple</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("bad")}
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            activeTab === "bad" 
              ? "border-b-2 border-destructive text-destructive" 
              : "text-foreground/60 hover:text-foreground/80"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5">
            <ThumbsDown size={16} />
            <span>Mauvais exemple</span>
          </div>
        </button>
      </div>
      
      {/* Good Example Content */}
      <div className={`p-5 ${activeTab === "good" ? "block" : "hidden"}`}>
        <div className="relative bg-primary/5 p-4 rounded-lg mb-3 font-mono text-sm whitespace-pre-wrap">
          {expandedGood ? prompt.goodExample : getTruncatedText(prompt.goodExample)}
          
          {isGoodExampleLong && (
            <button
              onClick={() => setExpandedGood(!expandedGood)}
              className="mt-2 text-primary hover:underline text-xs flex items-center"
            >
              {expandedGood ? (
                <>
                  <ChevronUp size={14} className="mr-1" /> Voir moins
                </>
              ) : (
                <>
                  <ChevronDown size={14} className="mr-1" /> Voir plus
                </>
              )}
            </button>
          )}
          
          <button
            onClick={() => copyPrompt(prompt.goodExample, "good")}
            className="absolute top-3 right-3 p-1.5 bg-primary/10 hover:bg-primary/20 transition-colors rounded"
            title="Copier le prompt"
          >
            {copiedType === "good" ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} className="text-primary" />
            )}
          </button>
        </div>
        
        {/* Output (only shown under good example) */}
        {prompt.output && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground/70">
              <ExternalLink size={16} />
              <span>Résultat du prompt</span>
            </div>
            <div className="bg-secondary/5 p-4 rounded-lg border border-border/40 text-sm">
              {expandedOutput ? prompt.output : getTruncatedText(prompt.output)}
              
              {isOutputLong && (
                <button
                  onClick={() => setExpandedOutput(!expandedOutput)}
                  className="mt-2 text-primary hover:underline text-xs flex items-center"
                >
                  {expandedOutput ? (
                    <>
                      <ChevronUp size={14} className="mr-1" /> Voir moins
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} className="mr-1" /> Voir plus
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Bad Example Content */}
      <div className={`p-5 ${activeTab === "bad" ? "block" : "hidden"}`}>
        <div className="relative bg-destructive/5 p-4 rounded-lg mb-3 font-mono text-sm whitespace-pre-wrap">
          {expandedBad ? prompt.badExample : getTruncatedText(prompt.badExample)}
          
          {isBadExampleLong && (
            <button
              onClick={() => setExpandedBad(!expandedBad)}
              className="mt-2 text-primary hover:underline text-xs flex items-center"
            >
              {expandedBad ? (
                <>
                  <ChevronUp size={14} className="mr-1" /> Voir moins
                </>
              ) : (
                <>
                  <ChevronDown size={14} className="mr-1" /> Voir plus
                </>
              )}
            </button>
          )}
          
          <button
            onClick={() => copyPrompt(prompt.badExample, "bad")}
            className="absolute top-3 right-3 p-1.5 bg-destructive/10 hover:bg-destructive/20 transition-colors rounded"
            title="Copier le prompt"
          >
            {copiedType === "bad" ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} className="text-destructive" />
            )}
          </button>
        </div>
        
        {/* Alert about bad example */}
        <div className="flex items-start gap-2 p-3 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-lg text-sm">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <p>Ce prompt est un exemple de ce qu'il ne faut pas faire. Il manque de précision et de structure pour obtenir des résultats optimaux.</p>
        </div>
      </div>
      
      {/* Comments Section (Optional) */}
      {prompt.comment && (
        <div className="p-5 pt-0">
          <div className="mt-4 border-t border-border/40 pt-4">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground/70">
              <MessageSquare size={16} />
              <span>Commentaires</span>
            </div>
            <div className="text-sm text-foreground/80">
              {prompt.comment}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PromptLibrary;