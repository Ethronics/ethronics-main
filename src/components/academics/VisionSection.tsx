import React from "react";

export const VisionSection: React.FC = () => (
  <section className="py-20 bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Vision for Ethiopia’s Tech Future
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We envision a future where Ethiopia leads Africa’s technological revolution, powered by a generation of skilled innovators. Our institution is being built to make this vision a reality.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            From practical TVET programs to PhD research, our comprehensive approach ensures every student finds their path to success. Join us as we pioneer a new era of education in Ethiopia.
          </p>
        </div>
        <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Our Vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent flex items-end p-6">
            <p className="text-white text-lg font-semibold">Empowering Ethiopia’s Next Innovators</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);