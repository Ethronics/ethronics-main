function AcademicsSection() {
    const programs = [
      { title: "Robotics Engineering", description: "Master automation and control systems." },
      { title: "AI & Data Science", description: "Dive into machine learning and analytics." },
      { title: "Manufacturing Tech", description: "Learn advanced production techniques." },
    ];
  
    return (
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Academic Programs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Empowering the next generation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{program.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                <a href="/academics" className="text-purple-600 dark:text-purple-400 hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }