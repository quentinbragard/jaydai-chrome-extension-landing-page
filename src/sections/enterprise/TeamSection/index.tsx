"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { 
  Users, 
  Linkedin, 
  Twitter, 
  Mail,
  Building,
  BadgeCheck,
  MessageSquare,
  CalendarClock,
  ExternalLink,
  Info
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Define types for team members
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image?: string;
  specialties: string[];
  badgesUrl?: string[];
  badges?: string[];
}

// Social media links for team members (kept outside translations)
const socialLinks = {
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "mailto:contact@jaydai.com"
}

const EnterpriseTeamSection = () => {
  const t = useTranslations('enterpriseTeam')
  const teamMembers = t.raw('teamMembers') as TeamMember[]
  const [activeTeamMember, setActiveTeamMember] = useState(teamMembers[0].id)
  const [activeBadge, setActiveBadge] = useState<string | null>(null)
  
  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[60px] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-6"
          >
            <span className="flex items-center gap-1.5">
              <Users size={14} />
              <span>{t('badge')}</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {t('title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Team member selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-border bg-secondary/5">
                <h3 className="font-semibold flex items-center">
                  <Building className="mr-2 text-primary" size={18} />
                  {t('sidebarTitle')}
                </h3>
              </div>
              
              <div className="divide-y divide-border">
                {teamMembers.map((member: TeamMember) => (
                  <button
                    key={member.id}
                    onClick={() => setActiveTeamMember(member.id)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                      activeTeamMember === member.id ? "bg-primary/5" : "hover:bg-secondary/5"
                    }`}
                  >
                    <div className="relative h-12 w-12 rounded-full bg-secondary overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image || `/images/team${member.id}.jpg`}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-foreground/70">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className={`font-medium truncate ${activeTeamMember === member.id ? "text-primary" : "text-foreground"}`}>
                        {member.name}
                      </h4>
                      <p className="text-foreground/70 text-sm truncate">
                        {member.role}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Team member details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 lg:col-span-2"
          >
            {teamMembers.map((member: TeamMember) => {
              if (member.id !== activeTeamMember) return null;
              
              return (
                <div 
                  key={member.id}
                  className="bg-card border border-border rounded-xl overflow-hidden h-full"
                >
                  {/* Header with background gradient */}
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5 relative">
                    <div className="absolute top-6 left-8">
                      <div className="text-sm text-foreground/50 mb-1">{t('meet')}</div>
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <div className="text-foreground/70">{member.role}</div>
                    </div>
                    
                    {/* Social links */}
                    <div className="absolute top-6 right-8 flex gap-2">
                      <a 
                        href={socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a 
                        href={socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                      <a 
                        href={socialLinks.email.replace('contact', member.name.toLowerCase())}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                    
                    {/* Team member image */}
                    <div className="absolute -bottom-16 left-8">
                      <div className="relative h-32 w-32 rounded-xl border-4 border-card bg-secondary overflow-hidden">
                        <Image
                          src={member.image || `/images/team${member.id}.jpg`}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-20 pb-6 px-8">
                    {/* Bio */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-2">{t('about')}</h4>
                      <p className="text-foreground/70">{member.bio}</p>
                    </div>
                    
                    {/* Specialties and badges */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Specialties */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground/50 mb-3">{t('specialties')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty: string, i: number) => (
                            <div 
                              key={i}
                              className="px-3 py-1 rounded-md bg-secondary/10 text-foreground/80 text-sm"
                            >
                              {specialty}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Credentials/Badges */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground/50 mb-3">{t('credentials')}</h4>
                        {member.badgesUrl && Array.isArray(member.badgesUrl) && member.badgesUrl.length > 0 ? (
                          <div className="flex flex-wrap gap-3">
                            {member.badgesUrl.map((badgeUrl: string, i: number) => {
                              // Skip invalid URLs
                              if (!badgeUrl) return null;
                              
                              const badgeName = getBadgeName(badgeUrl);
                              
                              return (
                                <div
                                  key={i}
                                  className="relative group"
                                  onMouseEnter={() => setActiveBadge(badgeUrl)}
                                  onMouseLeave={() => setActiveBadge(null)}
                                >
                                  <div className="h-12 w-12 rounded-md border border-border/40 bg-card shadow-sm overflow-hidden transition-all hover:scale-105 cursor-pointer">
                                    <Image
                                      src={badgeUrl}
                                      alt={badgeName}
                                      width={48}
                                      height={48}
                                      className="object-contain p-1"
                                    />
                                  </div>
                                  {/* Tooltip */}
                                  {activeBadge === badgeUrl && (
                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                                      <div className="bg-background border border-border rounded-md px-2 py-1 text-xs text-foreground/70 whitespace-nowrap shadow-lg">
                                        {badgeName}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <p className="text-foreground/50 text-sm">No credentials available</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
                      <Link 
                        href="#contact" 
                        className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <MessageSquare size={14} />
                        <span>{t('requestConsultation')}</span>
                      </Link>
                      <Link 
                        href="#contact" 
                        className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-secondary/30 text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
                      >
                        <CalendarClock size={14} />
                        <span>{t('scheduleMeeting')}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Additional team resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-center mb-8">{t('expertiseSection.title')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <BadgeCheck size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold">{t('expertiseSection.credentials.title')}</h4>
                <p className="text-foreground/70 mt-2">{t('expertiseSection.credentials.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <Building size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold">{t('expertiseSection.focus.title')}</h4>
                <p className="text-foreground/70 mt-2">{t('expertiseSection.focus.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <Users size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold">{t('expertiseSection.success.title')}</h4>
                <p className="text-foreground/70 mt-2">{t('expertiseSection.success.description')}</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="#case-studies"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <span>{t('caseStudiesLink')}</span>
            <ExternalLink size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to extract badge name from URL
const getBadgeName = (badgeUrl: string): string => {
  const filename = badgeUrl.split('/').pop()?.split('.')[0] || '';
  return filename.charAt(0).toUpperCase() + filename.slice(1).replace(/-/g, ' ');
};

export default EnterpriseTeamSection