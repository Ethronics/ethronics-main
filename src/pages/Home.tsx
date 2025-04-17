import { JSX, useEffect } from "react";
import { CallToAction } from "../components/common/Cta";
import { Features } from "../components/home/Features";
import { Gallery } from "../components/home/Gallery";
import { Hero } from "../components/common/Hero";
import { Partnerships } from "../components/home/Partnerships";
import Solutions from "../components/home/Solutions";
import RobotReplace from "../assets/images/Robot-replace.jpg"; // Example import, adjust as needed

interface Slide {
  title: JSX.Element;
  description: string;
  image: string;
}

interface HeroButton {
  text: string;
  href: string;
  primary?: boolean;
}

const homeSlides: Slide[] = [
  {
    title: (
      <>
        <span className="block mb-2 sm:mb-3 lg:mb-4 text-white">A technology that is</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-purple-400 mb-2 sm:mb-3 lg:mb-4">
          taught, researched, made, and perfected
        </span>
        <span className="block text-white">in Ethiopia and Applied worldwide</span>
      </>
    ),
    description:
      "Empowering the next generation of innovators and leaders through cutting-edge education, research, and manufacturing excellence.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80 1024w, https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80 1920w, https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80 3840w",
  },
  {
    title: (
      <>
        <span className="block mb-2 sm:mb-3 lg:mb-4 text-white">Pioneering the Future of</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-purple-400 mb-2 sm:mb-3 lg:mb-4">
          Technology Education
        </span>
        <span className="block text-white">in Africa</span>
      </>
    ),
    description:
      "Join us in shaping tomorrow's technological landscape through innovative learning and hands-on experience.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80 1024w, https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80 1920w, https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80 3840w",
  },
  {
    title: (
      <>
        <span className="block mb-2 sm:mb-3 lg:mb-4 text-white">Building Tomorrow's</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-purple-400 mb-2 sm:mb-3 lg:mb-4">
          Technology Leaders
        </span>
        <span className="block text-white">Today</span>
      </>
    ),
    description:
      "Experience world-class education and research opportunities in robotics, AI, and advanced manufacturing.",
    image:
    RobotReplace,
  },
];

const homeButtons: HeroButton[] = [
  { text: "Explore Programs", href: "/academics", primary: true },
  { text: "View Research", href: "/research", primary: false },
];

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 max-w-full overflow-x-hidden">
      {/* Hero takes full width with overflow protection */}
      <Hero slides={homeSlides} buttons={homeButtons} className="w-full max-w-full overflow-x-hidden" />
      {/* Other sections use a fluid container with overflow protection */}
        <Features />
        <Solutions />
        {/* <Projects /> */}
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