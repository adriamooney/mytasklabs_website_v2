import { Briefcase, FileText, Users, TrendingUp } from 'lucide-react';

export function ProfessionalServiceIcon() {
  return (
    <div className="relative w-48 h-48 group">
      {/* Background gradient circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-full transition-all duration-500 group-hover:from-indigo-200 group-hover:to-purple-100 group-hover:scale-105"></div>
      
      {/* Central briefcase icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110">
        <div className="relative">
          <Briefcase className="w-20 h-20 text-indigo-600" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Surrounding professional service icons */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-purple-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <FileText className="w-7 h-7 text-purple-500" strokeWidth={2} />
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-6 animate-float" style={{ animationDelay: '0.3s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-x-1">
          <Users className="w-7 h-7 text-indigo-500" strokeWidth={2} />
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-6 animate-float" style={{ animationDelay: '0.6s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-purple-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:translate-x-1">
          <TrendingUp className="w-7 h-7 text-purple-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Decorative connecting lines */}
      <svg className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:rotate-12" style={{ pointerEvents: 'none' }}>
        <circle cx="96" cy="96" r="60" fill="none" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
      
      {/* Accent dots */}
      <div className="absolute top-12 left-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-12 right-20 w-2 h-2 bg-indigo-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
}