import { Brain, Notebook as Robot, Shield, Cpu, Database } from "lucide-react";

const features = [
  { icon: <Robot className="h-8 w-8" />, title: "Robotics", description: "Advanced automation for manufacturing." },
  { icon: <Brain className="h-8 w-8" />, title: "AI & ML", description: "Speech, vision, and automation solutions." },
  { icon: <Shield className="h-8 w-8" />, title: "Cybersecurity", description: "Secure digital solutions." },
  { icon: <Cpu className="h-8 w-8" />, title: "Quantum Computing", description: "Next-gen processing power." },
  { icon: <Database className="h-8 w-8" />, title: "Blockchain", description: "Secure transaction innovation." },
];

export function Features() {
  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Research & Innovation</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Pushing boundaries in technology</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-center"
            >
              <div className="mb-4 mx-auto w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-400">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
