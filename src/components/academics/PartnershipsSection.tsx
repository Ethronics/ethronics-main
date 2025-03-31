import React from "react";

interface Partnership {
  title: string;
  description: string;
}

const partnerships: Partnership[] = [
  { title: "Global Universities", description: "Offering exchange programs and joint research." },
  { title: "Tech Industry Leaders", description: "Providing internships and real-world projects." },
  { title: "Local Innovators", description: "Addressing local needs and fostering innovation." },
];

export const PartnershipsSection: React.FC = () => (
  <section className="py-20 bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Partnerships</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Collaboration is at the core of our mission. We’re forging connections with leading organizations:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partnerships.map((item, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);