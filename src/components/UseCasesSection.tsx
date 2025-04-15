"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Code, 
  BarChart, 
  PenTool, 
  BookOpen, 
  MessageCircle, 
  FileText,
  ChevronRight,
  Check,
  Lightbulb
} from "lucide-react"

const useCases = [
  {
    id: "developer",
    icon: Code,
    title: "Software Developers",
    subtitle: "Accelerate your coding workflow",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    promptTitle: "Code Explanation Assistant",
    prompt: "Analyze this code in detail, explaining its functionality, potential bugs, and suggestions for optimization: ```{code}```",
    benefits: [
      "Debug complex code faster",
      "Optimize algorithms with expert suggestions",
      "Generate unit tests automatically",
      "Translate between programming languages",
      "Document code efficiently"
    ],
    beforePrompt: "What's wrong with this React component?",
    afterPrompt: "Analyze this React component for performance issues, identify any anti-patterns, and suggest specific optimizations that would improve rendering efficiency. Include references to React best practices where applicable."
  },
  {
    id: "marketer",
    icon: BarChart,
    title: "Marketers",
    subtitle: "Create compelling campaigns effortlessly",
    color: "bg-green-500/10 text-green-500 border-green-500/30",
    promptTitle: "Campaign Copywriting Assistant",
    prompt: "Create compelling marketing copy for {product} targeting {audience} with a focus on {key_benefit} and a {tone} tone. Include a headline, 3 bullet points highlighting benefits, and a clear call to action.",
    benefits: [
      "Generate high-converting copy in seconds",
      "Create targeted audience personas",
      "Analyze campaign performance data",
      "Develop multi-channel content strategies",
      "Craft SEO-optimized content"
    ],
    beforePrompt: "Write some marketing copy for my product",
    afterPrompt: "Create a compelling B2B marketing email for our new project management SaaS, targeting mid-size tech companies. Focus on productivity benefits and use a professional yet conversational tone. Include a subject line, 3 paragraphs with clear value propositions, social proof elements, and a time-sensitive call to action with a 20% early-bird discount."
  },
  {
    id: "writer",
    icon: PenTool,
    title: "Content Creators",
    subtitle: "Overcome writer's block and improve quality",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/30",
    promptTitle: "Content Structure Developer",
    prompt: "Help me outline a detailed article about {topic} for {audience}. Include an engaging introduction, at least 5 key sections with subheadings, ideas for relevant examples or case studies, and a compelling conclusion with a call to action.",
    benefits: [
      "Generate well-structured outlines",
      "Improve existing content with detailed feedback",
      "Research topics thoroughly in minutes",
      "Create multiple content variations",
      "Develop consistent voice and style"
    ],
    beforePrompt: "Give me ideas for a blog post about AI",
    afterPrompt: "Create a detailed content plan for a 2000-word blog post titled 'How AI is Transforming Small Business Operations in 2024.' Include 7 section headings with bullet points for key information to cover in each, 3 potential case study examples, 5 statistics I should research and include, a list of relevant keywords for SEO, and suggestions for a lead magnet that would complement this article."
  },
  {
    id: "educator",
    icon: BookOpen,
    title: "Educators",
    subtitle: "Transform your teaching materials",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    promptTitle: "Lesson Plan Creator",
    prompt: "Create a detailed lesson plan for {grade_level} students on {subject_topic}. Include learning objectives, a warm-up activity, main teaching points with examples, a hands-on student activity, assessment methods, and extension ideas for advanced students.",
    benefits: [
      "Create age-appropriate lesson plans",
      "Generate interactive learning activities",
      "Develop personalized student feedback",
      "Create assessments with varying difficulty levels",
      "Adapt materials for different learning styles"
    ],
    beforePrompt: "How do I teach photosynthesis to students?",
    afterPrompt: "Create an engaging 45-minute lesson plan on photosynthesis for 7th-grade science students. Include: 3 specific learning objectives aligned with NGSS standards, a 5-minute visualization warm-up activity, key vocabulary with student-friendly definitions, a hands-on experiment using household materials that demonstrates the process, 3 formative assessment questions, and a creative homework assignment that connects photosynthesis to climate change. Also include accommodations for visual learners and ELL students."
  },
  {
    id: "researcher",
    icon: Lightbulb,
    title: "Researchers",
    subtitle: "Accelerate your discovery process",
    color: "bg-red-500/10 text-red-500 border-red-500/30",
    promptTitle: "Research Methodology Planner",
    prompt: "Help me design a robust methodology for researching {topic} with the aim to {research_goal}. Include recommended research approach (qualitative/quantitative/mixed), data collection methods, sampling strategy, ethical considerations, and potential limitations to address.",
    benefits: [
      "Design rigorous research methodologies",
      "Analyze complex research findings",
      "Generate literature review summaries",
      "Identify gaps in existing research",
      "Develop clear research questions"
    ],
    beforePrompt: "I want to research consumer behavior",
    afterPrompt: "Design a comprehensive mixed-methods research methodology to investigate how sustainability claims influence Gen Z consumer purchasing decisions in the fashion industry. Include: specific research questions, quantitative survey design with sample size calculation and sampling strategy, qualitative interview protocol with key areas to explore, data analysis approach for integrating both methods, ethical considerations particularly for recruiting younger participants, and ways to address potential social desirability bias in responses. The research should ultimately inform marketing strategies for sustainable fashion brands."
  }
]

const UseCasesSection = () => {
  const [activeCase, setActiveCase] = useState(useCases[0].id)
  
  const activeUseCase = useCases.find(uc => uc.id === activeCase) || useCases[0]
  
  return (
    <section id="use-cases" className="py-20 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Real-World Use Cases
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            See how Jaydai transforms AI workflows across different roles
          </motion.p>
        </div>

        {/* Role selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveCase(useCase.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCase === useCase.id
                  ? `${useCase.color.split(" ")[0]} border-${useCase.color.split(" ")[2]} text-${useCase.color.split(" ")[1]}`
                  : "border-border text-foreground/70 hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              <useCase.icon size={16} />
              <span>{useCase.title}</span>
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left column: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className={`p-6 rounded-xl border ${activeUseCase.color.split(" ")[0]} border-${activeUseCase.color.split(" ")[2]}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${activeUseCase.color}`}>
                  <activeUseCase.icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{activeUseCase.title}</h3>
                  <p className="text-foreground/70">{activeUseCase.subtitle}</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-3">How Jaydai helps:</h4>
              <ul className="space-y-3">
                {activeUseCase.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-2"
                  >
                    <Check className={`shrink-0 mt-1 ${activeUseCase.color.split(" ")[1]}`} size={16} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Right column: Prompt example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 border-b border-border bg-secondary/5">
                <h3 className="text-lg font-semibold">{activeUseCase.promptTitle}</h3>
                <p className="text-foreground/70 text-sm">Expert-crafted prompt template from Jaydai</p>
              </div>
              
              <div className="p-6">
                <div className="bg-secondary/10 p-4 rounded-lg border border-border text-foreground/80 mb-8">
                  <code className="block whitespace-pre-wrap font-mono text-sm">
                    {activeUseCase.prompt}
                  </code>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-foreground/70 text-sm font-medium mb-2 flex items-center">
                      <FileText size={14} className="mr-1" />
                      BEFORE: Basic prompt
                    </h4>
                    <div className="bg-secondary/5 p-3 rounded border border-border">
                      <p className="text-foreground/70">{activeUseCase.beforePrompt}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <ChevronRight size={16} className="text-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-primary text-sm font-medium mb-2 flex items-center">
                      <MessageCircle size={14} className="mr-1" />
                      AFTER: Jaydai optimized prompt
                    </h4>
                    <div className="bg-primary/5 p-3 rounded border border-primary/20 shadow-sm">
                      <p className="text-foreground">{activeUseCase.afterPrompt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-6">
            Access hundreds of expertly-crafted prompts for your specific needs
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            className="px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCasesSection