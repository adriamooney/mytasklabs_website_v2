/**
 * CTA / conversion helpers for third-party pixels (Reddit rdt, etc.).
 * Use on button clicks or form success — never blocks the UI if a script is missing.
 */

declare global {
  interface Window {
    rdt?: (...args: unknown[]) => void;
  }
}

function safeRdt(...args: unknown[]): void {
  if (typeof window === 'undefined' || typeof window.rdt !== 'function') {
    return;
  }
  window.rdt(...args);
}

/** Reddit standard event — e.g. “Get started”, “Book a call”, contact submits. */
export function trackLead(): void {
  safeRdt('track', 'Lead');
}

/**
 * Reddit custom / named events (see Reddit Ads docs for allowed names).
 * Prefer `trackLead` when the event is a lead conversion.
 */
export function trackRedditEvent(eventName: string, payload?: Record<string, unknown>): void {
  if (payload !== undefined) {
    safeRdt('track', eventName, payload);
  } else {
    safeRdt('track', eventName);
  }
}
