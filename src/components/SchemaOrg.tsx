'use client'

import React from 'react';
import { usePathname } from 'next/navigation';

interface SchemaOrgProps {
  locale: string;
}

export default function SchemaOrg({ locale }: SchemaOrgProps) {
  const pathname = usePathname();
  const isHomepage = pathname === `/${locale}` || pathname === '/';
  const isFrench = locale === 'fr';
  
  const baseUrl = 'https://jayd.ai';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jaydai',
    url: baseUrl,
    logo: `/images/full-logo-dark.png`,
    sameAs: [
      'https://www.linkedin.com/company/jaydai'
    ],
    description: isFrench 
      ? 'Jaydai aide les personnes et les organisations à utiliser l\'IA efficacement en convertissant des cas d\'usage réels en prompts disponibles dans tous les outils IA.'
      : 'Jaydai helps people and organizations use AI efficiently by converting real-life use cases into prompts available in any AI tool.'
  };
  
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Jaydai Chrome Extension',
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR'
    },
    description: isFrench
      ? 'Extension Chrome qui permet d\'accéder aux meilleurs prompts pour des cas d\'usage résolus par l\'IA en quelques clics.'
      : 'Chrome extension that lets users access the best prompts for use cases that can be solved by AI in a few clicks.'
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          isHomepage 
            ? [organizationSchema, softwareSchema]
            : organizationSchema
        )
      }}
    />
  );
}
