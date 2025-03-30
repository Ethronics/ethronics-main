import { Factory, Wrench, Microchip } from 'lucide-react';

const capabilities = [
  { icon: <Factory className="h-12 w-12" />, title: "Smart Manufacturing", description: "IoT-driven production systems." },
  { icon: <Wrench className="h-12 w-12" />, title: "Precision Engineering", description: "High-accuracy component crafting." },
  { icon: <Microchip className="h-12 w-12" />, title: "Automation", description: "Robotic assembly for efficiency." },
];

export function Capabilities() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Manufacturing Capabilities</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="group min-w-[250px] bg-gray-700 p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4 text-purple-400 transform transition-transform duration-500 group-hover:rotate-360">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
              <p className="text-sm text-gray-300">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}