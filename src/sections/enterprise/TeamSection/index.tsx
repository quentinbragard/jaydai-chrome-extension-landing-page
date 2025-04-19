"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"
import SectionHeader from "./SectionHeader"
import TeamMemberSelector from "./TeamMemberSelector"
import TeamMemberDetail from "./TeamMemberDetail"
import TeamExpertise from "./TeamExpertise"
import { TeamMember } from "./shared/types"

const EnterpriseTeamSection = () => {
  const t = useTranslations('enterpriseTeam')
  const teamMembers = t.raw('teamMembers') as TeamMember[]
  const [activeTeamMember, setActiveTeamMember] = useState(teamMembers[0].id)
  const [activeBadge, setActiveBadge] = useState<string | null>(null)
  
  // Get the active team member data
  const activeMember = teamMembers.find(member => member.id === activeTeamMember) || teamMembers[0]
  
  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[60px] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader 
          badge={t('badge')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Team member selector */}
          <TeamMemberSelector 
            teamMembers={teamMembers}
            activeTeamMember={activeTeamMember}
            setActiveTeamMember={setActiveTeamMember}
            sidebarTitle={t('sidebarTitle')}
          />
          
          {/* Team member details */}
          <TeamMemberDetail 
            member={activeMember}
            activeBadge={activeBadge}
            setActiveBadge={setActiveBadge}
            meetLabel={t('meet')}
            aboutLabel={t('about')}
            specialtiesLabel={t('specialties')}
            credentialsLabel={t('credentials')}
            requestConsultationLabel={t('requestConsultation')}
            scheduleMeetingLabel={t('scheduleMeeting')}
          />
        </div>
        
        {/* Expertise section 
        <TeamExpertise 
          title={t('expertiseSection.title')}
          credentials={{
            title: t('expertiseSection.credentials.title'),
            description: t('expertiseSection.credentials.description')
          }}
          focus={{
            title: t('expertiseSection.focus.title'),
            description: t('expertiseSection.focus.description')
          }}
          success={{
            title: t('expertiseSection.success.title'),
            description: t('expertiseSection.success.description')
          }}
          caseStudiesLink={t('caseStudiesLink')}
        />
        */}
      </div>
    </section>
  )
}

export default EnterpriseTeamSection