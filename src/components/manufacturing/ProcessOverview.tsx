import { Palette, Wrench, Package, Truck } from 'lucide-react';

const steps = [
  { icon: <Palette className="h-8 w-8" />, title: "Design", description: "Innovative concepts brought to life." },
  { icon: <Wrench className="h-8 w-8" />, title: "Production", description: "Precision manufacturing with advanced tools." },
  { icon: <Package className="h-8 w-8" />, title: "Assembly", description: "Expert assembly for seamless integration." },
  { icon: <Truck className="h-8 w-8" />, title: "Delivery", description: "Efficient logistics for timely delivery." },
];

export function ProcessOverview() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Manufacturing Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-600 transform -translate-x-1/2" />
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2 p-4">
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}