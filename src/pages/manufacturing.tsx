import {
  Settings,
  Users,
  Leaf,
  Lightbulb,
  PenTool as Tool,
} from "lucide-react";
import { CallToAction } from "../components/manufacturing/CallToAction";
// import { Capabilities } from "../components/manufacturing/Capabilities";
// import { ProcessOverview } from "../components/manufacturing/ProcessOverview";
import { Products } from "../components/manufacturing/Products";
import { QualityAssurance } from "../components/manufacturing/QualityAssurance";
import { Sustainability } from "../components/manufacturing/Sustainability";
import { Hero } from "../components/common/Hero";
import { useEffect } from "react";

const manufacturingFeatures = [
  // {
  //   icon: <Factory className="h-6 w-6" />,
  //   title: 'Modern Facility',
  //   description: 'First-of-its-kind manufacturing facility in Ethiopia with smart technology integration',
  //   details: [
  //     'Located in Adama',
  //     'Solar-powered production line',
  //     'Digital monitoring systems'
  //   ]
  // },

  {
    icon: <Settings className="h-6 w-6" />,
    title: "Local Innovation",
    description: "Developing solutions tailored for Ethiopian markets",
    details: [
      "Ethiopian-designed automation systems",
      "Locally optimized production methods",
      "Market-specific adaptations",
    ],
  },

  {
    icon: <Tool className="h-6 w-6" />,
    title: "Precision Work",
    description: "Quality manufacturing with growing capabilities",
    details: [
      "Computer-aided design",
      "Modern assembly techniques",
      "Quality testing facilities",
    ],
  },

  {
    icon: <Users className="h-6 w-6" />,
    title: "Local Talent",
    description:
      "Creating opportunities for Ethiopian engineers and technicians",
    details: [
      "Technical training programs",
      "University partnerships",
      "Skills development initiatives",
    ],
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Sustainable Practice",
    description: "Environmentally conscious manufacturing processes",
    details: [
      "Renewable energy usage",
      "Waste reduction programs",
      "Local material sourcing",
    ],
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation Hub",
    description: "Fostering technological advancement in Ethiopia",
    details: ["R&D hub", "Prototype development", "Technology adaptation"],
  },
];

const manufacturingSlides = [
  {
    title: (
      <>
        <span className="block">Manufacturing </span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Excellence
        </span>
        <span className="block">from Ethiopia</span>
      </>
    ),
    description:
      "Delivering world-class products through innovative manufacturing techniques.",
    image:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFudWZhY3R1cmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: (
      <>
        <span className="block">Innovating </span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Manufacturing
        </span>
        <span className="block">in Ethiopia</span>
      </>
    ),
    description:
      "Transforming local manufacturing through cutting-edge technology and skilled workforce.",
    image:
      "https://images.unsplash.com/photo-1640517526259-8e5aacbebf71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZWhvdXNlJTIwZHJvbmVzfGVufDB8fDB8fHww",
  },
  {
    title: (
      <>
        <span className="block">Pioneering </span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Smart Production
        </span>
        <span className="block">in Africa</span>
      </>
    ),
    description:
      "Harnessing automation and technology for scalable, efficient manufacturing.",
    image:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFudWZhY3R1cmV8ZW58MHx8MHx8fDA%3D",
  },
];

const manufacturingButtons = [
  { text: "Discover Capabilities", href: "#capabilities", primary: true },
];

export function Manufacturing() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero slides={manufacturingSlides} buttons={manufacturingButtons} />
      {/* <Capabilities /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-24">
        {manufacturingFeatures.map((feature, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500" />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Products />
      <QualityAssurance />
      <Sustainability />
      <CallToAction />
    </div>
  );
}
