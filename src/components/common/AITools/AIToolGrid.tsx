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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
      {AI_TOOLS.map((tool) => (
        <ToolCard key={tool.name} tool={tool} onClick={() => handleOpen(tool.url, tool.disabled)} />
      ))}
    </div>
  );
};
