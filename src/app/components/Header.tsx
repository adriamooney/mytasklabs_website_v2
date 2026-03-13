import { Link, useLocation } from 'react-router';
import { Button } from './ui/button';

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
          <span className="text-xl font-semibold text-gray-900">My Task Labs</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {isHome && (
            <>
              <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#process" className="text-gray-600 hover:text-gray-900">Process</a>
              <a href="#industries" className="text-gray-600 hover:text-gray-900">Industries</a>
              <a href="#team" className="text-gray-600 hover:text-gray-900">Team</a>
            </>
          )}
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link to="/process"><Button size="sm">Get Started</Button></Link>
        </nav>
      </div>
    </header>
  );
}
