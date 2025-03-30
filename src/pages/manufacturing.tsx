import {
  Factory,
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
import { Hero } from "../components/home/Hero";

const manufacturingFeatures = [
  // {
  //   icon: <Factory className="h-6 w-6" />,
  //   title: 'Modern Facility',
  //   description: 'First-of-its-kind manufacturing facility in Ethiopia with smart technology integration',
  //   details: [
  //     'Located in Addis Ababa Industrial Park',
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
    description: "Delivering world-class products through innovative manufacturing techniques.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
    description: "Harnessing automation and technology for scalable, efficient manufacturing.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
  },
];

const manufacturingButtons = [
  { text: "Discover Capabilities", href: "#capabilities", primary: true },
];


export function Manufacturing() {
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
