import Link from 'next/link';
import SchemaScript from '../../components/SchemaScript';
import { LocalLiftFooter } from '../../components/local-lift/LocalLiftFooter';
import { LocalLiftHeader } from '../../components/local-lift/LocalLiftHeader';
import { trackLead } from '../../analytics/ctaEvents';
import './local-lift.css';

const LOCAL_LIFT_ZCAL = 'https://zcal.co/adriamooney/15min-local-lift';

const localLiftSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'LocalLift',
    url: 'https://www.mytasklabs.us/local-lift',
    description:
      'LocalLift helps local service businesses get found on Google and AI assistants, automatically respond to leads, and book appointments 24/7.',
    brand: {
      '@type': 'Brand',
      name: 'My Task Labs',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter — Lead Response',
        price: '297.00',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '297.00',
          priceCurrency: 'USD',
          unitCode: 'MON',
        },
      },
      {
        '@type': 'Offer',
        name: 'Growth — Full Solo Op Stack',
        price: '497.00',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '497.00',
          priceCurrency: 'USD',
          unitCode: 'MON',
        },
      },
      {
        '@type': 'Offer',
        name: 'Pro — Full Stack',
        price: '797.00',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '797.00',
          priceCurrency: 'USD',
          unitCode: 'MON',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is LocalLift?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LocalLift is a done-for-you service by My Task Labs that builds your website, gets your business found on Google, ChatGPT, Gemini, Siri, and Alexa, and automatically responds to inbound leads via SMS — quoting and booking appointments 24/7.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does LocalLift cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LocalLift plans start at $297/month for Lead Response (automated SMS lead response, quoting, and calendar booking). The Growth plan, Full Solo Op Stack, is $497/month and adds Google Business Profile management, photo quote flow, and more. The Pro plan, Full Stack, is $797/month and adds AI search visibility, review generation, monthly reporting, and priority support.',
        },
      },
      {
        '@type': 'Question',
        name: 'What local service businesses does LocalLift work for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LocalLift is built for home service businesses including junk removal, plumbers, cleaners, HVAC, landscapers, and contractors who need to generate and respond to local leads automatically.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does LocalLift get my business found on ChatGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LocalLift optimizes your Google Business Profile, submits your business to major data aggregators, and adds structured schema markup to your website — the signals that AI assistants use to recommend local businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need an existing website to use LocalLift?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. LocalLift includes a free custom website design and build. If you already have a site, we can work with it or replace it.',
        },
      },
    ],
  },
];

export function LocalLiftPage() {
  return (
    <div className="local-lift-root">
      <SchemaScript schema={localLiftSchema} />
      <LocalLiftHeader variant="landing" />
      <main className="ll-main">
      <section className="hero">
  <div className="hero-bg"></div>
  <div className="hero-dots"></div>
  <div className="hero-inner">
    <Link href="/" className="hero-badge">A My Task Labs product</Link>
    <h1>More booked jobs.<br /><em>Less missed calls.</em></h1>
    <p className="hero-sub">We build your website free, get you found on Google and ChatGPT, then automatically respond to every lead — day or night — and book them straight into your calendar.</p>
    <div className="hero-actions">
      <Link
        href="/local-lift/free-design"
        className="btn-primary"
        onClick={() => trackLead()}
      >
        Get my free website design
        <span className="arrow">→</span>
      </Link>
      <a href="#how" className="btn-secondary">See how it works</a>
    </div>
    <div className="hero-social-proof">
      <div className="proof-avatars">
        <div className="proof-avatar">JH</div>
        <div className="proof-avatar">MR</div>
        <div className="proof-avatar">SK</div>
        <div className="proof-avatar">+</div>
      </div>
      <div className="proof-text"><strong>Local service businesses</strong> getting found and booked<br />through AI search, Google Maps & automated follow-up</div>
    </div>
  </div>

  <div className="hero-card-wrap">
    <div className="hero-card" style={{ position: "relative" }}>
      <div className="card-header">
        <div className="card-icon">🚛</div>
        <div>
          <div className="card-title">Swift Junk Removal</div>
          <div className="card-sub">New lead · Just now</div>
        </div>
      </div>
      <div className="sms-bubble">"Hey how much to haul away a couch and a few boxes from my garage?"</div>
      <div className="sms-time">LocalLift AI replied instantly</div>
      <div className="sms-bubble outgoing">"Hi! Happy to help 😊 Is it just the couch + boxes, or is there more? And is it all accessible from outside or inside the home?"</div>
      <div className="sms-bubble" style={{ marginTop: 8 }}>"Just those, inside the garage."</div>
      <div className="sms-bubble outgoing">"Perfect — that's a small load, we can do that for $95–$125. Want to grab a time? We have tomorrow 9am or 2pm open."</div>
      <div className="card-divider"></div>
      <div className="card-stat">
        <div>
          <div className="stat-label">Response time</div>
          <div className="stat-value">18s</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="stat-tag">Appointment booked ✓</div>
        </div>
      </div>
      <div className="floating-badge badge-1">📅 Booked for tomorrow 9am</div>
      <div className="floating-badge badge-2">⚡ While you were on a job</div>
    </div>
  </div>
</section>

<div className="problem-strip">
  <div className="problem-inner">
    <div className="problem-text">
      <div className="section-label" style={{ color: "var(--green-light)" }}>The problem</div>
      <h2>You're losing jobs <em>you never knew you had.</em></h2>
      <p>Most local service businesses respond to leads in hours — or not at all. By then, your competitor already got the call back. And if customers can't find you on ChatGPT or Google Maps? They never reach out in the first place.</p>
      <ul className="problem-list">
        <li>Leads come in while you're on a job and go cold</li>
        <li>Competitors rank higher on Google Maps and AI search</li>
        <li>No website, or an outdated one that doesn't convert</li>
        <li>Manual back-and-forth wastes time quoting and scheduling</li>
      </ul>
    </div>
    <div className="problem-stat-grid">
      <div className="problem-stat">
        <div className="big">78%</div>
        <div className="label">of customers go with the first business that responds</div>
      </div>
      <div className="problem-stat">
        <div className="big">5 min</div>
        <div className="label">response window before lead quality drops sharply</div>
      </div>
      <div className="problem-stat">
        <div className="big">62%</div>
        <div className="label">of local searches now start on AI assistants, not Google</div>
      </div>
      <div className="problem-stat">
        <div className="big">4%</div>
        <div className="label">of small businesses have any AI search visibility plan</div>
      </div>
    </div>
  </div>
</div>

<section className="how" id="how">
  <div className="how-inner">
    <div className="section-label">How it works</div>
    <h2>Simple as <em>one, two, three.</em></h2>
    <p className="section-intro">We do all the heavy lifting. You get a professional web presence, full visibility everywhere customers search, and a system that handles leads while you work.</p>
    <div className="steps">
      <div className="step">
        <div className="step-num">01</div>
        <h3>We design your site — free</h3>
        <p>Tell us about your business and we'll build a custom Figma design at no cost. No commitment required. See exactly what your new website will look like before spending a cent.</p>
        <span className="step-tag">Takes 48 hours</span>
      </div>
      <div className="step">
        <div className="step-num">02</div>
        <h3>We launch your full visibility stack</h3>
        <p>We build and host your site, optimize your Google Business Profile, and get you indexed on ChatGPT, Gemini, Siri, and Alexa. Customers find you everywhere they search.</p>
        <span className="step-tag">Live within a week</span>
      </div>
      <div className="step">
        <div className="step-num">03</div>
        <h3>Leads get handled automatically</h3>
        <p>Every inbound text gets an instant AI reply, a fast quote, and a calendar booking — without you lifting a finger. You just show up to the appointment.</p>
        <span className="step-tag">Replies in seconds</span>
      </div>
    </div>
  </div>
</section>

<section className="services" id="services">
  <div className="services-inner">
    <div className="section-label">What's included</div>
    <h2>Everything you need, <em>nothing you don't.</em></h2>
    <p className="section-intro">Four services that work together as one system. No managing multiple vendors, no stitching tools together yourself.</p>
    <div className="services-grid">
      <div className="service-card featured">
        <div className="service-icon">⚡</div>
        <div className="service-body">
          <h3>Automated lead response & booking</h3>
          <p>Our AI responds to every inbound text in seconds, qualifies the lead, gives an accurate quote based on your pricing, and books the appointment straight into your calendar. Works 24/7, even when you're on a job. Built and owned by MyTask Labs — you won't find this anywhere else.</p>
          <span className="service-pill">Our flagship tool</span>
        </div>
      </div>
      <div className="service-card">
        <div className="service-icon">🌐</div>
        <div className="service-body">
          <h3>Professional website</h3>
          <p>Custom-designed, mobile-optimized, and built to convert visitors into leads. Hosted and maintained by us — zero technical headaches on your end.</p>
          <span className="service-pill">Design is free</span>
        </div>
      </div>
      <div className="service-card">
        <div className="service-icon">🤖</div>
        <div className="service-body">
          <h3>AI search visibility</h3>
          <p>We get your business indexed and recommended by ChatGPT, Gemini, Siri, and Alexa. When someone asks "best junk hauler near me," you show up.</p>
          <span className="service-pill">Powered by updating.ai</span>
        </div>
      </div>
      <div className="service-card">
        <div className="service-icon">📍</div>
        <div className="service-body">
          <h3>Google Business Profile management</h3>
          <p>We fully optimize and actively manage your GBP — posts, reviews, photos, and citations — so you rank higher on Google Maps and local search results.</p>
          <span className="service-pill">Ongoing monthly</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="pricing" id="pricing">
  <div className="pricing-inner">
    <div className="section-label">Simple pricing</div>
    <h2>
      Pick your plan. <em>We handle the rest.</em>
    </h2>
    <p className="section-intro">
      Every plan is set up and configured for you. No tech knowledge needed — we onboard you personally and get your system live within 48 hours.
    </p>
    <div className="pricing-grid">
      <div className="price-card">
        <div className="price-tier">Starter</div>
        <div className="price-name">Lead Response</div>
        <div className="price-desc">
          Automated lead response only — perfect if you already have a site and just need to stop missing jobs.
        </div>
        <div className="price-amount">
          <sup>$</sup>297<span>/mo</span>
        </div>
        <div className="price-divider" />
        <ul className="price-features">
          <li>AI text response within 60 seconds</li>
          <li>Lead qualification flow</li>
          <li>Custom quoting settings</li>
          <li>Google Calendar booking integration</li>
          <li>Choose: instant book or call-back flow</li>
          <li>Personal onboarding &amp; setup</li>
        </ul>
        <a
          href={LOCAL_LIFT_ZCAL}
          className="price-outline-btn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead()}
        >
          Book a setup call
        </a>
      </div>

      <div className="price-card featured">
        <div className="popular-badge">Most popular</div>
        <div className="price-tier">Growth</div>
        <div className="price-name">Full Solo Op Stack</div>
        <div className="price-desc">
          Everything a solo hauler needs to get found, look legit, and never miss a lead.
        </div>
        <div className="price-amount">
          <sup>$</sup>497<span>/mo</span>
        </div>
        <div className="price-divider" />
        <ul className="price-features">
          <li>Everything in Lead Response</li>
          <li>Google Business Profile management</li>
          <li>Photo quote flow via SMS</li>
          <li>GBP posts, review responses &amp; citations</li>
          <li>Monthly performance summary</li>
        </ul>
        <a
          href={LOCAL_LIFT_ZCAL}
          className="price-btn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead()}
        >
          Book a setup call
        </a>
      </div>

      <div className="price-card">
        <div className="price-tier">Pro</div>
        <div className="price-name">Full Stack</div>
        <div className="price-desc">
          Maximum visibility and automation — for haulers ready to grow fast and dominate their market.
        </div>
        <div className="price-amount">
          <sup>$</sup>797<span>/mo</span>
        </div>
        <div className="price-divider" />
        <ul className="price-features">
          <li>Everything in Growth</li>
          <li>AI search ranking (ChatGPT, Gemini, Siri)</li>
          <li>Review generation system</li>
          <li>Monthly reporting &amp; insights</li>
          <li>Priority support &amp; account manager</li>
        </ul>
        <a
          href={LOCAL_LIFT_ZCAL}
          className="price-outline-btn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead()}
        >
          Book a setup call
        </a>
      </div>
    </div>

    <div className="custom-plan-card">
      <div className="custom-plan-icon">🛠️</div>
      <div className="custom-plan-body">
        <h3>Need something custom?</h3>
        <p>
          Running multiple trucks, a team, or a franchise? We can build a plan around your specific operation —
          custom quoting logic, multi-user calendars, white-label options, and more. Let&apos;s talk about what you
          need.
        </p>
      </div>
      <a
        href={LOCAL_LIFT_ZCAL}
        className="custom-plan-cta"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLead()}
      >
        Book a custom call →
      </a>
    </div>

    <p className="pricing-footnote">
      No setup fees · No long contracts · Cancel anytime · Personal onboarding included with every plan
    </p>
  </div>
</section>

<section className="free-cta" id="design">
  <div className="free-cta-inner">
    <div className="section-label" style={{ color: "var(--green-pale)" }}>Zero risk</div>
    <h2>See your new website <em>before you spend a thing.</em></h2>
    <p>Tell us about your business and we'll design a custom website mockup for free — no credit card, no commitment. If you love it, we'll build it. If not, keep the design.</p>
    <Link
      href="/local-lift/free-design"
      className="btn-primary"
      onClick={() => trackLead()}
    >
      Get my free website design
      <span className="arrow">→</span>
    </Link>
    <div className="cta-footnote">Free design delivered within 48 hours · No commitment required</div>
  </div>
</section>

      </main>

      <LocalLiftFooter samePageHash />

    </div>
  );
}
