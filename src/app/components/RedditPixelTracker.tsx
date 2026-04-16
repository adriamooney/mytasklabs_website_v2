import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

/** Fires Reddit Pixel PageVisit on SPA route changes (initial PageVisit is in index.html). */
export function RedditPixelTracker() {
  const router = useRouter();
  const pathname = (router.asPath ?? '/').split('?')[0] ?? '/';
  const isFirstNavigation = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.rdt !== 'function') {
      return;
    }
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }
    window.rdt('track', 'PageVisit');
  }, [pathname]);

  return null;
}
