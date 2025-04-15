"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  Linkedin, 
  Twitter, 
  Mail,
  Building,
  BadgeCheck,
  MessageSquare,
  CalendarClock,
  ExternalLink
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Team member details
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & AI Strategy Lead",
    bio: "10+ years experience in AI implementation and enterprise transformation. Previously led AI initiatives at Fortune 500 companies.",
    image: "/images/team1.jpg", // placeholder
    specialties: ["Enterprise Strategy", "AI Integration", "Leadership"],
    badges: ["Harvard MBA", "Former Google AI"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:sarah@jaydai.com"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO & Prompt Engineering Lead",
    bio: "Expert in prompt engineering and large language models. Built AI systems powering millions of interactions daily.",
    image: "/images/team2.jpg", // placeholder  
    specialties: ["Prompt Engineering", "LLM Fine-tuning", "Technical Leadership"],
    badges: ["MIT AI", "OpenAI Contributor"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@jaydai.com"
    }
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Enterprise Solutions Director",
    bio: "Specializes in enterprise-wide AI rollouts and change management. Led digital transformation for global organizations.",
    image: "/images/team3.jpg", // placeholder
    specialties: ["Change Management", "Enterprise Rollouts", "Team Training"],
    badges: ["Enterprise AI Expert", "Certified Trainer"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:elena@jaydai.com"
    }
  },
  {
    id: 4,
    name: "David Park",
    role: "AI Analytics Lead",
    bio: "Data scientist focused on measuring AI impact and optimizing enterprise workflows. Built analytics systems for Fortune 100 companies.",
    image: "/images/team4.jpg", // placeholder
    specialties: ["AI Analytics", "ROI Measurement", "Process Optimization"],
    badges: ["Data Science PhD", "AI Researcher"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:david@jaydai.com"
    }
  }
]

const EnterpriseTeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = React.useState(teamMembers[0].id)
  
  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
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
              <span>Our Expert Team</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Meet Our AI Implementation Experts
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-foreground/70"
          >
            Our enterprise team brings decades of experience in AI transformation and prompt engineering
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
                  Enterprise Leadership Team
                </h3>
              </div>
              
              <div className="divide-y divide-border">
                {teamMembers.map((member) => (
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
                          src={member.image}
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
            {teamMembers.map((member) => {
              if (member.id !== activeTeamMember) return null;
              
              return (
                <div 
                  key={member.id}
                  className="bg-card border border-border rounded-xl overflow-hidden h-full"
                >
                  {/* Header with background gradient */}
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5 relative">
                    <div className="absolute top-6 left-8">
                      <div className="text-sm text-foreground/50 mb-1">Meet</div>
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <div className="text-foreground/70">{member.role}</div>
                    </div>
                    
                    {/* Social links */}
                    <div className="absolute top-6 right-8 flex gap-2">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-foreground/70 hover:text-primary transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-foreground/70 hover:text-primary transition-colors"
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                      {member.social.email && (
                        <a 
                          href={member.social.email}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-foreground/70 hover:text-primary transition-colors"
                        >
                          <Mail size={16} />
                        </a>
                      )}
                    </div>
                    
                    {/* Team member image */}
                    <div className="absolute -bottom-16 left-8">
                      <div className="relative h-32 w-32 rounded-xl border-4 border-card bg-secondary overflow-hidden">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-foreground/20">
                            {member.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-20 pb-6 px-8">
                    {/* Bio */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-2">About</h4>
                      <p className="text-foreground/70">{member.bio}</p>
                    </div>
                    
                    {/* Specialties and badges */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Specialties */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground/50 mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, i) => (
                            <div 
                              key={i}
                              className="px-3 py-1 rounded-md bg-secondary/10 text-foreground/80 text-sm"
                            >
                              {specialty}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Badges */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground/50 mb-3">Credentials</h4>
                        <div className="space-y-2">
                          {member.badges.map((badge, i) => (
                            <div 
                              key={i}
                              className="flex items-center text-sm"
                            >
                              <BadgeCheck size={16} className="text-primary mr-2" />
                              <span>{badge}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
                      <Link 
                        href="#contact" 
                        className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <MessageSquare size={14} />
                        <span>Request Consultation</span>
                      </Link>
                      <Link 
                        href="#contact" 
                        className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-secondary/30 text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
                      >
                        <CalendarClock size={14} />
                        <span>Schedule Meeting</span>
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
            <h3 className="text-xl font-bold text-center mb-8">Our Enterprise Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <BadgeCheck size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Top Credentials</h4>
                <p className="text-foreground/70 mt-2">Our team brings credentials from leading AI institutions and Fortune 500 companies</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <Building size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Enterprise Focus</h4>
                <p className="text-foreground/70 mt-2">Specialized in AI implementation for organizations of all sizes across industries</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <Users size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Client Success</h4>
                <p className="text-foreground/70 mt-2">Track record of successful AI transformations for over 50+ enterprise clients</p>
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
            <span>View our enterprise case studies</span>
            <ExternalLink size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default EnterpriseTeamSection