import React from "react";

interface Step {
  step: string;
  description: string;
}

const steps: Step[] = [
  { step: "Step 1: Join the Waitlist", description: "Sign up now to secure your spot and receive updates on our launch." },
  { step: "Step 2: Prepare Your Application", description: "Submit your records and statement of purpose once we’re accredited." },
  { step: "Step 3: Start Your Journey", description: "Join a pioneering community dedicated to advancing Ethiopia’s tech landscape." },
];

export const AdmissionsSection: React.FC = () => (
  <section className="py-20 bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Admissions Process</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We’re preparing to welcome our first cohort of students as soon as accreditation is complete. Here’s how you can join us:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full mb-4 mx-auto">
              <span className="text-lg font-bold">{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">{item.step}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);