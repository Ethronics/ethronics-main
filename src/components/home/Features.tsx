import React, { useEffect, useRef, useState, memo } from "react";
import { Feature, researchFeatures } from "../../data/homeData";
import { X } from "lucide-react";

interface ExtendedFeature extends Feature {
  details?: string;
  link?: string;
}

const MemoizedFeatureCard = memo(
  ({
    feature,
    index,
    activeIndex,
    setActiveIndex,
    isMobile,
  }: {
    feature: ExtendedFeature;
    index: number;
    activeIndex: number | null;
    setActiveIndex: (index: number | null) => void;
    isMobile: boolean;
  }) => {
    const isModalOpen = activeIndex === index;
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setActiveIndex(null);
          setIsHovered(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setActiveIndex]);

    const handleInteraction = () => {
      setActiveIndex(isModalOpen ? null : index);
      if (!isModalOpen) setIsHovered(false);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation();
      console.log(`Clicked Learn More for ${feature.title}`); // Debug
    };

    return (
      <>
        <div
          className={`ethronics-feature-card p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 group ${
            isModalOpen ? "border-2 border-purple-600 rounded-full overflow-hidden" : "hover:border-2 hover:border-purple-600 hover:rounded-full"
          }`}
          tabIndex={0}
          role="button"
          aria-label={`Feature: ${feature.title}`}
          aria-describedby={`feature-desc-${index}`}
          aria-expanded={isModalOpen}
          aria-controls={`feature-modal-${index}`}
          onMouseEnter={() => !isMobile && (setIsHovered(true), setActiveIndex(index))}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          onFocus={() => !isMobile && setActiveIndex(index)}
          onBlur={() => !isMobile && !isHovered && setActiveIndex(null)}
          onClick={isMobile ? handleInteraction : undefined}
        >
          <div className="mb-3 sm:mb-4 mx-auto w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-400 group-hover:ethronics-pulse">
            {feature.icon}
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
          <p id={`feature-desc-${index}`} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            {feature.description}
          </p>
        </div>

        {/* Modal */}
        <div
          id={`feature-modal-${index}`}
          className={`fixed top-0 left-0 z-[100] w-full max-w-full h-full bg-gray-50 dark:bg-gray-800 border-t-4 border-purple-600 shadow-lg transition-all duration-300 delay-100 lg:max-w-md lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-lg lg:h-auto pointer-events-auto ${
            isModalOpen && (isHovered || isMobile) ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 lg:translate-x-0 lg:translate-y-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={`Details for ${feature.title}`}
          tabIndex={-1}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            if (!isMobile) setActiveIndex(null);
          }}
        >
          <div className="p-4 sm:p-6 max-w-full pointer-events-auto">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h4>
              <button
                onClick={() => {
                  setActiveIndex(null);
                  setIsHovered(false);
                }}
                className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              {feature.details || `${feature.description} Our team is dedicated to advancing this field with innovative solutions tailored to global challenges.`}
            </p>
            <a
              href={feature.link || `/research/${index}`}
              className="text-sm sm:text-base text-purple-600 dark:text-purple-400 hover:underline pointer-events-auto focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label={`Learn more about ${feature.title}`}
              tabIndex={0}
              onClick={handleLinkClick}
              data-clickable="true"
            >
              Learn More
            </a>
          </div>
        </div>
      </>
    );
  }
);

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640 || /Mobi|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".ethronics-feature-card");
            cards.forEach((card, idx) => {
              card.classList.add("ethronics-fade-up");
              (card as HTMLElement).style.animationDelay = `${idx * 0.15}s`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-12 bg-gray-50 dark:bg-gray-900 max-w-full overflow-x-hidden"
      role="region"
      aria-label="Research and Innovation features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-500">
              Research & Innovation
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Ethronics, we’re pushing the boundaries of technology through groundbreaking research and development. Our focus spans robotics, AI, cybersecurity, quantum computing, and blockchain—innovations designed to solve real-world problems with Ethiopian ingenuity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-full">
          {researchFeatures.map((feature: Feature, index) => (
            <MemoizedFeatureCard
              key={index}
              feature={feature as ExtendedFeature}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ethronics-fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .ethronics-fade-up {
          animation: ethronics-fade-up 0.6s ease-out forwards;
        }
        @keyframes ethronics-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .group-hover\\:ethronics-pulse:hover {
          animation: ethronics-pulse 1.5s infinite;
        }
      `}</style>
    </section>
  );
};