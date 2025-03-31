import { CallToAction } from "../components/home/Cta";
import { Features } from "../components/home/Features";
import { Gallery } from "../components/home/Gallery";
import { Hero } from "../components/common/Hero";
import { Partnerships } from "../components/home/Partnerships";
// import { Projects } from "../components/home/Projects";
import { Solutions } from "../components/home/Solutions";
import { useEffect } from "react";

const homeSlides = [
  {
    title: (
      <>
        <span className="block">A technology that is </span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          taught, researched, made, and perfected
        </span>
        <span className="block">in Ethiopia and Applied worldwide</span>
      </>
    ),
    description:
      "Empowering the next generation of innovators and leaders through cutting-edge education, research, and manufacturing excellence.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
  },
  {
    title: (
      <>
        <span className="block">Pioneering the Future of</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Technology Education
        </span>
        <span className="block">in Africa</span>
      </>
    ),
    description:
      "Join us in shaping tomorrow's technological landscape through innovative learning and hands-on experience.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: (
      <>
        <span className="block">Building Tomorrow's</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Technology Leaders
        </span>
        <span className="block">Today</span>
      </>
    ),
    description:
      "Experience world-class education and research opportunities in robotics, AI, and advanced manufacturing.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

const homeButtons = [
  { text: "Explore Programs", href: "/academics", primary: true },
  { text: "View Research", href: "/research", primary: false },
];

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero slides={homeSlides} buttons={homeButtons} />
      <Features />
      <Solutions />
      {/* <Projects/> */}
      <Partnerships />
      <Gallery />
      <CallToAction />
    </div>
  );
}
