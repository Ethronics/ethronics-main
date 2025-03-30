import { useState } from 'react';

const qualityTabs = [
  { title: "Certifications", content: "ISO 9001 certified, ensuring international quality standards." },
  { title: "Testing", content: "Rigorous testing with 100% inspection before delivery." },
  { title: "Awards", content: "Recognized for excellence with multiple industry awards." },
];

export function QualityAssurance() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Quality Assurance</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {qualityTabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === index ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-gray-300 animate-fade-in">
          <p>{qualityTabs[activeTab].content}</p>
        </div>
      </div>
    </section>
  );
}