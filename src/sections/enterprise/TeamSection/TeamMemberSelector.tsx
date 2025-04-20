"use client"

import React from "react"
import { trackEvent } from '@/lib/analytics'
import { motion } from "framer-motion"
import { Building } from "lucide-react"
import Image from "next/image"
import { TeamMember } from "./shared/types"

interface TeamMemberSelectorProps {
  teamMembers: TeamMember[];
  activeTeamMember: number;
  setActiveTeamMember: (id: number) => void;
  sidebarTitle: string;
}

const TeamMemberSelector: React.FC<TeamMemberSelectorProps> = ({
  teamMembers,
  activeTeamMember,
  setActiveTeamMember,
  sidebarTitle
}) => {
  return (
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
            {sidebarTitle}
          </h3>
        </div>
        
        <div className="divide-y divide-border">
          {teamMembers.map((member: TeamMember) => (
            <button
              key={member.id}
              onClick={() => {
                trackEvent('Team Member Selected', {
                  member_name: member.name,
                  member_id: member.id,
                  source: 'enterpriseTeamSection',
                  timestamp: new Date().toISOString()
                })
                setActiveTeamMember(member.id)
              }}
              className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${
                activeTeamMember === member.id ? "bg-primary/5" : "hover:bg-secondary/5"
              }`}
            >
              <div className="relative h-12 w-12 rounded-full bg-secondary overflow-hidden">
                {member.id ? (
                  <Image
                    src={member.image || `/images/team/${member.id === 1 ? "quentin" : "jb"}.png`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-foreground/70">
                    {"member.name.charAt(0)"}
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
  )
}

export default TeamMemberSelector