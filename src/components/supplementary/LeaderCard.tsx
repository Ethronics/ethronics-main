import React, { useState } from "react";

// Interface for leadership
export interface Leader {
  name: string;
  role: string;
  bio: string;
  education: string;
  experience?: string;
  image: string;
  achievements: string[];
  techHighlight: string;
  linkdin?: string;
}

export const LeaderCard: React.FC<Leader> = ({
  name,
  role,
  bio,
  education,
  experience,
  image,
  achievements,
  techHighlight,
  linkdin,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Leader Card */}
      <div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-sm mx-auto md:mx-0 flex flex-col items-center transform transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
        onClick={handleCardClick}
      >
        <div className="relative mb-6">
          <img
            src={image}
            alt={`${name}, ${role}`}
            className="w-28 h-28 rounded-full object-cover border-4 border-purple-600 dark:border-purple-400 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 text-center">
          {name}
        </h3>
        <p className="text-md md:text-lg text-purple-600 dark:text-purple-300 font-medium mb-3 text-center tracking-wide">
          {role}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4 text-center leading-relaxed line-clamp-3">
          {bio}
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center space-y-2">
          <p>
            <strong className="font-semibold text-gray-700 dark:text-gray-200">
              Education:
            </strong>{" "}
            {education}
          </p>
          {experience && (
            <p>
              <strong className="font-semibold text-gray-700 dark:text-gray-200">
                Experience:
              </strong>{" "}
              {experience}
            </p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-gray-900 bg-opacity-30 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-lg w-full mx-4 transform transition-all animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt={`${name}, ${role}`}
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-600 dark:border-purple-400 mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {name}
              </h3>
              <p className="text-lg text-purple-600 dark:text-purple-300 mb-4">
                {role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-4 text-center">
                {bio}
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2 w-full">
                <p>
                  <strong className="font-semibold text-gray-700 dark:text-gray-200">
                    Education:
                  </strong>{" "}
                  {education}
                </p>
                {experience && (
                  <p>
                    <strong className="font-semibold text-gray-700 dark:text-gray-200">
                      Experience:
                    </strong>{" "}
                    {experience}
                  </p>
                )}
                <div>
                  <strong className="font-semibold text-gray-700 dark:text-gray-200 block mb-1">
                    Key Achievements:
                  </strong>
                  <ul className="list-disc list-inside text-left">
                    {achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  <strong className="font-semibold text-gray-700 dark:text-gray-200">
                    Tech Highlight:
                  </strong>{" "}
                  {techHighlight}
                </p>
                <a
                href={linkdin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center"
              >
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              </div>
              <button
                onClick={handleCloseModal}
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
