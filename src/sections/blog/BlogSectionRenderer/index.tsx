"use client"

import React from "react"
import PlainHtmlSection from "@/components/common/PlainHTMLSection"
import ShareButtonSection from "@/components/common/ShareButtonSection/index"
import PromptLibrarySection from "@/sections/blog/PromptLibrarySection"
import BlogPostCallToAction from "@/sections/blog/BlogPostCallToAction"

interface BlogSection {
  type: string;
  [key: string]: any;
}

interface BlogSectionRendererProps {
  sections: BlogSection[] | string[];
  className?: string;
}

const BlogSectionRenderer: React.FC<BlogSectionRendererProps> = ({ 
  sections, 
  className = "" 
}) => {
  // Ensure sections is always an array
  const sectionsArray = Array.isArray(sections) ? sections : [sections];
  
  return (
    <div className={className}>
      {sectionsArray.map((section, index) => {
        // Handle legacy format (string array of HTML content)
        if (typeof section === 'string') {
          return (
            <PlainHtmlSection
              key={`section-${index}`}
              content={section}
              index={index}
            />
          );
        }
        
        // Handle new format (object with type and other properties)
        switch(section.type) {
          case 'plainHtml':
            return (
              <PlainHtmlSection
                key={`section-${index}`}
                content={section.content}
                index={index}
                className={section.className}
              />
            );
            
          case 'callToAction':
            return (
              <BlogPostCallToAction
                key={`section-${index}`}
                title={section.title}
                content={section.body || section.content}
                href={section.href || section.url}
                variant={section.variant || 'gradient'}
                className={section.className}
              />
            );
            
          case 'shareButtonSection':
            return (
              <ShareButtonSection
                key={`section-${index}`}
                title={section.title}
                description={section.description}
                messages={section.messages}
                index={index}
                className={section.className}
              />
            );
            
          case 'promptLibrary':
            return (
              <PromptLibrarySection
                key={`section-${index}`}
                prompts={section.prompts}
                title={section.title}
                description={section.description}
                ctaText={section.ctaText}
                ctaUrl={section.ctaUrl}
                index={index}
                className={section.className}
              />
            );
            
          default:
            console.warn(`Unknown section type: ${section.type}`);
            // If we don't recognize the type but it has content, fallback to plain HTML
            if (section.content) {
              return (
                <PlainHtmlSection
                  key={`section-${index}`}
                  content={section.content}
                  index={index}
                />
              );
            }
            return null;
        }
      })}
    </div>
  );
};

export default BlogSectionRenderer;