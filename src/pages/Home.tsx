import { CallToAction } from "../components/common/Cta";
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
        <span className="block mb-2 text-white">A technology that is </span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-purple-400 mb-2">
          taught, researched, made, and perfected
        </span>
        <span className="block text-white">in Ethiopia and Applied worldwide</span>
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
        <span className="block mb-2 text-white">Pioneering the Future of</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-purple-400 mb-2">
          Technology Education
        </span>
        <span className="block text-white">in Africa</span>
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
        <span className="block mb-2 text-white">Building Tomorrow's</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-purple-400 mb-2">
          Technology Leaders
        </span>
        <span className="block text-white">Today</span>
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero slides={homeSlides} buttons={homeButtons} />
      <Features />
      <Solutions />
      {/* <Projects/> */}
      <Partnerships />
      <Gallery />
      <CallToAction
        title="Join the Ethronics Revolution"
        description="Be part of a bold movement to transform technology from Ethiopia. Whether you’re a student, researcher, or innovator, Ethronics offers you a chance to shape the future of academics, R&D, and manufacturing—starting today."
        buttons={[
          {
            text: "Get in Touch",
            href: "/contact",
            primary: true,
          },
          {
            text: "Explore Opportunities",
            href: "/academics",
          },
        ]}
      />
    </div>
  );
}
