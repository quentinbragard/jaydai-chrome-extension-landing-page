export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image?: string;
    specialties: string[];
    badgesUrl?: string[];
    badges?: string[];
  }
  
  export const socialLinks = {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:contact@jayd.ai"
  }