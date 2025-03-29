import { Brain, Notebook as Robot, Shield, Cpu, Database } from 'lucide-react';

const features = [
  {
    icon: <Robot className="h-8 w-8" />,
    title: 'Robotics',
    description: 'Advanced automation and control systems for the future of manufacturing.'
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge applications in speech, vision, and automation.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Cybersecurity',
    description: 'Comprehensive digital protection and secure technology solutions.'
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'Quantum Computing',
    description: 'Research into next-generation processing power and capabilities.'
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Blockchain',
    description: 'Innovative solutions for secure transactions and decentralization.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Research & Innovation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Exploring cutting-edge technologies to shape the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <div className="text-purple-600 dark:text-purple-400">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}