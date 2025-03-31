import React from "react";
import { Project, projects } from "../../data/homeData";

export const Projects: React.FC = () => (
  <section className="py-20 bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ethronics is bringing ideas to life through innovative manufacturing projects. From smart security systems to AI-driven urban solutions, our work is shaping the future of technology in Ethiopia and beyond.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project: Project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${project.progress}%` }} />
              </div>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">{project.progress}% Complete</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);