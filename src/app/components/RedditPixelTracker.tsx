import { useEffect } from 'react';
import { useLocation } from 'react-router';

/** Fires Reddit Pixel PageVisit on every route change (SPA navigation). Initial load is handled in index.html. */
export function RedditPixelTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.rdt === 'function') {
      window.rdt('track', 'PageVisit');
    }
  }, [pathname]);

  return null;
}
