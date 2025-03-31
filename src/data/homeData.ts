import { Rocket, Globe, Users, Brain, Shield, Cpu, Database, Notebook as Robot } from "lucide-react";
import React from "react";

// Define interfaces without JSX
export interface Slide {
  title: string; // Plain string instead of JSX.Element | string
  description: string;
  image: string;
}

export interface HeroButton {
  text: string;
  href: string;
  primary?: boolean;
}

export interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface Solution {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  progress: number;
}

export interface Partnership {
  title: string;
  description: string;
}

// Slides data with plain strings (JSX will be handled in the component)
// export const homeSlides: Slide[] = [
//   {
//     title: "A Technology That Is Taught, Researched, Made, and Perfected in Ethiopia for the World",
//     description:
//       "Ethronics is igniting a technological revolution from the heart of Ethiopia. Through cutting-edge education, pioneering research, and advanced manufacturing, we’re empowering the next generation of innovators to solve global challenges with local ingenuity.",
//     image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
//   },
//   {
//     title: "Pioneering the Future of Technology Education in Africa",
//     description:
//       "Join us in shaping tomorrow’s technological landscape. Our world-class programs in robotics, AI, and manufacturing blend hands-on learning with innovative research, preparing Ethiopia’s youth to lead on a global stage.",
//     image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//   },
//   {
//     title: "Building Tomorrow’s Technology Leaders Today",
//     description:
//       "At Ethronics, we’re not just teaching technology—we’re creating it. Explore opportunities in robotics, artificial intelligence, and advanced manufacturing, designed to transform Ethiopia into a hub of innovation.",
//     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//   },
// ];

export const homeButtons: HeroButton[] = [
  { text: "Explore Programs", href: "/academics", primary: true },
  { text: "View Research", href: "/research" },
];

export const aboutFeatures: Feature[] = [
  { icon: React.createElement(Rocket, {className: "h-6 w-6"}), title: "Our Mission", description: "To empower Ethiopia’s next generation of innovators through world-class education and cutting-edge research, driving technological progress from Africa to the world." },
  { icon: React.createElement(Globe, {className: "h-6 w-6"}), title: "Our Vision", description: "To revolutionize academics, R&D, and manufacturing by building transformative technologies that bridge local ingenuity with global impact." },
  { icon: React.createElement(Users, {className: "h-6 w-6"}), title: "Our Team", description: "A passionate collective of engineers, educators, and visionaries united to redefine what’s possible in technology from Ethiopia." },
];

export const researchFeatures: Feature[] = [
  { icon: React.createElement(Robot, {className: "h-8 w-8"}), title: "Robotics", description: "Developing advanced automation systems to enhance manufacturing efficiency and precision." },
  { icon: React.createElement(Brain, {className: "h-8 w-8"}), title: "AI & ML", description: "Creating solutions in speech recognition, computer vision, and automation for real-world impact." },
  { icon: React.createElement(Shield, {className: "h-8 w-8"}), title: "Cybersecurity", description: "Building secure digital frameworks to protect data and systems in an interconnected world." },
  { icon: React.createElement(Cpu, {className: "h-8 w-8"}), title: "Quantum Computing", description: "Exploring next-generation processing power to solve complex global problems." },
  { icon: React.createElement(Database, {className: "h-8 w-8"}), title: "Blockchain", description: "Innovating secure, transparent transaction systems for industries worldwide." },
];

export const solutionsData = {
  education: [
    { title: "Robotics Bootcamp", description: "Hands-on training in automation and robotics.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=60" },
    { title: "AI Curriculum", description: "Comprehensive courses in AI and machine learning.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=60" },
    { title: "Student Mentorship", description: "Personalized guidance for young innovators.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=60" },
    { title: "Tech Scholarships", description: "Funding to support deserving students.", image: "https://media.istockphoto.com/id/2165826700/photo/a-black-graduation-cap-on-a-stack-of-colorful-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=FHZIb_cslZXWvP7P_iN6pOwII8uI0QjtW2HKH82yfLc=" },
  ],
  manufacturing: [
    { title: "Smart Factory Systems", description: "IoT-enabled production lines for efficiency.", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=300&q=60" },
    { title: "Gate Barrier Tech", description: "Automated security solutions for facilities.", image: "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?auto=format&fit=crop&w=300&q=60" },
    { title: "Adaptive Robotics", description: "Flexible robots for modern manufacturing.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=60" },
  ],
  globalTech: [
    { title: "Blockchain Platforms", description: "Secure transaction systems for industries.", image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=300&q=60" },
    { title: "AI Traffic Control", description: "Smart solutions for urban mobility.", image: "https://images.unsplash.com/photo-1584649525122-8d6895492a5d?auto=format&fit=crop&w=300&q=60" },
    { title: "Quantum Research", description: "Next-gen computing for global challenges.", image: "https://images.unsplash.com/photo-1591306208574-969f12f1ebfe?auto=format&fit=crop&w=300&q=60" },
    { title: "Cybersecurity Innovations", description: "Protecting digital assets worldwide.", image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=300&q=60" },
    { title: "Global Tech Partnerships", description: "Collaborative projects for impact.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&q=60" },
  ],
};

export const projects: Project[] = [
  { title: "Gate Barrier", description: "Automated security system enhancing facility safety.", image: "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?auto=format&fit=crop&w=500&q=60", progress: 75 },
  { title: "Smart Bin", description: "IoT-enabled waste management for smarter cities.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=500&q=60", progress: 60 },
  { title: "Adaptive Traffic Light", description: "AI-driven traffic control for urban efficiency.", image: "https://images.unsplash.com/photo-1584649525122-8d6895492a5d?auto=format&fit=crop&w=500&q=60", progress: 45 },
];

export const partnerships: Partnership[] = [
  { title: "Academic Institutions", description: "Collaborating with universities to advance tech education and research." },
  { title: "Industry Leaders", description: "Partnering with tech giants for real-world applications and innovation." },
  { title: "Local Innovators", description: "Working with Ethiopia’s brightest minds to solve local and global challenges." },
];