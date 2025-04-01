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
];
