import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import { buildCanonicalUrl, getSeoForPathname, type SeoMeta } from '../seo/seoConfig';

/** Set content on the first matching meta and remove duplicates (extensions or past runs can add extras). */
function setOrCreateMeta(attr: 'name' | 'property', key: string, content: string): void {
  const selector = attr === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  const nodes = document.head.querySelectorAll(selector);
  if (nodes.length === 0) {
    const el = document.createElement('meta');
    el.setAttribute(attr, key);
    el.setAttribute('content', content);
    document.head.appendChild(el);
    return;
  }
  nodes.forEach((node, i) => {
    if (i === 0) (node as HTMLMetaElement).setAttribute('content', content);
    else node.remove();
  });
}

function removeMetaByName(name: string): void {
  document.head.querySelectorAll(`meta[name="${name}"]`).forEach((el) => el.remove());
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
  setOrCreateMeta('property', 'og:site_name', seo.ogSiteName ?? 'My Task Labs');

  setOrCreateMeta('name', 'twitter:card', 'summary_large_image');
  setOrCreateMeta('name', 'twitter:title', seo.title);
  setOrCreateMeta('name', 'twitter:description', seo.description);

  setOrCreateMeta('name', 'theme-color', seo.themeColor ?? '#4f46e5');

  if (seo.keywords) {
    setOrCreateMeta('name', 'keywords', seo.keywords);
  } else {
    removeMetaByName('keywords');
  }

  if (seo.ogImage) {
    setOrCreateMeta('property', 'og:image', seo.ogImage);
    setOrCreateMeta('name', 'twitter:image', seo.ogImage);
  }

  setCanonical(canonical);
}

/**
 * Single instance at pathless router root — runs for every URL.
 * Meta updates appear in DevTools → Elements (live DOM), not in View Page Source.
 */
export function SeoHead() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    applySeo(getSeoForPathname(pathname), pathname);
  }, [pathname]);

  return null;
}
