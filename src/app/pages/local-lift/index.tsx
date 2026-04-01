import { useEffect } from 'react';
import { Link } from 'react-router';
import { LocalLiftFooter } from '../../components/local-lift/LocalLiftFooter';
import { LocalLiftHeader } from '../../components/local-lift/LocalLiftHeader';
import './local-lift.css';

const DEFAULT_DOC_TITLE = 'My Task Labs | AI Automation Consulting';
const LOCAL_LIFT_DOC_TITLE = 'LocalLift by My Task Labs — More Customers. Less Chaos.';
const LOCAL_LIFT_ZCAL = 'https://zcal.co/adriamooney/15min-local-lift';

export function LocalLiftPage() {
  useEffect(() => {
    document.title = LOCAL_LIFT_DOC_TITLE;
    return () => {
      document.title = DEFAULT_DOC_TITLE;
    };
  }, []);

  return (
    <div className="local-lift-root">
      <LocalLiftHeader variant="landing" />
      <main className="ll-main">
      <section className="hero">
  <div className="hero-bg"></div>
  <div className="hero-dots"></div>
  <div className="hero-inner">
    <Link to="/" className="hero-badge">A My Task Labs product</Link>
    <h1>More booked jobs.<br /><em>Less missed calls.</em></h1>
    <p className="hero-sub">We build your website free, get you found on Google and ChatGPT, then automatically respond to every lead — day or night — and book them straight into your calendar.</p>
    <div className="hero-actions">
      <Link to="/local-lift/free-design" className="btn-primary">
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
    <p className="section-intro">Five services that work together as one system. No managing multiple vendors, no stitching tools together yourself.</p>
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
      <div className="service-card">
        <div className="service-icon">📣</div>
        <div className="service-body">
          <h3>Google &amp; Facebook ads management</h3>
          <p>We run and optimize paid campaigns on Google and Meta — targeting, creative, and landing pages — so you get qualified leads without becoming an ad expert yourself. Included on Full Stack plans with managed spend up to $500/mo.</p>
          <span className="service-pill">Full Stack plan</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="testimonial-section">
  <div className="testimonial-inner">
    <div className="section-label">Real results</div>
    <h2>Businesses like yours, <em>already winning.</em></h2>
    <p className="section-intro">From junk haulers to cleaners to contractors — local service businesses are booking more jobs with less effort.</p>
    <div className="testimonial-grid">
      <div className="testi-card big">
        <div>
          <div className="testi-quote">"</div>
          <div className="testi-text">I was losing leads every single day because I couldn't answer texts while I was hauling. LocalLift fixed that overnight. The AI replies faster than I ever could, quotes them accurately, and I just show up to the job. Best investment I've made for my business.</div>
        </div>
        <div className="testi-author">
          <div className="testi-avatar">DM</div>
          <div>
            <div className="testi-name">Dave M.</div>
            <div className="testi-biz">Denver Haul Away · Junk Removal</div>
          </div>
        </div>
      </div>
      <div className="testi-card">
        <div className="testi-stars">★★★★★</div>
        <div className="testi-text">"Within two weeks we were showing up when people asked ChatGPT for junk removal in our area. Never thought AI search was something we needed to worry about."</div>
        <div className="testi-author">
          <div className="testi-avatar">SL</div>
          <div>
            <div className="testi-name">Sarah L.</div>
            <div className="testi-biz">Clear It Out · Junk Removal</div>
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="big-num">3× </div>
        <div className="stat-desc">more booked appointments in the first 30 days for the average LocalLift client</div>
      </div>
      <div className="testi-card">
        <div className="testi-stars">★★★★★</div>
        <div className="testi-text">"The free website design was what got me in the door. But the automated booking system is what made me stay. It's like having a full-time receptionist."</div>
        <div className="testi-author">
          <div className="testi-avatar">RK</div>
          <div>
            <div className="testi-name">Ray K.</div>
            <div className="testi-biz">Quick Cleanout Co. · Junk Removal</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="pricing" id="pricing">
  <div className="pricing-inner">
    <div className="section-label">Simple pricing</div>
    <h2>One monthly fee. <em>Everything included.</em></h2>
    <p className="section-intro">No setup fees. No long contracts. Cancel anytime. The free website design is yours regardless of which plan you choose.</p>
    <div className="pricing-grid">
      <div className="price-card">
        <div className="price-tier">Starter</div>
        <div className="price-name">Visibility</div>
        <div className="price-desc">Get found everywhere customers search</div>
        <div className="price-amount"><sup>$</sup>249<span>/mo</span></div>
        <div className="price-divider"></div>
        <ul className="price-features">
          <li>Professional website (free design included)</li>
          <li>Website hosting & maintenance</li>
          <li>Google Business Profile management</li>
          <li>AI search visibility (ChatGPT, Gemini, Siri)</li>
          <li>Monthly performance report</li>
        </ul>
        <a
          href={LOCAL_LIFT_ZCAL}
          className="price-outline-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get started
        </a>
      </div>
      <div className="price-card featured">
        <div className="popular-badge">Most popular</div>
        <div className="price-tier">Growth</div>
        <div className="price-name">Visibility + Automation</div>
        <div className="price-desc">Get found and never miss a lead</div>
        <div className="price-amount" style={{ color: "var(--cream)" }}><sup>$</sup>399<span>/mo</span></div>
        <div className="price-divider"></div>
        <ul className="price-features">
          <li>Everything in Visibility</li>
          <li>AI lead response system</li>
          <li>Automated quoting & booking</li>
          <li>Google Calendar integration</li>
          <li>SMS conversation management</li>
          <li>Lead follow-up sequences</li>
        </ul>
        <a
          href={LOCAL_LIFT_ZCAL}
          className="price-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get started
        </a>
      </div>
      <div className="price-card">
        <div className="price-tier">Pro</div>
        <div className="price-name">Full Stack</div>
        <div className="price-desc">The complete local growth system</div>
        <div className="price-amount"><sup>$</sup>799<span>/mo</span></div>
        <div className="price-divider"></div>
        <ul className="price-features">
          <li>Everything in Growth</li>
          <li>Google & Facebook Ads management</li>
          <li>Includes up to $500/mo in managed ad spend</li>
          <li>Ad creative & copywriting</li>
          <li>Landing page optimization</li>
          <li>Dedicated account manager</li>
          <li>Priority support</li>
        </ul>
        <a
          href={LOCAL_LIFT_ZCAL}
          className="price-outline-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get started
        </a>
      </div>
    </div>
    <div className="pricing-custom-row">
      <div className="pricing-custom-row-text">
        <h3 className="pricing-custom-title">Build your own custom plan</h3>
        <p className="pricing-custom-desc">
          Pick only the tools you need — mix and match services, skip what you don&apos;t, and keep the rest simple. We&apos;ll map the right setup with you on a quick call.
        </p>
      </div>
      <a
        href={LOCAL_LIFT_ZCAL}
        className="price-btn pricing-custom-cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a call
        <span className="pricing-custom-cta-arrow" aria-hidden>
          →
        </span>
      </a>
    </div>
    <p style={{ textAlign: "center", marginTop: 28, fontSize: 13, color: "var(--bark-light)" }}>Full Stack includes up to $500/mo in managed ad spend. Additional spend managed at 15%. Ad spend billed directly to client.</p>
  </div>
</section>

<section className="free-cta" id="design">
  <div className="free-cta-inner">
    <div className="section-label" style={{ color: "var(--green-pale)" }}>Zero risk</div>
    <h2>See your new website <em>before you spend a thing.</em></h2>
    <p>Tell us about your business and we'll design a custom website mockup for free — no credit card, no commitment. If you love it, we'll build it. If not, keep the design.</p>
    <Link to="/local-lift/free-design" className="btn-primary">
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
