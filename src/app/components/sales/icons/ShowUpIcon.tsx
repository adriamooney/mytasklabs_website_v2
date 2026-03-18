import { CheckCircle, Calendar, Bell, MapPin } from 'lucide-react';

export function ShowUpIcon() {
  return (
    <div className="relative w-32 h-32 group">
      {/* Background gradient circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full transition-all duration-500 group-hover:from-green-200 group-hover:to-emerald-200 group-hover:scale-105"></div>

      {/* Check circle - center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110">
        <div className="relative">
          <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          <CheckCircle className="w-14 h-14 text-green-600 relative z-10" strokeWidth={2} />
        </div>
      </div>

      {/* Calendar - top */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Calendar className="w-4 h-4 text-green-600" strokeWidth={2} />
        </div>
      </div>

      {/* Bell - right */}
      <div className="absolute top-1/2 right-2 -translate-y-1/2 animate-float" style={{ animationDelay: '0.2s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-emerald-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <Bell className="w-4 h-4 text-emerald-600" strokeWidth={2} />
        </div>
      </div>

      {/* MapPin - bottom left */}
      <div className="absolute bottom-2 left-2 animate-float" style={{ animationDelay: '0.4s' }}>
        <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
          <MapPin className="w-4 h-4 text-green-600" strokeWidth={2} />
        </div>
      </div>

      {/* Success checkmarks floating */}
      <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
}
