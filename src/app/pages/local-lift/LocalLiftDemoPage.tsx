import { useRef, useState } from 'react';
import { LocalLiftFooter } from '../../components/local-lift/LocalLiftFooter';
import { LocalLiftHeader } from '../../components/local-lift/LocalLiftHeader';
import { trackLead } from '../../analytics/ctaEvents';
import './local-lift.css';
import './local-lift-demo.css';

const LOCAL_LIFT_ZCAL = 'https://zcal.co/adriamooney/15min-local-lift';

export function LocalLiftDemoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);

  return (
    <div className="local-lift-root">
      <LocalLiftHeader variant="subpage" />
      <main className="ll-main">
        <section className="ll-demo-hero">
          <p className="section-label">Quick demo</p>
          <h1>Your leads, handled instantly.</h1>
          <p className="section-intro">
            See how LocalLift answers inbound SMS in seconds, handles the back-and-forth, and moves the customer toward a
            booked job—without you stopping work to type.
          </p>
        </section>

        <section className="ll-demo-video-section">
          <div className="ll-demo-video-frame">
            <div className="ll-demo-video-frame__inner">
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setShowPlayOverlay(false)}
              >
                <source src="/local-lift/LocalLift_demo.mp4" type="video/mp4" />
                Your browser does not support embedded video.{' '}
                <a href="/local-lift/LocalLift_demo.mp4">Download the demo (MP4)</a>.
              </video>
              {showPlayOverlay ? (
                <button
                  type="button"
                  className="ll-demo-play-overlay"
                  aria-label="Play demo video"
                  onClick={() => void videoRef.current?.play()}
                >
                  <span className="ll-demo-play-overlay__circle" aria-hidden>
                    <svg className="ll-demo-play-overlay__icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </section>

        <section className="ll-demo-how" id="how-demo">
          <h2>
            How it <em>works</em>
          </h2>
          <p className="section-intro">Three moving pieces—your number, the AI, and your calendar.</p>
          <ol className="ll-demo-steps">
            <li>
              <strong>Lead texts you</strong> on the business line we publish on your site and profiles—it feels like a
              normal conversation to them.
            </li>
            <li>
              <strong>LocalLift replies instantly</strong>, qualifies the job with your rules, and keeps the thread going
              until they&apos;re ready to book.
            </li>
            <li>
              <strong>They pick a time</strong> that respects your hours and buffers; a calendar event is created when
              Google Calendar is connected.
            </li>
          </ol>
          <div className="ll-demo-cta-wrap">
            <a
              href={LOCAL_LIFT_ZCAL}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead()}
            >
              Book a 15-minute call
              <span className="arrow">→</span>
            </a>
          </div>
        </section>
      </main>
      <LocalLiftFooter />
    </div>
  );
}
