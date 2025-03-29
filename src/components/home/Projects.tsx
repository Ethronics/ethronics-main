const projects = [
    { title: "Gate Barrier", description: "Automated security system.", image: "https://images.unsplash.com/photo-1588362951121-3ee319b018b2?auto=format&fit=crop&w=500&q=60", progress: 75 },
    { title: "Smart Bin", description: "IoT waste management.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2070&q=80", progress: 60 },
    { title: "Adaptive Traffic Light", description: "AI traffic control.", image: "https://images.unsplash.com/photo-1584649525122-8d6895492a5d?auto=format&fit=crop&w=600&q=60", progress: 45 },
  ];
  
  export function Projects() {
    return (
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Manufacturing cutting-edge solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${project.progress}%` }} />
                  </div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">{project.progress}% Complete</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }