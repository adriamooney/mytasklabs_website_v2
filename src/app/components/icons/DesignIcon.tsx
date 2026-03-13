import { Lightbulb, Pencil, Sparkles, Layers } from 'lucide-react';

export function DesignIcon() {
  return (
    <div className="relative w-48 h-48 group">
      {/* Background circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-amber-50 rounded-full transition-all duration-500 group-hover:from-yellow-200 group-hover:to-amber-100 group-hover:scale-105"></div>
      
      {/* Central lightbulb icon with glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110">
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          <Lightbulb className="w-20 h-20 text-yellow-600 relative z-10" strokeWidth={1.5} fill="currentColor" fillOpacity={0.1} />
        </div>
      </div>
      
      {/* Pencil icon - top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-yellow-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <Pencil className="w-7 h-7 text-yellow-600" strokeWidth={2} />
        </div>
      </div>
      
      {/* Sparkles icon - right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 animate-float" style={{ animationDelay: '0.3s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-amber-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:translate-x-1">
          <Sparkles className="w-7 h-7 text-amber-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Layers icon - left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 animate-float" style={{ animationDelay: '0.6s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-yellow-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-x-1">
          <Layers className="w-7 h-7 text-yellow-600" strokeWidth={2} />
        </div>
      </div>
      
      {/* Radiating lines */}
      <svg className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:rotate-45" style={{ pointerEvents: 'none' }}>
        <line x1="96" y1="20" x2="96" y2="35" stroke="#fde68a" strokeWidth="2" />
        <line x1="96" y1="157" x2="96" y2="172" stroke="#fde68a" strokeWidth="2" />
        <line x1="20" y1="96" x2="35" y2="96" stroke="#fde68a" strokeWidth="2" />
        <line x1="157" y1="96" x2="172" y2="96" stroke="#fde68a" strokeWidth="2" />
      </svg>
      
      {/* Sparkle dots */}
      <div className="absolute top-12 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-12 left-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      <div className="absolute top-20 left-16 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
    </div>
  );
}
