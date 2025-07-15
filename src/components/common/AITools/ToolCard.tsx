// src/extension/popup/components/ToolCard.tsx
import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl'


export interface AITool {
  name: string;
  icon: ReactNode;
  url: string;
  disabled: boolean;
  color: string;
}

interface ToolCardProps {
  tool: AITool;
  onClick: () => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ 
  tool,
  onClick
}) => {
  const t = useTranslations('aiTools')
  return (
    <div className="relative group perspective mb-3">
      {/* Enhanced background glow effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${tool.color} rounded-lg m-0.5 
                   opacity-0 group-hover:opacity-100 transition-all duration-300
                   blur-[2px] group-hover:blur-[1px] scale-[0.97] group-hover:scale-100`}
      />
      
      <Button 
        variant="default"
        className={`w-full justify-start py-6 px-4 relative 
                   bg-card/95 border border-gray-800/30 
                   shadow-sm hover:shadow-lg rounded-lg
                   transition-all duration-300 ease-out
                   group-hover:translate-y-[-2px] group-hover:border-gray-700/50
                   ${tool.disabled ? 'opacity-80 hover:opacity-80 cursor-not-allowed' : ''}`}
        onClick={onClick}
        disabled={tool.disabled}
      >
        <div className="flex items-center w-full gap-3">
          {/* Enhanced icon container */}
          <div className={`flex-shrink-0 p-2 rounded-md
                         transition-all duration-300
                         bg-gradient-to-br from-background/90 to-background
                         group-hover:shadow-md shadow-sm
                         border border-gray-800/40 group-hover:border-gray-700/70
                         ${!tool.disabled ? 'group-hover:scale-110' : ''}`}>
            {tool.icon}
          </div>
          
          {/* Text content */}
          <div className="flex-grow text-left overflow-hidden">
            <div className="font-semibold text-foreground group-hover:text-white transition-colors duration-300">
              {tool.name}
            </div>
          </div>
          
          {/* Right icon/status */}
          <div className="flex-shrink-0 ml-1 text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            {!tool.disabled ? (
              <div className="p-1 rounded-full bg-gray-800/50 group-hover:bg-blue-600/20 transition-colors duration-300">
                <ChevronRight className="h-4 w-4 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            ) : (
              <span className="text-[10px] font-medium opacity-60">
                {t('comingSoon')}
              </span>
            )}
          </div>
        </div>
        
        {/* Decorative elements */}
        {!tool.disabled && (
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300">
            <div className="absolute top-1 right-1 w-10 h-10 bg-blue-500/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-1 left-1 w-12 h-12 bg-indigo-500/20 rounded-full blur-sm"></div>
          </div>
        )}
      </Button>
    </div>
  );
};