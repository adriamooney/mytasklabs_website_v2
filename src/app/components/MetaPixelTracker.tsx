import { useEffect } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, unknown>) => void;
  }
}

/** Fires Meta Pixel PageView on every route change (SPA navigation) */
export function MetaPixelTracker() {
  const router = useRouter();
  const pathname = (router.asPath ?? '/').split('?')[0] ?? '/';

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}
