import React, {useEffect, useState } from "react";
import { ContactForm } from "../components/supplementary/ContactForm";
import { ContactHero } from "../components/supplementary/ContactHero";
import { ContactInfo } from "../components/supplementary/ContactInfo";
import { ContactMap } from "../components/supplementary/ContactMap";

export const Contact: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const handleFormSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // Hide after 3s
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
          <div className="lg:col-span-2">
            <ContactForm onSubmitSuccess={handleFormSubmit} />
          </div>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;