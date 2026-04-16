import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import '../src/styles/index.css';

const GoogleAnalyticsTracker = dynamic(
  () => import('../src/app/components/GoogleAnalyticsTracker').then((m) => m.GoogleAnalyticsTracker),
  { ssr: false },
);

const MetaPixelTracker = dynamic(
  () => import('../src/app/components/MetaPixelTracker').then((m) => m.MetaPixelTracker),
  { ssr: false },
);

const RedditPixelTracker = dynamic(
  () => import('../src/app/components/RedditPixelTracker').then((m) => m.RedditPixelTracker),
  { ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RXJ1Y2SN4G" strategy="afterInteractive" />
      <Script id="gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RXJ1Y2SN4G');
        `}
      </Script>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1268781009838406');
          fbq('track', 'PageView');
        `}
      </Script>
      <Script id="reddit-pixel" strategy="afterInteractive">
        {`
          !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js";t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
          window.rdt('init','a2_irs1ef7pshi3');
          window.rdt('track','PageVisit');
        `}
      </Script>

      <GoogleAnalyticsTracker />
      <MetaPixelTracker />
      <RedditPixelTracker />
      <Component {...pageProps} />
    </>
  );
}
