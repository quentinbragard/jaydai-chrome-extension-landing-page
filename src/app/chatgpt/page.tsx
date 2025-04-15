"use client";

// This file extends ideas.tsx with 6+ new visually impressive sections
// integrating design enhancements using Tailwind, ShadCN, Framer Motion, etc.

import {
    Sparkles,
    Code2,
    Target,
    Users,
    Globe,
    Paintbrush,
    FlameKindling,
    MessageSquareText,
    ArrowRight,
    Lightbulb,
    AlertTriangle,
    CheckCircle,
    ChefHat,
    ClipboardList,
    ShieldCheck,
    ShieldX,
    GraduationCap,
  } from "lucide-react";
  import { motion, useScroll, useTransform } from "framer-motion";
  import { useRef, useState } from "react";

  
  


export const UseCaseMosaicGrid = () => {
  const useCases = [
    {
      title: "Content Creation",
      icon: <Sparkles className="text-primary" size={24} />,
      color: "bg-gradient-to-br from-purple-400/10 to-indigo-400/5",
    },
    {
      title: "Data Analysis",
      icon: <Code2 className="text-green-500" size={24} />,
      color: "bg-gradient-to-br from-green-400/10 to-emerald-400/5",
    },
    {
      title: "Marketing Copy",
      icon: <Target className="text-pink-500" size={24} />,
      color: "bg-gradient-to-br from-pink-500/10 to-fuchsia-400/5",
    },
    {
      title: "Training & Onboarding",
      icon: <Users className="text-yellow-500" size={24} />,
      color: "bg-gradient-to-br from-yellow-400/10 to-amber-300/5",
    },
    {
      title: "Legal & Compliance",
      icon: <Globe className="text-red-500" size={24} />,
      color: "bg-gradient-to-br from-red-500/10 to-orange-400/5",
    },
    {
      title: "Design Feedback",
      icon: <Paintbrush className="text-blue-500" size={24} />,
      color: "bg-gradient-to-br from-blue-400/10 to-cyan-300/5",
    },
    {
      title: "Hiring & HR",
      icon: <FlameKindling className="text-rose-500" size={24} />,
      color: "bg-gradient-to-br from-rose-400/10 to-rose-200/5",
    },
  ];

  return (
    <section
      id="use-case-mosaic"
      className="max-w-6xl mx-auto px-4 py-24 scroll-mt-20"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore AI Use Cases with Jaydai</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Jaydai powers prompt engineering across departments, roles, and challenges. Here are
          some of the most popular use cases.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl p-6 border border-border shadow-sm ${useCase.color} hover:shadow-lg transition-all`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              {useCase.icon}
              <h3 className="text-lg font-semibold text-foreground">
                {useCase.title}
              </h3>
            </div>
            <p className="text-sm text-foreground/70">
              Generate expert prompts instantly for this use case. Save time, reduce friction, and boost output quality.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



export const RealTimeSimulator = () => {
  const [promptInput, setPromptInput] = useState("Create a launch plan for a new product");

  return (
    <section id="real-time-simulator" className="max-w-6xl mx-auto px-4 py-24 scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">See Jaydai in Action</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Experience how Jaydai transforms vague ideas into structured, actionable prompts that generate powerful results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-background border border-border rounded-xl p-6 shadow-md">
          <label className="block text-sm font-medium mb-2">Your input</label>
          <textarea
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            rows={5}
            className="w-full rounded-md border border-border bg-secondary/5 p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <motion.div
          key={promptInput}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-secondary/5 border border-border rounded-xl p-6 shadow-md"
        >
          <div className="flex items-center mb-4">
            <MessageSquareText className="text-primary mr-2" size={20} />
            <h3 className="text-lg font-semibold">Jaydai-enhanced Prompt</h3>
          </div>
          <p className="text-sm text-foreground">
            Based on your input, Jaydai would generate:
          </p>
          <div className="mt-4 p-4 border border-dashed border-primary/30 bg-background rounded-md text-sm text-foreground">
            Draft a go-to-market strategy for a new product launch including audience segmentation, messaging, key channels (email, social media, PR), KPIs, and a 30-day rollout timeline.
          </div>
          <div className="mt-4 text-right">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Try in ChatGPT <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
// This file extends ideas.tsx with 6+ new visually impressive sections
// integrating design enhancements using Tailwind, ShadCN, Framer Motion, etc.


  
  // Previous components: UseCaseMosaicGrid, RealTimeSimulator...
  
  export const ExplodingPromptHero = () => {
    const prompts = [
      "Summarize legal contract",
      "Generate SEO keywords",
      "Create onboarding plan",
      "Translate technical docs",
      "Draft user story",
      "Design product roadmap",
      "Analyze sentiment",
    ];
  
    return (
      <section
        id="exploding-prompts"
        className="relative w-full py-24 flex flex-col items-center justify-center bg-gradient-to-br from-background to-secondary/10 overflow-hidden"
      >
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Supercharge Your Prompts With Jaydai
          </h2>
          <p className="text-foreground/70 text-lg mb-8">
            Don’t write another vague prompt. Let Jaydai help you craft precise, impactful instructions that drive results.
          </p>
          <button className="px-6 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow">
            Start Using Jaydai Now
          </button>
        </div>
  
        {/* Animated Floating Prompts */}
        <div className="absolute inset-0 -z-0 pointer-events-none">
          {prompts.map((text, i) => {
            const rotate = (i % 2 === 0 ? 1 : -1) * (5 + i * 3);
            const delay = 0.2 * i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                animate={{ opacity: 0.3, y: [-20, 0, -20], rotate }}
                transition={{ duration: 5 + i, repeat: Infinity, delay }}
                className="absolute bg-background border border-border rounded-xl px-4 py-2 text-sm text-foreground/80 shadow-md"
                style={{
                  top: `${10 + (i * 12) % 80}%`,
                  left: `${10 + (i * 15) % 80}%`,
                }}
              >
                <Lightbulb className="inline-block w-4 h-4 mr-2 text-yellow-400" /> {text}
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  };

  // This file extends ideas.tsx with 6+ new visually impressive sections
// integrating design enhancements using Tailwind, ShadCN, Framer Motion, etc.

  // Previous components: UseCaseMosaicGrid, RealTimeSimulator, ExplodingPromptHero...
  
  export const VisualPromptComparison = () => {
    return (
      <section
        id="prompt-comparison"
        className="max-w-6xl mx-auto px-4 py-24 scroll-mt-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            See the Difference a Prompt Makes
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A side-by-side comparison of what happens when you use a generic prompt vs a Jaydai-enhanced prompt.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Prompt Side */}
          <div className="bg-secondary/5 border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold">Without Jaydai</h3>
            </div>
            <p className="text-sm mb-2 text-foreground/70 font-medium">Prompt:</p>
            <div className="bg-background p-3 rounded-md border border-border text-sm mb-4">
              Write a blog post about AI.
            </div>
            <p className="text-sm mb-2 text-foreground/70 font-medium">AI Response:</p>
            <div className="space-y-2 text-sm text-foreground/60 animate-pulse">
              <div className="h-3 bg-secondary/20 rounded w-full"></div>
              <div className="h-3 bg-secondary/20 rounded w-5/6"></div>
              <div className="h-3 bg-secondary/20 rounded w-4/5"></div>
              <div className="h-3 bg-secondary/20 rounded w-3/4"></div>
            </div>
            <div className="mt-4 text-red-500 text-xs font-medium bg-red-500/10 border border-red-500/20 rounded p-2">
              Vague, lacks structure and depth
            </div>
          </div>
  
          {/* Enhanced Prompt Side */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-primary mr-2" />
              <h3 className="text-lg font-semibold text-primary">With Jaydai</h3>
            </div>
            <p className="text-sm mb-2 text-foreground/70 font-medium">Prompt:</p>
            <div className="bg-background p-3 rounded-md border border-primary/20 text-sm mb-4">
              Write a detailed blog post about how generative AI is transforming customer support. Include practical examples, benefits for businesses, ethical concerns, and a concluding CTA.
            </div>
            <p className="text-sm mb-2 text-foreground/70 font-medium">AI Response:</p>
            <div className="space-y-2 text-sm text-foreground animate-pulse">
              <div className="h-3 bg-primary/20 rounded w-full"></div>
              <div className="h-3 bg-primary/20 rounded w-5/6"></div>
              <div className="h-3 bg-primary/20 rounded w-4/5"></div>
              <div className="h-3 bg-primary/20 rounded w-11/12"></div>
              <div className="h-3 bg-primary/20 rounded w-3/4"></div>
            </div>
            <div className="mt-4 text-green-600 text-xs font-medium bg-green-500/10 border border-green-500/20 rounded p-2">
              Clear, structured, and immediately usable
            </div>
          </div>
        </div>
      </section>
    );
  };

  // This file extends ideas.tsx with 6+ new visually impressive sections
// integrating design enhancements using Tailwind, ShadCN, Framer Motion, etc.

  
  // Previous components: UseCaseMosaicGrid, RealTimeSimulator, ExplodingPromptHero, VisualPromptComparison...
  
  export const PromptRecipeCards = () => {
    const recipes = [
      {
        title: "Pitch Deck Generator",
        ingredients: [
          "Startup type: B2B SaaS",
          "Audience: Investors",
          "Tone: Persuasive",
          "Length: 10 slides"
        ],
        result:
          "Create a 10-slide pitch deck for a B2B SaaS startup targeting investors. Use a persuasive tone and include sections: problem, solution, market size, product, business model, traction, team, roadmap, and CTA.",
      },
      {
        title: "Job Description Optimizer",
        ingredients: [
          "Role: Product Manager",
          "Industry: Fintech",
          "Level: Senior",
          "Focus: Collaboration & Strategy"
        ],
        result:
          "Rewrite a job description for a senior Product Manager in fintech. Emphasize collaboration, strategic thinking, and experience with cross-functional teams. Include KPIs and growth path.",
      },
    ];
  
    return (
      <section id="prompt-recipes" className="max-w-6xl mx-auto px-4 py-24 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Prompt Recipes</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Each prompt is a carefully curated recipe — with ingredients, method, and result — designed to deliver optimal AI output.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-secondary/5 border border-border rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <ChefHat className="text-primary mr-2" />
                <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
              </div>
              <p className="text-sm font-medium text-foreground/70 mb-1">Ingredients:</p>
              <ul className="list-disc list-inside text-sm text-foreground/80 mb-4">
                {r.ingredients.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground/70 mb-1 flex items-center">
                <ClipboardList className="w-4 h-4 mr-2" /> Prompt Result:
              </p>
              <div className="bg-background p-4 text-sm rounded-md border border-border text-foreground">
                {r.result}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // This file extends ideas.tsx with 6+ new visually impressive sections
// integrating design enhancements using Tailwind, ShadCN, Framer Motion, etc.


  // Previous components...
  
  export const CompetitiveComparisonTable = () => {
    const features = [
      "Expert Prompt Library",
      "Prompt Templates",
      "Prompt Personalization",
      "Usage Analytics",
      "Team Collaboration",
      "Energy Footprint Insights",
      "Learning Hub"
    ];
  
    const competitors = [
      {
        name: "Basic ChatGPT",
        values: [true, false, false, false, false, false, false],
      },
      {
        name: "PromptHero",
        values: [true, true, false, false, false, false, false],
      },
      {
        name: "Jaydai",
        isHighlight: true,
        values: [true, true, true, true, true, true, true],
      },
    ];
  
    return (
      <section id="competitive-comparison" className="max-w-6xl mx-auto px-4 py-24 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Jaydai Compares</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Jaydai isn't just another prompt library. It's a complete ecosystem built for real productivity and team growth.
          </p>
        </div>
  
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border text-sm">
            <thead>
              <tr className="bg-secondary/10">
                <th className="text-left p-4 font-semibold text-foreground/80">Feature</th>
                {competitors.map((c, i) => (
                  <th
                    key={i}
                    className={`text-center p-4 font-semibold ${c.isHighlight ? "text-primary" : "text-foreground/70"}`}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? "bg-background" : "bg-secondary/5"}`}
                >
                  <td className="p-4 font-medium text-foreground/90">{feature}</td>
                  {competitors.map((c, j) => (
                    <td key={j} className="text-center p-4">
                      {c.values[i] ? (
                        <ShieldCheck className={`mx-auto ${c.isHighlight ? "text-green-500" : "text-foreground/50"}`} size={18} />
                      ) : (
                        <ShieldX className="mx-auto text-muted-foreground" size={18} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="mt-8 text-center">
          <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors">
            Try Jaydai Today
          </button>
        </div>
      </section>
    );
  };

  // This file extends ideas.tsx with 6+ new visually impressive sections
// integrating design enhancements using Tailwind, ShadCN, Framer Motion, etc.

  
  // Previous components...
  
  export const SkillBuilderProgression = () => {
    const levels = [
      {
        label: "Beginner",
        description: "Understand what prompts are and how AI interprets them.",
      },
      {
        label: "Intermediate",
        description: "Learn how to format prompts for tasks like summaries, emails, analysis.",
      },
      {
        label: "Advanced",
        description: "Master prompt chaining, context injection, and multi-step outputs.",
      },
      {
        label: "Pro",
        description: "Build reusable templates, measure impact, and train your team.",
      },
    ];
  
    return (
      <section id="skill-builder" className="max-w-6xl mx-auto px-4 py-24 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Build AI Prompting Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Whether you're just starting or looking to train your team, Jaydai’s learning path helps you progress from beginner to expert.
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-secondary/5 border border-border rounded-xl p-6 shadow-md flex flex-col items-start"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="text-primary mr-2" />
                <h3 className="text-lg font-semibold text-foreground">{level.label}</h3>
              </div>
              <p className="text-sm text-foreground/70">{level.description}</p>
            </motion.div>
          ))}
        </div>
  
        <div className="mt-10 text-center">
          <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors">
            Explore the Learning Hub
          </button>
        </div>
      </section>
    );
  };

  // This file extends ideas.tsx with 6+ new visually impressive sections
// integrating design enhancements using Tailwind, ShadCN, Framer Motion, etc.

  
  // Global scroll reveal container wrapper
  export const SectionReveal = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    );
  };
  
  // Optional parallax wrapper
  export const ParallaxWrapper = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  
    return (
      <motion.div ref={ref} style={{ y: translateY }}>
        {children}
      </motion.div>
    );
  };
  
  // You can now wrap any of the existing sections like so:
  // <SectionReveal><UseCaseMosaicGrid /></SectionReveal>
  // <ParallaxWrapper><ExplodingPromptHero /></ParallaxWrapper>
  // for instant animations and scroll wow effects.

  // All Jaydai Ideas Sections with visual wrappers and animations in one file

  

  

  // Sections
const IdeasPageShowcase = () => {
    return (
      <>
        <ParallaxWrapper>
          <ExplodingPromptHero />
        </ParallaxWrapper>
  
        <SectionReveal>
          <UseCaseMosaicGrid />
        </SectionReveal>
  
        <SectionReveal>
          <RealTimeSimulator />
        </SectionReveal>
  
        <SectionReveal>
          <VisualPromptComparison />
        </SectionReveal>
  
        <SectionReveal>
          <PromptRecipeCards />
        </SectionReveal>
  
        <SectionReveal>
          <CompetitiveComparisonTable />
        </SectionReveal>
  
        <SectionReveal>
          <SkillBuilderProgression />
        </SectionReveal>
      </>
    );
  };
  
  export default IdeasPageShowcase;