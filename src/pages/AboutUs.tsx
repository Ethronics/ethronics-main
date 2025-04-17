import React, { useEffect } from "react";
import { BookOpen, Brain, Factory } from "lucide-react";
import { CallToAction } from "../components/common/Cta";
import { LeaderCard } from "../components/supplementary/LeaderCard";
import { Front, FrontCard } from "../components/supplementary/FrontCard";

const fronts: Front[] = [
  {
    title: "Academics",
    description: "Training Ethiopia’s next tech leaders.",
    icon: (
      <BookOpen className="w-12 h-12 text-purple-400" />
    ),
    details:
      "We’re building a place to learn about new technologies like AI and robotics. Our programs will teach students skills for the future. Soon, we’ll welcome young minds to shape Ethiopia’s tech story.",
  },
  {
    title: "Research & Development",
    description: "Pushing the limits of what’s possible.",
    icon: <Brain className="w-12 h-12 text-purple-400" />,
    details:
      "Our team explores emerging tech—quantum computing, blockchain, and more. We create solutions to solve big problems. From Ethiopia, we will be leading the world in innovation.",
  },
  {
    title: "Manufacturing",
    description: "Building smarter, stronger industries.",
    icon: (
      <Factory className="w-12 h-12 text-purple-400" />
    ),
    details:
      "We are developing a state-of-the-art manufacturing site that will use advanced technologies like robotics and AI. This facility will enhance production capabilities, support local industries, and position Ethiopia as a global competitor in manufacturing.",
  },
];

// Updated Leader interface
export interface Leader {
  name: string;
  quote: string; // Replaced role
  bio: string;
  position: string; // Replaced education and experience
  image: string;
  achievements?: string[];
  techHighlight?: string;
  linkdin?: string;
}

const leaders: Leader[] = [
  {
    name: "Dr. Firew Abera",
    quote: "Technology is the bridge to a future where Ethiopia leads with innovation.",
    bio: "As the Founder and CEO of Ethronics, Dr. Firew Abera drives the vision for Ethiopia's technological advancement, focusing on innovation and leadership in emerging technologies.",
    position: "Founder and CEO at Ethronics",
    // achievements: ["Published 50+ research papers, led multiple tech startups."],
    // techHighlight: "Expert in AI and robotics.",
    linkdin: "https://www.linkedin.com/in/firewaberadotcom/?originalSubdomain=uk",
    image:
      "https://media.licdn.com/dms/image/v2/C4E03AQGPzRVxDz9QcA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1550190961230?e=1749081600&v=beta&t=COWIMYBAa8vj4IIcsLz90tf0V6SOkIxd6YVcVGUvzF4",
  },
  {
    name: "Eng. Yohannes Melese",
    quote: "Life is about solving problems; technology makes it possible at scale.",
    bio: "As the Chief Technology Officer at Ethronics, Eng. Yohannes Melese leads AI and electronics engineering initiatives, creating innovative solutions to drive progress.",
    position: "Chief Technology Officer at Ethronics",
    // achievements: ["Developed innovative AI-driven solutions for industries."],
    // techHighlight: "Specialist in AI and electronics engineering.",
    linkdin: "https://www.linkedin.com/in/yohannes-melese/",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGTfUmjQIUI5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722396285182?e=1749081600&v=beta&t=jFQS1fsPx1TDFzVXlJsWorscp8TOfKlQk8h-rFCDKbc",
  },
];

export const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-24">
      <section className="py-20 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Ethronics
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ethronics is dedicated to advancing Ethiopia. We aim to take bold
            steps in academics, research, and manufacturing, leveraging
            technology to drive progress and unlock new possibilities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Purpose
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Mission
              </h3>
              <p className="text-gray-300 text-base">
                To empower Ethiopia with technology. We teach, innovate, and
                build to solve problems and create opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Vision
              </h3>
              <p className="text-gray-300 text-base">
                To make Ethiopia among global leaders in emerging tech. We see a
                future where our ideas shape the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our leaders bring experience and passion to Ethronics. They guide
              us in building a tech future for Ethiopia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <LeaderCard
                key={index}
                name={leader.name}
                quote={leader.quote}
                bio={leader.bio}
                position={leader.position}
                achievements={leader.achievements || []}
                techHighlight={leader.techHighlight || ""}
                linkdin={leader.linkdin}
                image={leader.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Three Fronts Section */}
      <section className="py-16 bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Three Fronts
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We work on education, new ideas, and strong industries. Together,
              these fronts build a future powered by technology.
            </p>
          </div>
          <div className="relative">
            {fronts.map((front, index) => (
              <FrontCard
                key={index}
                title={front.title}
                description={front.description}
                icon={front.icon}
                details={front.details}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Join Our Journey"
        description="Ethronics is more than a company—it’s a mission. Be part of our work in academics, research, and manufacturing. Let’s create the future together."
        buttons={[
          {
            text: "Get Involved",
            href: "/contact",
            primary: true,
          },
          {
            text: "Learn More",
            href: "/about",
          },
        ]}
      />
    </div>
  );
};