import { Rocket, Globe, Users } from "lucide-react";

export function About() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Intro */}
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ethronics: Igniting Africa’s Tech Revolution
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A startup born in Ethiopia, we’re pioneering technology education, research, and manufacturing to solve global challenges from the heart of Africa.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
              <Rocket className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To empower the next generation of innovators through world-class education and cutting-edge research, starting in Ethiopia.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To build transformative technologies that bridge local ingenuity with global impact, redefining what’s possible from Africa.
            </p>
          </div>

          {/* Team */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-4">
              <Users className="h-6 w-6 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Team</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A passionate group of dreamers and doers—engineers, educators, and visionaries—united to shape the future of tech.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We’re just getting started. Join us on this journey to redefine technology from Ethiopia to the world.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}