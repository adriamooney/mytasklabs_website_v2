import { FileText, Clock, DollarSign, Users } from 'lucide-react';

export function TraditionalIcon() {
  return (
    <div className="relative w-40 h-40 group">
      {/* Background circle - muted gray */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full transition-all duration-500 group-hover:from-gray-300 group-hover:to-gray-200"></div>
      
      {/* Central document stack icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <FileText className="w-16 h-16 text-gray-500" strokeWidth={1.5} />
          {/* Stacked papers effect */}
          <FileText className="w-16 h-16 text-gray-400 absolute -top-1 -left-1 opacity-50" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Slow clock icon - top */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-300">
          <Clock className="w-5 h-5 text-gray-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Expensive dollar sign - bottom left */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-300">
          <DollarSign className="w-5 h-5 text-gray-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Generic users - bottom right */}
      <div className="absolute bottom-4 right-4">
        <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-300">
          <Users className="w-5 h-5 text-gray-500" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
