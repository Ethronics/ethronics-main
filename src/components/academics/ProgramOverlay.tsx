import React from "react";
import { X, Star, Clock } from "lucide-react";
import { Program } from "../../data/program";

interface ProgramOverlayProps {
  program: Program;
  onClose: () => void;
}

export const ProgramOverlay: React.FC<ProgramOverlayProps> = ({ program, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-lg w-full p-6 relative animate-fade-in"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{program.name}</h3>
      <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 mb-4">
        <Clock className="w-4 h-4 mr-2" />
        {program.duration}
      </div>
      <p className="text-md text-gray-600 dark:text-gray-300 mb-6">{program.details.overview}</p>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What You’ll Gain</h4>
      <ul className="space-y-2 mb-6">
        {program.details.outcomes.map((outcome, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Star className="w-4 h-4 mr-2 text-purple-500" />
            {outcome}
          </li>
        ))}
      </ul>
      <p className="text-md text-gray-700 dark:text-gray-200 font-semibold mb-6">{program.details.ctaText}</p>
      <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
        Join Waitlist
      </button>
    </div>
  </div>
);