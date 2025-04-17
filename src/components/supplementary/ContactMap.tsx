import React from "react";
import { MapPin } from "lucide-react";

export const ContactMap: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <MapPin className="w-5 h-5 text-purple-600 mr-2" />
        Our Location
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Mebrat, AMG Mall, 9th Floor
        <br />
        Adama, Ethiopia
      </p>
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5104963168656!2d39.267508675060384!3d8.546809291496546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fbf6d421b13%3A0x104c602ab0c730b1!2sEthronics%20-%20Institute%20of%20Robotics%20and%20Autonomous%20Systems%20(IRAS)!5e0!3m2!1sen!2set!4v1744915902755!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

