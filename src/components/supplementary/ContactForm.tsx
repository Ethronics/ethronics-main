import React, { useState } from "react";
import { Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  category: string;
}

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

interface CategoryInfo {
  value: string;
  label: string;
  info: string;
  action?: { text: string; href: string };
}

const contactCategories: CategoryInfo[] = [
  { value: "general", label: "General Inquiry", info: "Have a question or suggestion? We’re here to assist with any inquiries you might have." },
  { value: "waiting-list", label: "Join Waiting List", info: "Sign up to be notified about upcoming programs and opportunities at Ethronics." },
  { value: "careers", label: "Careers", info: "Interested in joining our team? Submit your resume and let’s explore opportunities together.", action: { text: "Upload Resume", href: "/careers/upload" } },
  { value: "research", label: "Research Collaboration", info: "Propose a research project or join our ongoing initiatives. Let’s innovate together!" },
  { value: "internships", label: "Internships", info: "Apply for an internship to gain hands-on experience with cutting-edge technology." },
  { value: "partnerships", label: "Partnerships", info: "Explore collaboration opportunities with Ethronics for mutual growth and impact." },
  { value: "support", label: "Technical/Support", info: "Need help with our systems or services? Our support team is ready to assist." },
];

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    category: "general",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.1.5:8000/api/contact/submit/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        onSubmitSuccess();
        setFormData({ name: "", email: "", message: "", category: "general" });
      } else {
        console.error('Submission failed:', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category: string) => {
    setFormData((prev) => ({ ...prev, category }));
  };

  const selectedCategoryInfo = contactCategories.find((cat) => cat.value === formData.category);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactCategories.map((cat) => (
            <label
              key={cat.value}
              className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                formData.category === cat.value
                  ? "border-purple-600 bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
                  : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <input
                type="radio"
                name="category"
                value={cat.value}
                checked={formData.category === cat.value}
                onChange={() => handleCategoryChange(cat.value)}
                className="hidden"
              />
              <span className="text-sm font-medium">{cat.label}</span>
            </label>
          ))}
        </div>
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {selectedCategoryInfo?.label}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {selectedCategoryInfo?.info}
          </p>
          {selectedCategoryInfo?.action && (
            <a
              href={selectedCategoryInfo.action.href}
              className="mt-3 inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              {selectedCategoryInfo.action.text}
            </a>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 dark:text-white"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 transition-colors"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Message
        </button>
      </form>
    </div>
  );
};