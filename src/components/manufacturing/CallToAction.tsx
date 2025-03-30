export function CallToAction() {
    return (
      <section className="py-24 bg-gradient-to-r from-purple-600 to-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Innovate?</h2>
          <p className="text-xl text-gray-200 mb-8">Contact us to explore our manufacturing solutions.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    );
  }