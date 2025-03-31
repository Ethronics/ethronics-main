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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112567398!2d39.26832631531631!3d8.541297993872054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzInMjguNyJOIDM5wrAxNicyMC4wIkU!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
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