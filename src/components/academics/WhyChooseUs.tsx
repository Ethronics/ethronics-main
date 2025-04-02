import React, { JSX } from "react";
import { Award, MapPin, Globe, Briefcase } from "lucide-react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: <Award className="h-6 w-6" />, title: "Excellence in Education", description: "Our curriculum is designed by global experts to meet international standards while addressing Ethiopia’s unique needs." },
  { icon: <MapPin className="h-6 w-6" />, title: "Strategic Location", description: "Our campus is positioned to connect you to Ethiopia’s growing tech ecosystem." },
  { icon: <Globe className="h-6 w-6" />, title: "Global Perspective", description: "Partnerships with leading universities worldwide bring a global outlook to your education." },
  { icon: <Briefcase className="h-6 w-6" />, title: "Career Readiness", description: "Our programs equip you with skills that employers and innovators demand." },
];

export const WhyChooseUs: React.FC = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          At the heart of Ethiopia’s technological renaissance, we’re crafting an institution that doesn’t just educate but inspires. Here’s why we stand out:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">{item.icon}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);