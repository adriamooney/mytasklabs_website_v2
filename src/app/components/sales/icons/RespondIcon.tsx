import { Zap, MessageSquare, Clock, Sparkles } from 'lucide-react';

export function RespondIcon() {
  return (
    <div className="relative w-32 h-32 group">
      {/* Background gradient circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full transition-all duration-500 group-hover:from-yellow-200 group-hover:to-amber-200 group-hover:scale-105"></div>

      {/* Lightning bolt - center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          <Zap className="w-14 h-14 text-yellow-600 relative z-10" strokeWidth={2} fill="currentColor" />
        </div>
      </div>

      {/* Message - top right */}
      <div className="absolute top-2 right-2 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-yellow-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <MessageSquare className="w-4 h-4 text-yellow-600" strokeWidth={2} />
        </div>
      </div>

      {/* Clock - bottom left */}
      <div className="absolute bottom-2 left-2 animate-float" style={{ animationDelay: '0.2s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-amber-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Clock className="w-4 h-4 text-amber-600" strokeWidth={2} />
        </div>
      </div>

      {/* Sparkles - bottom right */}
      <div className="absolute bottom-2 right-2 animate-float" style={{ animationDelay: '0.4s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-yellow-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Sparkles className="w-4 h-4 text-yellow-500" strokeWidth={2} />
        </div>
      </div>

      {/* Pulse ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-yellow-300 animate-ping opacity-20"></div>
    </div>
  );
}
