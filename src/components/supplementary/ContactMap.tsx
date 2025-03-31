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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5112828403917!2d39.267459675060365!3d8.546733291496638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1f90161a7a33%3A0x2a134c12a3453db3!2sAMG%20Adama%20Mall!5e0!3m2!1sen!2set!4v1743450010816!5m2!1sen!2set"
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

