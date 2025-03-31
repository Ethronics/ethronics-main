import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

function ProgressBar({
  targetProgress,
  isVisible,
}: {
  targetProgress: number;
  isVisible: boolean;
}) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setCurrentProgress(0); // Reset progress on hover
      setIsComplete(false); // Reset completion state
      const increment = targetProgress / 100;
      const interval = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev < targetProgress) {
            return Math.min(prev + increment, targetProgress);
          }
          setIsComplete(true); // Mark as complete when target is reached
          clearInterval(interval);
          return prev;
        });
      }, 20);

      return () => clearInterval(interval); // Cleanup
    }
  }, [isVisible, targetProgress]);

  return (
    <div className="w-full">
      <div className="bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-200"
          style={{ width: `${currentProgress}%` }}
        ></div>
      </div>
      {isComplete && (
        <p className="text-white mt-1 text-center">
          {targetProgress}% Complete
        </p>
      )}
    </div>
  );
}

const products = [
  {
    name: "SmartGate",
    description: "IoT security system.",
    image:
      "https://images.unsplash.com/photo-1559669797-7c99e15e2b0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFycmllcnxlbnwwfHwwfHx8MA%3D%3D",
    progress: 90,
  },
  {
    name: "RoboArm",
    description:
      "Educational robotic arm. This is a longer description to test the line clamping functionality. It should be truncated after two lines.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3QlMjBhcm18ZW58MHx8MHx8fDA%3D",
    progress: 45,
  },
  {
    name: "SmartTraffic",
    description: "IoT traffic lighting system.",
    image:
      "https://images.unsplash.com/photo-1584649525122-8d6895492a5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww",
    progress: 70,
  },
];

export function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Products
        </h2>
        <p className="text-lg text-center mb-8 dark:text-gray-400">
          <span className="dark:text-gray-500"></span>
          Explore our{" "}
          <span className="text-purple-500 font-semibold dark:text-purple-400">
            innovative products
          </span>{" "}
          designed to make life smarter and more efficient. These are the
          projects we are currently undertaking, but if you have something
          specific in mind, our engineers are ready to{" "}
          <span className="text-purple-500 font-semibold dark:text-purple-400">
            bring your vision to life
          </span>
          .
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">
                  {product.name}
                </h3>
                {product.progress !== undefined ? (
                  <div className="text-center">
                    <p className="text-gray-300">In Development</p>
                    <div className="mt-2">
                      <ProgressBar
                        targetProgress={product.progress}
                        isVisible={hoveredProduct === index}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-400 h-5 w-5" />
                      <p className="w-full text-gray-300 line-clamp-2 leading-normal">
                        {product.description}
                      </p>
                    </div>
                    <a
                      href="/contact"
                      className="inline-block px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Reach Out
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
