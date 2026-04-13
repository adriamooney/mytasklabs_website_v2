import { Link } from 'react-router';
import { trackLead } from '../../analytics/ctaEvents';
import './LocalLiftHeader.css';

export type LocalLiftHeaderVariant = 'landing' | 'subpage';

type LocalLiftHeaderProps = {
  variant?: LocalLiftHeaderVariant;
};

/**
 * Top marketing bar for LocalLift routes only.
 * Uses explicit .ll-header* classes — never bare `nav` without .ll-header, so footer .ll-footer-nav is never matched.
 */
export function LocalLiftHeader({ variant = 'landing' }: LocalLiftHeaderProps) {
  if (variant === 'subpage') {
    return (
      <header className="ll-header ll-header--subpage">
        <Link to="/local-lift" className="ll-header__logo">
          Local<span>Lift</span>
        </Link>
        <Link to="/local-lift" className="ll-header__back">
          ← Back to LocalLift
        </Link>
      </header>
    );
  }

  return (
    <header className="ll-header ll-header--landing">
      <Link to="/local-lift" className="ll-header__logo">
        Local<span>Lift</span>
      </Link>
      <nav className="ll-header__links" aria-label="LocalLift page sections">
        <a href="#how">How it works</a>
        <a href="#services">What&apos;s included</a>
        <a href="#pricing">Pricing</a>
        <Link to="/local-lift/onboarding">Client guide</Link>
        <Link
          to="/local-lift/free-design"
          className="ll-header__cta"
          onClick={() => trackLead()}
        >
          Get free design
        </Link>
      </nav>
    </header>
  );
}
