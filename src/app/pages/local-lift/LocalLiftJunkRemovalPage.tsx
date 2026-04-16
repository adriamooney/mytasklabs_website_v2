import Link from 'next/link';
import { trackLead } from '../../analytics/ctaEvents';
import './local-lift-junkremoval.css';

const DEMO_SMS = 'sms:5039743358';
const DEMO_PHONE_DISPLAY = '503-974-3358';
const BOOKING_URL = 'https://zcal.co/adriamooney/15min-local-lift';

export function LocalLiftJunkRemovalPage() {
  return (
    <div className="ll-junk-page">
      <nav>
        <Link href="/local-lift/junk-removal" className="nav-logo">
          Local<span>Lift</span>
        </Link>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#customize">Customization</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo" className="nav-cta">
            Try it live
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grain" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="hero-glow-2" aria-hidden />
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">Built exclusively for junk removal</div>
            <h1>
              Your next job is
              <br />
              texting you <em>right now.</em>
              <br />
              <span className="acc">Don&apos;t miss it.</span>
            </h1>
            <p className="hero-sub">
              Our AI texts back every inbound lead in <strong>under 60 seconds</strong>, qualifies them, gives an
              accurate quote, and books them into your calendar — while you&apos;re still on the truck.
            </p>
            <div className="hero-actions">
              <a href={DEMO_SMS} className="btn-demo">
                <span className="icon">📱</span>
                Text {DEMO_PHONE_DISPLAY} to try it live
              </a>
              <div className="demo-hint">
                Send any text — <strong>experience it yourself in real time</strong>
              </div>
              <a
                href={BOOKING_URL}
                className="btn-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead()}
              >
                Or book a call to get yours set up →
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="demo-card">
              <div className="demo-card-header">
                <div className="demo-avatar">🚛</div>
                <div>
                  <div className="demo-name">Swift Junk Removal</div>
                  <div className="demo-status">LocalLift AI · responding now</div>
                </div>
              </div>
              <div className="demo-messages">
                <div className="msg in">&quot;Hey how much to haul away a couch and a few boxes?&quot;</div>
                <div className="msg-time">Customer · just now</div>
                <div className="msg out">
                  &quot;Hey! Happy to help 😊 Are the items already outside or do we need to go inside the home?&quot;
                </div>
                <div className="msg in">&quot;Inside the garage.&quot;</div>
                <div className="msg out">
                  &quot;Got it — garage access is no problem. Small load like that runs $95–$135. We&apos;ve got tomorrow
                  at 9am or 2pm open. Which works better for you?&quot;
                </div>
                <div className="msg in">&quot;9am is perfect!&quot;</div>
                <div className="msg out">
                  &quot;You&apos;re all set for tomorrow at 9am! You&apos;ll get a reminder text tonight. See you then
                  👍&quot;
                </div>
              </div>
              <div className="demo-footer">
                <div className="booked-pill">📅 Booked · tomorrow 9am</div>
                <div className="resp-time">⚡ 38 sec total</div>
              </div>
            </div>
            <div className="try-it-nudge">
              <div className="nudge-icon">👆</div>
              <div className="nudge-text">
                This is real. <strong>Text {DEMO_PHONE_DISPLAY}</strong> right now and experience exactly what your
                customers will.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-item">
          <span className="trust-icon">⚡</span> Responds in under 60 seconds
        </div>
        <div className="trust-item">
          <span className="trust-icon">📅</span> Books straight to your calendar
        </div>
        <div className="trust-item">
          <span className="trust-icon">🔧</span> Built for junk removal workflows
        </div>
        <div className="trust-item">
          <span className="trust-icon">💬</span> Works via SMS — no app needed
        </div>
        <div className="trust-item">
          <span className="trust-icon">🔒</span> No long contracts · Cancel anytime
        </div>
      </div>

      <section className="how" id="how">
        <div className="how-inner">
          <div className="section-label">How it works</div>
          <h2>
            From inbound text to <em>booked job</em> — automatically.
          </h2>
          <p className="section-intro">
            No apps for your customer to download. No forms to fill out. Just a text conversation that feels human and
            ends with a job on your calendar.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-connector" aria-hidden />
              <div className="step-num">01</div>
              <h3>Lead texts in</h3>
              <p>
                A customer finds you on Google, Craigslist, or a referral and sends a text. Your phone is in your
                pocket — on a job.
              </p>
              <span className="step-tag">Any time of day</span>
            </div>
            <div className="step-card">
              <div className="step-connector" aria-hidden />
              <div className="step-num">02</div>
              <h3>AI replies instantly</h3>
              <p>
                Within 60 seconds, your AI sends a friendly, on-brand reply. It asks the right questions to qualify the
                job and gather what it needs to quote.
              </p>
              <span className="step-tag">Under 60 seconds</span>
            </div>
            <div className="step-card">
              <div className="step-connector" aria-hidden />
              <div className="step-num">03</div>
              <h3>Quote delivered</h3>
              <p>
                Based on your custom pricing — load size, item type, access — the AI gives an accurate range that matches
                what you&apos;d say yourself.
              </p>
              <span className="step-tag">Your pricing logic</span>
            </div>
            <div className="step-card">
              <div className="step-num">04</div>
              <h3>Job booked</h3>
              <p>
                The customer picks a time, gets a confirmation, and lands straight in your Google Calendar. You just show
                up.
              </p>
              <span className="step-tag">Straight to your calendar</span>
            </div>
          </div>
        </div>
      </section>

      <section className="custom" id="customize">
        <div className="custom-inner">
          <div className="custom-text">
            <div className="section-label">Built around your workflow</div>
            <h2>
              We configure it <em>exactly</em> how you work.
            </h2>
            <p className="section-intro">
              No two haulers price or book the same way. We set up your system around your quoting logic, your calendar,
              and how hands-on you want to be.
            </p>
            <div className="custom-options">
              <div className="custom-option">
                <div className="custom-opt-icon">💰</div>
                <div>
                  <div className="custom-opt-title">Your custom quoting settings</div>
                  <div className="custom-opt-desc">
                    We program your load sizes, pricing tiers, item types, and any special pricing — mattresses,
                    appliances, piano removal — so quotes are accurate every time.
                  </div>
                </div>
              </div>
              <div className="custom-option">
                <div className="custom-opt-icon">📅</div>
                <div>
                  <div className="custom-opt-title">Your calendar, your availability</div>
                  <div className="custom-opt-desc">
                    Syncs to your Google Calendar. Set your hours, max jobs per day, buffer time between jobs, and
                    blackout dates. It only books when you&apos;re actually available.
                  </div>
                </div>
              </div>
              <div className="custom-option">
                <div className="custom-opt-icon">🔀</div>
                <div>
                  <div className="custom-opt-title">Book now or follow up — your choice</div>
                  <div className="custom-opt-desc">
                    Want to book jobs instantly? Done. Prefer to qualify first and call back to close? We set it up that
                    way instead. Your flow, not ours.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-visual">
            <div className="workflow-title">Example workflow — instant booking</div>
            <div className="workflow-steps">
              <div className="wf-step">
                <div className="wf-dot g">1</div>
                <div className="wf-text">
                  <strong>Lead texts in</strong> — any time, any day
                  <br />
                  <span className="wf-badge">Trigger</span>
                </div>
              </div>
              <div className="wf-step">
                <div className="wf-dot g">2</div>
                <div className="wf-text">
                  <strong>AI qualifies</strong> — load size, location, access
                  <br />
                  <span className="wf-badge">2–3 questions</span>
                </div>
              </div>
              <div className="wf-step">
                <div className="wf-dot g">3</div>
                <div className="wf-text">
                  <strong>Quote sent</strong> — based on your pricing logic
                  <br />
                  <span className="wf-badge">Accurate range</span>
                </div>
              </div>
              <div className="wf-step">
                <div className="wf-dot a">4</div>
                <div className="wf-text">
                  <strong>Time offered</strong> — from your live availability
                  <br />
                  <span className="wf-badge orange">Books instantly</span>
                </div>
              </div>
              <div className="wf-step">
                <div className="wf-dot g">5</div>
                <div className="wf-text">
                  <strong>Confirmation sent</strong> — customer gets reminder, job hits your calendar
                  <br />
                  <span className="wf-badge">Done ✓</span>
                </div>
              </div>
              <div className="wf-step">
                <div className="wf-dot b">~</div>
                <div className="wf-text" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  <em>Prefer to call back to close? We configure that instead.</em>
                </div>
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
            Every plan is set up and configured for you. No tech knowledge needed — we onboard you personally and get
            your system live within 48 hours.
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
                href={BOOKING_URL}
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
                href={BOOKING_URL}
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
                href={BOOKING_URL}
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
              href={BOOKING_URL}
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

      <section className="demo-cta" id="demo">
        <div className="demo-cta-inner">
          <div className="section-label" style={{ color: 'var(--green-pale)' }}>
            Try it right now
          </div>
          <h2>
            Don&apos;t take our word for it.
            <br />
            <em>Text us and see.</em>
          </h2>
          <p>
            Experience exactly what your customers will. Send any junk removal inquiry and watch the system respond in
            real time.
          </p>
          <div className="phone-big">{DEMO_PHONE_DISPLAY}</div>
          <div className="phone-sub">Text any junk removal question — it&apos;s live right now</div>
          <div className="cta-divider">
            <div className="cta-divider-line" />
            <div className="cta-divider-text">then when you&apos;re ready</div>
            <div className="cta-divider-line" />
          </div>
          <a
            href={BOOKING_URL}
            className="btn-book-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead()}
          >
            📞 Book a call to get yours set up
          </a>
        </div>
      </section>

      <footer>
        <div>
          <Link href="/local-lift/junk-removal" className="footer-brand">
            Local<span>Lift</span>
          </Link>
          <div className="footer-sub">A My Task Labs product · Built for junk removal</div>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} My Task Labs · All rights reserved</div>
      </footer>
    </div>
  );
}
