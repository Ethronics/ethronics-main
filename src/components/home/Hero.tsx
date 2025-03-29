import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    title: (
      <>
        <span className="block">A technology that is </span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          taught, researched, made, and perfected
        </span>
        <span className="block">in Ethiopia and Applied worldwide</span>
      </>
    ),
    description:
      "Empowering the next generation of innovators and leaders through cutting-edge education, research, and manufacturing excellence.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
  },
  {
    title: (
      <>
        <span className="block">Pioneering the Future of</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Technology Education
        </span>
        <span className="block">in Africa</span>
      </>
    ),
    description:
      "Join us in shaping tomorrow's technological landscape through innovative learning and hands-on experience.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: (
      <>
        <span className="block">Building Tomorrow's</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Technology Leaders
        </span>
        <span className="block">Today</span>
      </>
    ),
    description:
      "Experience world-class education and research opportunities in robotics, AI, and advanced manufacturing.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); 
      return () => clearInterval(timer);
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const handleSlideClick = () => {
    setIsPaused(!isPaused);
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" onClick={handleSlideClick}>
      {/* Background slider */}
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-10 ${
            index === currentSlide ? "opacity-100 translate-x-0": "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-blue-900/90" />
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        </div>
      ))}
      
      
      {/* Background slider end */}
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition colors z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition colors z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      {/* Navigation Buttons end */}
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl  sm:text-6xl font-bold  text-white mb-8">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
          {slides[currentSlide].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/academics"
            className="px-8 py-3 text-lg font-medium rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            Explore Programs
          </a>
          <a
            href="/research"
            className="px-8 py-3 text-lg font-medium rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            View Research
          </a>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) =>{e.stopPropagation(); setCurrentSlide(index)}}
              className={`w-2 h-2 rounded-full transition-colors ${
            index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      {/* Content end*/}
    </div>
  );
}
