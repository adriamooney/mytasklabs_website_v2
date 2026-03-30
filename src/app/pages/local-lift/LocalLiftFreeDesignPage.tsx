import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './local-lift-free-design.css';

const DOC_TITLE = 'Get Your Free Website Design — LocalLift';
const DEFAULT_DOC_TITLE = 'My Task Labs | AI Automation Consulting';

const STEP_LABELS = ['Your business', 'Presence & style', 'Contact info'];

const STYLE_OPTIONS = [
  { id: 's-clean', value: 'Clean & minimal' },
  { id: 's-bold', value: 'Bold & confident' },
  { id: 's-friendly', value: 'Friendly & approachable' },
  { id: 's-professional', value: 'Professional & trustworthy' },
  { id: 's-modern', value: 'Modern & tech-forward' },
  { id: 's-local', value: 'Local & community feel' },
] as const;

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function LocalLiftFreeDesignPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [thankYou, setThankYou] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [hasWebsite, setHasWebsite] = useState<'yes' | 'no' | ''>('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [socialUrl, setSocialUrl] = useState('');
  const [competitors, setCompetitors] = useState('');
  const [styleSelections, setStyleSelections] = useState<string[]>([]);
  const [anythingElse, setAnythingElse] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = DOC_TITLE;
    return () => {
      document.title = DEFAULT_DOC_TITLE;
    };
  }, []);

  const clearError = (key: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validateStep = (step: number): boolean => {
    if (step === 1) {
      const ok = businessName.trim().length > 0;
      setErrors((prev) => {
        const next = { ...prev };
        if (!ok) next.businessName = true;
        else delete next.businessName;
        return next;
      });
      return ok;
    }
    if (step === 2) return true;
    if (step === 3) {
      const fnOk = firstName.trim().length > 0;
      const lnOk = lastName.trim().length > 0;
      const emOk = validateEmail(email);
      const ok = fnOk && lnOk && emOk;
      setErrors((prev) => {
        const next = { ...prev };
        if (!fnOk) next.firstName = true;
        else delete next.firstName;
        if (!lnOk) next.lastName = true;
        else delete next.lastName;
        if (!emOk) next.email = true;
        else delete next.email;
        return next;
      });
      return ok;
    }
    return true;
  };

  const goToStep = (n: number) => {
    if (n > currentStep && !validateStep(currentStep)) return;
    setCurrentStep(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleStyle = (value: string) => {
    setStyleSelections((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const collectFormData = () => ({
    businessName: businessName.trim(),
    hasWebsite: hasWebsite || 'not specified',
    websiteUrl,
    socialUrl,
    inspirationSites: competitors,
    designStyles: styleSelections.join(', '),
    additionalNotes: anythingElse,
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    phone: phone.trim(),
  });

  const submitForm = async () => {
    if (!validateStep(3)) return;
    setSubmitError('');
    setIsSubmitting(true);
    const data = collectFormData();
    const apiBase = import.meta.env.VITE_API_URL ?? '';
    try {
      const res = await fetch(`${apiBase}/api/submit-free-design`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: data.businessName,
          hasWebsite: data.hasWebsite,
          websiteUrl: data.websiteUrl,
          socialUrl: data.socialUrl,
          competitors: data.inspirationSites,
          designStyles: data.designStyles,
          additionalNotes: data.additionalNotes,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(json.error ?? 'Failed to submit. Please try again.');
      }
      setThankYou(true);
    } catch (e) {
      setSubmitError(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const dotClass = (n: number) => {
    if (currentStep === n) return 'step-dot active';
    if (currentStep > n) return 'step-dot done';
    return 'step-dot';
  };

  return (
    <div className="local-lift-free-design-root">
      <nav>
        <Link to="/local-lift" className="nav-logo">
          Local<span>Lift</span>
        </Link>
        <Link to="/local-lift" className="nav-back">
          ← Back to LocalLift
        </Link>
      </nav>

      <div className="page-wrap">
        <div className="left-panel">
          <div className="left-content">
            <div className="left-badge">Free · No commitment · 48hr turnaround</div>
            <h1>
              Your free design is <em>2 minutes away.</em>
            </h1>
            <p>
              Tell us a little about your business and we&apos;ll build a custom website mockup — no strings
              attached. Keep it even if you don&apos;t sign up.
            </p>
            <div className="promises">
              <div className="promise-item">
                <div className="promise-icon">🎨</div>
                <div className="promise-text">
                  <strong>Custom design, not a template.</strong> Built specifically for your business and your
                  market.
                </div>
              </div>
              <div className="promise-item">
                <div className="promise-icon">⏱</div>
                <div className="promise-text">
                  <strong>Ready in 48 hours.</strong> We&apos;ll email your Figma mockup within 2 business days.
                </div>
              </div>
              <div className="promise-item">
                <div className="promise-icon">🔒</div>
                <div className="promise-text">
                  <strong>Zero obligation.</strong> No credit card. No sales pressure. The design is yours either
                  way.
                </div>
              </div>
              <div className="promise-item">
                <div className="promise-icon">📱</div>
                <div className="promise-text">
                  <strong>Mobile-first.</strong> Every design is built to look great on phones — where most of
                  your customers will find you.
                </div>
              </div>
            </div>
          </div>
          <div className="left-bottom">
            <div className="testimonial-mini">
              <div className="testi-mini-stars">★★★★★</div>
              <div className="testi-mini-text">
                &quot;I filled this form out on a Tuesday and had a design in my inbox by Wednesday morning.
                Looked better than sites my competitors paid thousands for.&quot;
              </div>
              <div className="testi-mini-author">
                <div className="testi-mini-avatar">RK</div>
                <div>
                  <div className="testi-mini-name">Ray K.</div>
                  <div className="testi-mini-biz">Quick Cleanout Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-panel">
          {!thankYou && (
            <>
              <div className="progress-wrap">
                <div className="progress-steps">
                  <div className={dotClass(1)} id="dot-1">
                    <span>1</span>
                  </div>
                  <div className={currentStep >= 2 ? 'step-line done' : 'step-line'} id="line-1" />
                  <div className={dotClass(2)} id="dot-2">
                    <span>2</span>
                  </div>
                  <div className={currentStep >= 3 ? 'step-line done' : 'step-line'} id="line-2" />
                  <div className={dotClass(3)} id="dot-3">
                    <span>3</span>
                  </div>
                </div>
                <div className="progress-label" id="progress-label">
                  <strong>
                    Step {currentStep} of 3
                  </strong>{' '}
                  — {STEP_LABELS[currentStep - 1]}
                </div>
              </div>

              <form id="design-form" noValidate onSubmit={(e) => e.preventDefault()}>
                <div className={`form-step ${currentStep === 1 ? 'active' : ''}`} id="step-1">
                  <div className="step-heading">
                    What&apos;s your <em>business called?</em>
                  </div>
                  <div className="step-sub">
                    That&apos;s all we need to get started — we&apos;ll pull everything else from your online
                    presence.
                  </div>
                  <div className="field-group">
                    <label htmlFor="business-name">Business name</label>
                    <input
                      type="text"
                      id="business-name"
                      placeholder="e.g. Swift Junk Removal"
                      autoComplete="organization"
                      value={businessName}
                      onChange={(e) => {
                        setBusinessName(e.target.value);
                        clearError('businessName');
                      }}
                      className={errors.businessName ? 'error' : undefined}
                    />
                    <div className={`error-msg ${errors.businessName ? 'visible' : ''}`} id="err-business-name">
                      Please enter your business name.
                    </div>
                  </div>
                  <div className="form-actions">
                    <div />
                    <button type="button" className="btn-next" onClick={() => goToStep(2)}>
                      Continue <span className="arrow">→</span>
                    </button>
                  </div>
                </div>

                <div className={`form-step ${currentStep === 2 ? 'active' : ''}`} id="step-2">
                  <div className="step-heading">
                    Your online <em>presence & style.</em>
                  </div>
                  <div className="step-sub">
                    We&apos;ll use your existing presence to match your brand — and your style picks to shape the
                    design.
                  </div>
                  <label style={{ marginBottom: 10 }}>Do you currently have a website?</label>
                  <div className="radio-toggle">
                    <div className="radio-option">
                      <input
                        type="radio"
                        name="has-website"
                        id="has-yes"
                        value="yes"
                        checked={hasWebsite === 'yes'}
                        onChange={() => setHasWebsite('yes')}
                      />
                      <label className="radio-label" htmlFor="has-yes">
                        ✓ &nbsp; Yes, I have one
                      </label>
                    </div>
                    <div className="radio-option">
                      <input
                        type="radio"
                        name="has-website"
                        id="has-no"
                        value="no"
                        checked={hasWebsite === 'no'}
                        onChange={() => setHasWebsite('no')}
                      />
                      <label className="radio-label" htmlFor="has-no">
                        ✕ &nbsp; Not yet
                      </label>
                    </div>
                  </div>

                  <div className={`presence-field ${hasWebsite === 'yes' ? 'visible' : ''}`} id="field-website">
                    <label htmlFor="website-url">Your website URL</label>
                    <input
                      type="url"
                      id="website-url"
                      placeholder="https://yoursite.com"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                    />
                    <div className="presence-hint">
                      We&apos;ll review it to understand your current branding and improve on it.
                    </div>
                  </div>

                  <div className={`presence-field ${hasWebsite === 'no' ? 'visible' : ''}`} id="field-social">
                    <label htmlFor="social-url">
                      Facebook page, Google listing, or other profile{' '}
                      <span className="optional">(optional)</span>
                    </label>
                    <input
                      type="url"
                      id="social-url"
                      placeholder="https://facebook.com/yourbusiness"
                      value={socialUrl}
                      onChange={(e) => setSocialUrl(e.target.value)}
                    />
                    <div className="presence-hint">
                      No website? No problem — a Facebook page or Google listing gives us your logo, photos, and
                      brand feel to work with.
                    </div>
                  </div>

                  <div className="field-group" style={{ marginTop: 20 }}>
                    <label htmlFor="competitors">
                      Any inspiration websites you like the look of? <span className="optional">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="competitors"
                      placeholder="e.g. https://example.com or 'clean and bold, blue colors'"
                      value={competitors}
                      onChange={(e) => setCompetitors(e.target.value)}
                    />
                    <div className="presence-hint">A URL, a description, or just a vibe — anything helps.</div>
                  </div>

                  <label style={{ marginBottom: 12, marginTop: 20, display: 'block' }}>
                    Design feel <span className="optional">(pick all that appeal)</span>
                  </label>
                  <div className="style-chips">
                    {STYLE_OPTIONS.map(({ id, value }) => (
                      <div className="style-chip" key={id}>
                        <input
                          type="checkbox"
                          id={id}
                          name="style"
                          value={value}
                          checked={styleSelections.includes(value)}
                          onChange={() => toggleStyle(value)}
                        />
                        <label className="chip-label" htmlFor={id}>
                          {value}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="field-group">
                    <label htmlFor="anything-else">
                      Anything else we should know? <span className="optional">(optional)</span>
                    </label>
                    <textarea
                      id="anything-else"
                      placeholder="e.g. 'We focus on same-day service' or 'I want a prominent call button'"
                      value={anythingElse}
                      onChange={(e) => setAnythingElse(e.target.value)}
                    />
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn-back" onClick={() => goToStep(1)}>
                      ← Back
                    </button>
                    <button type="button" className="btn-next" onClick={() => goToStep(3)}>
                      Continue <span className="arrow">→</span>
                    </button>
                  </div>
                </div>

                <div className={`form-step ${currentStep === 3 ? 'active' : ''}`} id="step-3">
                  <div className="step-heading">
                    Where do we <em>send your design?</em>
                  </div>
                  <div className="step-sub">
                    We&apos;ll email your mockup within 48 hours. We may also send a quick text to confirm a
                    detail or two — that&apos;s it.
                  </div>
                  <div className="field-row">
                    <div className="field-group">
                      <label htmlFor="first-name">First name</label>
                      <input
                        type="text"
                        id="first-name"
                        placeholder="Your first name"
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          clearError('firstName');
                        }}
                        className={errors.firstName ? 'error' : undefined}
                      />
                      <div className={`error-msg ${errors.firstName ? 'visible' : ''}`} id="err-first-name">
                        Please enter your first name.
                      </div>
                    </div>
                    <div className="field-group">
                      <label htmlFor="last-name">Last name</label>
                      <input
                        type="text"
                        id="last-name"
                        placeholder="Your last name"
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          clearError('lastName');
                        }}
                        className={errors.lastName ? 'error' : undefined}
                      />
                      <div className={`error-msg ${errors.lastName ? 'visible' : ''}`} id="err-last-name">
                        Please enter your last name.
                      </div>
                    </div>
                  </div>
                  <div className="field-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@yourbusiness.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearError('email');
                      }}
                      className={errors.email ? 'error' : undefined}
                    />
                    <div className={`error-msg ${errors.email ? 'visible' : ''}`} id="err-email">
                      Please enter a valid email address.
                    </div>
                  </div>
                  <div className="field-group">
                    <label htmlFor="phone">
                      Mobile number <span className="optional">(recommended)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="(555) 000-0000"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="presence-hint" style={{ marginTop: 6 }}>
                      We&apos;ll send a quick text when your design is ready. No spam — ever.
                    </div>
                  </div>
                  {submitError ? (
                    <p
                      role="alert"
                      style={{
                        color: 'var(--accent)',
                        fontSize: 13,
                        marginBottom: 16,
                        lineHeight: 1.5,
                      }}
                    >
                      {submitError}
                    </p>
                  ) : null}
                  <div className="form-actions">
                    <button type="button" className="btn-back" disabled={isSubmitting} onClick={() => goToStep(2)}>
                      ← Back
                    </button>
                    <button
                      type="button"
                      className="btn-next"
                      id="submit-btn"
                      disabled={isSubmitting}
                      onClick={() => void submitForm()}
                      style={{
                        background: 'var(--accent)',
                        boxShadow: '0 4px 16px rgba(231,111,81,0.3)',
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Get my free design 🎨'}
                    </button>
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: 'var(--bark-light)',
                      marginTop: 16,
                      lineHeight: 1.6,
                    }}
                  >
                    By submitting you agree to receive an email and optional SMS about your design request. No
                    marketing emails, no spam. Unsubscribe anytime.
                  </p>
                </div>
              </form>
            </>
          )}

          <div className={`thank-you ${thankYou ? 'active' : ''}`} id="thank-you">
            <div className="ty-icon">🎉</div>
            <h2>
              You&apos;re all set, <em id="ty-name">{firstName.trim() || 'friend'}!</em>
            </h2>
            <p>
              We got your request and we&apos;re already thinking about your design. Check your inbox in the next
              48 hours.
            </p>
            <div className="ty-steps">
              <div className="ty-step">
                <div className="ty-step-num">1</div>
                <div className="ty-step-text">
                  <strong>Within 48 hours</strong> — your custom Figma mockup lands in your inbox.
                </div>
              </div>
              <div className="ty-step">
                <div className="ty-step-num">2</div>
                <div className="ty-step-text">
                  <strong>We&apos;ll walk you through it</strong> on a quick call — no pressure, just your honest
                  feedback.
                </div>
              </div>
              <div className="ty-step">
                <div className="ty-step-num">3</div>
                <div className="ty-step-text">
                  <strong>If you love it</strong>, we&apos;ll build it, launch it, and start getting you found. If
                  not, the design is still yours to keep.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-brand">
          Local<span>Lift</span>{' '}
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'var(--bark-light)',
              fontWeight: 400,
              marginLeft: 8,
            }}
          >
            by My Task Labs
          </span>
        </div>
        <div className="footer-copy">© 2026 My Task Labs · All rights reserved</div>
      </footer>
    </div>
  );
}
