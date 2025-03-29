export function CallToAction() {
    return (
      <section className="py-24 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Ethronics Journey</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Be part of a movement shaping the future of technology in Africa and beyond.</p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100">Get in Touch</a>
            <a href="/academics" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900">Apply Now</a>
          </div>
        </div>
      </section>
    );
  }