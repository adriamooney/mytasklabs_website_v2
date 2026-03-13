import { Home, Wrench, Calendar, MapPin } from 'lucide-react';

export function HomeServiceIcon() {
  return (
    <div className="relative w-48 h-48 group">
      {/* Background circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-full transition-all duration-500 group-hover:from-indigo-200 group-hover:to-indigo-100 group-hover:scale-105"></div>
      
      {/* Central house icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110">
        <div className="relative">
          <Home className="w-20 h-20 text-indigo-600" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Orbiting service icons */}
      <div className="absolute top-8 right-12 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <Wrench className="w-7 h-7 text-indigo-500" strokeWidth={2} />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-8 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <Calendar className="w-7 h-7 text-indigo-500" strokeWidth={2} />
        </div>
      </div>
      
      <div className="absolute bottom-8 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white p-2.5 rounded-lg shadow-md border border-indigo-200 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-1">
          <MapPin className="w-7 h-7 text-indigo-500" strokeWidth={2} />
        </div>
      </div>
      
      {/* Connecting dots for visual interest */}
      <div className="absolute top-14 right-20 w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 left-16 w-2 h-2 bg-indigo-300 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-14 right-18 w-2 h-2 bg-indigo-300 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
    </div>
  );
}