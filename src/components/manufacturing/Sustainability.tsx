import { Leaf, Recycle, Sun } from 'lucide-react';

const sustainabilityItems = [
    { icon: <Leaf className="h-10 w-10" />, title: "Eco-Friendly Materials", description: "Using sustainable resources." },
    { icon: <Recycle className="h-10 w-10" />, title: "Waste Reduction", description: "Efficient processes to minimize waste." },
    { icon: <Sun className="h-10 w-10" />, title: "Renewable Energy", description: "Solar-powered facilities." },
];

export function Sustainability() {
    return (
        <section className="relative h-auto py-12 px-4 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
            <div className="relative z-10 text-center">
                <h2 className="text-3xl  font-bold text-white mb-4 sm:mb-6">
                    Committed to Sustainability
                </h2>
                <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-xl mx-auto">
                    Eco-friendly practices that protect our planet and ensure a better future.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {sustainabilityItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-center text-green-400 mb-3 sm:mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
