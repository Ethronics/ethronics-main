import { useState, useEffect, JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: JSX.Element | string;
  description: string;
  image: string;
}

interface HeroButton {
  text: string;
  href: string;
  primary?: boolean; 
}

interface HeroProps {
  slides: Slide[];
  buttons?: HeroButton[]; 
  className?: string; 
}

export function Hero({ slides, buttons = [], className = "" }: HeroProps) {
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const handleSlideClick = () => setIsPaused(!isPaused);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      onClick={handleSlideClick}
    >
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-blue-900/90" />
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM73z0xMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-relaxed mb-8">{slides[currentSlide].title}</h1>
        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">{slides[currentSlide].description}</p>
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`px-8 py-3 text-lg font-medium rounded-lg transition-colors ${
                  button.primary
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      {/* Bouncing Down Icon */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-6 w-6 rotate-90 text-white" />
      </div>
    </div>
  );
}