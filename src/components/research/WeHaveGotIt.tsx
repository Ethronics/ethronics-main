import React from "react";
import { Bot, BarChart, Lightbulb, Wrench, Rocket } from "lucide-react";
import { CallToAction } from "../common/Cta";

// Interface for each "Got It" item
interface GotItItem {
  question: string;
  solution: string;
  details: string;
  icon: React.ReactNode;
}

// Data for the "We've Got It" section
const gotItItems: GotItItem[] = [
  {
    question: "Need your manufacturing automated?",
    solution: "We’ve got it—robotics and AI to make it smooth.",
    details:
      "We use smart machines and computer programs to do hard work fast. Your factory can make more products with less effort. Our team builds solutions that fit your needs.",
    icon: <Bot className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
  },
  {
    question: "Want to grow your production?",
    solution: "We’ve got it—tech to push your limits.",
    details:
      "Our technology helps your business make more. We find ways to improve your machines and processes. You can sell more and grow bigger with our help.",
    icon: (
      <BarChart className="w-10 h-10 text-purple-600 dark:text-purple-400" />
    ),
  },
  {
    question: "Got an idea that needs a spark?",
    solution: "We’ve got it—a team to back you up.",
    details:
      "Do you have a new plan? We can make it real. Our experts work with you to build your idea step by step. Together, we turn thoughts into action.",
    icon: (
      <Lightbulb className="w-10 h-10 text-purple-600 dark:text-purple-400" />
    ),
  },
  {
    question: "Facing a tough problem?",
    solution: "We’ve got it—smart fixes, fast.",
    details:
      "Problems can stop your work. We find answers quickly. Our team uses simple, clever ideas to solve big issues. You can trust us to keep things moving.",
    icon: <Wrench className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
  },
  {
    question: "Ready to launch something big?",
    solution: "We’ve got it—let’s take off together.",
    details:
      "Big projects need strong support. We bring tools and people to start your dream. From planning to finish, we work as your partner for success.",
    icon: <Rocket className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
  },
];

const GotItItemComponent: React.FC<GotItItem & { isReversed?: boolean }> = ({
  question,
  solution,
  details,
  icon,
  isReversed = false,
}) => (
  <div
    className={`flex flex-col ${
      isReversed ? "md:flex-row-reverse" : "md:flex-row"
    } items-center gap-6 md:gap-10 py-8 md:py-12 max-w-3xl mx-auto`}
  >
    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 rounded-full p-4">
      {icon}
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {question}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg font-medium mb-2">
        {solution}
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
        {details}
      </p>
    </div>
  </div>
);

// Main Section Component
export const WeveGotItSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Whatever You Need, We’ve Got It
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            We help with your challenges. Big dreams or small fixes, our team
            has the technology and skills to make it happen.
          </p>
        </div>

        {/* Items with Wave Divider */}
        <div className="relative">
          {gotItItems.map((item, index) => (
            <div key={index}>
              <GotItItemComponent
                question={item.question}
                solution={item.solution}
                details={item.details}
                icon={item.icon}
                isReversed={index % 2 !== 0} // Alternate layout
              />
              {index < gotItItems.length - 1 && (
                <div className="relative my-4">
                  <svg
                    className="w-full h-8 text-purple-200 dark:text-purple-900"
                    fill="none"
                    viewBox="0 0 1440 40"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 20 Q 360 40, 720 20 T 1440 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Do you have another need? We want to hear it. Let’s work together.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            Let’s Chat
          </a>
        </div>
      </div>
    </section>
  );
};
