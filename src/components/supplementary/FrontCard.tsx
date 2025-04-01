export interface Front {
    title: string;
    description: string;
    icon: React.ReactNode;
    details: string;
  }

export const FrontCard: React.FC<Front & { index: number }> = ({
  title,
  description,
  icon,
  details,
}) => (
  <div className="relative flex flex-col md:flex-row items-center gap-8 py-8 max-w-4xl mx-auto">
    <div className="flex-shrink-0">
      <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-4">{icon}</div>
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-4">
        {description}
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-base">{details}</p>
    </div>
  </div>
);