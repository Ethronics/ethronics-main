import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const slides = [
    { title: "Advanced Manufacturing", description: "Precision engineering for the future.", image: "https://via.placeholder.com/1200x600?text=Slide+1" },
    { title: "Innovative Solutions", description: "Pushing boundaries in tech.", image: "https://via.placeholder.com/1200x600?text=Slide+2" },
  ];
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{slide.title}</h1>
              <p className="mt-4 text-xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button onClick={() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
        <ChevronRight className="h-8 w-8" />
      </button>
    </section>
  );
}
