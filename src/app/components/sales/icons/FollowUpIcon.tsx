import { RefreshCw, Mail, Target, TrendingUp } from 'lucide-react';

export function FollowUpIcon() {
  return (
    <div className="relative w-32 h-32 group">
      {/* Background gradient circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full transition-all duration-500 group-hover:from-blue-200 group-hover:to-cyan-200 group-hover:scale-105"></div>

      {/* Refresh icon - center - rotating */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110">
        <div className="relative animate-spin-slow">
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          <RefreshCw className="w-14 h-14 text-blue-600 relative z-10" strokeWidth={2} />
        </div>
      </div>

      {/* Mail - top left */}
      <div className="absolute top-2 left-2 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-blue-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Mail className="w-4 h-4 text-blue-600" strokeWidth={2} />
        </div>
      </div>

      {/* Target - top right */}
      <div className="absolute top-2 right-2 animate-float" style={{ animationDelay: '0.2s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-cyan-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Target className="w-4 h-4 text-cyan-600" strokeWidth={2} />
        </div>
      </div>

      {/* Trending - bottom */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.4s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-blue-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <TrendingUp className="w-4 h-4 text-blue-600" strokeWidth={2} />
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
    </div>
  );
}
