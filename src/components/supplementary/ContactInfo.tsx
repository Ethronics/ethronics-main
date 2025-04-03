import React from "react";
import { Mail, Phone,} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";


export const ContactInfo: React.FC = () => {
  const socialIcons = [
    //{ Icon: Facebook, href: "#" },
    //{ Icon: Twitter, href: "#" },
    { Icon: FaLinkedinIn, href: "https://et.linkedin.com/company/ethronics" },
    //{ Icon: Instagram, href: "#" },
  ];

  return (
    <>
      {/* Contact Details */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Details</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-purple-600 mt-1" />
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-200">Email</p>
              <a href="mailto:contact@ethronics.org" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
                contact@ethronics.org
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-purple-600 mt-1" />
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-200">Phone</p>
              <a href="tel:+251978467467" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
                +(251) 978-467-467
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialIcons.map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};