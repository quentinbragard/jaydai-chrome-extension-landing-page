"use client"

import React from "react"
import { motion } from "framer-motion"
import { BadgeCheck, Building, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ExpertiseProps {
  title: string;
  credentials: {
    title: string;
    description: string;
  };
  focus: {
    title: string;
    description: string;
  };
  success: {
    title: string;
    description: string;
  };
  caseStudiesLink: string;
}

const TeamExpertise: React.FC<ExpertiseProps> = ({
  title,
  credentials,
  focus,
  success,
  caseStudiesLink
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 max-w-6xl mx-auto"
      >
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-center mb-8">{title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                <BadgeCheck size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold">{credentials.title}</h4>
              <p className="text-foreground/70 mt-2">{credentials.description}</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                <Building size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold">{focus.title}</h4>
              <p className="text-foreground/70 mt-2">{focus.description}</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold">{success.title}</h4>
              <p className="text-foreground/70 mt-2">{success.description}</p>
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
          <span>{caseStudiesLink}</span>
          <ExternalLink size={14} />
        </Link>
      </motion.div>
    </>
  )
}

export default TeamExpertise