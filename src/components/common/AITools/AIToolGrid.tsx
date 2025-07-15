import React from 'react';
import { AI_TOOLS } from '@/components/common/AITools/ai-tools';
import { ToolCard } from '@/components/common/AITools/ToolCard';

export const openAiTool = (url: string) => {
  window.open(url, '_blank');
};

interface AIToolGridProps {
  onToolClick?: () => void;
}

export const AIToolGrid: React.FC<AIToolGridProps> = ({ onToolClick }) => {
  const handleOpen = (url: string, disabled: boolean) => {
    if (disabled) return;
    openAiTool(url);
    onToolClick?.();
  };

  return (
    <div className="jd-grid jd-grid-cols-2 md:jd-grid-cols-3 jd-gap-4 jd-max-w-3xl jd-mx-auto">
      {AI_TOOLS.map((tool) => (
        <ToolCard key={tool.name} tool={tool} onClick={() => handleOpen(tool.url, tool.disabled)} />
      ))}
    </div>
  );
};
