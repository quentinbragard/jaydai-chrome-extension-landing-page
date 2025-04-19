"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Linkedin, 
  Mail, 
  MessageSquare, 
  CalendarClock
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TeamMember } from "./shared/types"
import { getBadgeName } from "./shared/utils"

interface TeamMemberDetailProps {
  member: TeamMember;
  activeBadge: string | null;
  setActiveBadge: (badge: string | null) => void;
  meetLabel: string;
  aboutLabel: string;
  specialtiesLabel: string;
  credentialsLabel: string;
  requestConsultationLabel: string;
  scheduleMeetingLabel: string;
}

const TeamMemberDetail: React.FC<TeamMemberDetailProps> = ({
  member,
  activeBadge,
  setActiveBadge,
  meetLabel,
  aboutLabel,
  specialtiesLabel,
  credentialsLabel,
  requestConsultationLabel,
  scheduleMeetingLabel
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="col-span-1 lg:col-span-2"
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
        {/* Header with background gradient */}
        <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5 relative">
          <div className="absolute top-6 left-8">
            <div className="text-sm text-foreground/50 mb-1">{meetLabel}</div>
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <div className="text-foreground/70">{member.role}</div>
          </div>
          
          {/* Social links */}
          <div className="absolute top-6 right-8 flex gap-2">
            <a 
              href={member.id === 1 ? "https://www.linkedin.com/in/quentin-bragard-030bb253/" : "https://www.linkedin.com/in/jean-baptiste-huiban-74b385103/"}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href={member.id === 1 ? "mailto:quentin@jayd.ai" : "mailto:jean-baptiste@jayd.ai"}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
          
          {/* Team member image */}
          <div className="absolute -bottom-16 left-8">
            <div className="relative h-32 w-32 rounded-xl border-4 border-card bg-secondary overflow-hidden">
              <Image
                src={member.image || `/images/team/${member.id === 1 ? "quentin" : "jb"}.png`}
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
            <h4 className="text-lg font-semibold mb-2">{aboutLabel}</h4>
            <p className="text-foreground/70">{member.bio}</p>
          </div>
          
          {/* Specialties and badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Specialties */}
            <div>
              <h4 className="text-sm font-medium text-foreground/50 mb-3">{specialtiesLabel}</h4>
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
              <h4 className="text-sm font-medium text-foreground/50 mb-3">{credentialsLabel}</h4>
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
              <span>{requestConsultationLabel}</span>
            </Link>
            <Link 
              href="#contact" 
              className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-secondary/30 text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
            >
              <CalendarClock size={14} />
              <span>{scheduleMeetingLabel}</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TeamMemberDetail