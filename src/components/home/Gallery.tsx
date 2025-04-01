import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Memorandum from "../../assets/images/memorandum.jpg";
import Memorandum2 from "../../assets/images/agreed_memorandum.jpg";
import Cto from "../../assets/images/joe_conference.jpg";
import Ceo from "../../assets/images/CEO.jpg";
import CtoPresentation from "../../assets/images/joe_presentation.png";

interface GalleryItem {
  title: string;
  description: string;
  images: string[];
  category: "education" | "research" | "manufacturing";
}

export const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      title: "Memorandum with Arsi University",
      description:
        "Ethronics signed a memorandum of understanding with Arsi University to collaborate on innovative research and educational programs. This partnership aims to foster advancements in technology and education, bringing together academic expertise and industry innovation to create impactful solutions. Through this collaboration, we are committed to developing new curricula, conducting joint research projects, and providing students with hands-on opportunities to engage with cutting-edge technologies like robotics and AI.",
      images: [Memorandum, Memorandum2],
      category: "education",
    },
    {
      title: "Robotics in AI: Redefining Human Potential",
      description:
        "Our CEO presented groundbreaking insights on how robotics in AI is reshaping the future and redefining human potential at the conference. The presentation highlighted the integration of intelligent systems into everyday life, exploring how these technologies can enhance productivity, creativity, and problem-solving across industries. The discussion also covered the ethical implications and the need for inclusive innovation to ensure these advancements benefit society as a whole.",
      images: [
        Ceo,
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
      ],
      category: "education",
    },
    {
      title: "Artificial Perception: Exploring the Senses of Sight and Perception",
      description:
        "Our CTO shared innovative research on artificial perception, delving into the senses of sight and perception at the conference. This research explores how machines can mimic human sensory capabilities, with a focus on visual processing and cognitive understanding. The presentation included detailed case studies, technical demonstrations, and future applications in fields like autonomous systems, healthcare, and urban planning, showcasing Ethiopia’s growing role in global tech innovation.",
      images: [Cto, CtoPresentation],
      category: "research",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false); // New state for text expansion
  const cardWidth = 320;
  const visibleCards = Math.floor(window.innerWidth / cardWidth) || 1;

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.min(prev + cardWidth, 0));
  };

  const scrollRight = () => {
    const maxScroll = -(galleryItems.length - visibleCards) * cardWidth;
    setScrollPosition((prev) => Math.max(prev - cardWidth, maxScroll));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Journey in Pictures
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the moments that define Ethronics—where education inspires,
            research innovates, and manufacturing transforms.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative grid grid-cols-2 gap-1 p-2 h-64 overflow-hidden group">
                {item.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative">
                    <img
                      src={image}
                      alt={`${item.title} - ${imgIndex + 1}`}
                      className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                      <p className="text-xs text-white text-center line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
                <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full z-10">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 disabled:opacity-50"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="overflow-x-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(${scrollPosition}px)` }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="w-80 flex-shrink-0 bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="grid grid-cols-2 gap-1 p-2 h-56 overflow-hidden hover:text-underline">
                    {item.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${item.title} - ${imgIndex + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ))}
                  </div>
                  <div className="p-4 relative">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {item.description}
                    </p>
                    <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 z-10 disabled:opacity-50"
            disabled={scrollPosition <= -(galleryItems.length - visibleCards) * cardWidth}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full p-6 relative animate-fade-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedItem.title}
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {selectedItem.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${selectedItem.title} - ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>
            <div className="mb-4">
              <p
                className={`text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                  isExpanded ? "max-h-none" : "max-h-20 overflow-hidden"
                }`}
              >
                {selectedItem.description}
              </p>
              {selectedItem.description.length > 150 && ( // Show button if text is long
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium text-right float-right"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
            <span className="inline-block bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};