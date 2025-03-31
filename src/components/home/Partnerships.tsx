import React from "react";
import { Partnership, partnerships } from "../../data/homeData";

export const Partnerships: React.FC = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Partnerships</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Collaboration drives our success. Ethronics is forging powerful partnerships with academic institutions, industry leaders, and local innovators to amplify our impact and bring transformative technology to life.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partnerships.map((partnership: Partnership, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{partnership.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{partnership.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);