import { Link } from 'react-router';
import './LocalLiftFooter.css';

type LocalLiftFooterProps = {
  /** On `/local-lift`, use `#how` etc. On `/local-lift/free-design`, use `/local-lift#how`. */
  samePageHash?: boolean;
};

export function LocalLiftFooter({ samePageHash = false }: LocalLiftFooterProps) {
  const base = samePageHash ? '' : '/local-lift';
  const section = (id: string) => `${base}#${id}`;

  return (
    <footer className="ll-footer">
      <div className="ll-footer-inner">
        <div className="ll-footer-grid">
          <div className="ll-footer-col ll-footer-ll">
            <div className="ll-footer-ll-brand">
              Local<span>Lift</span>
            </div>
            <div className="ll-footer-ll-sub">
              <Link to="/">A My Task Labs product</Link>
            </div>
            <nav className="ll-footer-nav" aria-label="LocalLift page sections">
              <a href={section('how')}>How it works</a>
              <a href={section('services')}>Services</a>
              <a href={section('pricing')}>Pricing</a>
              <a href="mailto:contact@mytasklabs.us">Contact</a>
            </nav>
          </div>

          <div className="ll-footer-col ll-footer-mtl">
            <Link to="/" className="ll-footer-mtl-logo">
              <span className="ll-footer-mtl-mark" aria-hidden />
              <span className="ll-footer-mtl-name">My Task Labs</span>
            </Link>
            <p className="ll-footer-mtl-tagline">Intelligent automation solutions for modern businesses.</p>
            <p className="ll-footer-mtl-contact">
              Based in Portland, OR
              <br />
              <a href="mailto:contact@mytasklabs.us">contact@mytasklabs.us</a>
              <br />
              <a href="tel:+15034510341">503.451.0341</a>
            </p>
          </div>

          <div className="ll-footer-col ll-footer-co">
            <h4 className="ll-footer-col-title">Company</h4>
            <ul className="ll-footer-co-list">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="ll-footer-bottom">
          © 2026 My Task Labs. All rights reserved. Business registered at 8 The Green, Suite B, Dover, DE 19901
        </div>
      </div>
    </footer>
  );
}
