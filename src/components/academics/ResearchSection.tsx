import React from "react";
import Faculty from "../../assets/images/fuculty-research.jpg"

export const FacultyResearchSection: React.FC = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Faculty & Research</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our faculty and research initiatives are poised to set new benchmarks in technological education and innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">World-Class Faculty</h3>
          <p className="text-md text-gray-600 dark:text-gray-300 mb-6">
            We’re assembling a team of distinguished educators and industry leaders from Ethiopia and around the world.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cutting-Edge Research</h3>
          <p className="text-md text-gray-600 dark:text-gray-300">
            Our research programs will tackle pressing challenges in Ethiopia and beyond, from smart manufacturing to autonomous systems.
          </p>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src= {Faculty}
            alt="Faculty & Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent flex items-end p-6">
            <p className="text-white text-lg font-semibold">Research That Transforms Lives</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);