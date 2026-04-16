import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { trackLead } from '../../analytics/ctaEvents';
import './LocalLiftHeader.css';

export type LocalLiftHeaderVariant = 'landing' | 'subpage';

type LocalLiftHeaderProps = {
  variant?: LocalLiftHeaderVariant;
};

function LocalLiftLandingHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileNavOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileNavOpen]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!mobileNavOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)');
    const onWiden = () => setMobileNavOpen(false);
    mq.addEventListener('change', onWiden);
    return () => mq.removeEventListener('change', onWiden);
  }, []);

  return (
    <header className={`ll-header ll-header--landing ${mobileNavOpen ? 'll-header--nav-open' : ''}`}>
      <div className="ll-header__brand-row">
        <Link href="/local-lift" className="ll-header__logo">
          Local<span>Lift</span>
        </Link>
        <button
          type="button"
          className="ll-header__menu-toggle"
          onClick={() => setMobileNavOpen((open) => !open)}
          aria-expanded={mobileNavOpen}
          aria-controls="ll-header-nav"
          aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileNavOpen ? <X className="ll-header__menu-icon" strokeWidth={2.25} aria-hidden /> : <Menu className="ll-header__menu-icon" strokeWidth={2.25} aria-hidden />}
        </button>
      </div>
      <nav id="ll-header-nav" className="ll-header__links" aria-label="LocalLift page sections">
        <a href="#how" onClick={closeMobileNav}>
          How it works
        </a>
        <a href="#services" onClick={closeMobileNav}>
          What&apos;s included
        </a>
        <a href="#pricing" onClick={closeMobileNav}>
          Pricing
        </a>
        <Link href="/local-lift/demo" onClick={closeMobileNav}>
          Demo
        </Link>
        <Link href="/local-lift/onboarding" onClick={closeMobileNav}>
          Client guide
        </Link>
        <Link
          href="/local-lift/free-design"
          className="ll-header__cta"
          onClick={() => {
            closeMobileNav();
            trackLead();
          }}
        >
          Get free design
        </Link>
      </nav>
    </header>
  );
}

/**
 * Top marketing bar for LocalLift routes only.
 * Uses explicit .ll-header* classes — never bare `nav` without .ll-header, so footer .ll-footer-nav is never matched.
 */
export function LocalLiftHeader({ variant = 'landing' }: LocalLiftHeaderProps) {
  if (variant === 'subpage') {
    return (
      <header className="ll-header ll-header--subpage">
        <Link href="/local-lift" className="ll-header__logo">
          Local<span>Lift</span>
        </Link>
        <Link href="/local-lift" className="ll-header__back">
          ← Back to LocalLift
        </Link>
      </header>
    );
  }

  return <LocalLiftLandingHeader />;
}
