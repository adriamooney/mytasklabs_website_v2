import { LocalLiftFooter } from '../../components/local-lift/LocalLiftFooter';
import { LocalLiftHeader } from '../../components/local-lift/LocalLiftHeader';
import './local-lift.css';
import './local-lift-onboarding.css';

type PlaceholderKind = 'screenshot' | 'video';

function MediaPlaceholder({
  kind,
  title,
  hint,
  variant = 'screenshot',
}: {
  kind: PlaceholderKind;
  title: string;
  hint: string;
  variant?: 'screenshot' | 'video-wide';
}) {
  const isVideo = kind === 'video';
  return (
    <figure
      className={`ll-onboard-placeholder ${isVideo || variant === 'video-wide' ? 'll-onboard-placeholder--video' : 'll-onboard-placeholder--screenshot'}`}
      aria-label={`Placeholder for ${title}`}
    >
      <span className="ll-onboard-placeholder__badge">{isVideo ? 'Video placeholder' : 'Screenshot placeholder'}</span>
      <figcaption className="ll-onboard-placeholder__title">{title}</figcaption>
      <p className="ll-onboard-placeholder__hint">{hint}</p>
    </figure>
  );
}

export function LocalLiftClientOnboardingPage() {
  return (
    <div className="local-lift-root">
      <LocalLiftHeader variant="subpage" />
      <main className="ll-main ll-onboard-page">
        <section className="ll-onboard-hero">
          <div className="ll-onboard-hero-inner">
            <p className="section-label">Client onboarding</p>
            <h1>
              Your <em>LocalLift</em> guide
            </h1>
                       <p className="ll-onboard-lead">
              This page explains what we set up for you, what we&apos;ll need from you, and how your customers experience
              text-based booking. Everything here is written for you—not our internal checklists.
            </p>
            <nav className="ll-onboard-toc" aria-label="On this page">
              <a href="#before">Before we start</a>
              <a href="#calendar">Google Calendar</a>
              <a href="#demos">Videos &amp; screenshots</a>
              <a href="#flow">How texting works</a>
              <a href="#followups">Follow-ups &amp; reminders</a>
              <a href="#pricing">Pricing overview</a>
              <a href="#dashboard">Your dashboard</a>
              <a href="#no-show">No-shows</a>
              <a href="#tips">Good to know</a>
              <a href="#calls">Missed calls (optional)</a>
            </nav>
          </div>
        </section>

        <section id="before">
          <p className="section-label">Before we start</p>
          <h2>
            What we&apos;ll ask <em>you</em> for
          </h2>
          <p className="section-intro">
            We collect this up front so your AI assistant sounds like you, quotes accurately, and books only when
            you&apos;re actually available.
          </p>
          <div className="ll-onboard-table-wrap">
            <table className="ll-onboard-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Business name</strong>
                  </td>
                  <td>Exactly how you want it to appear to customers in texts.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Your cell number</strong>
                  </td>
                  <td>We&apos;ll text you when a job is quoted or booked so you&apos;re never surprised.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Timezone &amp; service hours</strong>
                  </td>
                  <td>So we only offer appointment windows when you work.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Typical job length</strong>
                  </td>
                  <td>How long each slot should block on your calendar (often around 3 hours).</td>
                </tr>
                <tr>
                  <td>
                    <strong>How far ahead to book</strong>
                  </td>
                  <td>Usually about a week—your call.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Service area</strong>
                  </td>
                  <td>Your base location and how far you&apos;ll travel; we can turn this off if you serve a wide area.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Quiet hours</strong>
                  </td>
                  <td>When the assistant shouldn&apos;t send automated texts (often about 9 PM – 8 AM).</td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Calendar</strong>
                  </td>
                  <td>Which calendar should hold new jobs—and we&apos;ll walk you through sharing it safely (see below).</td>
                </tr>
                <tr>
                  <td>
                    <strong>Team emails for login</strong>
                  </td>
                  <td>Who should be able to sign in and see conversations and jobs (Google sign-in).</td>
                </tr>
                <tr>
                  <td>
                    <strong>Google review link</strong>
                  </td>
                  <td>Optional: we can drop it into the thank-you text after a completed job.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Pricing comfort level</strong>
                  </td>
                  <td>Whether our standard junk-removal tiers work for you or you need custom ranges—we&apos;ll align with you.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ll-onboard-card">
            <h3>SMS consent on your website</h3>
            <p className="ll-onboard-muted">
              For compliant business texting, your site should show a simple notice that by texting your number, customers
              agree to get messages from you (and how to opt out). If you don&apos;t have one yet, we&apos;ll help you add a
              short line in the footer or contact section.
            </p>
          </div>
        </section>

        <section id="calendar" className="ll-onboard-band">
          <p className="section-label">Calendar setup</p>
          <h2>
            Connect <em>Google Calendar</em>
          </h2>
          <p className="section-intro" style={{ color: 'rgba(254,250,224,0.65)', maxWidth: 640 }}>
            You don&apos;t need to be technical. You&apos;ll invite one secure Google address we give you (it ends with
            <code style={{ color: 'var(--cream)' }}> gserviceaccount.com</code>) so bookings can appear as events on the
            calendar you already use.
          </p>

          <ul className="ll-onboard-steps ll-onboard-steps--on-dark">
            <li style={{ color: 'rgba(254,250,224,0.9)' }}>
              <strong style={{ color: 'var(--cream)' }}>Get the invite address from us.</strong> Your onboarding contact
              will email you the exact address to add—keep it handy for the next step.
            </li>
            <li style={{ color: 'rgba(254,250,224,0.9)' }}>
              <strong style={{ color: 'var(--cream)' }}>Open Google Calendar → Settings → your calendar.</strong> Choose{' '}
              <em>Share with specific people</em>, paste our address, and set permission to{' '}
              <strong>Make changes to events</strong> (not view-only).
            </li>
            <li style={{ color: 'rgba(254,250,224,0.9)' }}>
              <strong style={{ color: 'var(--cream)' }}>Copy your Calendar ID.</strong> In the same settings area, under
              &quot;Integrate calendar,&quot; copy the ID (often looks like{' '}
              <code style={{ color: 'var(--green-pale)' }}>something@group.calendar.google.com</code> or your Gmail). Send it
              to us—we plug it into your account.
            </li>
            <li style={{ color: 'rgba(254,250,224,0.9)' }}>
              <strong style={{ color: 'var(--cream)' }}>We test a booking together.</strong> You should see a real event
              appear when a test job is scheduled.
            </li>
          </ul>

          <p className="ll-onboard-note" style={{ background: 'rgba(255,255,255,0.06)', borderLeftColor: 'var(--accent-light)', color: 'rgba(254,250,224,0.75)' }}>
            If calendar sharing isn&apos;t complete, customers can still get a confirmation text, but the event might not
            show on your calendar. Nine times out of ten it&apos;s a sharing permission or a typo in the Calendar ID—we fix
            it with you.
          </p>

          <MediaPlaceholder
            kind="screenshot"
            title="Google Calendar: sharing & Calendar ID"
            hint="Replace with step-by-step screenshots: Settings → share with our service account → permission “Make changes to events” → where to find Calendar ID."
            variant="video-wide"
          />
        </section>

        <section id="demos">
          <p className="section-label">See it in action</p>
          <h2>
            Placeholders for <em>your media</em>
          </h2>
          <p className="section-intro">
            Drop in real assets when you&apos;re ready. These blocks keep spacing and layout consistent.
          </p>

          <MediaPlaceholder
            kind="video"
            title="Sample SMS conversation"
            hint="Embed or replace with a screen recording of a full quote-and-book flow (customer + AI texts)."
          />

          <MediaPlaceholder
            kind="video"
            title="Client dashboard walkthrough"
            hint="Short tour: Conversations list, opening a thread, Jobs list, marking a no-show if needed."
          />
        </section>

        <section id="flow">
          <p className="section-label">Customer experience</p>
          <h2>
            What happens when someone <em>texts you</em>
          </h2>
          <p className="section-intro">
            Your published business number is the front door. From the customer&apos;s perspective, it feels like a normal
            text chat—just faster and always on.
          </p>
          <ul className="ll-onboard-steps">
            <li>
              <strong>They text your number</strong> — any message starts the conversation.
            </li>
            <li>
              <strong>Greeting &amp; intake</strong> — the assistant asks what needs to be removed, access (stairs, inside
              vs outside), and invites photos if they want.
            </li>
            <li>
              <strong>Photos (optional)</strong> — if they send pictures, the system uses them to tighten the estimate.
            </li>
            <li>
              <strong>Quote</strong> — when it has enough detail, it sends a clear price range (for example{' '}
              <strong>$X–$Y</strong>) including any add-ons you&apos;ve defined (stairs, same-day, etc.).
            </li>
            <li>
              <strong>Service area</strong> — if you use a radius, it checks the pickup address before quoting. Outside
              the area gets a polite decline.
            </li>
            <li>
              <strong>Scheduling</strong> — it offers real openings based on your hours, job length, and calendar.
            </li>
            <li>
              <strong>Booking</strong> — they pick a time, confirm details, and get a confirmation text. A calendar event is
              created when your calendar is connected.
            </li>
            <li>
              <strong>Done</strong> — the job is booked and visible in your dashboard.
            </li>
          </ul>
        </section>

        <section id="followups" className="ll-onboard-band">
          <p className="section-label">After the quote</p>
          <h2>
            Gentle <em>follow-ups</em> &amp; reminders
          </h2>
          <p className="section-intro" style={{ color: 'rgba(254,250,224,0.65)', maxWidth: 720 }}>
            Each morning, the system reviews open conversations and scheduled jobs so nothing falls through the cracks.
          </p>
          <div className="ll-onboard-table-wrap" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <table className="ll-onboard-table" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <thead>
                <tr>
                  <th style={{ background: 'rgba(82,183,136,0.2)', color: 'var(--cream)' }}>Situation</th>
                  <th style={{ background: 'rgba(82,183,136,0.2)', color: 'var(--cream)' }}>What your customer gets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: 'rgba(254,250,224,0.88)' }}>Quoted, no booking yet — ~24 hours</td>
                  <td style={{ color: 'rgba(254,250,224,0.75)' }}>
                    A friendly check-in: still interested, happy to answer questions or schedule.
                  </td>
                </tr>
                <tr>
                  <td style={{ color: 'rgba(254,250,224,0.88)' }}>Still not booked — a few days later</td>
                  <td style={{ color: 'rgba(254,250,224,0.75)' }}>One more polite nudge.</td>
                </tr>
                <tr>
                  <td style={{ color: 'rgba(254,250,224,0.88)' }}>Still not booked — after two weeks</td>
                  <td style={{ color: 'rgba(254,250,224,0.75)' }}>The thread closes quietly—no spam.</td>
                </tr>
                <tr>
                  <td style={{ color: 'rgba(254,250,224,0.88)' }}>Booked — day before the job</td>
                  <td style={{ color: 'rgba(254,250,224,0.75)' }}>Reminder with date and time window.</td>
                </tr>
                <tr>
                  <td style={{ color: 'rgba(254,250,224,0.88)' }}>Booked — morning of the job</td>
                  <td style={{ color: 'rgba(254,250,224,0.75)' }}>
                    Same-day reminder; they can reply to confirm or ask to reschedule.
                  </td>
                </tr>
                <tr>
                  <td style={{ color: 'rgba(254,250,224,0.88)' }}>Day after the job</td>
                  <td style={{ color: 'rgba(254,250,224,0.75)' }}>
                    Thank-you text. If you gave us a Google review link, we can include it here.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="ll-onboard-muted" style={{ color: 'rgba(254,250,224,0.55)' }}>
            Customers can reschedule anytime by texting back—we&apos;ll offer new times and update the calendar when
            applicable.
          </p>
        </section>

        <section id="no-show">
          <p className="section-label">If something goes wrong</p>
          <h2>
            <em>No-shows</em>
          </h2>
          <p className="section-intro">
            If you arrive and can&apos;t reach the customer, you can mark the job as a no-show in your dashboard. They get a
            text explaining you stopped by and offering to reschedule, and you can pick up the conversation when they reply.
          </p>
        </section>

        <section id="pricing">
          <p className="section-label">Pricing</p>
          <h2>
            Typical <em>tier ranges</em> (junk removal)
          </h2>
          <p className="section-intro">
            Many haulers start from defaults like these. <strong>Yours can be customized</strong> to match how you actually
            bid—we&apos;ll lock that in with you before go-live.
          </p>
          <div className="ll-onboard-table-wrap">
            <table className="ll-onboard-table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Volume (guide)</th>
                  <th>Example range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Small</strong>
                  </td>
                  <td>Up to ~2 cu yd</td>
                  <td>$50–$100</td>
                </tr>
                <tr>
                  <td>
                    <strong>Medium</strong>
                  </td>
                  <td>~2–5 cu yd</td>
                  <td>$75–$200</td>
                </tr>
                <tr>
                  <td>
                    <strong>Large</strong>
                  </td>
                  <td>~5–9 cu yd</td>
                  <td>$250–$650</td>
                </tr>
                <tr>
                  <td>
                    <strong>Extra large</strong>
                  </td>
                  <td>~9–12 cu yd</td>
                  <td>$500–$1,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ll-onboard-card">
            <h3>Common add-ons</h3>
            <p className="ll-onboard-muted">
              Examples: stairs per flight, inside carry, hazardous items, same-day service, or a discount for curbside.
              We&apos;ll mirror <em>your</em> rules so quotes match what you&apos;d say on the phone.
            </p>
          </div>
        </section>

        <section id="dashboard" className="ll-onboard-band">
          <p className="section-label">Your tools</p>
          <h2>
            Your <em>dashboard</em>
          </h2>
          <p className="section-intro" style={{ color: 'rgba(254,250,224,0.65)', maxWidth: 640 }}>
            Sign in with Google using the email we authorized for you. You only ever see your own business—never another
            client&apos;s data.
          </p>
          <div className="ll-onboard-grid-2">
            <div className="ll-onboard-card" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <h3 style={{ color: 'var(--cream)' }}>Conversations</h3>
              <ul style={{ color: 'rgba(254,250,224,0.75)' }}>
                <li>Every SMS thread, newest first</li>
                <li>Open a chat to read the full back-and-forth</li>
                <li>Close a thread when a lead is truly dead</li>
              </ul>
            </div>
            <div className="ll-onboard-card" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <h3 style={{ color: 'var(--cream)' }}>Jobs</h3>
              <ul style={{ color: 'rgba(254,250,224,0.75)' }}>
                <li>Booked, completed, and other statuses in one list</li>
                <li>Open a job for full details and timing</li>
                <li>Mark a no-show when you&apos;re on site and can&apos;t reach the customer</li>
              </ul>
            </div>
          </div>
          <div className="ll-onboard-card" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', marginTop: 8 }}>
            <h3 style={{ color: 'var(--cream)' }}>What you won&apos;t change in the app</h3>
            <p className="ll-onboard-muted" style={{ color: 'rgba(254,250,224,0.65)', marginBottom: 0 }}>
              Business settings, pricing, hours, service area, and who can log in are managed by us when you need a change.
              Just reach out—we turn updates around quickly.
            </p>
          </div>

          <MediaPlaceholder
            kind="video"
            title="Client UI: Conversations & Jobs"
            hint="Screen recording: logging in, browsing conversations, opening a job, optional no-show action."
          />
        </section>

        <section id="tips">
          <p className="section-label">Good to know</p>
          <h2>
            A few <em>helpful details</em>
          </h2>
          <div className="ll-onboard-card">
            <h3>Quiet hours</h3>
            <p className="ll-onboard-muted">
              During the overnight window you set, we don&apos;t send automated replies. If someone texts then, the
              conversation still updates—replies flow when the conversation is active again in line with your rules.
            </p>
          </div>
          <div className="ll-onboard-card">
            <h3>Service area</h3>
            <p className="ll-onboard-muted">
              If you use a radius, we verify the pickup address <em>before</em> giving a price. If you don&apos;t use one,
              we collect the address later at booking.
            </p>
          </div>
          <div className="ll-onboard-card">
            <h3>Calendar optional</h3>
            <p className="ll-onboard-muted">
              Without Google Calendar, you can still book jobs in the system—we just won&apos;t create or conflict-check
              Google events until a calendar is connected.
            </p>
          </div>
        </section>

        <section id="calls">
          <p className="section-label">Optional</p>
          <h2>
            Turn <em>missed calls</em> into text leads
          </h2>
          <p className="section-intro">
            If you want, your existing business line can forward unanswered calls to your LocalLift number after a few rings.
            Callers hear a short greeting, then get a text that picks up where the call left off—same booking flow as a
            normal inbound text.
          </p>
          <div className="ll-onboard-card">
            <h3>What you do on your side</h3>
            <p className="ll-onboard-muted">
              On your phone carrier or VoIP settings, set conditional call forwarding on no-answer to the number we assign
              you. Answered calls stay on your normal line; only unanswered calls roll to LocalLift.
            </p>
          </div>
          <p className="ll-onboard-note">
            We handle the technical hookup on our side when you opt in—your onboarding contact will confirm the number and
            test with you.
          </p>
        </section>
      </main>
      <LocalLiftFooter />
    </div>
  );
}
