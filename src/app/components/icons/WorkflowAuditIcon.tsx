import { Search, FileText, Target, LineChart } from 'lucide-react';

export function WorkflowAuditIcon() {
  return (
    <div className="relative w-48 h-48 group">
      {/* Background circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-full transition-all duration-500 group-hover:from-indigo-200 group-hover:to-indigo-100 group-hover:scale-105"></div>

      {/* Central search icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110">
        <Search className="w-20 h-20 text-indigo-600" strokeWidth={1.5} />
      </div>

      {/* FileText icon - top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <FileText className="w-7 h-7 text-indigo-600" strokeWidth={2} />
        </div>
      </div>

      {/* Target icon - right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 animate-float" style={{ animationDelay: '0.3s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:translate-x-1">
          <Target className="w-7 h-7 text-indigo-500" strokeWidth={2} />
        </div>
      </div>

      {/* LineChart icon - left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 animate-float" style={{ animationDelay: '0.6s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-x-1">
          <LineChart className="w-7 h-7 text-indigo-600" strokeWidth={2} />
        </div>
      </div>

      {/* Decorative dashed ring */}
      <svg className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110" style={{ pointerEvents: 'none' }}>
        <circle cx="96" cy="96" r="65" fill="none" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      </svg>

      {/* Pulsing dots */}
      <div className="absolute top-14 right-16 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-14 left-16 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      <div className="absolute bottom-12 right-14 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
    </div>
  );
}
