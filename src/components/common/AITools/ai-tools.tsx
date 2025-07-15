// src/extension/popup/constants/ai-tools.tsx
"use client"

import { useTranslations } from 'next-intl'
import { AITool } from './ToolCard';


// AI Tool Configuration
export const AI_TOOLS: AITool[] = [
  {
    name: 'ChatGPT',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/chatgpt_logo.png" alt="ChatGPT" className="jd-h-8 jd-w-8" />,
    url: 'https://chat.openai.com/',
    disabled: false,
    color: 'jd-from-green-500/20 jd-to-emerald-500/20'
  },
  {
    name: 'Copilot',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/copilot_logo.png" alt="Perplexity" className="jd-h-8 jd-w-8" />,
    url: 'https://copilot.microsoft.com//',
    disabled: false,
    color: 'jd-from-pink-500/20 jd-to-rose-500/20'
  },
  {
    name: 'Mistral',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/mistral_logo.png" alt="Mistral" className="jd-h-8 jd-w-8" />,
    url: 'https://chat.mistral.ai/',
    disabled: false,
    color: 'jd-from-amber-500/20 jd-to-yellow-500/20'
  },
  {
    name: 'Claude',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/claude_logo.png" alt="Claude" className="jd-h-8 jd-w-8" />,
    url: 'https://claude.ai/',
    disabled: false,
    color: 'jd-from-purple-500/20 jd-to-indigo-500/20'
  },
  {
    name: 'Gemini',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/gemini_logo.png" alt="Gemini" className="jd-h-8 jd-w-8" />,
    url: 'https://gemini.google.com/',
    disabled: true,
    color: 'jd-from-blue-500/20 jd-to-sky-500/20'
  },
  {
    name: 'Perplexity',
    icon: <img src="https://vetoswvwgsebhxetqppa.supabase.co/storage/v1/object/public/images/ai_tools/perplexity_logo.png" alt="Perplexity" className="jd-h-8 jd-w-8" />,
    url: 'https://www.perplexity.ai/',
    disabled: true,
    color: 'jd-from-pink-500/20 jd-to-rose-500/20'
  }
];