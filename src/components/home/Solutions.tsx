import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define a type for the solution items
interface Solution {
  title: string;
  description: string;
  image: string;
}

export function Solutions() {
  const educationSolutions: Solution[] = [
    {
      title: "Robotics Bootcamp",
      description: "Hands-on training in automation.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=60",
    },
    {
      title: "AI Curriculum",
      description: "Comprehensive AI and ML courses.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=60",
    },
    {
      title: "Student Mentorship",
      description: "Personalized guidance for innovators.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=60",
    },
    {
      title: "Tech Scholarships",
      description: "Funding for deserving students.",
      image:
        "https://media.istockphoto.com/id/2165826700/photo/a-black-graduation-cap-on-a-stack-of-colorful-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=FHZIb_cslZXWvP7P_iN6pOwII8uI0QjtW2HKH82yfLc=",
    },
  ];

  const manufacturingSolutions: Solution[] = [
    {
      title: "Smart Factory Systems",
      description: "IoT-enabled production lines.",
      image:
        "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBmYWN0b3J5fGVufDB8fDB8fHww",
    },
    {
      title: "Gate Barrier Tech",
      description: "Automated security solutions.",
      image:
        "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?auto=format&fit=crop&w=300&q=60",
    },
    {
      title: "Adaptive Robotics",
      description: "Flexible manufacturing robots.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90aWNzfGVufDB8fDB8fHww",
    },
  ];

  const globalTechSolutions: Solution[] = [
    {
      title: "Blockchain Platforms",
      description: "Secure transaction systems.",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "AI Traffic Control",
      description: "Global urban mobility solutions.",
      image:
        "https://images.unsplash.com/photo-1584649525122-8d6895492a5d?auto=format&fit=crop&w=300&q=60",
    },
    {
      title: "Quantum Research",
      description: "Next-gen computing for the world.",
      image:
        "https://images.unsplash.com/photo-1591306208574-969f12f1ebfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHF1YW50dW18ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Cybersecurity Innovations",
      description: "Protecting digital assets.",
      image:
        "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Global Tech Partnerships",
      description: "Collaborative projects for impact.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFydG5lcnNoaXB8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const [scrollPositions, setScrollPositions] = useState({
    education: 0,
    manufacturing: 0,
    globalTech: 0,
  });

  const cardWidth = 288; // w-72 (72 * 4px = 288px) + some padding/gap
  const scrollStep = cardWidth; // Move by one card width

  const scrollLeft = (section: keyof typeof scrollPositions) => {
    setScrollPositions((prev) => ({
      ...prev,
      [section]: Math.min(prev[section] + scrollStep, 0), // Don’t scroll past start
    }));
  };

  const scrollRight = (
    section: keyof typeof scrollPositions,
    maxCards: number
  ) => {
    const maxScroll = -(maxCards - 2) * scrollStep; // Leave 2 cards visible
    setScrollPositions((prev) => ({
      ...prev,
      [section]: Math.max(prev[section] - scrollStep, maxScroll), // Don’t scroll past end
    }));
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Solutions We’re Building
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Innovative technology in progress for education, manufacturing, and
            global impact.
          </p>
        </div>

        {/* Education Subsection */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We’re developing programs to empower students with
                  cutting-edge skills and resources for global tech leadership.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 relative">
              <button
                onClick={() => scrollLeft("education")}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 md:-left-4"
                disabled={scrollPositions.education === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="overflow-x-hidden">
                <div
                  className="flex gap-4 transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(${scrollPositions.education}px)`,
                    minWidth: "max-content",
                  }}
                >
                  {educationSolutions.map((solution, index) => (
                    <div
                      key={index}
                      className="w-64 md:w-72 flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-36 md:h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {solution.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() =>
                  scrollRight("education", educationSolutions.length)
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 md:-right-4"
                disabled={
                  scrollPositions.education <=
                  -(educationSolutions.length - 2) * scrollStep
                }
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Manufacturing Subsection */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Manufacturing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We’re creating smart technologies to revolutionize efficiency
                  and innovation in production processes.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 relative">
              <button
                onClick={() => scrollLeft("manufacturing")}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 md:-left-4"
                disabled={scrollPositions.manufacturing === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="overflow-x-hidden">
                <div
                  className="flex gap-4 transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(${scrollPositions.manufacturing}px)`,
                    minWidth: "max-content",
                  }}
                >
                  {manufacturingSolutions.map((solution, index) => (
                    <div
                      key={index}
                      className="w-64 md:w-72 flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-36 md:h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {solution.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() =>
                  scrollRight("manufacturing", manufacturingSolutions.length)
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 md:-right-4"
                disabled={
                  scrollPositions.manufacturing <=
                  -(manufacturingSolutions.length - 2) * scrollStep
                }
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Tech Subsection */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Global Tech
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We’re working on scalable innovations to tackle global
                  challenges in mobility, security, and computing.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 relative">
              <button
                onClick={() => scrollLeft("globalTech")}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 md:-left-4"
                disabled={scrollPositions.globalTech === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="overflow-x-hidden">
                <div
                  className="flex gap-4 transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(${scrollPositions.globalTech}px)`,
                    minWidth: "max-content",
                  }}
                >
                  {globalTechSolutions.map((solution, index) => (
                    <div
                      key={index}
                      className="w-64 md:w-72 flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                    >
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-36 md:h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {solution.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() =>
                  scrollRight("globalTech", globalTechSolutions.length)
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 md:-right-4"
                disabled={
                  scrollPositions.globalTech <=
                  -(globalTechSolutions.length - 2) * scrollStep
                }
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
