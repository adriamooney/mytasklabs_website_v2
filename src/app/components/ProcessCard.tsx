import { Link } from 'react-router';

interface ProcessCardProps {
  icon: React.ComponentType;
  number: number;
  title: string;
  description: string;
  href?: string;
}

export function ProcessCard({ icon: Icon, number, title, description, href }: ProcessCardProps) {
  const content = (
    <>
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
        {number}
      </div>
      <div className="mb-6 flex justify-center transition-transform duration-500 group-hover:scale-105">
        <Icon />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-indigo-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </>
  );

  const className = "group bg-white border border-gray-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block";

  if (href) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}
