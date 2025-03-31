import React from "react";
import { Feature, researchFeatures } from "../../data/homeData";

export const Features: React.FC = () => (
  <section className="py-16 bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Research & Innovation</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          At Ethronics, we’re pushing the boundaries of technology through groundbreaking research and development. Our focus spans robotics, AI, cybersecurity, quantum computing, and blockchain—innovations designed to solve real-world problems with Ethiopian ingenuity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {researchFeatures.map((feature: Feature, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-center"
          >
            <div className="mb-4 mx-auto w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-400">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);