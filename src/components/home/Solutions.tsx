import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Solution, solutionsData } from "../../data/homeData";

interface ScrollPositions {
  education: number;
  manufacturing: number;
  globalTech: number;
}

export const Solutions: React.FC = () => {
  const [scrollPositions, setScrollPositions] = useState<ScrollPositions>({
    education: 0,
    manufacturing: 0,
    globalTech: 0,
  });

  const cardWidth = 384; // Increased from 288px to 384px (w-96 in Tailwind) for larger cards
  const scrollStep = cardWidth;

  const scrollLeft = (section: keyof ScrollPositions) => {
    setScrollPositions((prev) => ({
      ...prev,
      [section]: Math.min(prev[section] + scrollStep, 0),
    }));
  };

  const scrollRight = (section: keyof ScrollPositions, maxCards: number) => {
    const maxScroll = -(maxCards - 1) * scrollStep; // Adjusted to show 1 card at a time for larger screens
    setScrollPositions((prev) => ({
      ...prev,
      [section]: Math.max(prev[section] - scrollStep, maxScroll),
    }));
  };

  // Expanded solutions data with more text and actions
  const enhancedSolutionsData = {
    education: [
      {
        title: "Robotics Bootcamp",
        description:
          "Dive into the world of automation with our intensive Robotics Bootcamp. This hands-on program equips students with practical skills in designing, programming, and operating robotic systems, preparing them for careers in Ethiopia’s growing tech sector.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=60",
        action: { text: "Join Now", href: "/academics/robotics-bootcamp" },
      },
      {
        title: "AI Curriculum",
        description:
          "Our comprehensive AI Curriculum blends theory and practice, covering machine learning, neural networks, and data science. Designed for aspiring innovators, this program empowers students to build intelligent solutions that address real-world challenges.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=60",
        action: { text: "Explore Courses", href: "/academics/ai-curriculum" },
      },
      {
        title: "Student Mentorship",
        description:
          "Through personalized guidance, our mentorship program connects students with industry experts and innovators. We provide the support and insights needed to turn ideas into impactful projects, fostering Ethiopia’s next generation of tech leaders.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=60",
        action: { text: "Apply for Mentorship", href: "/academics/mentorship" },
      },
      {
        title: "Tech Scholarships",
        description:
          "We believe talent should never be limited by resources. Our Tech Scholarships provide funding and opportunities for deserving students to pursue cutting-edge education in robotics, AI, and manufacturing, ensuring access to world-class learning.",
        image: "https://media.istockphoto.com/id/2165826700/photo/a-black-graduation-cap-on-a-stack-of-colorful-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=FHZIb_cslZXWvP7P_iN6pOwII8uI0QjtW2HKH82yfLc=",
        action: { text: "Apply Now", href: "/academics/scholarships" },
      },
    ],
    manufacturing: [
      {
        title: "Smart Factory Systems",
        description:
          "Revolutionize production with our IoT-enabled Smart Factory Systems. These solutions integrate sensors, data analytics, and automation to optimize efficiency, reduce waste, and enhance manufacturing precision—paving the way for Ethiopia’s industrial future.",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=400&q=60",
        action: { text: "Learn More", href: "/manufacturing/smart-factory" },
      },
      {
        title: "Gate Barrier Tech",
        description:
          "Enhance facility security with our Gate Barrier Technology. This automated system combines advanced sensors and robust design to provide reliable access control, ideal for industrial sites, campuses, and urban infrastructure projects.",
        image: "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?auto=format&fit=crop&w=400&q=60",
        action: { text: "Request Demo", href: "/manufacturing/gate-barrier" },
      },
      {
        title: "Adaptive Robotics",
        description:
          "Our Adaptive Robotics solutions bring flexibility to modern manufacturing. These intelligent robots adjust to varying tasks and environments, boosting productivity and innovation in Ethiopia’s factories and beyond.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=60",
        action: { text: "See in Action", href: "/manufacturing/adaptive-robotics" },
      },
    ],
    globalTech: [
      {
        title: "Blockchain Platforms",
        description:
          "Our Blockchain Platforms offer secure, transparent transaction systems for industries like finance, supply chain, and healthcare. Built with scalability in mind, they empower businesses worldwide with Ethiopian-developed technology.",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=400&q=60",
        action: { text: "Discover More", href: "/global-tech/blockchain" },
      },
      {
        title: "AI Traffic Control",
        description:
          "Transform urban mobility with our AI Traffic Control systems. Using real-time data and machine learning, this solution optimizes traffic flow, reduces congestion, and enhances safety—designed in Ethiopia for global cities.",
        image: "https://images.unsplash.com/photo-1584649525122-8d6895492a5d?auto=format&fit=crop&w=400&q=60",
        action: { text: "Learn How", href: "/global-tech/ai-traffic" },
      },
      {
        title: "Quantum Research",
        description:
          "We’re pushing the boundaries of computing with Quantum Research. This initiative explores next-generation processing power to tackle complex global challenges, positioning Ethiopia as a leader in futuristic tech.",
        image: "https://images.unsplash.com/photo-1591306208574-969f12f1ebfe?auto=format&fit=crop&w=400&q=60",
        action: { text: "Join Research", href: "/global-tech/quantum" },
      },
      {
        title: "Cybersecurity Innovations",
        description:
          "Protect digital assets with our Cybersecurity Innovations. From advanced encryption to threat detection, we’re building robust frameworks to secure data and systems in an increasingly connected world.",
        image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=400&q=60",
        action: { text: "Explore Solutions", href: "/global-tech/cybersecurity" },
      },
      {
        title: "Global Tech Partnerships",
        description:
          "Through strategic collaborations, our Global Tech Partnerships amplify innovation. We work with international leaders to co-develop projects that deliver measurable impact, rooted in Ethiopian ingenuity.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=60",
        action: { text: "Partner With Us", href: "/global-tech/partnerships" },
      },
    ],
  };

  const sections = [
    {
      title: "Education",
      key: "education",
      solutions: enhancedSolutionsData.education,
      description:
        "We’re crafting educational programs that empower students with cutting-edge skills in robotics, AI, and more. Our goal is to prepare Ethiopia’s youth to lead globally, fostering a new era of technological excellence.",
    },
    {
      title: "Manufacturing",
      key: "manufacturing",
      solutions: enhancedSolutionsData.manufacturing,
      description:
        "Our smart manufacturing solutions integrate IoT, robotics, and data-driven insights to revolutionize production processes. We’re building the foundation for Ethiopia’s industrial transformation with efficiency and innovation at the core.",
    },
    {
      title: "Global Tech",
      key: "globalTech",
      solutions: enhancedSolutionsData.globalTech,
      description:
        "From blockchain to quantum computing, we’re developing scalable technologies to tackle global challenges. Rooted in Ethiopian innovation, these solutions aim to redefine industries and create worldwide impact.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Solutions We’re Building
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ethronics is pioneering transformative solutions across education, manufacturing, and global technology. With a focus on innovation and impact, we’re creating tools and programs that empower Ethiopia and resonate worldwide.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.key} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 flex items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{section.description}</p>
                </div>
              </div>
              <div className="md:col-span-2 relative">
                <button
                  onClick={() => scrollLeft(section.key as keyof ScrollPositions)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 md:-left-4"
                  disabled={scrollPositions[section.key as keyof ScrollPositions] === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="overflow-x-hidden">
                  <div
                    className="flex gap-6 transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(${scrollPositions[section.key as keyof ScrollPositions]}px)`,
                      minWidth: "max-content",
                    }}
                  >
                    {section.solutions.map((solution: Solution & { action?: { text: string; href: string } }, index) => (
                      <div
                        key={index}
                        className="w-80 md:w-96 flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                      >
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            {solution.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                            {solution.description}
                          </p>
                          {solution.action && (
                            <a
                              href={solution.action.href}
                              className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                            >
                              {solution.action.text}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => scrollRight(section.key as keyof ScrollPositions, section.solutions.length)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 md:-right-4"
                  disabled={
                    scrollPositions[section.key as keyof ScrollPositions] <=
                    -(section.solutions.length - 1) * scrollStep
                  }
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};