import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

/** Keep in sync with the measurement ID in index.html (gtag.js snippet). */
const GA_MEASUREMENT_ID = 'G-RXJ1Y2SN4G';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends GA4 page views on SPA route changes (initial load is handled by gtag in index.html). */
export function GoogleAnalyticsTracker() {
  const router = useRouter();
  const pathname = (router.asPath ?? '/').split('?')[0] ?? '/';
  const isFirstNavigation = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return;
    }
    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
