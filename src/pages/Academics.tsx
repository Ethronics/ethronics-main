import React, { useEffect } from "react";
import { Hero } from "../components/common/Hero";
import { WhyChooseUs } from "../components/academics/WhyChooseUs";
import { AdmissionsSection } from "../components/academics/AdmissionsSection";
// import { PartnershipsSection } from "../components/academics/PartnershipsSection";
import { ProgramsSection } from "../components/academics/ProgramsSection";
import { FacultyResearchSection } from "../components/academics/ResearchSection";
import { VisionSection } from "../components/academics/VisionSection";
import { CallToAction } from "../components/common/Cta";
import { programData } from "../data/program";
import Robotics from "../assets/images/robotics.jpg"; 
import Empowering from "../assets/images/empowering.jpg";


export const Academics: React.FC = () => {
  const heroSlides = [
    {
      title: (
        <>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
            Learn, Cre
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-red-400">
          ate, Inspire
          </span>
        </>
      ),
      description:
        "Discover a transformative educational journey where learning fuels creativity and inspiration drives innovation. Join us to shape the future of technology in Ethiopia.",
      image:
        "https://images.unsplash.com/photo-1572310608276-9134d42f127f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaCUyMGlubm92YXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Where Innovation Meets Opportunity",
      description:
        "Imagine a place where cutting-edge technology education empowers Ethiopia’s next generation of leaders. That’s our vision, and we’re building it now—join us as we turn ambition into action.",
      image:
        Robotics,
    },

    {
      title: "Empowering Tomorrow's Innovators Today",
      description:
        "At Ethronics, we’re not just teaching technology—we’re creating it. Explore opportunities in robotics, artificial intelligence, and advanced manufacturing, designed to transform Ethiopia into a hub of innovation.",
      image:
      Empowering,
    },
  ];

  const heroButtons = [
    { text: "Join Waitlist", href: "/contact", primary: true },
    { text: "Explore Programs", href: "#programs" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero slides={heroSlides} buttons={heroButtons} />
      <WhyChooseUs />
      <VisionSection />
      <ProgramsSection programs={programData} />
      <AdmissionsSection />
      <FacultyResearchSection />
      {/* <PartnershipsSection /> */}
      <CallToAction
        title="Ready to Shape Ethiopia’s Technological Destiny?"
        description="We’re building a movement. Accreditation is underway, and soon, we’ll open our doors to students ready to lead Ethiopia into a new era of innovation."
        buttons={[
          {
            text: "Join Waitlist",
            href: '/contact', 
            primary: true,
          },
          {
            text: "Contact Us",
            href: "/contact",
          },
        ]}
      />
    </div>
  );
};
