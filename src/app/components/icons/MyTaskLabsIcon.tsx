import { Sparkles, Zap, Heart, TrendingUp, Star } from 'lucide-react';

export function MyTaskLabsIcon() {
  return (
    <div className="relative w-40 h-40 group">
      {/* Background circle - vibrant indigo gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-100 rounded-full transition-all duration-500 group-hover:from-indigo-300 group-hover:to-purple-200 group-hover:scale-105"></div>
      
      {/* Central star with glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          <Star className="w-16 h-16 text-indigo-600 relative z-10" strokeWidth={1.5} fill="currentColor" />
        </div>
      </div>
      
      {/* Fast zap icon - top left */}
      <div className="absolute top-3 left-6 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-2 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Zap className="w-5 h-5 text-yellow-500" strokeWidth={2} fill="currentColor" />
        </div>
      </div>
      
      {/* Innovation sparkles - top right */}
      <div className="absolute top-3 right-6 animate-float" style={{ animationDelay: '0.2s' }}>
        <div className="bg-white p-2 rounded-lg shadow-md border border-purple-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Sparkles className="w-5 h-5 text-purple-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Personal heart - bottom left */}
      <div className="absolute bottom-3 left-6 animate-float" style={{ animationDelay: '0.4s' }}>
        <div className="bg-white p-2 rounded-lg shadow-md border border-pink-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Heart className="w-5 h-5 text-pink-500" strokeWidth={2} fill="currentColor" />
        </div>
      </div>
      
      {/* Growth trending - bottom right */}
      <div className="absolute bottom-3 right-6 animate-float" style={{ animationDelay: '0.6s' }}>
        <div className="bg-white p-2 rounded-lg shadow-md border border-green-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <TrendingUp className="w-5 h-5 text-green-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Pulsing energy rings */}
      <svg className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:rotate-45" style={{ pointerEvents: 'none' }}>
        <circle cx="80" cy="80" r="50" fill="none" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      </svg>
      
      {/* Sparkle dots */}
      <div className="absolute top-10 right-12 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
    </div>
  );
}
