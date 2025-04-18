"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  BarChart4, 
  PenTool, 
  ArrowRight, 
  BriefcaseBusiness,
  Zap,
  LineChart 
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PulseBeams } from "@/components/enterprise/PulseBeams" // We'll move this later
import { useTranslations } from "next-intl"

export const HeroTabs = () => {
  const t = useTranslations('enterpriseHero')

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full lg:w-1/2 mt-12 lg:mt-0"
    >
      <div className="relative p-1 bg-gradient-to-br from-primary/20 via-primary/5 to-background rounded-2xl border border-border/50 shadow-2xl">
        <div className="absolute inset-0 pointer-events-none">
          <PulseBeams />
        </div>
        
        <Tabs defaultValue="teams" className="w-full">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/40">
            <div className="text-foreground/70 text-sm font-medium">{t("tabs.title")}</div>
            <TabsList className="bg-background/50 backdrop-blur-sm border border-border/60">
              <TabsTrigger value="teams" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Users size={14} className="mr-1" /> {t("tabs.teams")}
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BarChart4 size={14} className="mr-1" /> {t("tabs.analytics")}
              </TabsTrigger>
              <TabsTrigger value="prompts" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <PenTool size={14} className="mr-1" /> {t("tabs.prompts")}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-4">
            <TabsContent value="teams" className="mt-0">
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card overflow-hidden">
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <BriefcaseBusiness size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{t("teamsTab.title")}</div>
                        <div className="text-sm text-foreground/60">{t("teamsTab.subtitle")}</div>
                      </div>
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                      {t("teamsTab.status")}
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    {t.raw("teamsTab.activities").map((activity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-500">{activity.user}</div>
                        <div className="flex-1 p-2 rounded bg-secondary/20 text-sm">{activity.action}</div>
                        <div className="text-xs text-foreground/50">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="text-foreground/70 text-sm">{t("teamsTab.stats.users.title")}</div>
                    <div className="mt-1 text-2xl font-bold">{t("teamsTab.stats.users.value")}</div>
                    <div className="mt-1 text-xs text-green-500 flex items-center">
                      <ArrowRight size={12} className="rotate-45" />
                      <span>{t("teamsTab.stats.users.trend")}</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <div className="text-foreground/70 text-sm">{t("teamsTab.stats.templates.title")}</div>
                    <div className="mt-1 text-2xl font-bold">{t("teamsTab.stats.templates.value")}</div>
                    <div className="mt-1 text-xs text-green-500 flex items-center">
                      <ArrowRight size={12} className="rotate-45" />
                      <span>{t("teamsTab.stats.templates.trend")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-0">
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card overflow-hidden">
                  <div className="p-4 border-b border-border">
                    <div className="font-medium flex items-center">
                      <LineChart size={16} className="mr-2 text-primary" />
                      {t("analyticsTab.title")}
                    </div>
                    <div className="text-sm text-foreground/60">{t("analyticsTab.subtitle")}</div>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-4 flex justify-between items-center">
                      <div className="text-sm font-medium">{t("analyticsTab.chartTitle")}</div>
                      <div className="text-xs text-foreground/60">{t("analyticsTab.period")}</div>
                    </div>
                    
                    {/* Simulated bar chart */}
                    <div className="h-32 flex items-end justify-between gap-2">
                      {[65, 85, 55, 70, 40].map((height, i) => {
                        const department = t.raw("analyticsTab.departments")[i];
                        const bgColor = [
                          "bg-blue-500",
                          "bg-purple-500",
                          "bg-green-500",
                          "bg-amber-500",
                          "bg-red-500"
                        ][i];
                        
                        return (
                          <div key={i} className="flex flex-col items-center flex-1">
                            <div 
                              className={`w-full rounded-t ${bgColor} opacity-80`}
                              style={{ height: `${height}%` }}
                            ></div>
                            <div className="text-xs text-foreground/70 mt-2 w-full truncate text-center">
                              {department}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-center justify-between">
                      <div className="text-foreground/70 text-xs">{t("analyticsTab.metrics.timeSaved.title")}</div>
                      <Zap size={14} className="text-amber-500" />
                    </div>
                    <div className="mt-1 text-xl font-bold">{t("analyticsTab.metrics.timeSaved.value")}</div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-center justify-between">
                      <div className="text-foreground/70 text-xs">{t("analyticsTab.metrics.roi.title")}</div>
                      <LineChart size={14} className="text-green-500" />
                    </div>
                    <div className="mt-1 text-xl font-bold">{t("analyticsTab.metrics.roi.value")}</div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-center justify-between">
                      <div className="text-foreground/70 text-xs">{t("analyticsTab.metrics.engagement.title")}</div>
                      <Users size={14} className="text-blue-500" />
                    </div>
                    <div className="mt-1 text-xl font-bold">{t("analyticsTab.metrics.engagement.value")}</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prompts" className="mt-0">
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card overflow-hidden">
                  <div className="p-4 border-b border-border">
                    <div className="font-medium flex items-center">
                      <PenTool size={16} className="mr-2 text-primary" />
                      {t("promptsTab.title")}
                    </div>
                    <div className="text-sm text-foreground/60">{t("promptsTab.subtitle")}</div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    {t.raw("promptsTab.templates").map((template, i) => (
                      <div key={i} className="p-3 rounded-lg bg-secondary/10 border border-border">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{template.title}</div>
                          <div className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                            {template.category}
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-foreground/70">
                          {template.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-3 rounded-lg border border-border bg-card flex items-center justify-between">
                  <div>
                    <div className="font-medium">{t("promptsTab.creator.title")}</div>
                    <div className="text-sm text-foreground/60">{t("promptsTab.creator.subtitle")}</div>
                  </div>
                  <button className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                    {t("promptsTab.creator.button")}
                  </button>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default HeroTabs