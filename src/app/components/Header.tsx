import { Link, useLocation } from 'react-router';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { cn } from './ui/utils';

const ZCAL_GET_STARTED = 'https://zcal.co/adriamooney/15min';

const HOME_NAV_ITEMS = [
  { label: 'Services', hash: 'services' },
  { label: 'Process', hash: 'process' },
  { label: 'Industries', hash: 'industries' },
  { label: 'Team', hash: 'team' },
] as const;

const navLinkClass = 'text-gray-600 hover:text-gray-900';

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
          {HOME_NAV_ITEMS.map(({ label, hash }) =>
            isHome ? (
              <a key={hash} href={`#${hash}`} className={navLinkClass}>{label}</a>
            ) : (
              <Link key={hash} to={`/#${hash}`} className={navLinkClass}>{label}</Link>
            )
          )}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                navLinkClass,
                'inline-flex items-center gap-0.5 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/30 focus-visible:ring-offset-2 rounded-sm',
              )}
            >
              Products
              <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[10rem]">
              <DropdownMenuItem asChild>
                <Link to="/local-lift">LocalLift</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/contact" className={navLinkClass}>Contact</Link>
          <Button size="sm" asChild>
            <a href={ZCAL_GET_STARTED} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
