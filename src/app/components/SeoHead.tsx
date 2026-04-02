import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { buildCanonicalUrl, getSeoForPathname, type SeoMeta } from '../seo/seoConfig';

function setOrCreateMeta(attr: 'name' | 'property', key: string, content: string): void {
  const selector = attr === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string): void {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function applySeo(seo: SeoMeta, pathname: string): void {
  const canonical = buildCanonicalUrl(pathname);

  document.title = seo.title;

  setOrCreateMeta('name', 'description', seo.description);
  setOrCreateMeta('name', 'robots', seo.robots ?? 'index, follow');

  setOrCreateMeta('property', 'og:type', 'website');
  setOrCreateMeta('property', 'og:title', seo.title);
  setOrCreateMeta('property', 'og:description', seo.description);
  setOrCreateMeta('property', 'og:url', canonical);

  setOrCreateMeta('name', 'twitter:card', 'summary_large_image');
  setOrCreateMeta('name', 'twitter:title', seo.title);
  setOrCreateMeta('name', 'twitter:description', seo.description);

  if (seo.ogImage) {
    setOrCreateMeta('property', 'og:image', seo.ogImage);
    setOrCreateMeta('name', 'twitter:image', seo.ogImage);
  }

  setCanonical(canonical);
}

/** Updates document title and meta tags when the route changes. */
export function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    applySeo(getSeoForPathname(pathname), pathname);
  }, [pathname]);

  return null;
}
