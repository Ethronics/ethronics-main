import React from "react";
import { Hero } from "../components/common/Hero";
import { WhyChooseUs } from "../components/academics/WhyChooseUs";
import { AdmissionsSection } from "../components/academics/AdmissionsSection";
import { PartnershipsSection } from "../components/academics/PartnershipsSection";
import { ProgramsSection } from "../components/academics/ProgramsSection";
import { FacultyResearchSection } from "../components/academics/ResearchSection";
import { VisionSection } from "../components/academics/VisionSection";
import { CallToAction } from "../components/home/Cta";
import { programData } from "../data/program";

export const Academics: React.FC = () => {
  const heroSlides = [
    {
      title: (
        <>
          Pioneering
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Ethiopia's Tech Future
          </span>
        </>
      ),
      description:
        "We’re on the cusp of launching a transformative educational experience in Ethiopia, blending global expertise with local innovation. Accreditation is in progress—be among the first to shape the future.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Where Innovation Meets Opportunity",
      description:
        "Imagine a place where cutting-edge technology education empowers Ethiopia’s next generation of leaders. That’s our vision, and we’re building it now—join us as we turn ambition into action.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
  ];

  const heroButtons = [
    { text: "Join Waitlist", href: "#waitlist", primary: true },
    { text: "Explore Programs", href: "#programs" },
  ];

  return (
    <div className="pt-16">
      <Hero slides={heroSlides} buttons={heroButtons} />
      <WhyChooseUs />
      <VisionSection />
      <ProgramsSection programs={programData} />
      <AdmissionsSection />
      <FacultyResearchSection />
      <PartnershipsSection />
      <CallToAction />
    </div>
  );
};