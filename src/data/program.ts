import { Book, GraduationCap, Brain, Beaker } from "lucide-react";
import React from "react";
import { JSX } from "react";

export interface Program {
  name: string;
  duration: string;
  description: string;
  highlights: string[];
  details: {
    overview: string;
    outcomes: string[];
    ctaText: string;
  };
}

export interface ProgramLevel {
  level: string;
  icon: JSX.Element;
  description: string;
  programs: Program[];
}

export const programData: ProgramLevel[] = [
  {
    level: "TVET",
    icon: React.createElement(Book, { className: "w-8 h-8" }),
    description: "Practical, skills-based training for technical careers",
    programs: [
      {
        name: "Industrial Automation",
        duration: "1-2 years",
        description: "Hands-on training in automation systems",
        highlights: ["PLC Programming", "Robotics Basics", "Electrical Systems"],
        details: {
          overview:
            "This program equips you with the practical skills needed to excel in industrial automation. From programming PLCs to designing basic robotic systems, you’ll gain hands-on experience that prepares you for immediate entry into Ethiopia’s growing tech industries.",
          outcomes: [
            "Master automation technologies used in modern factories.",
            "Build a portfolio of practical projects.",
            "Secure roles in manufacturing and tech support.",
          ],
          ctaText: "Ready to kickstart your technical career? Join the waitlist today!",
        },
      },
    ],
  },
  {
    level: "Undergraduate",
    icon: React.createElement(GraduationCap, { className: "w-8 h-8" }),
    description: "Four-year programs building tech foundations",
    programs: [
      {
        name: "Computer Science & Engineering",
        duration: "4 years",
        description: "Software, AI, and systems development",
        highlights: ["AI & Machine Learning", "Software Engineering", "Network Security"],
        details: {
          overview:
            "Dive into the world of computer science with a program designed to make you a versatile tech innovator. You’ll explore artificial intelligence, software development, and network security, gaining the skills to create solutions that transform industries.",
          outcomes: [
            "Develop cutting-edge software and AI applications.",
            "Understand and secure complex network systems.",
            "Launch a career as a software engineer or AI specialist.",
          ],
          ctaText: "Shape the digital future—join our waitlist now!",
        },
      },
    ],
  },
  {
    level: "Masters",
    icon: React.createElement(Brain, { className: "w-8 h-8" }),
    description: "Advanced specialization in technology",
    programs: [
      {
        name: "MSc in Artificial Intelligence",
        duration: "2 years",
        description: "Cutting-edge AI and data science",
        highlights: ["Deep Learning", "NLP", "AI Ethics"],
        details: {
          overview:
            "Take your expertise to the next level with our MSc in AI. This program delves into advanced topics like deep learning and natural language processing, preparing you to lead in AI research and application while considering ethical implications.",
          outcomes: [
            "Design and implement advanced AI models.",
            "Contribute to ethical AI development.",
            "Pursue leadership roles in tech innovation.",
          ],
          ctaText: "Become an AI pioneer—sign up for updates!",
        },
      },
    ],
  },
  {
    level: "PhD",
    icon: React.createElement(Beaker, { className: "w-8 h-8" }),
    description: "Research driving tech innovation",
    programs: [
      {
        name: "PhD in Robotics & AI",
        duration: "4 years",
        description: "Advanced robotics and AI research",
        highlights: ["Autonomous Systems", "Human-Robot Interaction", "AI Algorithms"],
        details: {
          overview:
            "Push the boundaries of technology with a PhD in Robotics & AI. This research-focused program lets you explore autonomous systems and human-robot collaboration, positioning you as a thought leader in Ethiopia’s tech revolution.",
          outcomes: [
            "Conduct groundbreaking research in robotics and AI.",
            "Influence industry and academic advancements.",
            "Lead innovation in Ethiopia and beyond.",
          ],
          ctaText: "Ready to redefine tech? Join our research community!",
        },
      },
    ],
  },
];