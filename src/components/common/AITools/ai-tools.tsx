// src/extension/popup/constants/ai-tools.tsx
"use client"

import { useTranslations } from 'next-intl'
import { AITool } from './ToolCard';


// AI Tool Configuration
export const AI_TOOLS: AITool[] = [
  {
    name: 'ChatGPT',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/chatgpt_logo.png" alt="ChatGPT" className="h-8 w-8" />,
    url: 'https://chat.openai.com/',
    disabled: false,
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    name: 'Copilot',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/copilot_logo.png" alt="Perplexity" className="h-8 w-8" />,
    url: 'https://copilot.microsoft.com//',
    disabled: false,
    color: 'from-pink-500/20 to-rose-500/20'
  },
  {
    name: 'Mistral',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/mistral_logo.png" alt="Mistral" className="h-8 w-8" />,
    url: 'https://chat.mistral.ai/',
    disabled: false,
    color: 'from-amber-500/20 to-yellow-500/20'
  },
  {
    name: 'Claude',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/claude_logo.png" alt="Claude" className="h-8 w-8" />,
    url: 'https://claude.ai/',
    disabled: false,
    color: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    name: 'Gemini',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/gemini_logo.png" alt="Gemini" className="h-8 w-8" />,
    url: 'https://gemini.google.com/',
    disabled: true,
    color: 'from-blue-500/20 to-sky-500/20'
  },
  {
    name: 'Perplexity',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/perplexity_logo.png" alt="Perplexity" className="h-8 w-8" />,
    url: 'https://www.perplexity.ai/',
    disabled: true,
    color: 'from-pink-500/20 to-rose-500/20'
  }
];