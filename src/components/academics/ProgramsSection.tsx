import React, { useRef, useState } from "react";
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

  const scroll = (index: number, direction: "left" | "right") => {
    const container = scrollRefs.current[index].current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Explore Our Programs</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you’re starting with technical training or pursuing advanced research, our programs are designed to meet you where you are and take you where you want to go.
          </p>
        </div>
        {programs.map((level, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">{level.icon}</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{level.level} Programs</h3>
              <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{level.description}</p>
            </div>
            <div className="relative">
              <button
                onClick={() => scroll(index, "left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 z-10 md:-left-12"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div
                ref={scrollRefs.current[index]}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 scrollbar-hide"
              >
                {level.programs.map((program, pIndex) => (
                  <div
                    key={pIndex}
                    className="snap-start flex-shrink-0 w-[300px] bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500" />
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{program.name}</h4>
                      <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        {program.duration}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Highlights</h5>
                        <ul className="space-y-2">
                          {program.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                              <Star className="w-3 h-3 mr-2 text-purple-500" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => setSelectedProgram(program)}
                        className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scroll(index, "right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 z-10 md:-right-12"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProgram && <ProgramOverlay program={selectedProgram} onClose={() => setSelectedProgram(null)} />}
    </section>
  );
};