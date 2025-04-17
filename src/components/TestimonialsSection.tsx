"use client"
import React from "react"
import SectionWrapper from "./common/SectionWrapper"
import SectionHeading from "./common/SectionHeading"
import TestimonialCard from "./common/TestimonialCard"
import GridContainer from "./common/GridContainer"

const testimonials = [
  {
    quote: "Jaydai has completely transformed how I use ChatGPT. The prompt templates save me hours every week, and the analytics help me understand where I'm getting the most value.",
    author: "Sarah Johnson",
    role: "Content Strategist",
    company: "CreativeMinds",
    delay: 0.1
  },
  {
    quote: "As a developer, I was skeptical about AI tools, but Jaydai's custom templates have become an essential part of my workflow. The code suggestions are surprisingly good!",
    author: "Michael Chen",
    role: "Senior Developer",
    company: "TechInnovate",
    delay: 0.2
  },
  {
    quote: "Our marketing team has standardized our AI prompts using Jaydai's team features. We're now getting consistent results across all our campaigns, which has been a game-changer.",
    author: "Emma Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    delay: 0.3
  }
]

const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-background">
      <SectionHeading 
        title="What Our Users Say"
        description="Join thousands of professionals who are maximizing their AI potential with Jaydai"
      />
      
      <GridContainer columns={3} gap="lg" className="max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            company={testimonial.company}
            delay={testimonial.delay}
          />
        ))}
      </GridContainer>
    </SectionWrapper>
  )
}

export default TestimonialsSection
