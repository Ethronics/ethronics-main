import { Leaf, Recycle, Sun } from 'lucide-react';

const sustainabilityItems = [
  { icon: <Leaf className="h-8 w-8" />, title: "Eco-Friendly Materials", description: "Using sustainable resources." },
  { icon: <Recycle className="h-8 w-8" />, title: "Waste Reduction", description: "Efficient processes to minimize waste." },
  { icon: <Sun className="h-8 w-8" />, title: "Renewable Energy", description: "Solar-powered facilities." },
];

export function Sustainability() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Sustainability"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-4">Committed to Sustainability</h2>
        <p className="text-xl text-gray-200 mb-8">Eco-friendly practices that protect our planet.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sustainabilityItems.map((item, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-green-400 mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
