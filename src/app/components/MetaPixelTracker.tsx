import { useEffect } from 'react';
import { useLocation } from 'react-router';

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, unknown>) => void;
  }
}

/** Fires Meta Pixel PageView on every route change (SPA navigation) */
export function MetaPixelTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}
