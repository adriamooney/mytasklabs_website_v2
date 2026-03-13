import { Rocket, TrendingUp, Zap, BarChart3 } from 'lucide-react';

export function OptimizeIcon() {
  return (
    <div className="relative w-48 h-48 group">
      {/* Background circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full transition-all duration-500 group-hover:from-green-200 group-hover:to-emerald-100 group-hover:scale-105"></div>
      
      {/* Central rocket icon - lifts off on hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2">
        <div className="relative">
          <Rocket className="w-20 h-20 text-green-600" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Exhaust trail effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-8">
        <div className="w-8 h-12 bg-gradient-to-b from-orange-300 to-transparent blur-sm"></div>
      </div>
      
      {/* Trending up icon - top right */}
      <div className="absolute top-6 right-10 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-green-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <TrendingUp className="w-7 h-7 text-green-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Zap icon - left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 animate-float" style={{ animationDelay: '0.3s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-emerald-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-x-1">
          <Zap className="w-7 h-7 text-emerald-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Chart icon - bottom right */}
      <div className="absolute bottom-8 right-10 animate-float" style={{ animationDelay: '0.6s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-green-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:translate-y-1">
          <BarChart3 className="w-7 h-7 text-green-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Upward arrows */}
      <svg className="absolute inset-0 w-full h-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2" style={{ pointerEvents: 'none' }}>
        <path d="M 70 130 L 70 110" stroke="#86efac" strokeWidth="3" strokeLinecap="round" markerEnd="url(#arrowgreen)" />
        <path d="M 122 130 L 122 110" stroke="#86efac" strokeWidth="3" strokeLinecap="round" markerEnd="url(#arrowgreen)" />
        <defs>
          <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#86efac" />
          </marker>
        </defs>
      </svg>
      
      {/* Orbit ring */}
      <svg className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:rotate-180" style={{ pointerEvents: 'none' }}>
        <circle cx="96" cy="96" r="55" fill="none" stroke="#bbf7d0" strokeWidth="2" strokeDasharray="6 6" />
      </svg>
      
      {/* Success sparkles */}
      <div className="absolute top-16 left-16 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-14 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
    </div>
  );
}
