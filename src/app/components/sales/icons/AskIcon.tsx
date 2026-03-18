import { Star, MessageCircle, Award, Heart } from 'lucide-react';

export function AskIcon() {
  return (
    <div className="relative w-32 h-32 group">
      {/* Background gradient circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full transition-all duration-500 group-hover:from-purple-200 group-hover:to-pink-200 group-hover:scale-105"></div>

      {/* Star - center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          <Star className="w-14 h-14 text-purple-600 relative z-10" strokeWidth={2} fill="currentColor" />
        </div>
      </div>

      {/* Message - top left */}
      <div className="absolute top-2 left-2 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-purple-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <MessageCircle className="w-4 h-4 text-purple-600" strokeWidth={2} />
        </div>
      </div>

      {/* Award - top right */}
      <div className="absolute top-2 right-2 animate-float" style={{ animationDelay: '0.2s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-pink-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Award className="w-4 h-4 text-pink-600" strokeWidth={2} />
        </div>
      </div>

      {/* Heart - bottom */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.4s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-purple-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Heart className="w-4 h-4 text-purple-600" strokeWidth={2} fill="currentColor" />
        </div>
      </div>

      {/* Multiple stars floating */}
      <div className="absolute top-8 right-6">
        <Star className="w-2 h-2 text-purple-400 animate-pulse" fill="currentColor" />
      </div>
      <div className="absolute bottom-8 left-6" style={{ animationDelay: '0.3s' }}>
        <Star className="w-2 h-2 text-pink-400 animate-pulse" fill="currentColor" />
      </div>
    </div>
  );
}
