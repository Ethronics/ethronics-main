import React from "react";

interface CallToActionProps {
  title: string;
  description: string;
  buttons: {
    text: string;
    href?: string; 
    onClick?: () => void;
    primary?: boolean;
  }[];
  bgGradient?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttons,
  bgGradient = "from-blue-900/90 via-gray-900/80 to-blue-900/90",
}) => (
  <section className={`py-16 bg-gradient-to-br ${bgGradient} text-white`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            onClick={button.onClick}
            className={`px-8 py-4 rounded-lg font-semibold transition-colors ${
              button.primary
                ? "bg-white text-purple-600 hover:bg-purple-50"
                : "bg-purple-700 text-white hover:bg-purple-800"
            }`}
          >
            {button.text}
          </a>
        ))}
      </div>
    </div>
  </section>
);