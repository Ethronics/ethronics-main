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
        name: "Building Electrical Installation",
        duration: "1 year",
        description: "Comprehensive training in electrical wiring for buildings",
        highlights: ["Residential Wiring", "Safety Standards", "System Maintenance"],
        details: {
          overview:
            "This program provides hands-on training in electrical installation for residential and commercial buildings, focusing on safety standards and system maintenance.",
          outcomes: [
            "Install and maintain electrical systems in buildings.",
            "Ensure compliance with safety regulations.",
            "Prepare for roles in construction and maintenance.",
          ],
          ctaText: "Build a solid foundation in electrical installation—enroll now!",
        },
      },
      {
        name: "Electrical/Electronic Equipment Servicing",
        duration: "1-2 years",
        description: "Training in servicing and maintaining electrical/electronic equipment",
        highlights: ["Equipment Diagnostics", "Repair Techniques", "Preventive Maintenance"],
        details: {
          overview:
            "Learn to diagnose, repair, and maintain electrical and electronic equipment. This program prepares you for roles in servicing and technical support.",
          outcomes: [
            "Diagnose and repair electrical/electronic equipment.",
            "Perform preventive maintenance to extend equipment life.",
            "Work in industries requiring technical servicing expertise.",
          ],
          ctaText: "Start your journey in equipment servicing today!",
        },
      },
      {
        name: "Industrial Electrical/Electronic Control Technology",
        duration: "1-2 years",
        description: "Hands-on training in industrial control systems",
        highlights: ["PLC Programming", "Control Systems", "Automation Basics"],
        details: {
          overview:
            "This program equips you with the skills to work with industrial electrical and electronic control systems, including PLC programming and automation technologies.",
          outcomes: [
            "Master industrial control technologies.",
            "Work with PLCs and automation systems.",
            "Secure roles in manufacturing and industrial support.",
          ],
          ctaText: "Ready to excel in industrial control technology? Join today!",
        },
      },
      {
        name: "Solar PV System Installation and Maintenance",
        duration: "1 year",
        description: "Training in solar photovoltaic systems",
        highlights: ["Solar Panel Installation", "System Design", "Maintenance Techniques"],
        details: {
          overview:
            "Learn to install and maintain solar PV systems, focusing on renewable energy solutions for residential and commercial applications.",
          outcomes: [
            "Install and maintain solar PV systems.",
            "Design efficient solar energy systems.",
            "Contribute to the renewable energy sector.",
          ],
          ctaText: "Join the solar energy revolution—enroll now!",
        },
      },
      {
        name: "Fiber Optics Networking",
        duration: "6 months",
        description: "Specialized training in fiber optics technology",
        highlights: ["Fiber Optic Installation", "Network Design", "Testing & Troubleshooting"],
        details: {
          overview:
            "This program provides training in fiber optics networking, including installation, design, and troubleshooting of fiber optic systems.",
          outcomes: [
            "Install and maintain fiber optic networks.",
            "Design and troubleshoot fiber optic systems.",
            "Prepare for roles in telecommunications and networking.",
          ],
          ctaText: "Advance your career in fiber optics—enroll today!",
        },
      },
      {
        name: "Electrical Power System Technology",
        duration: "1-2 years",
        description: "Training in electrical power systems and technologies",
        highlights: ["Power Distribution", "System Analysis", "Grid Maintenance"],
        details: {
          overview:
            "This program focuses on electrical power systems, including power distribution, system analysis, and grid maintenance, preparing you for roles in the energy sector.",
          outcomes: [
            "Work with electrical power distribution systems.",
            "Analyze and maintain power grids.",
            "Contribute to the development of energy infrastructure.",
          ],
          ctaText: "Shape the future of energy—join our program today!",
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
      {
        name: "Information Systems",
        duration: "4 years",
        description: "Bridging business and technology",
        highlights: ["Database Management", "Business Analytics", "IT Project Management"],
        details: {
          overview:
            "This program focuses on the intersection of business and technology, equipping you with the skills to manage and analyze information systems effectively.",
          outcomes: [
            "Design and manage enterprise-level information systems.",
            "Analyze data to drive business decisions.",
            "Lead IT projects in diverse industries.",
          ],
          ctaText: "Transform businesses with technology—enroll today!",
        },
      },
    ],
  },

  {
    level: "Postgrad",
    icon: React.createElement(Brain, { className: "w-8 h-8" }),
    description: "Advanced specialization and research in technology",
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
      {
        name: "MSc in Data Science",
        duration: "2 years",
        description: "Advanced data analysis and visualization",
        highlights: ["Big Data", "Predictive Analytics", "Data Visualization"],
        details: {
          overview:
            "Master the art of data science with a program that focuses on big data, predictive analytics, and visualization techniques. Prepare for a career in data-driven decision-making.",
          outcomes: [
            "Analyze and interpret complex datasets.",
            "Develop predictive models for business insights.",
            "Visualize data to communicate findings effectively.",
          ],
          ctaText: "Lead the data revolution—apply now!",
        },
      },
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
      {
        name: "PhD in Cybersecurity",
        duration: "4 years",
        description: "Advanced research in securing digital systems",
        highlights: ["Cryptography", "Network Security", "Cyber Threat Analysis"],
        details: {
          overview:
            "This program focuses on advanced research in cybersecurity, equipping you to tackle emerging threats and secure digital infrastructures.",
          outcomes: [
            "Develop innovative solutions to cybersecurity challenges.",
            "Lead research in cryptography and threat analysis.",
            "Shape the future of secure digital systems.",
          ],
          ctaText: "Secure the digital world—join our PhD program!",
        },
      },
    ],
  },
  {
    level: "Professional Training",
    icon: React.createElement(Beaker, { className: "w-8 h-8" }),
    description: "Short-term, intensive training for career advancement",
    programs: [
      {
        name: "Project Management Professional (PMP)",
        duration: "3 months",
        description: "Comprehensive training for project management certification",
        highlights: ["Project Planning", "Risk Management", "Agile Methodologies"],
        details: {
          overview:
            "This program prepares you for the PMP certification with in-depth training in project planning, risk management, and agile methodologies. Gain the skills to lead projects successfully.",
          outcomes: [
            "Earn the globally recognized PMP certification.",
            "Master project management tools and techniques.",
            "Advance your career in project management.",
          ],
          ctaText: "Take the next step in your career—enroll in PMP training today!",
        },
      },
      {
        name: "Certified Data Analyst",
        duration: "4 months",
        description: "Hands-on training in data analysis and visualization",
        highlights: ["Excel & SQL", "Data Cleaning", "Visualization with Power BI"],
        details: {
          overview:
            "Learn the essential skills for data analysis, including data cleaning, SQL, and visualization tools like Power BI. This program is designed for professionals looking to enhance their analytical capabilities.",
          outcomes: [
            "Analyze and interpret data effectively.",
            "Create compelling visualizations to communicate insights.",
            "Prepare for roles in data analysis and business intelligence.",
          ],
          ctaText: "Boost your data skills—join the Certified Data Analyst program today!",
        },
      },
      {
        name: "Digital Marketing Specialist",
        duration: "2 months",
        description: "Master digital marketing strategies and tools",
        highlights: ["SEO & SEM", "Social Media Marketing", "Email Campaigns"],
        details: {
          overview:
            "This program provides practical training in digital marketing, covering SEO, SEM, social media, and email campaigns. Learn to create impactful marketing strategies for the digital age.",
          outcomes: [
            "Develop and execute effective digital marketing campaigns.",
            "Optimize websites for search engines and manage ad campaigns.",
            "Enhance brand presence on social media platforms.",
          ],
          ctaText: "Become a digital marketing expert—enroll now!",
        },
      },
      {
        name: "Cybersecurity Essentials",
        duration: "3 months",
        description: "Foundational training in cybersecurity principles",
        highlights: ["Threat Analysis", "Network Security Basics", "Incident Response"],
        details: {
          overview:
            "This program introduces you to the fundamentals of cybersecurity, including threat analysis, network security, and incident response. Gain the skills to protect digital assets and respond to security incidents.",
          outcomes: [
            "Understand the basics of cybersecurity threats and defenses.",
            "Implement foundational network security measures.",
            "Prepare for entry-level roles in cybersecurity.",
          ],
          ctaText: "Secure your future in cybersecurity—enroll today!",
        },
      },
    ],
  },
  
];
