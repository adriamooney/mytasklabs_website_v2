import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

/** Fires Reddit Pixel PageView on SPA route changes (initial PageView is in index.html). */
export function RedditPixelTracker() {
  const { pathname } = useLocation();
  const isFirstNavigation = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.rdt !== 'function') {
      return;
    }
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }
    window.rdt('track', 'PageView');
  }, [pathname]);

  return null;
}
