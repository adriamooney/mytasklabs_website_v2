import { ArrowRight } from 'lucide-react';

export function SalesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-indigo-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full mb-8 backdrop-blur-sm">
          <span className="text-indigo-300 text-sm font-medium">Free Guide for Junk Removal Owner-Operators</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Booked & Busy
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
          The 4-part system that fills your schedule — without adding a single employee.
        </p>

      </div>
    </section>
  );
}
