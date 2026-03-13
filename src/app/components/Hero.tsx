import { Link } from 'react-router';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-24 overflow-hidden">
      {/* Animated path decoration */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-2xl h-auto opacity-25 pointer-events-none"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(255,255,255)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 100 Q 80 40 160 100 T 320 100 T 400 100"
          stroke="url(#hero-path-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="400"
          strokeDashoffset="400"
          style={{
            animation: 'draw-path 3s ease-in-out forwards',
          }}
        />
        <path
          d="M 0 120 Q 100 60 200 120 T 400 120"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="420"
          strokeDashoffset="420"
          style={{
            animation: 'draw-path 3.5s ease-in-out 0.3s forwards',
          }}
        />
        <path
          d="M 0 80 Q 60 20 140 80 T 280 80 T 400 80"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="380"
          strokeDashoffset="380"
          style={{
            animation: 'draw-path 4s ease-in-out 0.5s forwards',
          }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Automate Your Business Operations with AI
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            We help businesses streamline workflows, convert more leads, and scale efficiently
            through intelligent automation solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="https://zcal.co/adriamooney/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/process">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
