import { useState } from "react";

// Sample gallery images (replace with your own)
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Technology Innovation",
    caption: "Cutting-edge tech solutions in action.",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Education Lab",
    caption: "Hands-on learning in advanced labs.",
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Robotics Development",
    caption: "Building the future with robotics.",
  },
  {
    src: "https://images.unsplash.com/photo-1559669797-7c99e15e2b0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Security Systems",
    caption: "Smart security for a connected world.",
  },
  {
    src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Robotic Arm",
    caption: "Precision engineering at its finest.",
  },
  {
    src: "https://images.unsplash.com/photo-1584649525122-8d6895492a5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Traffic Management",
    caption: "Smart traffic systems in Ethiopia.",
  },
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white text-center text-lg font-medium line-clamp-2">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}