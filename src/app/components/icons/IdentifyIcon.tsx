import { Target, Search, AlertCircle, TrendingDown } from 'lucide-react';

export function IdentifyIcon() {
  return (
    <div className="relative w-48 h-48 group">
      {/* Background circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-50 rounded-full transition-all duration-500 group-hover:from-red-200 group-hover:to-orange-100 group-hover:scale-105"></div>
      
      {/* Central target icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110">
        <div className="relative">
          <Target className="w-20 h-20 text-red-600" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Search icon - top right */}
      <div className="absolute top-8 right-10 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-red-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <Search className="w-7 h-7 text-red-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Alert icon - bottom left */}
      <div className="absolute bottom-8 left-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-orange-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <AlertCircle className="w-7 h-7 text-orange-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Trending down icon - bottom right */}
      <div className="absolute bottom-10 right-8 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-red-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <TrendingDown className="w-7 h-7 text-red-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Decorative rings */}
      <svg className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110" style={{ pointerEvents: 'none' }}>
        <circle cx="96" cy="96" r="65" fill="none" stroke="#fecaca" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
      </svg>
      
      {/* Connecting dots */}
      <div className="absolute top-14 right-18 w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 left-18 w-2 h-2 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-16 right-16 w-2 h-2 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
    </div>
  );
}
