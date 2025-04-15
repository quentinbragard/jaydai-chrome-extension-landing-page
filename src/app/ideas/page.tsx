"use client";


import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  Zap,
  ArrowRight,
  ChevronRight,
  Clock,
  BarChart3,
  Brain,
  Code, // Assuming this was intended, though not used in the final version below
  Layers,
  CheckCircle,
  Check,
  Star,
  Settings,
  Play, // Assuming this was intended, though not used in the final version below
  PenTool, // Added for the timeline icon
  MousePointer, // For extension demo
  LayoutGrid,       // For Bento grid
  Calculator,       // For ROI calculator
  Workflow,         // For Feature breakdown
  Edit3,            // For Template builder
  BookOpen,         // For Learning module
  Briefcase,        // For Corporate section
  Users,            // For Corporate section
  ShieldCheck,      // For Corporate section
  MoveRight,        // General arrow
  Copy,             // For Prompt card
  Save,             // For Template builder
  TrendingUp        // For ROI calculator
} from "lucide-react";

import { Slider } from "@/components/ui/slider"; // Assuming Shadcn Slider path
import { Input } from "@/components/ui/input";  // Assuming Shadcn Input path
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Shadcn Card
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Shadcn Tabs
import { AspectRatio } from "@/components/ui/aspect-ratio"; // Shadcn AspectRatio
import { Progress } from "@/components/ui/progress"; // Shadcn Progress
import { Button } from "@/components/ui/button"; // Shadcn Button
const IdeasPage = () => {
  // State for potential interactive elements (like pricing toggle)
  const [isYearly, setIsYearly] = useState(false);
  // State for testimonial carousel (example state)
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Example testimonial data
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Marketing Director, Tech Innovations Inc.",
      avatar: "https://via.placeholder.com/80/FFC107/000000?text=SC",
      quote: "Jaydai has revolutionized how our team interacts with AI. We're generating higher quality content in half the time. The template system is genius!",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      title: "Lead Developer, Startup Solutions",
      avatar: "https://via.placeholder.com/80/03A9F4/FFFFFF?text=MJ",
      quote: "The expert prompts for code generation are spot-on. Saves me hours debugging and refining basic AI outputs. The analytics are a nice touch too.",
      rating: 5,
    },
    {
      name: "Alex Rivera",
      title: "Freelance Content Creator",
      avatar: "https://via.placeholder.com/80/4CAF50/FFFFFF?text=AR",
      quote: "As a freelancer, time is money. Jaydai helps me deliver better results faster, allowing me to take on more clients. The custom templates are fantastic.",
      rating: 4,
    },
  ];

  const currentSlide = testimonials[currentTestimonial];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Jaydai Design Ideas</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Design Enhancement Ideas</h2>
          <p className="text-foreground/70">
            This page showcases various design concepts to elevate the Jaydai landing page.
            Each section represents a unique approach to highlight Jaydai's features and value proposition.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="max-w-3xl mx-auto mb-16 p-6 bg-secondary/5 rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
          <ul className="space-y-2">
            <li>
              <a href="#interactive-prompt-builder" className="text-primary hover:underline flex items-center">
                <ChevronRight size={16} className="mr-1" />
                Interactive Prompt Builder Demo
              </a>
            </li>
            <li>
              <a href="#floating-features" className="text-primary hover:underline flex items-center">
                <ChevronRight size={16} className="mr-1" />
                3D Floating Features Showcase
              </a>
            </li>
            <li>
              <a href="#before-after-slider" className="text-primary hover:underline flex items-center">
                <ChevronRight size={16} className="mr-1" />
                Before/After Prompt Comparison Slider
              </a>
            </li>
            <li>
              <a href="#ai-conversation" className="text-primary hover:underline flex items-center">
                <ChevronRight size={16} className="mr-1" />
                Animated AI Conversation Flow
              </a>
            </li>
            <li>
              <a href="#timeline" className="text-primary hover:underline flex items-center">
                <ChevronRight size={16} className="mr-1" />
                AI Workflow Timeline
              </a>
            </li>
            <li>
              <a href="#stats-dashboard" className="text-primary hover:underline flex items-center">
                <ChevronRight size={16} className="mr-1" />
                Interactive Analytics Dashboard Preview
              </a>
            </li>
            <li>
              <a href="#testimonial-carousel" className="text-primary hover:underline flex items-center">
                <ChevronRight size={16} className="mr-1" />
                Enhanced Testimonial Carousel
              </a>
            </li>
            <li>
              <a href="#pricing-toggle" className="text-primary hover:underline flex items-center">
                <ChevronRight size={16} className="mr-1" />
                Interactive Pricing Table with Toggle
              </a>
            </li>
          </ul>
        </div>

        {/* Idea 1: Interactive Prompt Builder Demo */}
        <section id="interactive-prompt-builder" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl p-8 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Sparkles className="mr-2 text-primary" size={24} />
              Interactive Prompt Builder Demo
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              An interactive section that allows visitors to build a sample prompt by selecting from dropdown options,
              demonstrating the power and flexibility of Jaydai's prompt templates in real-time.
            </p>

            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 border-b border-border bg-secondary/5 flex justify-between items-center">
                <h3 className="font-medium flex items-center">
                  <MessageSquare size={16} className="mr-2 text-primary" />
                  Prompt Builder
                </h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Select your use case:
                    </label>
                    <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground">
                      <option>Content creation</option>
                      <option>Code explanation</option>
                      <option>Data analysis</option>
                      <option>Marketing</option>
                      <option>Research</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Target audience:
                    </label>
                    <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground">
                      <option>Professionals</option>
                      <option>Students</option>
                      <option>General audience</option>
                      <option>Technical users</option>
                      <option>Business executives</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Tone of voice:
                    </label>
                    <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground">
                      <option>Professional</option>
                      <option>Conversational</option>
                      <option>Technical</option>
                      <option>Educational</option>
                      <option>Persuasive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Output format:
                    </label>
                    <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground">
                      <option>Step-by-step guide</option>
                      <option>Bullet points</option>
                      <option>Detailed analysis</option>
                      <option>Example-based explanation</option>
                      <option>Q&A format</option>
                    </select>
                  </div>
                </div>

                <div className="bg-secondary/5 p-4 rounded-lg border border-border mb-6">
                  <h4 className="text-sm font-medium text-foreground/70 mb-2">Generated Expert Prompt:</h4>
                  <div className="bg-background p-3 rounded border border-border text-foreground font-mono text-sm">
                    Create a step-by-step guide for content creation targeting professionals. Use a professional tone and provide detailed explanations for each step. Include practical examples, best practices, and potential pitfalls to avoid. End with measurable success criteria and suggestions for further improvement.
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 rounded-md bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors">
                    Reset Selections
                  </button>
                  <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center">
                    <span>Try Jaydai for Real</span>
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> This interactive demo gives visitors a hands-on experience with Jaydai's core functionality without requiring installation. It showcases the value proposition directly and converts better than static screenshots.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 2: 3D Floating Features */}
        <section id="floating-features" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/5 rounded-2xl p-8 border border-purple-500/20 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Layers className="mr-2 text-purple-500" size={24} />
              3D Floating Features Showcase
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              A visually striking 3D feature showcase that responds to mouse movement, creating a sense of depth and interactivity while highlighting Jaydai's key benefits.
            </p>

            <div className="relative h-[500px] perspective"> {/* Add perspective class if needed for 3D */}
              <div className="w-full h-full flex items-center justify-center">
                {/* Central Sphere */}
                <motion.div
                  className="absolute w-32 h-32 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center">
                    <Sparkles className="text-primary" size={36} />
                  </div>
                </motion.div>

                {/* Orbiting Feature Cards */}
                {[
                  { icon: MessageSquare, title: "Expert Prompts", color: "bg-blue-500/20", textColor: "text-blue-500", delay: 0 },
                  { icon: Settings, title: "Custom Templates", color: "bg-purple-500/20", textColor: "text-purple-500", delay: 1 },
                  { icon: BarChart3, title: "Analytics", color: "bg-green-500/20", textColor: "text-green-500", delay: 2 },
                  { icon: Clock, title: "Time Saving", color: "bg-amber-500/20", textColor: "text-amber-500", delay: 3 },
                  { icon: Brain, title: "AI Advancement", color: "bg-red-500/20", textColor: "text-red-500", delay: 4 }
                ].map((feature, i) => {
                  const angle = (i * (2 * Math.PI / 5));
                  const radius = 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={i}
                      className={`absolute w-40 p-4 rounded-xl ${feature.color} backdrop-blur-md border border-${feature.textColor.split('-')[1]}/30 shadow-lg`} // Dynamic border color
                      style={{
                        // Setting initial position, animations can be added
                        x: x,
                        y: y,
                        zIndex: 10 + i,
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: feature.delay * 0.15, type: "spring", stiffness: 150 }}
                      whileHover={{ scale: 1.1, zIndex: 20 }} // Bring to front on hover
                    >
                      <div className="flex flex-col items-center text-center">
                        <feature.icon className={feature.textColor} size={32} />
                        <h3 className="mt-2 font-semibold">{feature.title}</h3>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Connecting lines (simulated) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
                    <circle cx="250" cy="250" r="180" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 4" />
                    {/* Lines from center to approx positions */}
                    {[...Array(5)].map((_, i) => {
                       const angle = (i * (2 * Math.PI / 5));
                       const radius = 180;
                       const x2 = 250 + Math.cos(angle) * radius;
                       const y2 = 250 + Math.sin(angle) * radius;
                       return <path key={i} d={`M250,250 L${x2},${y2}`} stroke="hsl(var(--primary))" strokeWidth="0.5" />;
                    })}
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> This visually engaging showcase creates an immediate "wow factor" and reinforces Jaydai as an innovative, cutting-edge tool. The interactivity invites exploration and helps visitors remember key features.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 3: Before/After Slider */}
        <section id="before-after-slider" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-br from-blue-500/10 to-green-500/5 rounded-2xl p-8 border border-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <ArrowRight className="mr-2 text-blue-500" size={24} /> {/* Note: Might want a different icon, like CompareArrows */}
              Enhanced Before/After Prompt Comparison
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              An interactive comparison that dramatically shows the quality difference between basic prompts and Jaydai-optimized prompts, with real examples from different use cases.
            </p>

            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 border-b border-border bg-secondary/5">
                <h3 className="font-medium">Prompt Effectiveness Comparison</h3>
              </div>

              <div className="relative p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Before Column */}
                  <div className="bg-secondary/20 rounded-xl p-6 border border-border">
                    <h4 className="text-lg font-medium mb-4 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-secondary/50 text-foreground flex items-center justify-center text-sm mr-2">1</span>
                      Without Jaydai
                    </h4>

                    <div className="space-y-4">
                      <div className="p-3 bg-secondary/10 rounded-lg border border-border">
                        <p className="text-foreground/70 text-sm font-medium mb-1">Basic prompt:</p>
                        <p className="text-foreground text-sm">Write code to sort an array.</p>
                      </div>

                      <div className="p-4 bg-background rounded-lg border border-border">
                         <div className="flex items-start mb-3">
                           <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center mr-2 shrink-0">
                             <span className="text-xs">AI</span>
                          </div>
                          <p className="text-sm font-medium">Generic AI Response</p>
                        </div>

                         <div className="space-y-2 animate-pulse"> {/* Added pulse */}
                          <div className="h-3 bg-secondary/20 rounded w-full"></div>
                          <div className="h-3 bg-secondary/20 rounded w-5/6"></div>
                          <div className="h-3 bg-secondary/20 rounded w-4/5"></div>
                          <div className="h-3 bg-secondary/20 rounded w-full"></div>
                          <div className="h-3 bg-secondary/20 rounded w-3/4"></div>
                        </div>
                      </div>
                       <div className="text-center text-sm text-red-500 font-medium p-2 bg-red-500/10 rounded border border-red-500/20">
                         Requires multiple refinements
                       </div>
                    </div>
                  </div>

                  {/* After Column */}
                  <div className="bg-primary/10 rounded-xl p-6 border border-primary/30 relative">
                     <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded shadow-lg transform rotate-3">
                       MUCH BETTER
                    </div>

                    <h4 className="text-lg font-medium mb-4 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary/50 text-primary-foreground flex items-center justify-center text-sm mr-2">2</span>
                      With Jaydai
                    </h4>

                    <div className="space-y-4">
                      <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                        <p className="text-foreground/70 text-sm font-medium mb-1">Expert prompt from Jaydai:</p>
                        <p className="text-foreground text-sm">Write a TypeScript function to sort an array of objects by a specific property ('price', descending). Include error handling for non-numeric prices, performance comments (Big O), and explain the stability of the sort. Provide usage examples.</p>
                      </div>

                      <div className="p-4 bg-background rounded-lg border border-primary/20">
                         <div className="flex items-start mb-3">
                           <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2 shrink-0">
                            <Sparkles size={14} className="text-primary" />
                          </div>
                          <p className="text-sm font-medium">Detailed AI Response</p>
                        </div>

                         <div className="space-y-2 animate-pulse"> {/* Added pulse */}
                          <div className="h-3 bg-primary/10 rounded w-full"></div>
                          <div className="h-3 bg-primary/10 rounded w-5/6"></div>
                          <div className="h-3 bg-primary/10 rounded w-full"></div>
                          <div className="h-3 bg-primary/10 rounded w-3/4"></div>
                          <div className="h-3 bg-primary/10 rounded w-4/5"></div>
                           <div className="h-3 bg-primary/10 rounded w-full"></div>
                           <div className="h-3 bg-primary/10 rounded w-11/12"></div>
                         </div>
                      </div>
                       <div className="text-center text-sm text-green-600 font-medium p-2 bg-green-500/10 rounded border border-green-500/20">
                         Actionable & Comprehensive Output
                       </div>
                    </div>
                  </div>
                </div>

                {/* Center Arrow (Visual only) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-background">
                    <ArrowRight className="text-primary-foreground" size={20} />
                  </div>
                </div>
                 {/* Mobile Arrow */}
                <div className="lg:hidden text-center mt-8">
                   <div className="inline-block transform rotate-90 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-background">
                    <ArrowRight className="text-primary-foreground" size={20} />
                  </div>
                 </div>
              </div>

              <div className="p-4 border-t border-border bg-secondary/5 flex justify-center">
                <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  See More Examples
                </button>
              </div>
            </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> This comparison clearly demonstrates Jaydai's value proposition by showing the dramatic quality difference between basic and expert prompts. The visual contrast makes the benefits immediately obvious.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 4: Animated AI Conversation Flow */}
        <section id="ai-conversation" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-br from-amber-500/10 to-red-500/5 rounded-2xl p-8 border border-amber-500/20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl opacity-30 transform translate-x-1/3 translate-y-1/3"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MessageSquare className="mr-2 text-amber-500" size={24} />
              Animated AI Conversation Flow
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              A dynamic, animated visualization of a conversation with AI, showing how Jaydai templates create more structured, comprehensive responses that save time and improve results.
            </p>

            <div className="relative h-[600px] bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 border-b border-border bg-secondary/5">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <Brain size={16} className="text-primary" /> {/* Use Brain icon */}
                  </div>
                  <h3 className="font-medium">AI Assistant Chat</h3>
                </div>
              </div>

              {/* Scrollable chat area */}
              <div className="absolute inset-0 top-16 bottom-16 overflow-hidden">
                <div className="h-full overflow-y-auto p-4 space-y-4">
                  {/* User Message */}
                  <motion.div
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="max-w-xs bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none shadow">
                      <p className="text-sm">I need a social media strategy for my new product.</p>
                    </div>
                  </motion.div>

                  {/* Basic AI Response */}
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="max-w-md bg-secondary/10 p-3 rounded-lg rounded-tl-none border border-border shadow-sm">
                      <p className="text-sm mb-1 font-medium">Okay, I can help. Tell me about the product?</p>
                      <p className="text-xs text-foreground/60">(Generic, requires follow-up)</p>
                    </div>
                  </motion.div>

                  {/* User Message with more info */}
                   <motion.div
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="max-w-xs bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none shadow">
                      <p className="text-sm">It's a productivity app for remote teams. Target: tech pros. Goal: 1k signups/month.</p>
                       <p className="text-xs opacity-70 mt-1">(Using Jaydai template input fields)</p>
                     </div>
                   </motion.div>

                  {/* Jaydai Enhanced AI Response */}
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2 }}
                  >
                    <div className="w-full max-w-2xl bg-secondary/5 p-4 rounded-lg rounded-tl-none border-l-4 border-primary shadow">
                      <div className="flex items-center mb-3">
                        <Sparkles size={16} className="text-primary mr-2" />
                        <p className="text-xs text-primary font-medium">JAYDAI OPTIMIZED RESPONSE</p>
                      </div>
                      <h4 className="font-medium mb-2">Draft Social Media Strategy (30-Day)</h4>
                      <div className="space-y-3 text-sm">
                         <p><strong>Platforms:</strong> LinkedIn, Twitter, Product Hunt</p>
                        <p><strong>Phase 1 (Pre-launch):</strong> Teaser posts, expert interviews, build waitlist.</p>
                         <p><strong>Phase 2 (Launch):</strong> Product Hunt feature, Demo videos, Early adopter offer.</p>
                        <p><strong>Phase 3 (Growth):</strong> User testimonials, Feature deep-dives, Targeted ads.</p>
                        <p><strong>KPIs:</strong> Signups by channel, Engagement rate, Website traffic.</p>
                      </div>
                       <p className="text-xs text-foreground/60 mt-2">(Detailed, actionable plan generated instantly)</p>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Input Area */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-card p-3">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Use a Jaydai template..."
                    className="flex-1 px-4 py-2 bg-secondary/10 border border-border rounded-full text-foreground/70 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    disabled
                  />
                  <button className="ml-2 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" disabled>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> This animated conversation showcases the depth and structure of AI responses when using Jaydai templates. Visitors can immediately see how the solution provides more comprehensive, actionable information compared to basic back-and-forth prompting.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 5: AI Workflow Timeline */}
        <section id="timeline" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/5 rounded-2xl p-8 border border-green-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl opacity-30 transform -translate-x-1/3 -translate-y-1/3"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="mr-2 text-green-500" size={24} />
              AI Workflow Timeline: Before vs. After Jaydai
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              Visualize the typical AI interaction workflow, highlighting how Jaydai streamlines the process from goal definition to high-quality output, saving significant time.
            </p>

            <div className="relative pl-10 border-l-2 border-border">
              {/* Step 1: Define Goal */}
              <div className="mb-12 relative">
                <div className="absolute -left-[42px] top-1 w-8 h-8 bg-secondary rounded-full border-2 border-border flex items-center justify-center">
                  <PenTool size={16} className="text-foreground/50" />
                </div>
                <h3 className="text-lg font-semibold mb-1">1. Define Goal</h3>
                <p className="text-sm text-foreground/70">User identifies task (e.g., "write blog post").</p>
              </div>

              {/* Step 2: Basic Prompting (Without Jaydai) */}
              <div className="mb-12 relative">
                <div className="absolute -left-[42px] top-1 w-8 h-8 bg-secondary rounded-full border-2 border-border flex items-center justify-center">
                  <MessageSquare size={16} className="text-foreground/50" />
                </div>
                <h3 className="text-lg font-semibold mb-1">2. Basic Prompting <span className="text-xs font-normal text-foreground/50">(Manual)</span></h3>
                <p className="text-sm text-foreground/70">Write simple prompt, get generic output, refine multiple times.</p>
                <div className="mt-2 text-sm text-red-600 p-2 bg-red-500/10 border border-red-500/20 rounded inline-flex items-center">
                  <Clock size={14} className="inline mr-1.5" /> 5-20 mins (Trial & Error)
                </div>
              </div>

              {/* Step 3: Use Jaydai */}
              <div className="mb-12 relative">
                 {/* Jaydai Icon */}
                 <div className="absolute -left-[42px] top-1 w-8 h-8 bg-primary rounded-full border-2 border-primary/50 flex items-center justify-center shadow-lg ring-2 ring-background">
                   <Sparkles size={16} className="text-primary-foreground" />
                 </div>
                 <h3 className="text-lg font-semibold mb-1 text-primary">3. Craft Expert Prompt <span className="text-xs font-normal text-foreground/50">(With Jaydai)</span></h3>
                 <p className="text-sm text-foreground/70">Use guided templates to create detailed, effective prompt quickly.</p>
                 <div className="mt-2 text-sm text-green-600 p-2 bg-green-500/10 border border-green-500/20 rounded inline-flex items-center">
                   <Zap size={14} className="inline mr-1.5" /> 1-3 mins (Efficient)
                 </div>
               </div>

              {/* Step 4: AI Generation */}
              <div className="mb-12 relative">
                <div className="absolute -left-[42px] top-1 w-8 h-8 bg-secondary rounded-full border-2 border-border flex items-center justify-center">
                  <Brain size={16} className="text-foreground/50" />
                </div>
                <h3 className="text-lg font-semibold mb-1">4. AI Generates Output</h3>
                 <p className="text-sm text-foreground/70">Jaydai's detailed prompt leads to higher quality first output.</p>
              </div>

              {/* Step 5: Review & Refine */}
              <div className="relative"> {/* Last item, no mb-12 */}
                <div className="absolute -left-[42px] top-1 w-8 h-8 bg-secondary rounded-full border-2 border-border flex items-center justify-center">
                  <CheckCircle size={16} className="text-foreground/50" />
                </div>
                <h3 className="text-lg font-semibold mb-1">5. Review & Finalize</h3>
                <p className="text-sm text-foreground/70">Minimal refinement needed due to better initial quality.</p>
                <div className="mt-2 text-sm text-green-600 font-bold p-2 bg-green-500/10 border border-green-500/20 rounded inline-flex items-center">
                   <Clock size={14} className="inline mr-1.5" /> Time Saved: Up to 80%
                 </div>
              </div>
            </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> This timeline visually contrasts the traditional workflow with the Jaydai-enhanced workflow, clearly illustrating the time-saving and quality improvement benefits at specific stages. It makes the efficiency gain tangible.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 6: Interactive Analytics Dashboard Preview */}
        <section id="stats-dashboard" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
           <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl p-8 border border-orange-500/20 relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BarChart3 className="mr-2 text-orange-500" size={24} />
              Interactive Analytics Dashboard Preview
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              A glimpse into Jaydai's analytics dashboard, showcasing key metrics like prompts created, estimated time saved, and top-performing templates, demonstrating ROI.
            </p>

            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
               <div className="p-4 border-b border-border bg-secondary/5 flex justify-between items-center">
                 <h3 className="font-medium">Your Performance Overview</h3>
                 <select className="px-2 py-1 text-xs rounded border border-border bg-background text-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>
               </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Metric Card 1 */}
                <div className="p-4 bg-secondary/10 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <p className="text-sm text-foreground/70 mb-1 flex items-center"><MessageSquare size={14} className="mr-1.5 opacity-70"/> Prompts Created</p>
                  <p className="text-3xl font-semibold">1,284</p>
                   <p className="text-xs text-green-500 mt-1">+15% vs last period</p>
                 </div>
                 {/* Metric Card 2 */}
                <div className="p-4 bg-secondary/10 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                   <p className="text-sm text-foreground/70 mb-1 flex items-center"><Clock size={14} className="mr-1.5 opacity-70"/> Estimated Time Saved</p>
                  <p className="text-3xl font-semibold">42 <span className="text-xl">hours</span></p>
                   <p className="text-xs text-green-500 mt-1">+8 hours vs last period</p>
                 </div>
                 {/* Metric Card 3 */}
                 <div className="p-4 bg-secondary/10 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <p className="text-sm text-foreground/70 mb-1 flex items-center"><Star size={14} className="mr-1.5 opacity-70"/> Top Template Used</p>
                  <p className="text-lg font-semibold truncate mt-2">Detailed Blog Post</p>
                   <p className="text-xs text-foreground/50 mt-1">Used 312 times</p>
                 </div>
               </div>

               {/* Simulated Chart */}
               <div className="p-6 border-t border-border">
                 <h4 className="text-sm font-medium mb-4">Prompt Usage Over Time</h4>
                 <div className="h-48 bg-secondary/5 rounded-lg border border-border flex items-end justify-around p-4 space-x-1">
                   {/* Example bars */}
                   {[0.3, 0.5, 0.6, 0.8, 0.7, 0.9, 0.95, 0.6, 0.7, 0.85, 0.9, 1.0].map((h, i) => (
                     <motion.div
                       key={i}
                       className={`w-full ${ i === 11 ? 'bg-primary' : 'bg-primary/30'} hover:bg-primary/70 rounded-t transition-colors cursor-pointer`}
                       style={{ height: `${h * 100}%` }}
                       initial={{ height: '0%' }}
                       animate={{ height: `${h * 100}%` }}
                       transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                     ></motion.div>
                   ))}
                 </div>
               </div>
             </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                 <strong>Why this works:</strong> Demonstrating analytics provides tangible proof of Jaydai's value and ROI (Return on Investment). Previewing the dashboard makes the benefit concrete and data-driven.
              </p>
            </div>
           </div>
         </section>

        {/* Idea 7: Enhanced Testimonial Carousel */}
        <section id="testimonial-carousel" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-2xl p-8 border border-yellow-500/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
               <Star className="mr-2 text-yellow-500 fill-yellow-500/50" size={24} />
              What Our Users Say
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
               Hear directly from professionals who are achieving better results and saving time with Jaydai. Real stories, real impact.
            </p>

             {/* Testimonial Card Container */}
            <div className="relative bg-card border border-border rounded-xl shadow-lg p-8 overflow-hidden min-h-[300px]">
               {/* Animated Testimonial Content */}
              <motion.div
                key={currentTestimonial} // Trigger animation on change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                 <img src={currentSlide.avatar} alt={currentSlide.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary object-cover"/>
                 <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                     <Star key={i} size={18} className={` ${i < currentSlide.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                 <blockquote className="text-lg italic text-foreground/90 mb-4 max-w-2xl mx-auto">
                   "{currentSlide.quote}"
                 </blockquote>
                 <p className="font-semibold">{currentSlide.name}</p>
                 <p className="text-sm text-foreground/60">{currentSlide.title}</p>
               </motion.div>

               {/* Carousel Dots */}
               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                 {testimonials.map((_, i) => (
                   <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentTestimonial === i ? 'bg-primary scale-110' : 'bg-border hover:bg-primary/50'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                   ></button>
                 ))}
              </div>

               {/* Prev/Next Arrows */}
               <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-secondary/50 hover:bg-secondary/80 text-foreground disabled:opacity-50"
                aria-label="Previous testimonial"
               >
                 <ChevronRight size={20} className="transform rotate-180" />
               </button>
               <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-secondary/50 hover:bg-secondary/80 text-foreground disabled:opacity-50"
                aria-label="Next testimonial"
              >
                 <ChevronRight size={20} />
               </button>
             </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                 <strong>Why this works:</strong> Strong testimonials build trust and credibility. Adding photos, ratings, titles, and specific quotes makes the social proof much more impactful and relatable. A carousel allows showcasing multiple proofs without taking up too much space.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 8: Interactive Pricing Table with Toggle */}
        <section id="pricing-toggle" className="max-w-5xl mx-auto mb-32 scroll-mt-20"> {/* Reduced bottom margin for last item */}
           <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/5 rounded-2xl p-8 border border-indigo-500/20 relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-30 transform translate-x-1/3 translate-y-1/3"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
               <Settings className="mr-2 text-indigo-500" size={24} />
              Simple, Transparent Pricing
             </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              Choose the plan that fits your needs. Get started for free or unlock powerful features with Pro and Team plans. Save big with annual billing!
            </p>

             {/* Pricing Toggle */}
             <div className="flex justify-center mb-10">
               <div className="inline-flex bg-secondary/20 rounded-full p-1 space-x-1 items-center">
                 <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-background shadow' : 'text-foreground/70 hover:text-foreground'}`}
                 >
                   Monthly
                 </button>
                 <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all relative ${isYearly ? 'bg-background shadow' : 'text-foreground/70 hover:text-foreground'}`}
                >
                  Yearly
                   <span className={`absolute -top-2 -right-3 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full transition-opacity duration-300 ${isYearly ? 'opacity-100' : 'opacity-0'}`}>Save 20%</span>
                 </button>
               </div>
             </div>

             {/* Pricing Tiers */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"> {/* Use items-stretch */}
               {/* Tier 1: Starter */}
               <div className="bg-card border border-border rounded-xl p-6 flex flex-col transition-transform hover:scale-[1.02]">
                 <h3 className="text-lg font-semibold mb-2">Starter</h3>
                 <p className="text-3xl font-bold mb-1">$0</p>
                 <p className="text-sm text-foreground/70 mb-6 h-10">Perfect for trying out Jaydai's core features.</p> {/* Fixed height */}
                 <ul className="space-y-2 text-sm mb-6 flex-grow">
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> 10 prompts/month</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Access to basic templates</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Community support</li>
                 </ul>
                 <button className="w-full mt-auto py-2 rounded-md border border-border hover:bg-secondary/20 transition-colors font-medium">Get Started Free</button>
               </div>

               {/* Tier 2: Pro (Highlighted) */}
               <div className="bg-card border-2 border-primary rounded-xl p-6 flex flex-col relative shadow-xl transform scale-[1.03]">
                 <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                 <h3 className="text-lg font-semibold mb-2 text-primary">Pro</h3>
                 <p className="text-3xl font-bold mb-1">{isYearly ? '$15' : '$19'}<span className="text-sm font-normal text-foreground/60">/month{isYearly ? ', billed annually' : ''}</span></p>
                 <p className="text-sm text-foreground/70 mb-6 h-10">For professionals and power users needing full capabilities.</p> {/* Fixed height */}
                 <ul className="space-y-2 text-sm mb-6 flex-grow">
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Unlimited prompts</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Access to all templates</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Create custom templates</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Usage analytics dashboard</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Priority email support</li>
                 </ul>
                 <button className="w-full mt-auto py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">Choose Pro</button>
               </div>

               {/* Tier 3: Team */}
               <div className="bg-card border border-border rounded-xl p-6 flex flex-col transition-transform hover:scale-[1.02]">
                 <h3 className="text-lg font-semibold mb-2">Team</h3>
                 <p className="text-3xl font-bold mb-1">{isYearly ? '$39' : '$49'}<span className="text-sm font-normal text-foreground/60">/user/month{isYearly ? ', billed annually' : ''}</span></p>
                 <p className="text-sm text-foreground/70 mb-6 h-10">For collaborative teams needing shared resources.</p> {/* Fixed height */}
                 <ul className="space-y-2 text-sm mb-6 flex-grow">
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Everything in Pro</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Shared team templates</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Team usage analytics</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Centralized billing</li>
                  <li className="flex items-start"><Check size={16} className="mr-2 text-green-500 mt-0.5 shrink-0" /> Dedicated support channel</li>
                 </ul>
                 <button className="w-full mt-auto py-2 rounded-md border border-border hover:bg-secondary/20 transition-colors font-medium">Contact Sales</button>
               </div>
             </div>

            <div className="mt-10 text-foreground/70 text-sm text-center">
               <p>
                <strong>Why this works:</strong> Clear pricing with distinct tiers helps users self-select. The monthly/annual toggle clearly demonstrates savings, encouraging longer commitments. Feature lists with checkmarks improve scannability and value comparison. Highlighting the popular plan guides user choice.
              </p>
            </div>
           </div>
         </section>

         {/* Idea 9: Interactive "In-Context" Extension Demo */}
        <section id="extension-in-context" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-2xl p-8 border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(farthest-side_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/50 via-transparent to-transparent"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MousePointer className="mr-2 text-cyan-500" size={24} />
              See Jaydai in Action (Interactive Demo)
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              Visualize how Jaydai seamlessly integrates with your favorite AI tools. Click the Jaydai icon to simulate accessing the prompt library directly within a familiar interface.
            </p>

            <Card className="overflow-hidden shadow-xl border-2 border-border relative">
              {/* Mock Browser Header */}
              <div className="h-10 bg-muted/50 flex items-center px-4 border-b border-border">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center text-sm text-muted-foreground bg-muted/80 mx-4 px-4 py-1 rounded-md truncate">chat.example-ai.com</div>
                {/* Jaydai Icon Button (Simulated) */}
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  className="ml-auto p-1.5 rounded-full bg-primary/20 hover:bg-primary/30"
                  aria-label="Open Jaydai Extension (Demo)"
                >
                  <Sparkles size={16} className="text-primary" />
                </motion.button>
              </div>

              {/* Mock AI Interface (Blurred Background) */}
              <div className="h-[400px] bg-gradient-to-b from-background to-muted/30 p-6 relative overflow-hidden backdrop-blur-sm">
                 {/* Blurred content simulation */}
                <div className="space-y-4 opacity-30 filter blur-sm select-none">
                  <div className="flex justify-end"><div className="w-3/5 h-8 bg-primary/10 rounded-lg"></div></div>
                  <div className="flex justify-start"><div className="w-4/5 h-12 bg-secondary/20 rounded-lg"></div></div>
                   <div className="flex justify-end"><div className="w-1/2 h-8 bg-primary/10 rounded-lg"></div></div>
                   <div className="flex justify-start"><div className="w-3/4 h-16 bg-secondary/20 rounded-lg"></div></div>
                </div>

                {/* Simulated Extension Popup (Appears on hover/click - use Shadcn Dialog/Popover in real implementation) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }} // Make this conditional on button click state
                  transition={{ delay: 0.2 }}
                  className="absolute top-14 right-4 w-80 bg-card border border-border rounded-xl shadow-2xl p-4 z-20"
                >
                  <h4 className="font-semibold mb-3 text-sm flex items-center"><Sparkles size={14} className="mr-1.5 text-primary"/> Jaydai Prompt Library</h4>
                  <Input placeholder="Search prompts..." className="mb-3 h-8 text-xs" />
                  <div className="space-y-2 max-h-48 overflow-y-auto text-xs">
                    <button className="w-full text-left p-2 rounded hover:bg-muted">Marketing Campaign Ideas</button>
                    <button className="w-full text-left p-2 rounded hover:bg-muted">Code Explanation (Python)</button>
                    <button className="w-full text-left p-2 rounded hover:bg-muted bg-muted font-medium">Blog Post Outline</button>
                    <button className="w-full text-left p-2 rounded hover:bg-muted">Meeting Summary Generator</button>
                  </div>
                   <button className="mt-3 w-full text-xs py-1.5 rounded bg-primary text-primary-foreground hover:bg-primary/90">Use Selected Prompt</button>
                </motion.div>
              </div>
            </Card>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> It visually grounds the product in its natural environment (the browser, alongside AI tools). Interactivity (even simulated) increases engagement and makes the workflow intuitive. It answers the "how does it work?" question instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 10: Dynamic Prompt Library Showcase (Bento Grid) */}
        <section id="bento-prompt-library" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
           <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-2xl p-8 border border-emerald-500/20 relative overflow-hidden">
             <div className="absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(farthest-side_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/50 via-transparent to-transparent"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
               <LayoutGrid className="mr-2 text-emerald-500" size={24} />
              Explore Our Curated Prompt Universe
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              Dive into our extensive library of expert-crafted prompts covering diverse use cases. Find exactly what you need, fast. Hover over cards for a sneak peek.
            </p>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[500px]">
              {/* Large Card (Category: Marketing) */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="col-span-2 row-span-2 bg-card border border-border rounded-xl p-6 flex flex-col justify-between relative overflow-hidden shadow-lg cursor-pointer group"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 z-10 relative">Marketing & Sales</h3>
                  <p className="text-sm text-foreground/70 z-10 relative">Generate campaign ideas, ad copy, email sequences, sales scripts, and more.</p>
                </div>
                <div className="flex space-x-2 mt-4 z-10 relative">
                   <span className="text-xs bg-emerald-500/20 text-emerald-700 px-2 py-0.5 rounded-full">Ad Copy</span>
                   <span className="text-xs bg-emerald-500/20 text-emerald-700 px-2 py-0.5 rounded-full">Email Outreach</span>
                   <span className="text-xs bg-emerald-500/20 text-emerald-700 px-2 py-0.5 rounded-full">SEO Keywords</span>
                 </div>
                 {/* Example Prompts Preview (hidden, shown on hover) */}
                 <div className="absolute inset-0 bg-card/90 backdrop-blur-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-center">
                     <p className="font-medium mb-2 text-sm">Popular Prompts:</p>
                     <ul className="list-disc list-inside text-xs space-y-1">
                         <li>Generate 5 LinkedIn post ideas for [Product] targeting [Audience].</li>
                         <li>Write a cold email sequence for [Prospect Role].</li>
                         <li>Create a meta description for a page about [Topic].</li>
                     </ul>
                 </div>
               </motion.div>

              {/* Small Card (Category: Development) */}
               <motion.div whileHover={{ scale: 1.05 }} className="bg-card border border-border rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-md cursor-pointer">
                 <Code size={24} className="text-foreground/70 mb-2"/>
                 <h4 className="font-semibold text-sm">Development</h4>
                 <p className="text-xs text-foreground/60">Explain code, debug, write tests, generate boilerplate.</p>
               </motion.div>

               {/* Small Card (Category: Content Creation) */}
               <motion.div whileHover={{ scale: 1.05 }} className="bg-card border border-border rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-md cursor-pointer">
                 <PenTool size={24} className="text-foreground/70 mb-2"/>
                 <h4 className="font-semibold text-sm">Content Creation</h4>
                 <p className="text-xs text-foreground/60">Blog outlines, social media posts, video scripts.</p>
               </motion.div>

               {/* Medium Card (Featured Prompt) */}
               <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 row-span-1 bg-primary/10 border border-primary/30 rounded-xl p-4 shadow-lg cursor-pointer group relative">
                 <Star size={16} className="absolute top-3 right-3 text-primary fill-primary/50"/>
                 <h4 className="font-semibold text-sm mb-1">Featured: Competitor Analysis</h4>
                 <p className="text-xs text-foreground/70 line-clamp-2">Analyze competitor [Competitor Name]'s strategy based on their website...</p>
                 <button className="text-xs text-primary hover:underline mt-2 group-hover:opacity-100 opacity-0 transition-opacity absolute bottom-3 right-3">View Prompt</button>
               </motion.div>

              {/* Small Card (Category: Personal Productivity) */}
               <motion.div whileHover={{ scale: 1.05 }} className="bg-card border border-border rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-md cursor-pointer">
                 <Zap size={24} className="text-foreground/70 mb-2"/>
                 <h4 className="font-semibold text-sm">Productivity</h4>
                 <p className="text-xs text-foreground/60">Summarize text, plan tasks, draft emails quickly.</p>
               </motion.div>

               {/* Small Card (View All) */}
               <motion.div whileHover={{ scale: 1.05 }} className="bg-card border border-dashed border-border rounded-xl p-4 flex flex-col justify-center items-center text-center hover:bg-muted transition-colors cursor-pointer shadow-sm">
                 <ArrowRight size={24} className="text-primary mb-2"/>
                 <h4 className="font-semibold text-sm text-primary">View All Categories</h4>
               </motion.div>
             </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> The Bento Grid is a modern, visually appealing way to display diverse content. It allows showcasing breadth (categories) and depth (featured prompts) simultaneously. Interactive hover states encourage exploration without cluttering the initial view.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 11: ROI / Time Saved Calculator */}
        <section id="roi-calculator" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-br from-rose-500/10 to-red-500/5 rounded-2xl p-8 border border-rose-500/20 relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-400/10 rounded-full blur-3xl opacity-40 transform -translate-x-1/4 translate-y-1/4"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calculator className="mr-2 text-rose-500" size={24} />
              Calculate Your Potential Savings
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              See how much time (and money) you could save by using Jaydai's expert prompts instead of writing and refining them yourself. Adjust the sliders to match your usage.
            </p>

            <Card className="overflow-hidden shadow-lg border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Input Section */}
                <div className="p-6 space-y-6 border-b md:border-b-0 md:border-r border-border">
                  <div>
                    <label htmlFor="promptsPerWeek" className="block text-sm font-medium text-foreground/80 mb-2">How many prompts do you typically write per week?</label>
                    <div className="flex items-center space-x-4">
                      <Slider id="promptsPerWeek" defaultValue={[20]} max={100} step={5} className="flex-1" />
                      <span className="font-semibold w-12 text-right">20</span> {/* This would be dynamic with state */}
                    </div>
                  </div>
                   <div>
                    <label htmlFor="timePerPrompt" className="block text-sm font-medium text-foreground/80 mb-2">Avg. time spent writing/refining each prompt (minutes)?</label>
                    <div className="flex items-center space-x-4">
                       <Slider id="timePerPrompt" defaultValue={[10]} max={30} step={1} className="flex-1" />
                      <span className="font-semibold w-12 text-right">10 min</span> {/* Dynamic */}
                    </div>
                  </div>
                   <div>
                    <label htmlFor="hourlyRate" className="block text-sm font-medium text-foreground/80 mb-2">Your approximate hourly rate (€ - optional)</label>
                     <Input id="hourlyRate" type="number" placeholder="e.g., 50" className="max-w-xs" />
                   </div>
                 </div>

                {/* Results Section */}
                 <div className="p-6 bg-gradient-to-br from-rose-500/5 to-transparent flex flex-col justify-center items-center text-center">
                   <p className="text-sm text-foreground/70 mb-2">With Jaydai (est. 70% time saving):</p>
                   <div className="mb-4">
                     <p className="text-4xl font-bold text-rose-600">~5.8 Hours</p>
                     <p className="text-foreground/80">Saved per week</p>
                   </div>
                   <div className="mb-6">
                     <p className="text-4xl font-bold text-rose-600">~300 Hours</p>
                     <p className="text-foreground/80">Saved per year</p>
                   </div>
                   <div className="border-t border-border pt-4 w-full">
                     <p className="text-2xl font-bold text-emerald-600">€15,000+</p>
                     <p className="text-foreground/80 text-sm">Potential annual value (based on €50/hr)</p>
                   </div>
                    <p className="text-xs text-foreground/50 mt-4 italic">*Estimates based on average user data.</p>
                 </div>
               </div>
            </Card>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> Quantifying the value proposition makes it incredibly compelling. An interactive calculator increases engagement and allows users to personalize the benefit, making the ROI feel real and directly applicable to them. It strongly supports the conversion goal.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 12: Animated Feature Breakdown (Scroll-Triggered) */}
        <section id="feature-flow" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-tr from-violet-500/10 to-purple-500/5 rounded-2xl p-8 border border-violet-500/20 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
               <Workflow className="mr-2 text-violet-500" size={24} />
              Streamline Your Entire AI Workflow
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
               From finding the perfect prompt to analyzing your usage, Jaydai enhances every step. See how our features connect to boost your productivity (scroll to see).
            </p>

            {/* This requires Framer Motion's scroll-linked animations - simplified static representation here */}
            <div className="space-y-16 relative py-10">
              {/* Vertical connecting line */}
               <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border z-0"></div>

              {/* Step 1: Find Prompt */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.5 }} className="flex items-start relative z-10">
                 <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-background"></div>
                 <Card className="ml-16 flex-1 shadow-md border border-border">
                     <CardHeader><CardTitle className="text-lg flex items-center"><LayoutGrid size={18} className="mr-2 text-violet-400"/> Find the Perfect Prompt</CardTitle></CardHeader>
                     <CardContent><p className="text-sm text-foreground/80">Instantly access thousands of expert-vetted prompts in our library, organized by category and use case.</p></CardContent>
                 </Card>
               </motion.div>

               {/* Step 2: Use & Customize */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true, amount: 0.5 }} className="flex items-start relative z-10">
                 <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-background"></div>
                 <Card className="ml-16 flex-1 shadow-md border border-border">
                     <CardHeader><CardTitle className="text-lg flex items-center"><Sparkles size={18} className="mr-2 text-violet-400"/> Use & Customize Instantly</CardTitle></CardHeader>
                     <CardContent><p className="text-sm text-foreground/80">Click to copy or directly use prompts in ChatGPT, Claude, etc. Easily tweak them for your specific needs.</p></CardContent>
                 </Card>
               </motion.div>

              {/* Step 3: Save Your Templates */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true, amount: 0.5 }} className="flex items-start relative z-10">
                 <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-background"></div>
                 <Card className="ml-16 flex-1 shadow-md border border-border">
                     <CardHeader><CardTitle className="text-lg flex items-center"><Save size={18} className="mr-2 text-violet-400"/> Save Your Winning Prompts</CardTitle></CardHeader>
                     <CardContent><p className="text-sm text-foreground/80">Create and save your own custom prompt templates for recurring tasks. Never type the same instructions twice.</p></CardContent>
                 </Card>
               </motion.div>

              {/* Step 4: Analyze Impact */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true, amount: 0.5 }} className="flex items-start relative z-10">
                 <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-background"></div>
                 <Card className="ml-16 flex-1 shadow-md border border-border">
                     <CardHeader><CardTitle className="text-lg flex items-center"><BarChart3 size={18} className="mr-2 text-violet-400"/> Track Your Usage & Impact</CardTitle></CardHeader>
                     <CardContent><p className="text-sm text-foreground/80">Understand your AI usage patterns, see which prompts work best, and track estimated time savings with built-in analytics.</p></CardContent>
                 </Card>
               </motion.div>
             </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> It tells a story about the user journey and how Jaydai adds value at each stage. Scroll-triggered animations make the discovery process engaging and visually dynamic, reinforcing the idea of a smooth, connected workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 13: "Build Your Own Template" Visualizer */}
        <section id="template-builder-demo" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
           <div className="bg-gradient-to-bl from-pink-500/10 to-fuchsia-500/5 rounded-2xl p-8 border border-pink-500/20 relative overflow-hidden">
             <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl opacity-50"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
               <Edit3 className="mr-2 text-pink-500" size={24} />
              Craft Reusable Prompt Templates
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              Stop repetitive typing. Build your own powerful prompt templates with placeholders. Drag, drop, and save for instant reuse across projects. (Simplified interactive demo).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Draggable Components (Simplified) */}
               <Card className="md:col-span-1 shadow">
                 <CardHeader><CardTitle className="text-base">Template Components</CardTitle></CardHeader>
                 <CardContent className="space-y-3">
                   <div className="p-3 border border-dashed rounded bg-muted cursor-grab active:cursor-grabbing flex items-center text-sm"><MoveRight size={14} className="mr-2 opacity-50"/> Instruction Text</div>
                   <div className="p-3 border border-dashed rounded bg-muted cursor-grab active:cursor-grabbing flex items-center text-sm"><MoveRight size={14} className="mr-2 opacity-50"/> [Placeholder Variable]</div>
                   <div className="p-3 border border-dashed rounded bg-muted cursor-grab active:cursor-grabbing flex items-center text-sm"><MoveRight size={14} className="mr-2 opacity-50"/> Example Output Format</div>
                   <div className="p-3 border border-dashed rounded bg-muted cursor-grab active:cursor-grabbing flex items-center text-sm"><MoveRight size={14} className="mr-2 opacity-50"/> Tone Specification</div>
                 </CardContent>
               </Card>

               {/* Template Canvas (Simplified Drop Zone) */}
               <Card className="md:col-span-2 shadow-lg border border-border">
                 <CardHeader className="flex flex-row items-center justify-between">
                     <CardTitle className="text-base">New Template: "Meeting Summary"</CardTitle>
                     <Button variant="outline" size="sm"><Save size={14} className="mr-1.5"/> Save Template</Button>
                 </CardHeader>
                 <CardContent className="min-h-[250px] bg-muted/30 border-t border-border p-4 space-y-3">
                     {/* Dropped Items Simulation */}
                     <div className="p-3 border rounded bg-background shadow-sm text-sm">Summarize the key decisions and action items from the following meeting notes:</div>
                     <div className="p-3 border rounded bg-background shadow-sm text-sm text-pink-600 font-medium">[Meeting Notes Placeholder]</div>
                     <div className="p-3 border rounded bg-background shadow-sm text-sm">Output as bullet points under 'Decisions' and 'Actions (Owner)'.</div>
                     <div className="p-3 border rounded bg-background shadow-sm text-sm">Use a concise and professional tone.</div>
                     <div className="p-6 border-2 border-dashed border-border rounded-lg text-center text-sm text-muted-foreground">Drag components here</div>
                 </CardContent>
               </Card>
            </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> It demystifies the "custom template" feature by visualizing the creation process. Even a simplified drag-and-drop interface makes the concept tangible and highlights the ease of use and power of customization.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 14: Learning Module Preview */}
        <section id="learning-preview" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
           <div className="bg-gradient-to-tr from-lime-500/10 to-emerald-500/5 rounded-2xl p-8 border border-lime-500/20 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-15 [mask-image:radial-gradient(farthest-side_at_top_right,_var(--tw-gradient-stops))] from-lime-500/50 via-transparent to-transparent"></div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-2 text-lime-600" size={24} />
              Master AI with Jaydai Academy
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              Go beyond basic prompting. Our online school offers practical, real-world simulations and courses to help you and your team leverage AI effectively.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Module Card 1 */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                 <AspectRatio ratio={16 / 9} className="bg-muted">
                   <img src="https://via.placeholder.com/400x225/A2E49A/388E3C?text=Module+1+Preview" alt="Prompting Fundamentals" className="object-cover w-full h-full"/>
                 </AspectRatio>
                 <CardHeader>
                   <CardTitle className="text-base">Prompting Fundamentals</CardTitle>
                   <p className="text-xs text-muted-foreground">Beginner - 1 hour</p>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-foreground/80 mb-3 line-clamp-2">Learn the core principles of writing effective prompts for any AI model.</p>
                   <Progress value={25} className="h-1.5" indicatorColor="bg-lime-500"/>
                   <p className="text-xs text-muted-foreground mt-1">25% Complete</p>
                 </CardContent>
               </Card>

               {/* Module Card 2 */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                 <AspectRatio ratio={16 / 9} className="bg-muted">
                   <img src="https://via.placeholder.com/400x225/8BC34A/FFFFFF?text=Module+2+Preview" alt="AI for Marketing Mastery" className="object-cover w-full h-full"/>
                 </AspectRatio>
                 <CardHeader>
                   <CardTitle className="text-base">AI for Marketing Mastery</CardTitle>
                   <p className="text-xs text-muted-foreground">Intermediate - 3 hours</p>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-foreground/80 mb-3 line-clamp-2">Generate high-converting copy, analyze trends, and automate marketing tasks.</p>
                   <Progress value={0} className="h-1.5" indicatorColor="bg-lime-500"/>
                   <p className="text-xs text-muted-foreground mt-1">Start Learning</p>
                 </CardContent>
               </Card>

               {/* Module Card 3 */}
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                 <AspectRatio ratio={16 / 9} className="bg-muted">
                   <img src="https://via.placeholder.com/400x225/CDDC39/000000?text=Module+3+Preview" alt="Real-World Simulations" className="object-cover w-full h-full"/>
                 </AspectRatio>
                 <CardHeader>
                   <CardTitle className="text-base">Real-World Simulations</CardTitle>
                    <p className="text-xs text-muted-foreground">Advanced - Ongoing</p>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-foreground/80 mb-3 line-clamp-2">Apply your skills in simulated business scenarios like project management and client reporting.</p>
                   <Progress value={0} className="h-1.5" indicatorColor="bg-lime-500"/>
                   <p className="text-xs text-muted-foreground mt-1">Coming Soon</p>
                 </CardContent>
               </Card>
             </div>
             <div className="text-center mt-8">
                 <Button variant="outline">Explore Jaydai Academy <ArrowRight size={16} className="ml-1.5"/></Button>
             </div>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> It highlights the educational value-add beyond the core tool. Using familiar course card layouts makes the offering clear. Progress bars (even static) and module details add credibility and entice users interested in upskilling.
              </p>
            </div>
          </div>
        </section>

        {/* Idea 15: Corporate Solutions Spotlight */}
        <section id="corporate-solutions" className="max-w-5xl mx-auto mb-32 scroll-mt-20">
          <div className="bg-gradient-to-br from-sky-500/10 to-indigo-500/5 rounded-2xl p-8 border border-sky-500/20 relative overflow-hidden">
             <div className="absolute inset-0 -z-10 opacity-25 [mask-image:linear-gradient(to_bottom_right,white,transparent)]">
                 <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
                 <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
             </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 text-sky-500" size={24} />
              Empower Your Organization with AI
            </h2>

            <p className="mb-8 text-foreground/70 max-w-3xl">
              Beyond individual use, Jaydai offers tailored solutions to help your entire workforce leverage AI safely and effectively. Drive productivity and innovation across your company.
            </p>

            <Tabs defaultValue="training" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                 <TabsTrigger value="training">Workforce Training</TabsTrigger>
                 <TabsTrigger value="custom">Custom Prompt Banks</TabsTrigger>
                 <TabsTrigger value="advisory">AI Audit & Advisory</TabsTrigger>
               </TabsList>

               {/* Training Content */}
               <TabsContent value="training">
                 <Card className="border border-border shadow-sm">
                   <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                     <div className="md:col-span-1 flex justify-center">
                       <Users size={64} className="text-sky-400 opacity-80" />
                     </div>
                     <div className="md:col-span-2">
                       <h3 className="text-lg font-semibold mb-2">On-site & Remote AI Training</h3>
                       <p className="text-sm text-foreground/80 mb-4">Equip your teams with the skills to use AI tools efficiently and responsibly through hands-on workshops and coaching programs.</p>
                       <ul className="text-xs space-y-1 list-disc list-inside text-foreground/70">
                         <li>Tailored curriculum for your industry</li>
                         <li>Focus on practical business applications</li>
                         <li>Boost adoption and maximize ROI</li>
                       </ul>
                       <Button variant="link" className="px-0 h-auto mt-3 text-sky-600">Learn More about Training <MoveRight size={14} className="ml-1"/></Button>
                     </div>
                   </CardContent>
                 </Card>
               </TabsContent>

               {/* Custom Prompts Content */}
               <TabsContent value="custom">
                  <Card className="border border-border shadow-sm">
                   <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                     <div className="md:col-span-1 flex justify-center">
                       <Sparkles size={64} className="text-primary opacity-80" /> {/* Re-use Sparkles */}
                     </div>
                     <div className="md:col-span-2">
                       <h3 className="text-lg font-semibold mb-2">Enterprise Prompt Library</h3>
                       <p className="text-sm text-foreground/80 mb-4">Develop a unique, secure library of custom-tailored prompts designed specifically for your company's workflows, brand voice, and use cases.</p>
                        <ul className="text-xs space-y-1 list-disc list-inside text-foreground/70">
                         <li>Capture proprietary knowledge in prompts</li>
                         <li>Ensure consistent, high-quality AI outputs</li>
                         <li>Securely share best practices across teams</li>
                       </ul>
                       <Button variant="link" className="px-0 h-auto mt-3 text-primary">Request Custom Prompts <MoveRight size={14} className="ml-1"/></Button>
                     </div>
                   </CardContent>
                 </Card>
               </TabsContent>

               {/* Advisory Content */}
               <TabsContent value="advisory">
                  <Card className="border border-border shadow-sm">
                   <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                     <div className="md:col-span-1 flex justify-center">
                       <ShieldCheck size={64} className="text-indigo-400 opacity-80" />
                     </div>
                     <div className="md:col-span-2">
                       <h3 className="text-lg font-semibold mb-2">AI Readiness Audit & Strategy</h3>
                       <p className="text-sm text-foreground/80 mb-4">Assess your organization's AI maturity, identify high-impact opportunities, and develop a strategic roadmap for successful AI integration.</p>
                        <ul className="text-xs space-y-1 list-disc list-inside text-foreground/70">
                         <li>Identify key areas for AI-driven productivity</li>
                         <li>Develop governance and responsible use policies</li>
                         <li>Align AI initiatives with business goals</li>
                       </ul>
                       <Button variant="link" className="px-0 h-auto mt-3 text-indigo-600">Book an AI Audit Consultation <MoveRight size={14} className="ml-1"/></Button>
                     </div>
                   </CardContent>
                 </Card>
               </TabsContent>
             </Tabs>

            <div className="mt-8 text-foreground/70 text-sm">
              <p>
                <strong>Why this works:</strong> It clearly separates and elevates the B2B offerings. Using Tabs allows presenting detailed information for each service without overwhelming the user. Specific icons and targeted language address corporate needs directly.
              </p>
            </div>
          </div>
        </section>

        {/* Final Call to Action or Footer Placeholder */}
        <div className="mt-16 pt-12 border-t border-border text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your AI Prompts?</h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">Stop wasting time with generic AI results. Start crafting expert prompts with Jaydai today and unlock the true potential of AI.</p>
            <button className="px-8 py-3 rounded-md bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
                Get Started with Jaydai Now
            </button>
        </div>

      </main>

       {/* Footer Example */}
       <footer className="border-t border-border mt-16 py-8 bg-secondary/5">
         <div className="container mx-auto px-4 text-center text-foreground/60 text-sm">
             <p>&copy; {new Date().getFullYear()} Jaydai. All rights reserved.</p>
             {/* Add footer links here if needed */}
         </div>
       </footer>

    </div> // Close main background div
  ); // Close return statement
}; // Close IdeasPage component

export default IdeasPage;