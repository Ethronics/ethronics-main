import React, { useEffect } from "react";
import { Hero } from "../components/common/Hero";
import { researchFeatures, projects } from "../data/homeData";
import { CallToAction } from "../components/home/Cta";

interface ResearchSlide {
  title: string;
  description: string;
  image: string;
}

const researchSlides: ResearchSlide[] = [
  {
    title: "Pioneering Research from Ethiopia",
    description:
      "Ethronics is driving technological breakthroughs in robotics, AI, cybersecurity, quantum computing, and blockchain. Our R&D efforts blend local ingenuity with global ambition, creating solutions that redefine industries.",
    image:
      "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGlubm92YXRpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Innovating for a Smarter Future",
    description:
      "From adaptive robotics to quantum research, we’re exploring the frontiers of technology to solve real-world challenges—starting in Ethiopia and impacting the world.",
    image:
      "https://images.unsplash.com/photo-1591306208574-969f12f1ebfe?auto=format&fit=crop&w=2070&q=80",
  },
];

const researchButtons = [
  { text: "Join Our Research", href: "/research/join", primary: true },
  { text: "Contact Us", href: "/contact" },
];

export const ResearchAndDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero slides={researchSlides} buttons={researchButtons} />

      {/* Research Focus Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Research Focus
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Ethronics, our R&D team is pushing the boundaries of technology
              across five key areas. Each domain reflects our commitment to
              solving global challenges with Ethiopian innovation at the core.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full mb-4 mx-auto text-purple-600 dark:text-purple-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Collaboration Opportunities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Collaborate With Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Ethronics welcomes partnerships with researchers, institutions, and
            industry leaders. Whether you’re a student, academic, or
            professional, join us in advancing technology from Ethiopia to the
            world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                For Researchers
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Contribute to groundbreaking projects in AI, quantum computing,
                and more. Share your expertise and innovate with us.
              </p>
              <a
                href="/research/join"
                className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Get Involved
              </a>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                For Partners
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Collaborate with Ethronics to co-develop solutions, fund
                research, or bring our innovations to market.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};
