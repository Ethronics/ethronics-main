import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, Star } from "lucide-react";
import { ProgramOverlay } from "./ProgramOverlay";
import { Program, ProgramLevel } from "../../data/program";

interface ProgramsSectionProps {
  programs: ProgramLevel[];
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ programs }) => {
  const scrollRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>(
    programs.map(() => React.createRef<HTMLDivElement>())
  );
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Show tooltip for 3 seconds on mount
  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
    return () => clearTimeout(tooltipTimer);
  }, []);

  const scroll = (index: number, direction: "left" | "right") => {
    const container = scrollRefs.current[index].current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setIsInteracting(true);
      setTimeout(() => setIsInteracting(false), 1000); // Resume animation after scroll
    }
  };

  return (
    <section id="programs" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Programs
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Whether you’re starting with technical training or pursuing advanced research, our programs are designed to meet you where you are and take you where you want to go.
          </p>
        </div>
        {programs.map((level, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-purple-900 rounded-lg">{level.icon}</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {level.level} Programs
              </h3>
              <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
                {level.description}
              </p>
            </div>
            <div className="relative">
              {/* Left Gradient Fade */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
              {/* Right Gradient Fade */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

              <button
                onClick={() => scroll(index, "left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 z-20 md:-left-12"
                aria-label={`Scroll ${level.level} programs left`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              {showTooltip && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-12 text-sm text-gray-300 bg-gray-800 px-2 py-1 rounded z-20 animate-pulse md:mr-0">
                  Scroll to explore
                </div>
              )}
              <div
                ref={scrollRefs.current[index]}
                className={`flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 no-scrollbar ${
                  !isInteracting ? "animate-horizontal-shake" : ""
                }`}
                onMouseEnter={() => setIsInteracting(true)}
                onMouseLeave={() => setIsInteracting(false)}
              >
                {level.programs.map((program, pIndex) => (
                  <div
                    key={pIndex}
                    className="snap-start flex-shrink-0 w-[300px] bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500" />
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {program.name}
                      </h4>
                      <div className="flex items-center text-sm text-purple-400 mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        {program.duration}
                      </div>
                      <p className="text-sm text-gray-300 mb-4">
                        {program.description}
                      </p>
                      <div>
                        <h5 className="font-semibold text-white mb-2 text-sm">
                          Key Highlights
                        </h5>
                        <ul className="space-y-2">
                          {program.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex items-center text-xs text-gray-300"
                            >
                              <Star className="w-3 h-3 mr-2 text-purple-500" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => setSelectedProgram(program)}
                        className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                        aria-label={`Learn more about ${program.name}`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scroll(index, "right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 z-20 md:-right-12"
                aria-label={`Scroll ${level.level} programs right`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProgram && (
        <ProgramOverlay
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      )}

      <style>{`
        @keyframes horizontal-shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(2px);
          }
          75% {
            transform: translateX(-2px);
          }
        }
        .animate-horizontal-shake {
          animation: horizontal-shake 1s infinite;
          animation-play-state: running;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-horizontal-shake {
            animation: none;
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};