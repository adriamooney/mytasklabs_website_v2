import { Cog, Database, GitBranch, Zap, PackageCheck } from 'lucide-react';

export function OperationsIcon() {
  return (
    <div className="relative w-48 h-48 group">
      {/* Background gradient circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-indigo-50 to-blue-50 rounded-full transition-all duration-500 group-hover:from-indigo-200 group-hover:via-indigo-100 group-hover:to-blue-100 group-hover:scale-105"></div>
      
      {/* Central large gear - rotates on hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:rotate-90">
        <Cog className="w-24 h-24 text-indigo-600" strokeWidth={1.5} />
      </div>
      
      {/* Smaller gear overlapping - rotates opposite direction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-8 -translate-y-8 transition-transform duration-1000 group-hover:-rotate-90">
        <Cog className="w-14 h-14 text-indigo-500" strokeWidth={1.5} />
      </div>
      
      {/* Operations icons around the perimeter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-2 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <Database className="w-6 h-6 text-indigo-500" strokeWidth={2} />
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-4 animate-float" style={{ animationDelay: '0.25s' }}>
        <div className="bg-white p-2 rounded-lg shadow-md border border-blue-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-x-1">
          <GitBranch className="w-6 h-6 text-blue-500" strokeWidth={2} />
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-4 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="bg-white p-2 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:translate-x-1">
          <Zap className="w-6 h-6 text-indigo-500" strokeWidth={2} />
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.75s' }}>
        <div className="bg-white p-2 rounded-lg shadow-md border border-blue-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:translate-y-1">
          <PackageCheck className="w-6 h-6 text-blue-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:rotate-180" style={{ pointerEvents: 'none' }}>
        <circle cx="96" cy="96" r="70" fill="none" stroke="#dbeafe" strokeWidth="2" strokeDasharray="3 6" />
        <circle cx="96" cy="96" r="50" fill="none" stroke="#e0e7ff" strokeWidth="1.5" strokeDasharray="2 4" />
      </svg>
      
      {/* Accent dots */}
      <div className="absolute top-16 right-16 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 left-16 w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      <div className="absolute top-20 left-14 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
    </div>
  );
}