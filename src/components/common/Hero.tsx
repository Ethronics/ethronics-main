import { useState, useEffect, useRef, useCallback, memo, JSX } from "react";
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

const MemoizedBackground = memo(({ slide, index, currentSlide }: { slide: Slide; index: number; currentSlide: number }) => (
  <div
    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
      index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
    }`}
    aria-hidden={index !== currentSlide}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-yellow-900/60 to-purple-900/70" />
    <img
      src={slide.image}
      alt=""
      className="absolute inset-0 w-full h-full object-cover -z-10"
      loading={index === 0 ? "eager" : "lazy"}
    />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
  </div>
));

export function Hero({ slides, buttons = [], className = "" }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, slides.length]);

  useEffect(() => {
    // Preload images
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, [slides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) nextSlide();
      else prevSlide();
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused(!isPaused);
  };

  return (
    <div
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero slideshow"
    >
      {/* Background */}
      {slides.map((slide, index) => (
        <MemoizedBackground key={index} slide={slide} index={index} currentSlide={currentSlide} />
      ))}

      {/* Content and Image Columns */}
      <div className="relative z-10 max-w-7xl py-12 mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center py-8 lg:py-0" onClick={handleContentClick}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-xl">
            {slides[currentSlide].description}
          </p>
          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3 justify-start">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`px-6 py-2 text-base font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    button.primary
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  aria-label={button.text}
                >
                  {button.text}
                </a>
              ))}
            </div>
          )}
          {/* Slide Indicators */}
          <div className="flex space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  index === currentSlide ? "bg-purple-600" : "bg-gray-400/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title.toString()}
            className="w-full h-64 sm:h-80 lg:h-[36rem] object-contain rounded-lg border-2 border-purple-600/50 transition-transform duration-1000 scale-100 group-[.opacity-100]:scale-102"
            loading={currentSlide === 0 ? "eager" : "lazy"}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-purple-600/80 text-white hover:bg-purple-700/80 transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-purple-400"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-purple-600/80 text-white hover:bg-purple-700/80 transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-purple-400"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Bouncing Down Icon */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-6 w-6 rotate-90 text-white" aria-hidden="true" />
      </div>
    </div>
  );
}
