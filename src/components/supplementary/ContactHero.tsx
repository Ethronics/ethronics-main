import React from "react";

export const ContactHero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-blue-900/90 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Whether you’re interested in joining our programs, exploring career opportunities, or collaborating on groundbreaking research, we’re here to connect with you.
        </p>
      </div>
    </div>
  );
};