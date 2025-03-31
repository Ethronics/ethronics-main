import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  title: string;
  description: string;
  image: string;
  category: "education" | "research" | "manufacturing";
}

export const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      title: "Robotics Workshop",
      description:
        "Students at our Robotics Bootcamp assemble and program their first autonomous robots, blending theory with hands-on experience.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      category: "education",
    },
    {
      title: "AI Research Lab",
      description:
        "Our team tests cutting-edge AI algorithms in speech recognition and computer vision, pushing the boundaries of innovation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      category: "research",
    },
    {
      title: "Smart Factory Prototype",
      description:
        "A glimpse of our IoT-enabled Smart Factory System in action, optimizing production with real-time data and automation.",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80",
      category: "manufacturing",
    },
    {
      title: "Student Innovation Day",
      description:
        "Ethronics hosts an annual event where students showcase their tech projects, from robotics to blockchain solutions.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      category: "education",
    },
    {
      title: "Gate Barrier Installation",
      description:
        "Our Gate Barrier Tech deployed at a local facility, enhancing security with automated precision and durability.",
      image: "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?auto=format&fit=crop&w=800&q=80",
      category: "manufacturing",
    },
    {
      title: "Quantum Computing Experiment",
      description:
        "Exploring the future of computation with our Quantum Research team, tackling complex problems with next-gen tech.",
      image: "https://images.unsplash.com/photo-1591306208574-969f12f1ebfe?auto=format&fit=crop&w=800&q=80",
      category: "research",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 320; // w-80 in Tailwind (80 * 4px)
  const visibleCards = Math.floor(window.innerWidth / cardWidth) || 1; // Dynamic based on screen width

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
            Explore the moments that define Ethronics—where education inspires, research innovates, and manufacturing transforms. This gallery captures our work in action, from classrooms to labs to production lines.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
              <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </span>
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
                >
                  <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {item.description}
                    </p>
                    <span className="inline-block mt-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
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
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full p-6 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedItem.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedItem.description}</p>
            <span className="inline-block bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};