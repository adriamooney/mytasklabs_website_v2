import { Check } from 'lucide-react';

interface IndustryCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  features: string[];
}

export function IndustryCard({ icon: Icon, title, description, features }: IndustryCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="mb-6 flex justify-center transition-transform duration-500 group-hover:scale-105">
        <Icon />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-indigo-600">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1">
            <Check className="h-5 w-5 text-indigo-600 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}