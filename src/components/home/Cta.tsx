import React from "react";

export const CallToAction: React.FC = () => (
  <section className="py-16 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-blue-900/90 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Ethronics Revolution</h2>
      <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
        Be part of a bold movement to transform technology from Ethiopia. Whether you’re a student, researcher, or innovator, Ethronics offers you a chance to shape the future of academics, R&D, and manufacturing—starting today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
        >
          Get in Touch
        </a>
        <a
          href="/academics"
          className="px-8 py-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors font-semibold"
        >
          Explore Opportunities
        </a>
      </div>
    </div>
  </section>
);