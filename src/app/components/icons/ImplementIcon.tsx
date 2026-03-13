import { Cog, Code, Puzzle, Link2 } from 'lucide-react';

export function ImplementIcon() {
  return (
    <div className="relative w-48 h-48 group">
      {/* Background circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-full transition-all duration-500 group-hover:from-blue-200 group-hover:to-cyan-100 group-hover:scale-105"></div>
      
      {/* Central gear - rotates on hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:rotate-180">
        <Cog className="w-20 h-20 text-blue-600" strokeWidth={1.5} />
      </div>
      
      {/* Code icon - top left */}
      <div className="absolute top-8 left-8 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-blue-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <Code className="w-7 h-7 text-blue-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Puzzle icon - top right */}
      <div className="absolute top-8 right-8 animate-float" style={{ animationDelay: '0.3s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-cyan-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <Puzzle className="w-7 h-7 text-cyan-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Link icon - bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.6s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-blue-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:translate-y-1">
          <Link2 className="w-7 h-7 text-blue-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Connection lines between icons */}
      <svg className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-30 group-hover:opacity-60" style={{ pointerEvents: 'none' }}>
        <line x1="48" y1="48" x2="96" y2="96" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="144" y1="48" x2="96" y2="96" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="96" y1="96" x2="96" y2="150" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
      
      {/* Circular progress ring */}
      <svg className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:-rotate-90" style={{ pointerEvents: 'none' }}>
        <circle cx="96" cy="96" r="60" fill="none" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="12 8" />
      </svg>
      
      {/* Tech dots */}
      <div className="absolute top-1/2 right-12 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-12 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
}
