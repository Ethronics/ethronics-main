import React from "react";

export const CallToAction: React.FC = () => (
  <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape Ethiopia’s Technological Destiny?</h2>
      <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
        We’re building a movement. Accreditation is underway, and soon, we’ll open our doors to students ready to lead Ethiopia into a new era of innovation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
          Join Waitlist
        </button>
        <button className="px-8 py-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors font-semibold">
          Contact Us
        </button>
      </div>
    </div>
  </section>
);